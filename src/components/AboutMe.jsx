import React from 'react';
import ActionButton from './ActionButton';
import profilePicture from '../assets/IMG_8318.jpeg';
import LogoBanner from './LogoBanner'

const AboutMe = () => {
  return (
    <div className="GenericContainer">
      <h1>About Me</h1>
      <div className="ProfileContainer">
        <img src={profilePicture} alt="Profile" loading="lazy"></img>
        <div className="ProfileTextContainer">
          <p>23 year old that loves learning new things. Studied Finance @ UT Austin, interned at some of the world’s largest pension funds and investment banks, then decided to pursue a lifelong interest in technology and embarked upon an exciting new learning journey.
          </p>
          <p>
          Currently working in Operations + Infrastructure (Product Reliability Engineering) at Visa and tinkering with web development on the side.
          </p>
          <p>
          📍 Austin, Texas.
          </p>
        </div>
      </div>
      <LogoBanner/>
      <div className="ActionButtonCluster">
        <ActionButton link="home" navigation="left"/>
        <ActionButton link="projects" navigation="right"/>
      </div>
    </div>
  )
}

export default AboutMe
