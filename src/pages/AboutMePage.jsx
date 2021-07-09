import React, { useEffect, useState } from 'react';
import ActionButton from '../components/ActionButton';
import profilePicture from '../assets/IMG_8239.JPG';
import check from '../assets/checkmark.png';
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
        <div className="ProfileContainer">
          <div className="ProfilePicture">
            <div className="RainbowContainer">
            </div>
            <img src={profilePicture} alt="Profile"></img>
          </div>
          <div className="ProfileTextContainer">
            <div>
              <h1>CHRISTIAN</h1>
              <div className="CheckedName">
                {/* <h1>VEGA</h1> */}
                <h1>VEGA MUNGUIA</h1>
                <img src={check} alt=''/>
              </div>
            </div>
            <div>
              {/* <h2>🎓 Finance Grad from <a style={{color: 'rgb(214, 134, 88)'}} href="http://www.utaustin.com">UT Austin</a></h2>
              <h2>🖥️ Systems Analyst at <a style={{color: 'rgb(88, 185, 214)'}} href="https://www.visa.com">Visa</a></h2>
              <h2>🚀 Self-Taught Web Developer</h2> */}
              <h2>Systems Analyst at Visa</h2>
              <ActionButton link=" see my resume" /> 
              <h3>FinTech Enthusiast, Self-Taught Web Developer, House Music fan 🕺🏽</h3>
            </div>
          </div>
        </div>
        <div className="AboutSection">
          <h1>About Me</h1>
          <p>
            Born in Canada and raised in Mexico, I graduated with a BBA in Finance from the University of Texas as part of the 2020 class - yay for virtual graduation! 😎 
          </p>
          <p>
            After several internships in Investment Banking and Asset Management, I became fascinated by the intersection of finance and technology and decided to purse a career in the technical side of things.
          </p>
          <p>

          </p>
        </div>
        <LogosBannerNew/>
        <IndustryExperience/>
        {/* <WorkExperience/> */}
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
