const functions = require("firebase-functions");
const axios = require('axios').default;
require('dotenv').config();

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
    try {
        const getPage = async (pageNum = 1) => {
            const reportData = await axiosClient.get(`/reports/api/v2/details`, {
                params: {
                    'user_agent': process.env.USER_AGENT,
                    'workspace_id': process.env.WORKSPACE_ID,
                    'tag_ids': 9306704,
                    'since': '2021-02-01',
                    'page': pageNum
                }})
                
                return reportData.data
            }
        
        const firstPage = await getPage(1);
        let totalPages = Math.ceil(firstPage.total_count/50);  
        let totalData = []
        
        for (let i = 1; i <= totalPages; i++) {
            const page = await getPage(i);
            totalData.push(page.data);
        }

        let finalData = await Promise.all(totalData);
        finalData = finalData.flat();

        let projectsTime = {
            "Build Portfolio Website": 0,
            "Fitness Tracker App": 0,
            "EDM Machine": 0,
            "Calculator Project": 0,
            "Pomodoro Timer Project": 0
        }
        
        finalData.forEach((record) => {
            if (projectsTime.hasOwnProperty(record.description)) {
                if (record.description === 'Calculator Project') {
                    console.log(`calculator project. duration in ms = ${record.dur}. duration in calculated hours (?) = ${record.dur/3600000}`)
                }
                // Adds hours tracked to 2 decimal points
                projectsTime[record.description] = parseFloat(projectsTime[record.description]) + parseFloat((record.dur/3600000))
                projectsTime[record.description] = projectsTime[record.description].toFixed(1);
            } else {
                // console.log(`${record['description']} is not being tracked`)
                // console.log(projectsTime[record])
            }
        })

        console.log(`totalPages = ${totalPages}`)
        console.log(`totalData length = ${totalData.length}`)
        console.log(finalData.length);
        console.log(projectsTime);
        response.set('Access-Control-Allow-Origin', '*');
        response.send(projectsTime);
    } catch (err) {
        console.error(err);
    }
})

exports.makeUppercase = functions.database.ref('/messages/{pushId}/original')
.onCreate((snapshot, context) => {
  const original = snapshot.val();
  console.log('Uppercasing', context.params.pushId, original);
  const uppercase = original.toUpperCase();
  return snapshot.ref.parent.child('uppercase').set(uppercase);
});