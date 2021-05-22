import React from 'react';
import ActionButton from './ActionButton'
import Project from './Project'

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
        <Project title="PORTFOLIO" description="a portfolio website within a portfolio website. #recursion"/>
        <Project title="FITNESS TRACKING" description='A small, responsive full-stack app to keep track of your workouts.'/>
        <Project title="RANDOM QUOTE GENERATOR" description='An iOS-inspired random quote generator.'/>
        <Project title="HELLO WORLD"/>
        <Project title="HELLO WORLD"/>
        <Project title="HELLO WORLD"/>
      </div>
      <div className="ActionButtonCluster">
        <ActionButton link="about-me" navigation="left"/>
        <ActionButton link="articles" navigation="right"/>
      </div>
    </div>
  )
}

export default Projects
