import React, { useState, useEffect } from 'react'
import ActionButton from './ActionButton';
import NightModeButton from './NightModeButton';
import NavBarLink from './NavBarLink';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faMedium, faGithubSquare, faTwitterSquare, faLess } from '@fortawesome/free-brands-svg-icons';

const NavBar = (props) => {
  // console.log(`${props.active} is active ! ! !`);

  return (
      <nav className="NavBar">
        <script src="https://kit.fontawesome.com/cd0cc07d13.js" crossorigin="anonymous"></script>
        <div className="NavBarTop">
          <h1>CHRISTIAN VEGA</h1>
          <ActionButton link="contact"/>
          <ul className="LinkContainer">
            <NavBarLink to='home' active={props.active} onChangeNav={props.onChangeNav}/>
            <NavBarLink to='about-me' active={props.active} onChangeNav={props.onChangeNav}/>
            <NavBarLink to='projects' active={props.active} onChangeNav={props.onChangeNav}/>
            <NavBarLink to='articles' active={props.active} onChangeNav={props.onChangeNav}/>
            <NavBarLink to='cool-stuff' active={props.active} onChangeNav={props.onChangeNav}/>
          </ul>
          {/* <NavBarLinkContainer paths={['home', 'about-me', 'projects','articles','cool-stuff']} onChangeNav={props.onChangeNav}/> */}
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
