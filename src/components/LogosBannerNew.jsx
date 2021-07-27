import React, { useEffect } from 'react'
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
import firebase from '../assets/firebase.png';

const LogosBanner = () => {
  useEffect(() => {
    let topSliders = document.getElementsByClassName('logo-slider-segment');
    let bottomSliders = document.getElementsByClassName('logo-slider-segment2');
    let timer1;

    if (topSliders.length && bottomSliders.length) {
      try {
        timer1 = setTimeout(() => {
          topSliders[0].classList.toggle('scroll-fast');
          topSliders[1].classList.toggle('scroll-fast');
          bottomSliders[0].classList.toggle('scroll-med');
          bottomSliders[1].classList.toggle('scroll-med');
        }, 750)
      } catch (e) {
        console.error(e);
      }
    }
    
    return () => {
      clearTimeout(timer1);
    }
  }, [])

  return (
    <div className="logos-banner">
      <h1>Tech Experience</h1>
      <h2>work + personal projects</h2>
      <div className="logo-slider-container">
          <div className="logo-slider">  
            <div className="fade-background fade-background-left"></div>
            <div className="logo-slider-segment">
              <img src={html5} alt="HTML5" className='invert'></img>
              <img src={css3} alt="CSS3" className='invert'></img>
              <img src={javascript} alt="JavaScript" className='noInvert'></img>
              <img src={react} alt="React" className='noInvert'></img>
              <img src={mongo} alt="Mongo" className='invert'></img>
              <img src={firebase} alt="Firebase" className='noInvert'></img>
              <img src={mysql} alt="MySQL" className='noInvert'></img>
              <img src={python} alt="Python" className='noInvert'></img>
            </div>
            <div className="logo-slider-segment">
              <img src={html5} alt="HTML5" className='invert'></img>
              <img src={css3} alt="CSS3" className='invert'></img>
              <img src={javascript} alt="JavaScript" className='noInvert'></img>
              <img src={react} alt="React" className='noInvert'></img>
              <img src={mongo} alt="Mongo" className='invert'></img>
              <img src={firebase} alt="Firebase" className='noInvert'></img>
              <img src={mysql} alt="MySQL" className='noInvert'></img>
              <img src={python} alt="Python" className='noInvert'></img>
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
              <img src={bash} alt="Bash" className='invert'></img>
            </div>
            <div className="logo-slider-segment2">
              <img src={heroku} alt="Heroku" className='invert'></img>
              <img src={jenkins} alt="Jenkins" className='noInvert'></img>
              <img src={jira} alt="Jira" className='invert'></img>
              <img src={rhel} alt="Red Hat Enterprise Linux" className='invert'></img>
              <img src={tomcat} alt="Tomcat" className='invert'></img>
              <img src={bash} alt="Bash" className='invert'></img>
            </div>
            <div className="fade-background fade-background-right"></div>
          </div>
        </div>
    </div>
  )
}

export default LogosBanner
