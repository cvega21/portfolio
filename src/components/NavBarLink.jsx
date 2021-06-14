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
    if (props.active === linkTo) {
      // console.log(`Inside NavBarLink: ${linkTo} is active !!!!. ${props.onChangeNav}`)
      setIsActive('active');
    } else {
      setIsActive('');
    }

    return () => {
    }
  },[isActive, linkTo, props.active])
  
  return (
  <li className={isActive + "LinkButtonContainer"}>
    <Link to={linkTo}>
      <button className={"LinkButton"} onClick={() => props.onChangeNav(linkTo)}>{text}</button>
    </Link>
  </li>
  )
}

export default NavBarLink
