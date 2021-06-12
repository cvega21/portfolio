import React, { useEffect, useState } from 'react';
import ActionButton from './ActionButton'
import Project from './Project'
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
import portfolioStatic from '../assets/portfolioStatic.png';


const Projects = (props) => {  
  // const [projectsData, setProjectsData] = useState('');

  // useEffect(() => {
  //   if (!projectsData) {
  //     fetch('http://localhost:5001/portfolio-75ffa/us-central1/getProjectsData')
  //       .then((res) => res.json())
  //       .then((hours) => {
  //         setProjectsData(hours);
  //         console.log(hours);
  //       });
  //   }

  // }, [projectsData])
  
  let portfolioProps = {
    title: 'Portfolio',
    description: 'a portfolio website within a portfolio website. #recursion',
    stack: ['react','firebase'],
    time: 'fromToggl'
  }
  
  return (
    <div className="GenericContainer">
      <h1>Projects</h1>
      <div>
        <p className='togglBanner'>⏳ = hours tracked on <a href="https://www.toggl.com">toggl.com</a></p>
        {/* <p>read more</p> */}
      </div>
      <div className="ProjectsGrid">
        <Project 
          title="PORTFOLIO WEBSITE" 
          description='a portfolio website in a portfolio website. #recursion' 
          gif={[portfolioStatic, portfolioStatic]} 
          link='https://christianvega.me'
          stack={['react','sass','firebase']}
          time={props.projectsData['Build Portfolio Website']}
          />
        <Project
          title="WORKOUT TRACKER" 
          description='a small, responsive full-stack app to keep track of your workouts.' 
          gif={[fitness,fitnessStatic]} 
          link='https://github.com/cvega21/fitness-tracking'
          stack={['react', 'nodeJS', 'mongo']}
          time={props.projectsData['Fitness Tracker App']}
          />
        <Project
          title="EDM SOUNDBOARD"
          description='an electronic dance music (EDM) inspired piano and soundboard.'
          gif={[soundboard, soundboardStatic]}
          link='https://github.com/cvega21/edm-soundboard'
          stack={['react']}
          time={props.projectsData['EDM Machine']}
          />
        <Project
          title="POMODORO TIMER"
          description='a simple time management tool built on React.'
          gif={[timer, timerStatic]}
          link='https://github.com/cvega21/pomodoro-timer'
          stack={['react']}
          time={props.projectsData['Pomodoro Timer Project']}
          />
        <Project 
          title="CALCULATOR"
          description="a nice looking, fully functioning calculator built on react."
          gif={[calculator,calculatorStatic]}
          link='https://github.com/cvega21/calculator-js'
          stack={['react']}
          time={props.projectsData['Calculator Project']}
          />
        <Project 
          title="RANDOM QUOTE GENERATOR" 
          description='an iOS-inspired random quote generator.' 
          gif={[quoteGenerator, quoteGeneratorStatic]} 
          link='https://github.com/cvega21/random-quote-generator'
          stack={['react']}
          time={'N/A'}
          />
      </div>
      <div className="ActionButtonCluster">
        <ActionButton link="about-me" navigation="left" onChangeNav={props.onChangeNav}/>
        <ActionButton link="articles" navigation="right" onChangeNav={props.onChangeNav}/>
      </div>
    </div>
  )
}

export default Projects
