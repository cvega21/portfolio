import * as functions from "firebase-functions";
import * as admin from 'firebase-admin'
import { DateTime } from 'luxon';
import { IProjectsTime, ITogglRecord } from './types';
const axios = require('axios').default;
require('dotenv').config();

admin.initializeApp();
const database = admin.database();
const axiosClient = axios.create({
    baseURL: 'https://api.track.toggl.com',
    timeout: 1000,
    auth: {
        username: process.env.TOGGL_API_KEY as string,
        password: 'api_token'
    }
})

// TEST FUNCTIONS
exports.togglAuthTest = functions.https.onRequest(async (request, response) => {
    try {
        const result = await axiosClient.get(`/api/v8/me`)
        response.send(result.data);
        return result
    } catch (err) {
        console.error(err);
    }
})

exports.getWorkspaceProjectsAndTags = functions.https.onRequest(async (request, response) => {
    try {
        const tags = await axiosClient.get(`/api/v8/workspaces/${process.env.WORKSPACE_ID}/tags`)
        const projects = await axiosClient.get(`/api/v8/workspaces/${process.env.WORKSPACE_ID}/projects`)
        response.send([projects.data,tags.data]);
        return projects
    } catch (err) {
        console.error(err);
    }
})

// COMMON FUNCTIONS

const sleep = (ms: number) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// as Toggl's API has a per-call limit of 50 records, we have to loop through this function for however many total records we have
const getTogglProjectData = async (since: string, until: string, pageNum = 1) => {
    const reportData = await axiosClient.get(`/reports/api/v2/details`, {
        params: {
            'user_agent': process.env.USER_AGENT,
            'workspace_id': process.env.WORKSPACE_ID,
            'project_ids': process.env.PROJECT_ID,
            'since': since,
            'until': until,
            'page': pageNum
        }})
    console.log(`calling toggl... page = ${pageNum}, total records count = ${reportData.data.total_count}`)
    // console.log(reportData.data.data[0]);
    await sleep(1000);
    return reportData.data
}

const setFirebaseProjectData = async (projectsArr: IProjectsTime) => {
    console.log(`setting new data in Firebase...`)
    console.log();
    for (let project in projectsArr) {
        console.log(`${project}: ${projectsArr[project]}`);
        await database.ref(`/projects/${project}`).set(projectsArr[project]);
    }
    return null 
}


// PROJECTS DATA FOR PORTFOLIO
exports.loadInitialProjectsData = functions.https.onRequest(async (request, response) => {    
    const projectsTime: IProjectsTime = {
        "Build Portfolio Website": 0,
        "Fitness Tracker App": 0,
        "EDM Machine": 0,
        "Calculator Project": 0,
        "Pomodoro Timer Project": 0,
        "Building Ethereum Dapp": 0,
        "Adamint": 0,
    }
    
    // parameters for the toggl API call, must be in YYYY-MM-DD format; loads data up to today
    let dateSince = '2021-02-05';
    let dateUntil = DateTime.now().setZone('America/Mexico_City').toISODate();
    let totalData = [];
    console.log(`${dateSince}, ${dateUntil}`)
    
    try {
        console.log('calculating total number of pages to fetch...')        
        const totalPages = Math.ceil((await getTogglProjectData(dateSince, dateUntil)).total_count/50);
        console.log(`fetching ${totalPages} pages`)        

        for (let i = 1; i <= totalPages; i++) {
            const page = await getTogglProjectData(dateSince, dateUntil, i);
            totalData.push(page.data);
        }

        let finalData = await Promise.all(totalData);
        finalData = finalData.flat();

        finalData.forEach((record: ITogglRecord) => {
            // projectName is to fetch records by Toggl record name (e.g. Building Portfolio Website)
            let projectName = record.description as string;
            let durationInMs = record.dur as number;
            // projectProject is to fetch records by Toggl project (e.g. Adamint)
            let projectProject = record.project as string;
            console.log(`projectProject: ${projectProject}`);
            let projectDuration = Number((durationInMs/3600000).toFixed(1));

            if (projectsTime.hasOwnProperty(projectName)) {
                projectsTime[projectName] = Number((projectsTime[projectName] + projectDuration).toFixed(1));
            } else if (projectsTime.hasOwnProperty(projectProject)) {
                projectsTime[projectProject] = Number((projectsTime[projectProject] + projectDuration).toFixed(1));
            }
        })

        await setFirebaseProjectData(projectsTime);
        await database.ref(`/projectsMetadata/since`).set(dateSince);
        await database.ref(`/projectsMetadata/until`).set(dateUntil);

        let apiResponse = {
            projectsTime: projectsTime,
            dates: {
                since: dateSince,
                until: dateUntil
            }
        }

        response.set('Access-Control-Allow-Origin', '*');
        response.send(apiResponse);
    } catch (err) {
        console.error(err);
    }
})

