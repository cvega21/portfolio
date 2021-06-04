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
  const [activeNavPage, setActiveNavPage] = useState('home');
  

  return (
    <Router>
      <div className="App">
        <NavBar/>     
        <main>
          <Switch>
            <Route exact path="/">
              <Redirect to="/home" />
            </Route>
            <Route path="/home">
              <Home/>
            </Route>
            <Route path="/about-me">
              <AboutMe/>
            </Route>
            <Route path="/projects">
              <Projects/>
            </Route>
            <Route path="/articles">
              <Articles/>
            </Route>
            <Route path="/cool-stuff">
              <CoolStuff/>
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
