import React from 'react';
import ActionButton from './ActionButton'

const Home = () => {
  return (
    <div className="HomeContainer">
      <div className="HomeContent">
        <h1>Hey there 👋</h1>
        <p>I’m Christian. Welcome to my portfolio website!</p>
        <ActionButton link="about-me" navigation="right"/>
      </div>
    </div>
  )
}

export default Home
