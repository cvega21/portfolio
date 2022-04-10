import './App.scss';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import React, { useState, useEffect } from 'react'
import Home from './pages/HomePage';
import AboutMe from './pages/AboutMePage';
import  Projects from './pages/ProjectsPage';
import Articles from './pages/ArticlesPage';
import Contact from './pages/ContactPage';
import Resume from './pages/ResumePage';
import NavBar from './components/NavBar';
import './styles/LogosBanner.scss';
import './styles/Project.scss';
import './styles/Articles.scss';
import './styles/NavBar.scss';
import './styles/Footer.scss';
import './styles/ActionButton.scss';
import './styles/Home.scss';
import './styles/NightModeButton.scss';
import './styles/AboutMe.scss';
import firebase from 'firebase'
import { DateTime } from 'luxon';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var FIREBASE_CONFIG = {
  apiKey: "AIzaSyDUUrS6OUn2LJFC6oxRGMUJ4vYwaOIS8R8",
  authDomain: "portfolio-75ffa.firebaseapp.com",
  projectId: "portfolio-75ffa",
  storageBucket: "portfolio-75ffa.appspot.com",
  messagingSenderId: "171226664150",
  appId: "1:171226664150:web:f635186022f77c6456cd77",
  databaseURL: "https://portfolio-75ffa-default-rtdb.firebaseio.com/",
  measurementId: "G-01YFKWBCBW"
};

// Initialize Firebase
firebase.initializeApp(FIREBASE_CONFIG);
firebase.analytics();

var database = firebase.database();

interface PageContextInterface {
  [index: number]: string | boolean | React.Dispatch<React.SetStateAction<string>> | React.Dispatch<React.SetStateAction<boolean>>;
}

interface NavContextInterface {
  [index: number]: string | boolean | React.Dispatch<React.SetStateAction<string>> | React.Dispatch<React.SetStateAction<boolean>>;
}

// export const ProjectContext = React.createContext();
export const PageContext = React.createContext<PageContextInterface>([]);
export const NavContext = React.createContext<NavContextInterface>([]);
// export const ArticlesContext = React.createContext();

function App() {
  const [activeNavPage, setActiveNavPage] = useState('');
  const [projectsData, setProjectsData] = useState({projects: {placeholder: ''}, projectsMetadata: {placeholder: ''}});
  const [articles, setArticles] = useState([]);
  const [showNavBar, setShowNavBar] = useState(false); 
  const [homeHasLoaded, setHomeHasLoaded] = useState(false);
  const [navIsExpanded, setNavIsExpanded] = useState(false);

  // changes active window in nav bar
  useEffect(() => {
    setActiveNavPage(window.location.pathname);
    if (!showNavBar && window.location.pathname !== '/home') {
      setShowNavBar(true); 
    }

    return () => {
    }
  }, [showNavBar, activeNavPage])
  
  useEffect(() => {
    /**
     * getProjects()
     * fetches entire database and set cache expiration date
     * only 2 keys on firebase root are {projects} and {projectsMetadata}
     */

    const getProjects = async () => {
      let firebaseReq = await database.ref(`/`).once('value');
      let firebaseJSON = await firebaseReq.val();
      console.log('calling firebase...')
      
      setProjectsData(firebaseJSON);
      setLocalCache(firebaseJSON);
    }
    
    const setLocalCache = ({ projects, projectsMetadata }: any) => {
      let dtToday = DateTime.now().toFormat('MM-dd-yyyy');
      localStorage.setItem('cacheLastUpdated', dtToday);
      localStorage.setItem('projects', JSON.stringify(projects));
      localStorage.setItem('projectsMetadata', JSON.stringify(projectsMetadata));
    }

    const cacheIsExpired = (cacheLastUpdated: string): Boolean => {
      const dtCacheLastUpdated = DateTime.fromFormat(cacheLastUpdated, 'MM-dd-yyyy')
      return DateTime.now().diff(dtCacheLastUpdated).days > 0
    }

    let cachedProjects = localStorage.getItem('projects');
    let cachedProjectsMetadata = localStorage.getItem('projectsMetadata');
    let cacheLastUpdated = localStorage.getItem('cacheLastUpdated');
    
    if (!cachedProjects || !cachedProjectsMetadata ) {
      console.log('cache not found')
      getProjects();
    } else if (cacheLastUpdated && cacheIsExpired(cacheLastUpdated)) {
      console.log('cache was stale')
      getProjects();
    } 
    else {
      console.log('cache hit!')
      setProjectsData({'projects': JSON.parse(cachedProjects), 'projectsMetadata': JSON.parse(cachedProjectsMetadata)})
    }
  }, [])

  useEffect(() => {
    // get Medium article data on page load
    const getArticles = async () => {
      try {
        let response = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@christianvegaaa');
        let responseJSON = await response.json();
        setArticles(responseJSON['items'])
      } catch (e) {
        console.error('error. ', e)
      }
    }
    if (!articles.length) {
      getArticles();
    }
  }, [articles])

  return (
    <BrowserRouter>
        <PageContext.Provider value={[setActiveNavPage, activeNavPage, homeHasLoaded, setHomeHasLoaded, showNavBar, setShowNavBar, navIsExpanded, setNavIsExpanded]}>
        <NavContext.Provider value={[showNavBar, setShowNavBar, navIsExpanded, setNavIsExpanded]}>
        <div className={showNavBar ? 'App' : 'AppNoNav'} id='AppContainer'>
          {showNavBar ? <NavBar active={activeNavPage}/> : void(0) }     
          <main>
            <Switch>
              <Route exact path="/">
                <Redirect to="/home" />
              </Route>
              <Route path="/contact">
                <Contact/>
              </Route>
              <Route path="/home">
                <Home/>
              </Route>
              <Route path="/aboutme">
                <AboutMe/>
              </Route >
              <Route path="/projects">
                <Projects projectsData={projectsData}/>
              </Route>
              <Route path="/articles">
                <Articles articles={articles}/>
              </Route>
              <Route path="/resume">
                <Resume/>
              </Route>
              <Route path="*">
                <Redirect to="/home" />
              </Route>
            </Switch>
          </main>
        </div>
        </NavContext.Provider>
        </PageContext.Provider>
    </BrowserRouter>
  );
}

export default App;
