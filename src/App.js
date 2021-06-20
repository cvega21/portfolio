import './App.css';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import React, { useState, useEffect } from 'react'
import Home from './pages/HomePage';
import AboutMe from './pages/AboutMePage';
import Projects from './pages/ProjectsPage';
import Articles from './pages/ArticlesPage';
import CoolStuff from './pages/CoolStuffPage';
import Contact from './pages/ContactPage';
import NavBar from './components/NavBar';
import './styles/LogosBanner.css';
import './styles/Project.css';
import './styles/Articles.css';

function App() {
  const [activeNavPage, setActiveNavPage] = useState('');
  const [projectsData, setProjectsData] = useState(false);
  const [articles, setArticles] = useState([]);
  const [showNavBar, setShowNavBar] = useState(false); 

  // changes active window in nav bar
  useEffect(() => {
    setActiveNavPage(window.location.pathname);
    console.log(window.location.pathname)
    if (!showNavBar && window.location.pathname !== '/home') {
      setShowNavBar(true); 
    }

    // setActiveNavPage(window.location.pathname);
    
    return () => {
    }

  }, [showNavBar, activeNavPage])
  
  // get projects data and articles on website load
  useEffect(() => {
    const getProjects = async () => {
      let response = await fetch('http://localhost:5001/portfolio-75ffa/us-central1/loadInitialProjectsData');
      let responseJSON = await response.json();
      setProjectsData(responseJSON.projectsTime);
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
    <Router>
      <div className={showNavBar ? 'App' : 'AppNoNav'} >
        {showNavBar ? <NavBar active={activeNavPage} onChangeNav={setActiveNavPage}/> : void(0) }     
        <main>
          <Switch>
            <Route exact path="/">
              <Redirect to="/home" />
            </Route>
            <Route path="/contact">
              <Contact onChangeNav={setActiveNavPage}/>
            </Route>
            <Route path="/home">
              <Home onChangeNav={setActiveNavPage}/>
            </Route>
            <Route path="/about-me">
              <AboutMe onChangeNav={setActiveNavPage}/>
            </Route >
            <Route path="/projects">
              <Projects onChangeNav={setActiveNavPage} projectsData={projectsData}/>
            </Route>
            <Route path="/articles">
              <Articles onChangeNav={setActiveNavPage} articles={articles}/>
            </Route>
            {/* <Route path="/cool-stuff">
              <CoolStuff onChangeNav={setActiveNavPage}/>
            </Route> */}
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
