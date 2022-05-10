import './App.scss';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import React, { useState, useEffect } from 'react'
import { useToggl, useMedium } from './hooks'
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
import { IPageContext, INavContext, ProjectsProps } from '../src/types'

export const PageContext = React.createContext<IPageContext>([]);
export const NavContext = React.createContext<INavContext>([]);

function App() {
  const [activeNavPage, setActiveNavPage] = useState('');
  const [showNavBar, setShowNavBar] = useState(false); 
  const [homeHasLoaded, setHomeHasLoaded] = useState(false);
  const [navIsExpanded, setNavIsExpanded] = useState(false);
  const {loading, error, projectsData}: ProjectsProps = useToggl()
  const articles = useMedium('christianvegaaa');
  

  useEffect(() => {
    setActiveNavPage(window.location.pathname);
    if (!showNavBar && window.location.pathname !== '/home') {
      setShowNavBar(true); 
    }

    return () => {
    }
  }, [showNavBar, activeNavPage])

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
                <Projects projectsData={projectsData} loading={loading} error={error}/>
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