exports.getDailyData = functions.pubsub.schedule('0 4 * * *')
  .timeZone('America/Mexico_City')
  .onRun(async (context) => {
    const getDateToLoad = async () => {
        const lastLoaded = await database.ref(`/projectsMetadata/until`).get();
        const lastLoadedDT = DateTime.fromISO(lastLoaded.val(), { zone: 'America/Mexico_City'});
        const today = DateTime.now().setZone('America/Mexico_City');
        if (lastLoaded.exists() && lastLoadedDT.startOf('day') < today.startOf('day')) {
            console.log(`DB last updated at ${lastLoadedDT.toISODate()}. loading data from ${today.toISODate()}.`)
            return lastLoadedDT.toISODate();
        } else {
            console.log(`today's data is already loaded. last updated: ${lastLoadedDT.toISODate()}`)
            return ''
        }
    }

    const setDate = async (date: string) => {
        await database.ref(`/projectsMetadata/until`).set(date);
        return null
    }
    
    const getFirebaseProjectData = async () => {
        console.log(`getting data from Firebase...`)
        const time = await (await database.ref(`/projects/`).get()).val();
        return time        
    }
    
    try {
        const dateToLoad: string = await getDateToLoad();
        const projectsDict: IProjectsTime = await getFirebaseProjectData();
        if (dateToLoad === '') {
            console.log('no changes needed. exit function...')
            return null
        } else {
            console.log('starting daily update...')
        }
        const newData = await getTogglProjectData(dateToLoad, dateToLoad);
        newData.data.forEach((record: ITogglRecord) => {
            let projectName = record.description as string;
            let durationInMs = record.dur as number
            let projectDuration = Number((durationInMs/3600000).toFixed(1));

            if (projectsDict.hasOwnProperty(projectName)) {
                projectsDict[projectName] = Number((projectsDict[projectName] + projectDuration).toFixed(1));
            }
        });
        setFirebaseProjectData(projectsDict);
        setDate(dateToLoad);
    } catch (err) {
        console.error(err);
    }
  return null;
});

exports.dailyDataTest = functions.https.onRequest(async (_request, response) => {  
    response.set('Access-Control-Allow-Origin', '*');
    const getDateToLoad = async () => {
        const lastLoaded = await database.ref(`/projectsMetadata/until`).get();
        const lastLoadedDT = DateTime.fromISO(lastLoaded.val(), { zone: 'America/Mexico_City'});
        const today = DateTime.now().setZone('America/Mexico_City');
        if (lastLoaded.exists() && lastLoadedDT.startOf('day') < today.startOf('day')) {
            console.log(`DB last updated at ${lastLoadedDT.toISODate()}. loading data from ${today.toISODate()}.`)
            return today.toISODate();
        } else {
            console.log(`today's data is already loaded. last updated: ${lastLoadedDT.toISODate()}`)
            return ''
        }
    }

    const setDate = async (date: string) => {
        await admin.database().ref(`/projectsMetadata/until`).set(date);
        return null
    }
    
    const getFirebaseProjectData = async () => {
        console.log(`getting data from Firebase...`)
        const time = await (await database.ref(`/projects/`).get()).val();
        return time        
    }
    
    try {
        const dateToLoad: string = await getDateToLoad();
        const projectsDict: IProjectsTime = await getFirebaseProjectData();
        if (dateToLoad === '') {
            console.log('no changes needed. exit function...')
            return void(0);
        } else {
            console.log('starting daily update...')
        }
    
        const newData = await getTogglProjectData(dateToLoad, dateToLoad);
        newData.data.forEach((record: ITogglRecord) => {
            let projectName = record.description as string;
            let durationInMs = record.dur as number
            let projectDuration = Number((durationInMs/3600000).toFixed(1));

            if (projectsDict.hasOwnProperty(projectName)) {
                projectsDict[projectName] = Number((projectsDict[projectName] + projectDuration).toFixed(1));
            }
        })

        let apiResponse = {
            projectsTime: projectsDict,
            dates: {
                since: dateToLoad,
                until: dateToLoad
            }
        }

        await setFirebaseProjectData(projectsDict);
        await setDate(dateToLoad);
        response.send(apiResponse);
        return void(0);
    } catch (err) {
        console.error(err);
        return void(0);
    }
})