import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const NavBarLink = (props) => {
  let text = '';
  let linkTo = '/'.concat(props.to);
  let textArray = props.to.split('-');
  textArray.forEach(word => {
    text += word.slice() + ' ';
  })
  
  return (
  <li className="LinkButtonContainer">
    <Link to={linkTo}>
      <button className="LinkButton">{text}</button>
    </Link>
  </li>
  )
}

export default NavBarLink
