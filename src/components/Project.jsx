import React from 'react'
import portfolio from '../assets/portfolio-image.png';

const Project = (props) => {
  //props:
  // title
  // description
  // stack
  // hours
  // image
  
  return (
    <div className="ProjectContainer">
      <img src={portfolio} alt='portfolio'></img>
      <div className="ProjectTextContainer">
        <h1>{props.title}</h1>
        <p>Description. Lorem ipsum, hello world, hai how r u and such other things of that nature</p>
        <div className="StackContainer">
          <p>⚛️</p>
          <p>💻</p>
          <p>📙</p>
        </div>
        <p className="ProjectTime">🕒 69 hours</p>
      </div>
    </div>
  )
}

export default Project
