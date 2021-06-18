const functions = require("firebase-functions");
const admin = require('firebase-admin');
const axios = require('axios').default;
require('dotenv').config();

admin.initializeApp()

const axiosClient = axios.create({
    baseURL: 'https://api.track.toggl.com',
    timeout: 1000,
    accept: 'application/json',
    auth: {
        username: process.env.TOGGL_API_KEY,
        password: 'api_token'
    }
})

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

// #100DaysOfCode tag_id = 9306704

exports.getProjectsData = functions.https.onRequest(async (request, response) => {    

    // as Toggl's API has a per-call limit of 50 records, we have to loop through this function for however many total records we have
    const getPage = async (pageNum = 1) => {
        const reportData = await axiosClient.get(`/reports/api/v2/details`, {
            params: {
                'user_agent': process.env.USER_AGENT,
                'workspace_id': process.env.WORKSPACE_ID,
                'tag_ids': 9306704,
                'since': dataSince,
                'until': dataUntil,
                'page': pageNum
            }})
        return reportData.data
    }

    // sets project hours in firebase DB after they've been called from Toggl API and sanitized by cloud function
    const setProjectData = (project) => {
        const keyToUpdate = admin.database().ref(`/projects/${project}`);
        return keyToUpdate.set(projectsTime[project])
    }

    // this is what's returned to the UI when it calls the cloud function
    let projectsTime = {
        "Build Portfolio Website": 0,
        "Fitness Tracker App": 0,
        "EDM Machine": 0,
        "Calculator Project": 0,
        "Pomodoro Timer Project": 0
    }
    
    // temp holder for all the data from API
    let totalData = [];
    
    // parameters for the toggl API call, must be in YYYY-MM-DD format
    let dataSince = '2021-01-01';
    let dataUntil = '2021-06-18';
    
    try {        
        const totalPages = Math.ceil((await getPage(1)).total_count/50);  

        for (let i = 1; i <= totalPages; i++) {
            const page = await getPage(i);
            totalData.push(page.data);
        }

        let finalData = await Promise.all(totalData);
        finalData = finalData.flat();

        finalData.forEach((record) => {
            if (projectsTime.hasOwnProperty(record.description)) {
                // calculates hours to 2 decimal points and adds them to the object's key
                projectsTime[record.description] = parseFloat(projectsTime[record.description]) + parseFloat((record.dur/3600000))
                projectsTime[record.description] = projectsTime[record.description].toFixed(1);
            } else {
                // it's not a project in the projectsTime object
            }
        })

        for (let project in projectsTime) {
            setProjectData(project);
        }

        admin.database().ref(`/projectsMetadata/since`).set(dataSince);
        admin.database().ref(`/projectsMetadata/until`).set(dataUntil);

        response.set('Access-Control-Allow-Origin', '*');
        response.send(projectsTime);
    } catch (err) {
        console.error(err);
    }
})

exports.scheduledFunctionCrontab = functions.pubsub.schedule('0 4 * * *')
  .timeZone('America/Mexico_City')
  .onRun(async (context) => {
    // as Toggl's API has a per-call limit of 50 records, we have to loop through this function for however many total records we have
    const getPage = async (pageNum = 1) => {
        const reportData = await axiosClient.get(`/reports/api/v2/details`, {
            params: {
                'user_agent': process.env.USER_AGENT,
                'workspace_id': process.env.WORKSPACE_ID,
                'tag_ids': 9306704,
                'since': dataSince,
                'until': dataUntil,
                'page': pageNum
            }})
        return reportData.data
    }

    // sets project hours in firebase DB after they've been called from Toggl API and sanitized by cloud function
    const setProjectData = (project) => {
        const keyToUpdate = admin.database().ref(`/projects/${project}`);
        return keyToUpdate.set(projectsTime[project])
    }

    let projectsTime = {
        "Build Portfolio Website": 0,
        "Fitness Tracker App": 0,
        "EDM Machine": 0,
        "Calculator Project": 0,
        "Pomodoro Timer Project": 0
    }
    
    let totalData = [];
    
    // parameters for the toggl API call, must be in YYYY-MM-DD format
    let dataSince = '2021-01-01';
    let dataUntil = '2021-06-18';
    
    try {        
        const totalPages = Math.ceil((await getPage(1)).total_count/50);  

        for (let i = 1; i <= totalPages; i++) {
            const page = await getPage(i);
            totalData.push(page.data);
        }

        let finalData = await Promise.all(totalData);
        finalData = finalData.flat();

        finalData.forEach((record) => {
            if (projectsTime.hasOwnProperty(record.description)) {
                // calculates hours to 1 decimal point and adds them to the object's key
                projectsTime[record.description] = parseFloat(projectsTime[record.description]) + parseFloat((record.dur/3600000))
                projectsTime[record.description] = projectsTime[record.description].toFixed(1);
            } 
        });

        for (let project in projectsTime) {
            setProjectData(project);
        }

        admin.database().ref(`/projectsMetadata/since`).set(dataSince);
        admin.database().ref(`/projectsMetadata/until`).set(dataUntil);
    } catch (err) {
        console.error(err);
    }
  return null;
});