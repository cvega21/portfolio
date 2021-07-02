import React, { useEffect, useState } from 'react';
import ActionButton from '../components/ActionButton';
import profilePicture from '../assets/IMG_8318.jpeg';
import LogosBannerNew from '../components/LogosBannerNew';
import Footer from '../components/Footer';
import IndustryExperience from '../components/IndustryExperience';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';

const AboutMe = (props) => {
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    window.scrollTo(0, 0);  
    setTimeout(() => {
      setIsMounted(true);
    }, 825);

    return () => {
    }
  }, [])

  return (
    <div className="GenericContainer">
      { isMounted ?
      <>
      {/* <div> */}
        <h1>About Me</h1>
        <div className="ProfileContainer">
          <img src={profilePicture} alt="Profile"></img>
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
        <IndustryExperience/>
        <div className="ActionButtonCluster">
          <ActionButton link="home" navigation="left" />
          <ActionButton link="projects" navigation="right" />
        </div>
        <Footer/>
      {/* </div> */}
      </>
      : <FontAwesomeIcon icon={faCircleNotch} className='loadingIcon'/>}
    </div>
  )
}

export default AboutMe
