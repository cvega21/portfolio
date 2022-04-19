"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const functions = __importStar(require("firebase-functions"));
const admin = __importStar(require("firebase-admin"));
const luxon_1 = require("luxon");
const axios_1 = __importDefault(require("axios"));
const express_1 = __importDefault(require("express"));
const apollo_server_express_1 = require("apollo-server-express");
const graphql_1 = require("./graphql");
// const { ApolloServer, gql } = require("apollo-server-express");
require('dotenv').config();
admin.initializeApp();
const database = admin.database();
const axiosClient = axios_1.default.create({
    baseURL: 'https://api.track.toggl.com',
    timeout: 1000,
    auth: {
        username: process.env.TOGGL_API_KEY,
        password: 'api_token'
    }
});
// GRAPHQL ENDPOINT
const app = express_1.default();
const server = new apollo_server_express_1.ApolloServer({
    typeDefs: graphql_1.typeDefs,
    resolvers: graphql_1.resolvers
});
server.start().then(() => {
    server.applyMiddleware({ app, path: '/', cors: true });
});
exports.graphql = functions.https.onRequest(app);
// TEST FUNCTIONS
exports.togglAuthTest = functions.https.onRequest(async (request, response) => {
    try {
        const result = await axiosClient.get(`/api/v8/me`);
        response.send(result.data);
        return result;
    }
    catch (err) {
        console.error(err);
        return err;
    }
});
exports.getWorkspaceProjectsAndTags = functions.https.onRequest(async (request, response) => {
    try {
        const tags = await axiosClient.get(`/api/v8/workspaces/${process.env.WORKSPACE_ID}/tags`);
        const projects = await axiosClient.get(`/api/v8/workspaces/${process.env.WORKSPACE_ID}/projects`);
        response.send([projects.data, tags.data]);
        return projects;
    }
    catch (err) {
        console.error(err);
        return err;
    }
});
// COMMON FUNCTIONS
const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
};
// as Toggl's API has a per-call limit of 50 records, we have to loop through this function for however many total records we have
const getTogglProjectData = async (since, until, pageNum = 1) => {
    const reportData = await axiosClient.get(`/reports/api/v2/details`, {
        params: {
            'user_agent': process.env.USER_AGENT,
            'workspace_id': process.env.WORKSPACE_ID,
            'project_ids': process.env.PROJECT_ID,
            'since': since,
            'until': until,
            'page': pageNum
        }
    });
    console.log(`calling toggl... page = ${pageNum}, total records count = ${reportData.data.total_count}`);
    // console.log(reportData.data.data[0]);
    await sleep(1000);
    return reportData.data;
};
const setFirebaseProjectData = async (projectsArr) => {
    console.log(`setting new data in Firebase...`);
    console.log();
    for (let project in projectsArr) {
        console.log(`${project}: ${projectsArr[project]}`);
        await database.ref(`/projects/${project}`).set(projectsArr[project]);
    }
    return null;
};
// PROJECTS DATA FOR PORTFOLIO
exports.loadInitialProjectsData = functions.https.onRequest(async (request, response) => {
    const projectsTime = {
        "Build Portfolio Website": 0,
        "Fitness Tracker App": 0,
        "EDM Machine": 0,
        "Calculator Project": 0,
        "Pomodoro Timer Project": 0,
        "Building Ethereum Dapp": 0,
        "Adamint": 0,
    };
    // parameters for the toggl API call, must be in YYYY-MM-DD format; loads data up to today
    let dateSince = '2021-02-05';
    let dateUntil = luxon_1.DateTime.now().setZone('America/Mexico_City').toISODate();
    let totalData = [];
    console.log(`${dateSince}, ${dateUntil}`);
    try {
        console.log('calculating total number of pages to fetch...');
        const totalPages = Math.ceil((await getTogglProjectData(dateSince, dateUntil)).total_count / 50);
        console.log(`fetching ${totalPages} pages`);
        for (let i = 1; i <= totalPages; i++) {
            const page = await getTogglProjectData(dateSince, dateUntil, i);
            totalData.push(page.data);
        }
        let finalData = await Promise.all(totalData);
        finalData = finalData.flat();
        finalData.forEach((record) => {
            // projectName is to fetch records by Toggl record name (e.g. Building Portfolio Website)
            let projectName = record.description;
            let durationInMs = record.dur;
            // projectProject is to fetch records by Toggl project (e.g. Adamint)
            let projectProject = record.project;
            console.log(`projectProject: ${projectProject}`);
            let projectDuration = Number((durationInMs / 3600000).toFixed(1));
            if (projectsTime.hasOwnProperty(projectName)) {
                projectsTime[projectName] = Number((projectsTime[projectName] + projectDuration).toFixed(1));
            }
            else if (projectsTime.hasOwnProperty(projectProject)) {
                projectsTime[projectProject] = Number((projectsTime[projectProject] + projectDuration).toFixed(1));
            }
        });
        await setFirebaseProjectData(projectsTime);
        await database.ref(`/projectsMetadata/since`).set(dateSince);
        await database.ref(`/projectsMetadata/until`).set(dateUntil);
        let apiResponse = {
            projectsTime: projectsTime,
            dates: {
                since: dateSince,
                until: dateUntil
            }
        };
        response.set('Access-Control-Allow-Origin', '*');
        response.send(apiResponse);
    }
    catch (err) {
        console.error(err);
    }
});
exports.getDailyData = functions.pubsub.schedule('0 4 * * *')
    .timeZone('America/Mexico_City')
    .onRun(async (context) => {
    const getDateToLoad = async () => {
        const lastLoaded = await database.ref(`/projectsMetadata/until`).get();
        const lastLoadedDT = luxon_1.DateTime.fromISO(lastLoaded.val(), { zone: 'America/Mexico_City' });
        const today = luxon_1.DateTime.now().setZone('America/Mexico_City');
        if (lastLoaded.exists() && lastLoadedDT.startOf('day') < today.startOf('day')) {
            console.log(`DB last updated at ${lastLoadedDT.toISODate()}. loading data from ${today.toISODate()}.`);
            return lastLoadedDT.toISODate();
        }
        else {
            console.log(`today's data is already loaded. last updated: ${lastLoadedDT.toISODate()}`);
            return '';
        }
    };
    const setDate = async (date) => {
        await database.ref(`/projectsMetadata/until`).set(date);
        return null;
    };
    const getFirebaseProjectData = async () => {
        console.log(`getting data from Firebase...`);
        const time = await (await database.ref(`/projects/`).get()).val();
        return time;
    };
    try {
        const dateToLoad = await getDateToLoad();
        const projectsDict = await getFirebaseProjectData();
        if (dateToLoad === '') {
            console.log('no changes needed. exit function...');
            return null;
        }
        else {
            console.log('starting daily update...');
        }
        const newData = await getTogglProjectData(dateToLoad, dateToLoad);
        newData.data.forEach((record) => {
            let projectName = record.description;
            let durationInMs = record.dur;
            let projectDuration = Number((durationInMs / 3600000).toFixed(1));
            if (projectsDict.hasOwnProperty(projectName)) {
                projectsDict[projectName] = Number((projectsDict[projectName] + projectDuration).toFixed(1));
            }
        });
        setFirebaseProjectData(projectsDict);
        setDate(dateToLoad);
    }
    catch (err) {
        console.error(err);
    }
    return null;
});
exports.dailyDataTest = functions.https.onRequest(async (_request, response) => {
    response.set('Access-Control-Allow-Origin', '*');
    const getDateToLoad = async () => {
        const lastLoaded = await database.ref(`/projectsMetadata/until`).get();
        const lastLoadedDT = luxon_1.DateTime.fromISO(lastLoaded.val(), { zone: 'America/Mexico_City' });
        const today = luxon_1.DateTime.now().setZone('America/Mexico_City');
        if (lastLoaded.exists() && lastLoadedDT.startOf('day') < today.startOf('day')) {
            console.log(`DB last updated at ${lastLoadedDT.toISODate()}. loading data from ${today.toISODate()}.`);
            return today.toISODate();
        }
        else {
            console.log(`today's data is already loaded. last updated: ${lastLoadedDT.toISODate()}`);
            return '';
        }
    };
    const setDate = async (date) => {
        await admin.database().ref(`/projectsMetadata/until`).set(date);
        return null;
    };
    const getFirebaseProjectData = async () => {
        console.log(`getting data from Firebase...`);
        const time = await (await database.ref(`/projects/`).get()).val();
        return time;
    };
    try {
        const dateToLoad = await getDateToLoad();
        const projectsDict = await getFirebaseProjectData();
        if (dateToLoad === '') {
            console.log('no changes needed. exit function...');
            return void (0);
        }
        else {
            console.log('starting daily update...');
        }
        const newData = await getTogglProjectData(dateToLoad, dateToLoad);
        newData.data.forEach((record) => {
            let projectName = record.description;
            let durationInMs = record.dur;
            let projectDuration = Number((durationInMs / 3600000).toFixed(1));
            if (projectsDict.hasOwnProperty(projectName)) {
                projectsDict[projectName] = Number((projectsDict[projectName] + projectDuration).toFixed(1));
            }
        });
        let apiResponse = {
            projectsTime: projectsDict,
            dates: {
                since: dateToLoad,
                until: dateToLoad
            }
        };
        await setFirebaseProjectData(projectsDict);
        await setDate(dateToLoad);
        response.send(apiResponse);
        return void (0);
    }
    catch (err) {
        console.error(err);
        return void (0);
    }
});
//# sourceMappingURL=index.js.map