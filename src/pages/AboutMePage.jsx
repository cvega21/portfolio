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
              <div>
                <h1>VEGA-MUNGUIA<img src={check} alt=''/></h1>
              </div>
            </div>
            <div>
              <h2>🎓 Finance Grad from <a style={{color: '#ff6a00'}} href="http://www.utaustin.com">UT Austin</a></h2>
              <h2>🖥️ Systems Analyst at <a style={{color: '#fcb70a'}} href="https://www.visa.com">Visa</a></h2>
              <h2>🚀 Self-Taught<a style={{color: 'rgb(88, 214, 88)'}} href="http://www.utaustin.com"> Web Developer</a></h2>
            </div>
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
      </>
      : <FontAwesomeIcon icon={faCircleNotch} className='loadingIcon'/>}
    </div>
  )
}

export default AboutMe
