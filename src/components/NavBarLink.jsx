import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const NavBarLink = (props) => {
  let text = '';
  let linkTo = '/'.concat(props.to);
  let textArray = props.to.split('-');
  textArray.forEach(word => {
    text += word.slice() + ' ';
  });
  const [isActive, setIsActive] = useState('');

  useEffect(() => {
    if (window.location.pathname === linkTo) {
      console.log(`${linkTo} is active !!!!`)
      setIsActive('active');
    }

    return () => {
    }
  })
  
  return (
  <li className={isActive + "LinkButtonContainer"}>
    <Link to={linkTo}>
      <button className={"LinkButton"}>{text}</button>
    </Link>
  </li>
  )
}

export default NavBarLink
