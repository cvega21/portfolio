import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const changeTheme = e => {
    document.body.classList.toggle("DarkTheme");
  }
  
  return (
    <Router>
      <div className="App">
        <nav className="NavBar">
          <h1>CHRISTIAN VEGA</h1>
          <button className="ContactButton">contact</button>
          <ul className="LinkContainer">
            <li className="LinkButtonContainer">
              <Link to="/reactapp">
                <button className="LinkButton">home</button>
              </Link>~
            </li>
            <li className="LinkButtonContainer">
              <Link to="/sass">
                <button className="LinkButton">about me</button>
              </Link>
            </li>
            <li className="LinkButtonContainer">
              <Link to="/node">
                <button className="LinkButton">projects</button>
              </Link>
            </li>
            <li className="LinkButtonContainer">
              <Link to="/node">
                <button className="LinkButton">articles</button>
              </Link>
            </li>
            <li className="LinkButtonContainer">
              <Link to="/node">
                <button className="LinkButton">cool stuff</button>
              </Link>
            </li>
          </ul>
        <label className="switch">
          <input type="checkbox" onClick={changeTheme}/>
          <span className="slider round"></span>
        </label>  
        </nav>      
        
        <div className="AppContent">
          <h1>Hey there 👋</h1>
          <p>I’m Christian. Welcome to my portfolio website!</p>
        </div>

        <Switch>
          <Route path="/reactapp">
            react
          </Route>
          <Route path="/sass">
            sass
          </Route>
          <Route path="/node">
            node
          </Route>
        </Switch>

      </div>
    </Router>
  );
}

export default App;
