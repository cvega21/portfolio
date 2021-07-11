import React from 'react'
import bash from '../assets/bash.svg';
import css3 from '../assets/css3.png';
import heroku from '../assets/heroku.png';
import html5 from '../assets/html5.png';
import javascript from '../assets/javascript.png';
import jenkins from '../assets/jenkins.png';
import jira from '../assets/jira.png';
import mysql from '../assets/mysql.svg';
import mongo from '../assets/mongo.png';
import python from '../assets/python.png';
import react from '../assets/react.png';
import rhel from '../assets/rhel.png';
import tomcat from '../assets/tomcat.png';

const LogosBanner = () => {
  return (
    <div className="logos-banner">
      <h1>Tech Stack Experience</h1>
      <h2>work + personal projects</h2>
      <div className="logo-slider-container">
          <div className="logo-slider">  
            <div className="fade-background fade-background-left"></div>
            <div className="logo-slider-segment">
              <img src={html5} alt="HTML5" className='invert'></img>
              <img src={css3} alt="CSS3" className='invert'></img>
              <img src={javascript} alt="JavaScript" className='noInvert'></img>
              <img src={react} alt="React" className='noInvert'></img>
              <img src={python} alt="Python" className='noInvert'></img>
              <img src={bash} alt="Bash" className='invert'></img>
              <img src={mysql} alt="MySQL" className='noInvert'></img>
              <img src={mongo} alt="Mongo" className='invert'></img>
            </div>
            <div className="logo-slider-segment">
              <img src={html5} alt="HTML5" className='invert'></img>
              <img src={css3} alt="CSS3" className='invert'></img>
              <img src={javascript} alt="JavaScript" className='noInvert'></img>
              <img src={react} alt="React" className='noInvert'></img>
              <img src={python} alt="Python" className='noInvert'></img>
              <img src={bash} alt="Bash" className='invert'></img>
              <img src={mysql} alt="MySQL" className='noInvert'></img>
              <img src={mongo} alt="Mongo" className='invert'></img>
            </div>
            <div className="fade-background fade-background-right"></div>
          </div>
          <div className="logo-slider">  
            <div className="fade-background fade-background-left"></div>
            <div className="logo-slider-segment2">
              <img src={heroku} alt="Heroku" className='invert'></img>
              <img src={jenkins} alt="Jenkins" className='noInvert'></img>
              <img src={jira} alt="Jira" className='invert'></img>
              <img src={rhel} alt="Red Hat Enterprise Linux" className='invert'></img>
              <img src={tomcat} alt="Tomcat" className='invert'></img>
            </div>
            <div className="logo-slider-segment2">
              <img src={heroku} alt="Heroku" className='invert'></img>
              <img src={jenkins} alt="Jenkins" className='noInvert'></img>
              <img src={jira} alt="Jira" className='invert'></img>
              <img src={rhel} alt="Red Hat Enterprise Linux" className='invert'></img>
              <img src={tomcat} alt="Tomcat" className='invert'></img>
            </div>
            <div className="fade-background fade-background-right"></div>
          </div>
        </div>
    </div>
  )
}

export default LogosBanner
