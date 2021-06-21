import React from 'react'
import mongo from '../assets/mongodb.png';
import firebase from '../assets/firebase.png';
import react from '../assets/react.png';
import nodeJS from '../assets/node.png';
import sass from '../assets/sass.png';


const Project = (props) => {

  const techStackIcons = {
    'react': react,
    'nodeJS': nodeJS,
    'mongo': mongo,
    'sass': sass,
    'firebase': firebase
  }

  const currentTechStack = props.stack.map((item) => {
    return <img src={techStackIcons[item]} alt={item} title={item} className="techStackImage" key={techStackIcons[item]}></img>
  })
  
  const hoursToDisplay = () => {
    if (parseInt(props.time)) {
      return `${Math.round(props.time)} hours`
    } else {
      return 'untracked'
    }
  }

  return (
    <div className="ProjectContainer">
      <a href={props.link} className="ProjectImageLink">
        <div className="ProjectImageContainer">
          <img src={props.gif[0]} alt='portfolio'></img>
          <img src={props.gif[1]} alt='portfolio' id="GifCover"></img>
        </div>
      </a>
      <a href={props.link} className="ProjectTextLink">
      <div className="ProjectTextContainer">
        <div className="ProjectText">
          <h1>{props.title}</h1>
          <p className="ProjectTextDescription">{props.description}</p>
        </div>
        <div className="StackAndTimeContainer">
          <div className="StackContainer">
            {currentTechStack}
          </div>
          <div className="TimeContainer">
            <p className="ProjectTime">⏳ {hoursToDisplay()}</p>
          </div>
        </div>
      </div>
      </a>
    </div>
  )
}

export default Project
