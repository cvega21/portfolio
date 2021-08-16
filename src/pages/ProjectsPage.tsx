import React, { useEffect } from 'react';
import ActionButton from '../components/ActionButton'
import Project from '../components/Project'
import calculator from '../assets/calculator.gif';
import calculatorStatic from '../assets/calculatorStatic.jpg';
import quoteGenerator from '../assets/quoteGenerator.gif';
import quoteGeneratorStatic from '../assets/quoteGeneratorStatic.jpg';
import fitness from '../assets/fitness.gif';
import fitnessStatic from '../assets/fitnessStatic.jpg';
import timer from '../assets/timer.gif';
import timerStatic from '../assets/timerStatic.jpg';
import soundboard from '../assets/soundboard.gif';
import soundboardStatic from '../assets/soundboardStatic.jpg';
import portfolio from '../assets/portfolio.gif';
import portfolioStatic from '../assets/portfolioStatic.jpg';
import Footer from '../components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';

interface ProjectType {
  [key: string]: string;
}

interface ProjectData {
  projects: ProjectType;
  projectsMetadata: ProjectType;
}

interface ProjectsProps {
  projectsData: ProjectData;
}

const Projects = (props: ProjectsProps) => {  
  console.log(props);
  useEffect(() => {
    window.scrollTo(0, 0);  
    return () => {
    }
  }, [])

  return (
    <div className="GenericContainer">
      <div className="togglBannerContainerSuper">
        <a target="_blank" rel="noopener noreferrer" href="http://www.toggl.com" className="togglBannerContainer">
          <p className='togglBanner'>⏳ = hours tracked on Toggl </p> 
        </a>
      </div>
        {props.projectsData ? 
      <div className="ProjectsGrid">
        <Project 
          title="PORTFOLIO WEBSITE" 
          description='a mobile-first, API-integrated portfolio website built from scratch.' 
          gif={[portfolio, portfolioStatic]} 
          link='https://christianvega.me'
          stack={['react','sass','firebase']}
          time={props.projectsData.projects['Build Portfolio Website']}
          />
        <Project
          title="WORKOUT TRACKER" 
          description='a small, responsive full-stack app to keep track of your workouts.' 
          gif={[fitness,fitnessStatic]} 
          link='https://github.com/cvega21/fitness-tracking'
          stack={['react', 'nodeJS', 'mongo', 'bootstrap']}
          time={props.projectsData.projects['Fitness Tracker App']}
          />
        <Project
          title="EDM SOUNDBOARD"
          description='an electronic dance music (EDM) inspired piano and soundboard.'
          gif={[soundboard, soundboardStatic]}
          link='https://github.com/cvega21/edm-soundboard'
          stack={['react', 'bootstrap']}
          time={props.projectsData.projects['EDM Machine']}
          />
        <Project
          title="POMODORO TIMER"
          description='a simple time management tool built on React.'
          gif={[timer, timerStatic]}
          link='https://github.com/cvega21/pomodoro-timer'
          stack={['react', 'bootstrap']}
          time={props.projectsData.projects['Pomodoro Timer Project']}
          />
        <Project 
          title="CALCULATOR"
          description="a nice looking, fully functioning calculator built on react."
          gif={[calculator,calculatorStatic]}
          link='https://github.com/cvega21/calculator-js'
          stack={['react']}
          time={props.projectsData.projects['Calculator Project']}
          />
        <Project 
          title="QUOTE GENERATOR" 
          description='an iOS-inspired random quote generator.' 
          gif={[quoteGenerator, quoteGeneratorStatic]} 
          link='https://github.com/cvega21/random-quote-generator'
          stack={['react', 'bootstrap']}
          time={'untracked'}
          />
      </div>  
        : <FontAwesomeIcon icon={faCircleNotch} className='loadingIcon'/>}
      <div className="ActionButtonCluster">
        <ActionButton link="about-me" navigation="left" />
        <ActionButton link="articles" navigation="right" />
      </div>
      <Footer/>
    </div>
  )
}

export default Projects