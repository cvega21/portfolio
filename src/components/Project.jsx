import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faReact, faNodeJs, faSass } from '@fortawesome/free-brands-svg-icons';
import mongo from '../assets/mongodb.png';
// import mongo from '../assets/mongo.svg';
import firebase from '../assets/firebase.png';
import react from '../assets/react.png';
import node from '../assets/node.png';
import sass from '../assets/sass.png';


const Project = (props) => {
  //props:
  // title
  // description
  // stack
  // hours
  // image

  const techStackIcons = {
    'react': react,
    'node': node,
    'mongo': mongo,
    'sass': sass,
    'firebase': firebase
  }

  const currentTechStack = props.stack.map((item) => {
    return <img src={techStackIcons[item]} alt={item} title={item} className="techStackImage"></img>
  })
  
  return (
    <div className="ProjectContainer">
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
            {currentTechStack}
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