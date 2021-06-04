import React, { useState, useEffect } from 'react'
import ActionButton from './ActionButton';
import NightModeButton from './NightModeButton';
import NavBarLink from './NavBarLink';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faMedium, faGithubSquare, faTwitterSquare, faLess } from '@fortawesome/free-brands-svg-icons';

const NavBar = () => {
  const [activeRoute,setActiveRoute] = useState({
    'home': 0,
    'about-me': 0,
    'projects': 0,
    'articles': 0,
    'cool-stuff': 0
  });  

  useEffect(() => {
    

    return () => {
      
    }
  }, [])

  return (
      <nav className="NavBar">
        <script src="https://kit.fontawesome.com/cd0cc07d13.js" crossorigin="anonymous"></script>
        <div className="NavBarTop">
          <h1>CHRISTIAN VEGA</h1>
          <ActionButton link="contact"/>
          <ul className="LinkContainer">
            <NavBarLink to='home' active={activeRoute[0]}/>
            <NavBarLink to='about-me' active={activeRoute[1]}/>
            <NavBarLink to='projects' active={activeRoute[2]}/>
            <NavBarLink to='articles' active={activeRoute[3]}/>
            <NavBarLink to='cool-stuff' active={activeRoute[4]}/>
          </ul>
        </div>
        <div className="NavBarBottom">
          <NightModeButton/>
          <div className="SocialIcons">
            <FontAwesomeIcon icon={faLinkedin} size='2x' className='LinkedIn'/>
            <FontAwesomeIcon icon={faMedium} size='2x' className='LinkedIn'/>
            <FontAwesomeIcon icon={faGithubSquare} size='2x' className='LinkedIn'/>
            <FontAwesomeIcon icon={faTwitterSquare} size='2x' className='LinkedIn'/>
          </div>
        </div>
      </nav>
  )
}

export default NavBar
