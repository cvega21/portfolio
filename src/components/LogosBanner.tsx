import { useEffect } from 'react'
import LogoSliderSegment from './LogoSliderSegment';

const LogosBanner = () => {
  useEffect(() => {
    let topSliders: HTMLCollectionOf<Element> = document.getElementsByClassName('logo-slider-segment');
    let bottomSliders: HTMLCollectionOf<Element> = document.getElementsByClassName('logo-slider-segment2');
    let timer1: NodeJS.Timeout;

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
              <LogoSliderSegment logos={['html', 'css', 'javascript', 'react', 'mongo', 'firebase', 'mysql', 'python']}/>
            </div>
            <div className="logo-slider-segment">
              <LogoSliderSegment logos={['html', 'css', 'javascript', 'react', 'mongo', 'firebase', 'mysql', 'python']}/>
            </div>
            <div className="fade-background fade-background-right"></div>
          </div>
          <div className="logo-slider">  
            <div className="fade-background fade-background-left"></div>
            <div className="logo-slider-segment2">
            <LogoSliderSegment logos={['heroku', 'jenkins', 'jira', 'rhel', 'tomcat', 'bash']}/>
            </div>
            <div className="logo-slider-segment2">
              <LogoSliderSegment logos={['heroku', 'jenkins', 'jira', 'rhel', 'tomcat', 'bash']}/>
            </div>
            <div className="fade-background fade-background-right"></div>
          </div>
        </div>
    </div>
  )
}

export default LogosBanner
