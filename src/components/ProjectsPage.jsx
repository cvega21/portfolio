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
      <div className="ProjectsGrid">
        <Project title="CALCULATOR" description="a nice looking, fully functioning calculator built on react." gif={[calculator,calculatorStatic]}/>
        <Project title="FITNESS TRACKING" description='a small, responsive full-stack app to keep track of your workouts.' gif={[fitness,fitnessStatic]}/>
        <Project title="RANDOM QUOTE GENERATOR" description='an iOS-inspired random quote generator.' gif={[quoteGenerator, quoteGeneratorStatic]}/>
        <Project title="HELLO WORLD" description='a simple time management tool built on React.' gif={[timer, timerStatic]}/>
        <Project title="POMODORO TIMER" gif={[quoteGenerator, quoteGenerator]}/>
        <Project title="HELLO WORLD" gif={[quoteGenerator, quoteGenerator]}/>
      </div>
      <div className="ActionButtonCluster">
        <ActionButton link="about-me" navigation="left"/>
        <ActionButton link="articles" navigation="right"/>
      </div>
    </div>
  )
}

export default Projects
