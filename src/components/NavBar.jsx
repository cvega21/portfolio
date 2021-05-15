import React from 'react';
import ActionButton from './ActionButton';
import NightModeButton from './NightModeButton';
import NavBarLink from './NavBarLink';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const NavBar = () => {
  return (
      <nav className="NavBar">
        <h1>CHRISTIAN VEGA</h1>
        <ActionButton link="contact"/>
        <ul className="LinkContainer">
          <NavBarLink to='home'/>
          <NavBarLink to='about-me'/>
          <NavBarLink to='projects'/>
          <NavBarLink to='articles'/>
          <NavBarLink to='cool-stuff'/>
        </ul>
        <NightModeButton/>
      </nav>
  )
}

export default NavBar
