import './App.css';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import React, { useState, useEffect } from 'react'
import Home from './pages/HomePage';
import AboutMe from './pages/AboutMePage';
import Projects from './pages/ProjectsPage';
import Articles from './pages/ArticlesPage';
import Contact from './pages/ContactPage';
import NavBar from './components/NavBar';
import './styles/LogosBanner.scss';
import './styles/Project.scss';
import './styles/Articles.css';
import './styles/NavBar.scss';
import './styles/Footer.scss';
import './styles/ActionButton.scss';
import './styles/Home.scss';
import './styles/NightModeButton.scss';
import './styles/AboutMe.scss';
import firebase from 'firebase'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
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
firebase.initializeApp(firebaseConfig);
firebase.analytics();

var database = firebase.database();

export const ProjectContext = React.createContext();
export const PageContext = React.createContext();
export const ArticlesContext = React.createContext();

function App() {
  const [activeNavPage, setActiveNavPage] = useState('');
  const [projectsData, setProjectsData] = useState(false);
  const [articles, setArticles] = useState([]);
  const [showNavBar, setShowNavBar] = useState(false); 
  const [homeHasLoaded, setHomeHasLoaded] = useState(false); 

  // changes active window in nav bar
  useEffect(() => {
    setActiveNavPage(window.location.pathname);
    if (!showNavBar && window.location.pathname !== '/home') {
      setShowNavBar(true); 
    }
    return () => {
    }
  }, [showNavBar, activeNavPage])
  
  // get projects data and articles on website load
  useEffect(() => {
    const getProjects = async () => {
      let firebaseReq = await database.ref(`/`).once('value');
      let firebaseJSON = await firebaseReq.val();
      setProjectsData(firebaseJSON);
    }
    if (!projectsData) {
      getProjects();
    }
  }, [projectsData])

  useEffect(() => {
    const getArticles = async () => {
      let response = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@christianvegaaa');
      let responseJSON = await response.json();
      setArticles(responseJSON['items'])
    }
    if (!articles.length) {
      getArticles();
    }
  }, [articles])

  return (
    <BrowserRouter>
        <PageContext.Provider value={[setActiveNavPage, activeNavPage, homeHasLoaded, setHomeHasLoaded]}>
        <div className={showNavBar ? 'App' : 'AppNoNav'} >
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
              <Route path="/about-me">
                <AboutMe/>
              </Route >
              <Route path="/projects">
                <Projects projectsData={projectsData}/>
              </Route>
              <Route path="/articles">
                <Articles articles={articles}/>
              </Route>
            </Switch>
          </main>
        </div>
        </PageContext.Provider>
    </BrowserRouter>
  );
}

export default App;
