import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faCode, faSignature } from '@fortawesome/free-solid-svg-icons';


const NavBarLink = (props) => {
  let text = '';
  let linkTo = '/'.concat(props.to);
  let textArray = props.to.split('-');
  textArray.forEach(word => {
    text += word.slice() + ' ';
  });
  const [isActive, setIsActive] = useState('');

  useEffect(() => {
    props.active === linkTo ? setIsActive('active') : setIsActive('');

    return () => {
    }
  },[isActive, linkTo, props.active])
  
  const iconMapping = {
    'home': faHome,
    'about-me': faUser,
    'projects': faCode,
    'articles': faSignature
  }

  return (
  <li className={isActive + "LinkButtonContainer"}>
    <Link to={linkTo} className='LinkButtonTextAndIcon' onClick={() => props.onChangeNav(linkTo)}>
        <div className="NavIcon">
          <FontAwesomeIcon icon={iconMapping[props.to]}/>
        </div>
        <p>{text}</p>
    </Link>
  </li>
  )
}

export default NavBarLink
