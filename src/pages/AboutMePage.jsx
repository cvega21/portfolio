import React, { useEffect, useState } from 'react';
import ActionButton from '../components/ActionButton';
import profilePicture from '../assets/IMG_8318.jpeg';
import LogosBannerNew from '../components/LogosBannerNew';
import Footer from '../components/Footer';
import IndustryExperience from '../components/IndustryExperience';
import WorkExperience from '../components/WorkExperience';
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
            <h2>🎓 UT Austin McCombs Grad</h2>
            <h2>💼 Systems Analyst at Visa</h2>
            <h2>🚀 Self-Taught Web Developer</h2>
          </div>
        </div>
        <LogosBannerNew/>
        <IndustryExperience/>
        <WorkExperience/>
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
