import React from 'react'

const Project = (props) => {
  //props:
  // title
  // description
  // stack
  // hours
  // image
  
  return (
    <div className="ProjectContainer">
      <img src={props.gif[0]} alt='portfolio'></img>
      <img src={props.gif[1]} alt='portfolio' id="GifCover"></img>
      <div className="ProjectImageContainer">
      </div>
      <div className="ProjectTextContainer">
        <div className="ProjectText">
          <h1>{props.title}</h1>
          <p className="ProjectTextDescription">{props.description}</p>
        </div>
        <div className="StackAndTimeContainer">
          <div className="StackContainer">
            <p>⚛️</p>
            <p>💻</p>
            <p>📙</p>
          </div>
          <p className="ProjectTime">🕒 69 hours</p>
        </div>
      </div>
    </div>
  )
}

export default Project
