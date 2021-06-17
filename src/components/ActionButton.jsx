import React from 'react'
import { Link } from "react-router-dom";

const ActionButton = (props) => {
  let computedContainerClassName;
  let computedClassName;
  let text = '';
  let linkTo = '/'.concat(props.link);

  if (props.link === 'contact') {
    // contact button is smaller and container width is a different %
    computedContainerClassName = 'ActionButtonContactContainer';
    computedClassName = 'ActionButton Contact';
    text = 'contact me';
  } else if (props.link) {
    // all other buttons are for navigation, have arrows, and are bigger
    computedContainerClassName = 'ActionButtonContainer';
    computedClassName = 'ActionButton';
    let textArray = props.link.split('-');
    textArray.forEach(word => {
      text += word.charAt(0).toUpperCase() + word.slice(1) + ' ';
    })
  }
  
  if (props.navigation === "right") {
    text += '->'
  } else if (props.navigation === "left") {
    text = '<- ' + text;
  } 

  return (
  <Link to={linkTo} className={computedContainerClassName}>
    <button className={computedClassName} onClick={() => props.onChangeNav(linkTo)}>{text}</button>
  </Link>
  )
}

export default ActionButton
