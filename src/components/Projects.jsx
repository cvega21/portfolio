import React from 'react';
import ActionButton from './ActionButton'

const Projects = () => {
  return (
    <div className="ActionButtonCluster">
      <ActionButton link="about-me" navigation="left"/>
      <ActionButton link="articles" navigation="right"/>
  </div>  )
}

export default Projects
