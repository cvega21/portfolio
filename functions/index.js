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

exports.getReportsData = functions.https.onRequest(async (request, response) => {
    try {
        //plan:
        //do first initial call to get total number of records
        //for each n = total / 50, make a call for page n and append to total data
        //define a projectTimes object with key:value === project:timeWorkedOn for all X projects to be displayed on website
        //then, for each key in all records object, match the 'descriptions' to the projects (pass the project descriptions as an args array, 
        //      e.g. ['Building Portfolio Website']) and add the 'dur' to the value of projectTimes' key
        //finally, send projectTimes as response  
        const result = await axiosClient.get(`/reports/api/v2/details`, {
            params: {
                'user_agent': process.env.USER_AGENT,
                'workspace_id': process.env.WORKSPACE_ID,
                'tag_ids': 9306704,
                'since': '2021-02-01',
                'page': 1
            }})
        response.send(result.data);
        // console.log(Object.keys(result.data.data).length);
        // console.log(result.data);
        return result
    } catch (err) {
        console.error(err);
    }
})