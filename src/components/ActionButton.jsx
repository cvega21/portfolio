import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


const ActionButton = (props) => {
  let computedContainerClassName;
  let computedClassName;
  let text = '';
  let linkTo = '/'.concat(props.link);
  // console.log(`${typeof(props.onChangeNav)}'inside action button!'${props.link}`)

  if (props.size === 'small') {
    // fill stuff here for sizing, add another size
  }
  
  if (props.link === 'contact') {
    computedContainerClassName = 'ActionButtonContactContainer';
    computedClassName = 'ActionButton Contact';
    text = 'contact';
  } else if (props.link) {
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
