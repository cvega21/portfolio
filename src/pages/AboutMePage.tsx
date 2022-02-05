import React, { useEffect, useState, useContext } from 'react';
import ActionButton from '../components/ActionButton';
import profilePicture from '../assets/new_pfp.jpg';
import check from '../assets/checkmark.png';
import LogosBannerNew from '../components/LogosBanner';
import Footer from '../components/Footer';
import IndustryExperience from '../components/IndustryExperience';
import { PageContext } from '../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

const AboutMe = () => {
  const [isMounted, setIsMounted] = useState(false);
  const pageContext = useContext(PageContext);
  const setHomeHasLoaded: React.Dispatch<React.SetStateAction<boolean>> = pageContext[3] as React.Dispatch<React.SetStateAction<boolean>>;
  
  useEffect(() => {
    if (pageContext[2] === false) {
      setTimeout(() => {
        setIsMounted(true);
        setHomeHasLoaded(true);
      }, 825);
    } else {
      setIsMounted(true);
    }

    return () => {
    }
  }, [setHomeHasLoaded])

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
              <h2>Product Reliability Engineer @ Visa</h2>
              <ActionButton link='resume'/> 
              <h3>Full-Stack Web Developer, FinTech + Web3 Enthusiast, House Music Fan </h3>
            </div>
          </div>
        </div>
        <div className="AboutSection">
          <h1>About Me</h1>
          <p>
            Born in Canada and raised in Mexico, I graduated with a BBA in Finance from the <b>University of Texas</b> as part of the 2020 ("Zoomer") class. After several internships in Investment Banking and Asset Management, I became fascinated by the intersection of <b>finance</b> and <b>technology</b> and decided to pursue a career in the technical side of the business. 
          </p>
          <p>
            My responsibilities at Visa involve maintaining a 99.9% SLA uptime for several enterprise software applications totaling <b>$80 million</b> in annual revenue centered around real-time fraud detection, large-scale financial breach monitoring and payments risk management.             
          </p>
          <p>
            I also have an extensive portfolio of <Link to='/projects'>personal projects</Link>, including freelancing for startups, working with and creating REST APIs, building full-stack CRUD Apps, and exploring the new frontier of web3. 
          </p>
          <p>
            In my free time, I enjoy fitness, reading, English soccer, tacos mañaneros, and a wide variety of electronic music.
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
