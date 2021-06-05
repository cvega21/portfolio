const functions = require("firebase-functions");

exports.fetchTogglData = functions.pubsub.schedule('0 1 * * *').onRun((context) => {
    console.log('This will be run every 5 minutes!');
    return null;
  });

