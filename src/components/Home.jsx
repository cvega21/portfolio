import React from 'react';
import ActionButton from './ActionButton'

const Home = () => {
  return (
    <div className="HomeContainer">
      {/* Possibly change "HomeContainer to a generic container that all router components can use, thereby we don't have to repeat certain things like padding and margins, and then each component can have an additional class where grid or flexbox is implemented according to what they need specifically" */}
      <div className="HomeContent">
        <h1>Hey there 👋</h1>
        <p>I’m Christian. Welcome to my portfolio website!</p>
        <ActionButton link="about-me"/>
      </div>
    </div>
  )
}

export default Home
