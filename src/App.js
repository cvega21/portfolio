import './App.css';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import React, { useState, useEffect } from 'react'
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Projects from './components/ProjectsPage';
import Articles from './components/Articles';
import CoolStuff from './components/CoolStuff';
import NavBar from './components/NavBar';
import './styles/LogosBanner.css';
import './styles/Project.css';
import './styles/Articles.css';


// next steps
// add social media icons to nav

function App() {
  const [activeNavPage, setActiveNavPage] = useState('');

  useEffect(() => {
    setActiveNavPage(window.location.pathname);
    
    return () => {
    }
  }, [])

  return (
    <Router>
      <div className="App">
        <NavBar active={activeNavPage} onChangeNav={setActiveNavPage}/>     
        <main>
          <Switch>
            <Route exact path="/">
              <Redirect to="/home" />
            </Route>
            <Route path="/home">
              <Home onChangeNav={setActiveNavPage}/>
            </Route>
            <Route path="/about-me">
              <AboutMe onChangeNav={setActiveNavPage}/>
            </Route >
            <Route path="/projects">
              <Projects onChangeNav={setActiveNavPage}/>
            </Route>
            <Route path="/articles">
              <Articles onChangeNav={setActiveNavPage}/>
            </Route>
            <Route path="/cool-stuff">
              <CoolStuff onChangeNav={setActiveNavPage}/>
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
