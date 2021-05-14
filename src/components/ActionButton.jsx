import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


const ActionButton = (props) => {
  let selectedClass = 'classbasedOnProps...';
  let action = 'action/link to take...';
  let computedClassName;
  let text = '';

  if (props.size === 'small') {
    // fill stuff here for sizing, add another size
  }
  
  if (props.text === 'contact') {
    computedClassName = 'ActionButton Contact';
    text = 'contact';
    // fill stuff here for sizing, add another size
  } else {
    computedClassName = 'ActionButton';
    let textArray = props.link.split('-');
    textArray.forEach(word => {
      text += word.charAt(0).toUpperCase() + word.slice(1) + ' ';
    })
    text += '->'
    // textArray.forEach(word => {
    //   text += word + ',';
    // })
  }

  // ultimately end up with class denominations, with a base and continuation classes
  // e.g. ActionButton (defaults to small), ActionButton-Md, ActionButton-Lg
  // props.action will populate onClick
  // text will be determined by props.text

  return (
  <Link to={props.link} className="ActionButtonContainer">
    <button className={computedClassName}>{text}</button>
  </Link>
  )
}

export default ActionButton
