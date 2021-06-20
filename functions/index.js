const functions = require('firebase-functions');
const admin = require('firebase-admin');
const axios = require('axios').default;
const { DateTime } = require('luxon');
require('dotenv').config();
admin.initializeApp();
const database = admin.database();
// #100DaysOfCode tag_id = 9306704
const axiosClient = axios.create({
    baseURL: 'https://api.track.toggl.com',
    timeout: 1000,
    accept: 'application/json',
    auth: {
        username: process.env.TOGGL_API_KEY,
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

exports.getWorkspaceTags = functions.https.onRequest(async (request, response) => {
    try {
        const result = await axiosClient.get(`/api/v8/workspaces/${process.env.WORKSPACE_ID}/tags`)
        response.send(result.data);
        return result
    } catch (err) {
        console.error(err);
    }
})

// COMMON FUNCTIONS
// as Toggl's API has a per-call limit of 50 records, we have to loop through this function for however many total records we have
const getTogglProjectData = async (since, until, pageNum = 1) => {
    const reportData = await axiosClient.get(`/reports/api/v2/details`, {
        params: {
            'user_agent': process.env.USER_AGENT,
            'workspace_id': process.env.WORKSPACE_ID,
            'tag_ids': 9306704,
            'since': since,
            'until': until,
            'page': pageNum
        }})
    console.log(`calling toggl... page = ${pageNum}, total records count = ${reportData.data.total_count}`)
    return reportData.data
}

const setFirebaseProjectData = async (projectsArr) => {
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
    let projectsTime = {
        "Build Portfolio Website": 0,
        "Fitness Tracker App": 0,
        "EDM Machine": 0,
        "Calculator Project": 0,
        "Pomodoro Timer Project": 0
    }
    
    // parameters for the toggl API call, must be in YYYY-MM-DD format; loads data up to today
    let dateSince = '2021-01-01';
    let dateUntil = DateTime.now().setZone('America/Mexico_City').toISODate();
    let totalData = [];
    console.log(`${dateSince}, ${dateUntil}`)
    
    try {        
        const totalPages = Math.ceil((await getTogglProjectData(dateSince, dateUntil)).total_count/50);  

        for (let i = 1; i <= totalPages; i++) {
            const page = await getTogglProjectData(dateSince, dateUntil, i);
            totalData.push(page.data);
        }

        let finalData = await Promise.all(totalData);
        finalData = finalData.flat();

        finalData.forEach((record) => {
            if (projectsTime.hasOwnProperty(record.description)) {
                projectsTime[record.description] = parseFloat(projectsTime[record.description]) + parseFloat((record.dur/3600000))
                projectsTime[record.description] = projectsTime[record.description].toFixed(1);
            } else {
                // it's not a project in the projectsTime object
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
    const projectsTime = {
        "Build Portfolio Website": 0,
        "Fitness Tracker App": 0,
        "EDM Machine": 0,
        "Calculator Project": 0,
        "Pomodoro Timer Project": 0
    }

    const getDate = async () => {
        const date = await database.ref(`/projectsMetadata/until`).get();
        const luxonDate = DateTime.fromISO(date.val(), { zone: 'America/Mexico_City'});
        const today = DateTime.now().setZone('America/Mexico_City');
        if (date.exists() && luxonDate.startOf('day') < today.startOf('day')) {
            console.log(`DB last updated at ${luxonDate.toISODate()}. loading data from ${today.toISODate()}.`)
            return luxonDate.plus({ days: 1 }).toISODate();
        } else {
            console.log(`today's data is already loaded. last updated: ${date.val()}`)
            return null
        }
    }

    const setDate = async (date) => {
        await database.ref(`/projectsMetadata/until`).set(date);
        return null
    }
    
    const getFirebaseProjectData = async (projectsArr) => {
        console.log(`getting data from Firebase...`)
        for (let project in projectsArr) {
            const time = await database.ref(`/projects/${project}`).get();
            if (time.exists()) {
                projectsArr[project] = time.val();
                console.log(`${project}: ${projectsArr[project]}`)
            }
        }
        return null
    }
    
    try {
        const dateToLoad = await getDate();
        getFirebaseProjectData(projectsTime);

        if (dateToLoad === null) {
            console.log('no changes needed. exit function...')
            return null
        } else {
            console.log('starting daily update...')
        }

        const newData = await getTogglProjectData(dateToLoad);
        newData.data.forEach((record) => {
            if (projectsTime.hasOwnProperty(record.description)) {
                projectsTime[record.description] = parseFloat(projectsTime[record.description]) + parseFloat((record.dur/3600000))
                projectsTime[record.description] = projectsTime[record.description].toFixed(1);
            } 
        });

        setFirebaseProjectData(projectsTime);
        setDate(dateToLoad);
    } catch (err) {
        console.error(err);
    }
  return null;
});

exports.dailyDataTest = functions.https.onRequest(async (request, response) => {  
    response.set('Access-Control-Allow-Origin', '*');
    const projectsTime = {
        "Build Portfolio Website": 0,
        "Fitness Tracker App": 0,
        "EDM Machine": 0,
        "Calculator Project": 0,
        "Pomodoro Timer Project": 0
    }

    const getDate = async () => {
        const date = await database.ref(`/projectsMetadata/until`).get();
        const luxonDate = DateTime.fromISO(date.val(), { zone: 'America/Mexico_City'});
        const today = DateTime.now().setZone('America/Mexico_City');
        if (date.exists() && luxonDate.startOf('day') < today.startOf('day')) {
            console.log(`DB last updated at ${luxonDate.toISODate()}. loading data from ${today.toISODate()}.`)
            return luxonDate.plus({ days: 1 }).toISODate();
        } else {
            console.log(`today's data is already loaded. last updated: ${date.val()}`)
            return null
        }
    }

    const setDate = async (date) => {
        await admin.database().ref(`/projectsMetadata/until`).set(date);
        return null
    }
    
    const getFirebaseProjectData = async (projectsArr) => {
        console.log(`getting data from Firebase...`)
        console.log();
        for (let project in projectsArr) {
            const time = await database.ref(`/projects/${project}`).get();
            if (time.exists()) {
                projectsArr[project] = time.val();
                console.log(`${project}: ${projectsArr[project]}`)
            }
        }
        console.log();
        return null
    }
    
    try {
        const dateToLoad = await getDate();
        await getFirebaseProjectData(projectsTime);

        if (dateToLoad === null) {
            console.log('no changes needed. exit function...');
            response.send(projectsTime);
            return null
        } else {
            console.log('starting daily update...')
        }
    
        const newData = await getTogglProjectData(dateToLoad);
        newData.data.forEach((record) => {
            if (projectsTime.hasOwnProperty(record.description)) {
                projectsTime[record.description] = parseFloat(projectsTime[record.description]) + parseFloat((record.dur/3600000))
                projectsTime[record.description] = projectsTime[record.description].toFixed(1);
            } 
        });

        let apiResponse = {
            projectsTime: projectsTime,
            dates: {
                since: dateToLoad,
                until: dateToLoad
            }
        }

        await setFirebaseProjectData(projectsTime);
        await setDate(dateToLoad);
        response.send(apiResponse);
    } catch (err) {
        console.error(err);
    }
  return null;
})