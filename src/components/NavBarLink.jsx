import React, { useState, useEffect, useContext } from 'react'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faCode, faSignature } from '@fortawesome/free-solid-svg-icons';
import { PageContext } from '../App';
import { NavLinkContext } from './NavBar';

const NavBarLink = (props) => {
  let text = '';
  let linkTo = '/'.concat(props.to);
  let textArray = props.to.split('-');
  textArray.forEach(word => {
    text += word.slice() + ' ';
  });
  const [isActive, setIsActive] = useState('');
  const pageContext = useContext(PageContext);
  const navLinkContext = useContext(NavLinkContext);
  const handleClick = () => {
    pageContext[0](linkTo);
    window.innerWidth <= 1000 ? navLinkContext(false) : void (0);
    console.log(`navLinkContext: ${navLinkContext}`);
    console.log(navLinkContext);
  }

  useEffect(() => {
    // pageContext[1] === activeNavPage
    pageContext[1] === linkTo ? setIsActive('active') : setIsActive('');

    return () => {
    }
  },[pageContext, linkTo])
  
  const iconMapping = {
    'home': faHome,
    'about-me': faUser,
    'projects': faCode,
    'articles': faSignature
  }

  return (
  <li className={isActive + "LinkButtonContainer"}>
    <Link to={linkTo} className='LinkButtonTextAndIcon' onClick={handleClick}>
        <div className="NavIcon">
          <FontAwesomeIcon icon={iconMapping[props.to]}/>
        </div>
        <p>{text}</p>
    </Link>
  </li>
  )
}

export default NavBarLink
