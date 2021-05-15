import React from 'react';
import ActionButton from './ActionButton'

const Articles = () => {
  return (
    <div className="GenericContainer">
      <h1>Articles</h1>
      <div className="ActionButtonCluster">
        <ActionButton link="projects" navigation="left"/>
        <ActionButton link="cool-stuff" navigation="right"/>
      </div>
    </div>
  )
}

export default Articles
