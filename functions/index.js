const functions = require("firebase-functions");
const axios = require('axios');

exports.testTogglCall = functions.https.onRequest( async (request, response) => {
    try {
        const result = await axios({
            method: 'get',
            url: 'https://api.track.toggl.com/api/v8/me',
            accept: 'application/json',
            auth: {
                username: '07677d9a20a59edd57848c9d0574fdf0',
                password: 'api_token'
            }
        })
        await response.send(result.data);
        return result
    } catch (err) {
        console.error(err);
    }
})