import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from './components/Home';
// import ActionButton from './components/ActionButton';
// import NightModeButton from './components/NightModeButton';
import AboutMe from './components/AboutMe';
import Projects from './components/ProjectsPage';
import Articles from './components/Articles';
import CoolStuff from './components/CoolStuff';
import NavBar from './components/NavBar';
import './components/LogosBanner.css';
import './components/Project.css';


// next steps
// add social media icons to nav

function App() {
  
  return (
    <Router>
      <div className="App">
        <NavBar/>     
        <main>
          <Switch>
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
