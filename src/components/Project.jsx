import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Project = (props) => {
  //props:
  // title
  // description
  // stack
  // hours
  // image
  
  return (
    <div className="ProjectContainer">
      <div className="ImageContainer">
      </div>
      <a href={props.link}><div className="ProjectImageContainer">
        <img src={props.gif[0]} alt='portfolio'></img>
        <img src={props.gif[1]} alt='portfolio' id="GifCover"></img>
      </div></a>
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
          <div className="TimeContainer">
            <p className="ProjectTime">🕒 69 hours</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project
