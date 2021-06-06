const functions = require("firebase-functions");
const axios = require('axios');
require('dotenv').config();

exports.testTogglCall = functions.https.onRequest( async (request, response) => {
    try {
        const result = await axios({
            method: 'get',
            url: 'https://api.track.toggl.com/api/v8/me',
            accept: 'application/json',
            auth: {
                username: process.env.TOGGL_API_KEY,
                password: 'api_token'
            }
        })
        await response.send(result.data);
        return result
    } catch (err) {
        console.error(err);
    }
})