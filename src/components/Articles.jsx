import React from 'react';
import ActionButton from './ActionButton'

const Articles = () => {
  return (
    <div className="ActionButtonCluster">
      <ActionButton link="projects" navigation="left"/>
      <ActionButton link="cool-stuff" navigation="right"/>
    </div>
  )
}

export default Articles
