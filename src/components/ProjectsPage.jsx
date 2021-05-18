import React from 'react';
import ActionButton from './ActionButton'
import Project from './Project'

const Projects = () => {
  return (
    <div className="GenericContainer">
      <h1>Projects</h1>
      <div>
        <Project/>
        <Project/>
        <Project/>
      </div>
      <div className="ActionButtonCluster">
        <ActionButton link="about-me" navigation="left"/>
        <ActionButton link="articles" navigation="right"/>
      </div>
    </div>
  )
}

export default Projects
