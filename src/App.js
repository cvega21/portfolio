import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from './components/Home';
import ActionButton from './components/ActionButton';
import NightModeButton from './components/NightModeButton';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Articles from './components/Articles';
import CoolStuff from './components/CoolStuff';


// next steps
// learn css grid
// fix nav bar (absolute positioning, or is grid with router SPA enough?)
// add social media icons to nav
// fix app Content, create a separate routed component for it (e.g. in Home)
// move nav bar to component

function App() {
  
  return (
    <Router>
      <div className="App">
        <nav className="NavBar">
          <h1>CHRISTIAN VEGA</h1>
          <ActionButton link="contact"/>
          <ul className="LinkContainer">
            <li className="LinkButtonContainer">
              <Link to="/home">
                <button className="LinkButton">home</button>
              </Link>
            </li>
            <li className="LinkButtonContainer">
              <Link to="/about-me">
                <button className="LinkButton">about me</button>
              </Link>
            </li>
            <li className="LinkButtonContainer">
              <Link to="/projects">
                <button className="LinkButton">projects</button>
              </Link>
            </li>
            <li className="LinkButtonContainer">
              <Link to="/articles">
                <button className="LinkButton">articles</button>
              </Link>
            </li>
            <li className="LinkButtonContainer">
              <Link to="/cool-stuff">
                <button className="LinkButton">cool stuff</button>
              </Link>
            </li>
          </ul>
          <NightModeButton/>
        </nav>      
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
