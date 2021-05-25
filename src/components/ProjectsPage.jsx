import React from 'react';
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


const Projects = () => {
  
  
  let portfolioProps = {
    title: 'Portfolio',
    description: 'a portfolio website within a portfolio website. #recursion',
    stack: ['react','firebase'],
    time: 'fromToggl'
  }
  
  return (
    <div className="GenericContainer">
      <h1>Projects</h1>
      <p>🕒 = hours tracked on <a href="https://www.toggl.com">toggl.com</a></p>
      <div className="ProjectsGrid">
        <Project 
          title="PORTFOLIO WEBSITE" 
          description='a portfolio website in a portfolio website. #recursion' 
          gif={[portfolioStatic, portfolioStatic]} 
          link='https://christianvega.me'
          stack={['react','sass','firebase']}
        />
        <Project
          title="FITNESS TRACKING" 
          description='a small, responsive full-stack app to keep track of your workouts.' 
          gif={[fitness,fitnessStatic]} 
          link='https://github.com/cvega21/fitness-tracking'
          stack={['react', 'node', 'mongo']}
        />
        <Project 
          title="CALCULATOR"
          description="a nice looking, fully functioning calculator built on react."
          gif={[calculator,calculatorStatic]}
          link='https://github.com/cvega21/calculator-js'
          stack={['react']}
          />
        <Project 
          title="RANDOM QUOTE GENERATOR" 
          description='an iOS-inspired random quote generator.' 
          gif={[quoteGenerator, quoteGeneratorStatic]} 
          link='https://github.com/cvega21/random-quote-generator'
          stack={['react']}
          />
        <Project
          title="POMODORO TIMER"
          description='a simple time management tool built on React.'
          gif={[timer, timerStatic]}
          link='https://github.com/cvega21/pomodoro-timer'
          stack={['react']}
          />
        <Project
          title="EDM SOUNDBOARD"
          description='an electronic dance music (EDM) inspired piano and soundboard.'
          gif={[soundboard, soundboardStatic]}
          link='https://github.com/cvega21/edm-soundboard'
          stack={['react']}
        />
      </div>
      <div className="ActionButtonCluster">
        <ActionButton link="about-me" navigation="left"/>
        <ActionButton link="articles" navigation="right"/>
      </div>
    </div>
  )
}

export default Projects
