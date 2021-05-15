import React from 'react';
import ActionButton from './ActionButton'

const Projects = () => {
  return (
    <div className="GenericContainer">
      <h1>Projects</h1>
      <div className="ActionButtonCluster">
        <ActionButton link="about-me" navigation="left"/>
        <ActionButton link="articles" navigation="right"/>
      </div>
    </div>
  )
}

export default Projects
