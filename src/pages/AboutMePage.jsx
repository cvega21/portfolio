import React, { useEffect, useState, useContext } from 'react';
import ActionButton from '../components/ActionButton';
import profilePicture from '../assets/IMG_8239.JPG';
import check from '../assets/checkmark.png';
import LogosBannerNew from '../components/LogosBannerNew';
import Footer from '../components/Footer';
import IndustryExperience from '../components/IndustryExperience';
import { PageContext } from '../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';

const AboutMe = (props) => {
  const [isMounted, setIsMounted] = useState(false);
  const pageContext = useContext(PageContext);
  
  useEffect(() => {
    window.scrollTo(0, 0);  
    
    // pageContext[2] === hasHomeLoaded. set this to true on the first load so that the loading animation is only displayed once
    if (pageContext[2] === false) {
      setTimeout(() => {
        setIsMounted(true);
        pageContext[3](true);
      }, 825);
    } else {
      setIsMounted(true);
    }

    return () => {
    }
  }, [pageContext])

  return (
    <div className="GenericContainer">
      { isMounted ?
      <>
        <div className="ProfileContainer">
          <div className="ProfilePicture">
            <div className="RainbowContainer">
            </div>
            <img src={profilePicture} alt="Profile"></img>
          </div>
          <div className="ProfileTextContainer">
            <h1>CHRISTIAN </h1>
            <div className="LastNameContainer">
              <div>
                <h1>VEGA </h1>
              </div>
              <div className="CheckedName">
                <h1>MUNGUIA</h1>
                <img src={check} alt=''/>
              </div>
            </div>
            <div className="ProfileTextBio">
              <h2>Systems Analyst at Visa</h2>
              <ActionButton link=" see my resume" /> 
              <h3>FinTech Enthusiast, Self-Taught Web Developer, House Music Fan </h3>
            </div>
          </div>
        </div>
        <div className="AboutSection">
          <h1>About Me</h1>
          <p>
            Born in Canada and raised in Mexico, I graduated with a BBA in Finance from the <b>University of Texas</b> as part of the 2020 ("Zoomer" 👨🏽‍💻) class. After several internships in Investment Banking and Asset Management, I became fascinated by the intersection of <b>finance</b> and <b>technology</b> and decided to purse a career in the technical side of the business. I enjoy fitness, English soccer, tacos mañaneros, and a wide variety of electronic music.
          </p>
        </div>
        <LogosBannerNew/>
        <IndustryExperience/>
        <div className="ActionButtonCluster">
          <ActionButton link="home" navigation="left" />
          <ActionButton link="projects" navigation="right" />
        </div>
        <Footer/>
      </>
      : <FontAwesomeIcon icon={faCircleNotch} className='loadingIcon'/>}
    </div>
  )
}

export default AboutMe
