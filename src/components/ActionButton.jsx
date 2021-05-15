import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


const ActionButton = (props) => {
  let computedClassName;
  let text = '';

  if (props.size === 'small') {
    // fill stuff here for sizing, add another size
  }
  
  if (props.link === 'contact') {
    computedClassName = 'ActionButton Contact';
    text = 'contact';
  } else if (props.link) {
    computedClassName = 'ActionButton';
    let textArray = props.link.split('-');
    textArray.forEach(word => {
      text += word.charAt(0).toUpperCase() + word.slice(1) + ' ';
    })
  }
  
  if (props.navigation === "right") {
    text += '->'
  } else if (props.navigation === "left") {
    text += '<-'
  } 

  return (
  <Link to={props.link} className="ActionButtonContainer">
    <button className={computedClassName}>{text}</button>
  </Link>
  )
}

export default ActionButton
