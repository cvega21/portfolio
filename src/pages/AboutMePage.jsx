import React, { useEffect } from 'react';
import ActionButton from '../components/ActionButton';
import profilePicture from '../assets/IMG_8318.jpeg';
import LogosBannerNew from '../components/LogosBannerNew';
import Footer from '../components/Footer';

const AboutMe = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);  
    return () => {
    }
  }, [])

  return (
    <div className="GenericContainer">
      <h1>About Me</h1>
      <div className="ProfileContainer">
        <img src={profilePicture} alt="Profile" loading="lazy"></img>
        <div className="ProfileTextContainer">
          <p>23 year old that loves learning new things. Studied Finance at UT Austin, interned at pension funds and investment banks during college, then became fascinated by fintech and made the leap to pursue a career in software.
          </p>
          <p>
          Currently working in Operations + Infrastructure (Product Reliability Engineering) at Visa and tinkering with web development on the side. Passionate about making the financial world more accessible to all.
          </p>
          <p>
          📍 Austin, Texas.
          </p>
        </div>
      </div>
      <LogosBannerNew/>
      <div className="ActionButtonCluster">
        <ActionButton link="home" navigation="left" onChangeNav={props.onChangeNav}/>
        <ActionButton link="projects" navigation="right" onChangeNav={props.onChangeNav}/>
      </div>
      <Footer/>
    </div>
  )
}

export default AboutMe
