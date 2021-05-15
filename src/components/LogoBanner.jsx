import React from 'react';
import bash from '../assets/bash.svg';
import css3 from '../assets/css3.png';
import heroku from '../assets/heroku.png';
import html5 from '../assets/html5.png';
import javascript from '../assets/javascript.png';
import jenkins from '../assets/jenkins.png';
import jira from '../assets/jira.png';
import mysql from '../assets/mysql.svg';
import python from '../assets/python.png';
import react from '../assets/react.png';
import rhel from '../assets/rhel.png';
import tomcat from '../assets/tomcat.png';

const LogoBanner = () => {
  return (
  <div className="LogoBanner">
    <h1>Tech Stack Experience</h1>
    <p>work + personal projects</p>
    <div className="BannerRow1">
      <img src={html5} alt="HTML5"></img>
      <img src={css3} alt="CSS3"></img>
      <img src={javascript} alt="JavaScript"></img>
      <img src={bash} alt="Bash"></img>
      <img src={mysql} alt="MySQL"></img>
    </div>
    <div className="BannerRow2">
      <img src={jira} alt="Jira"></img>
      <img src={jenkins} alt="Jenkins"></img>
      <img src={heroku} alt="Heroku"></img>
      <img src={rhel} alt="Red Hat Enterprise Linux"></img>
    </div>
  </div>
  )
}

export default LogoBanner
