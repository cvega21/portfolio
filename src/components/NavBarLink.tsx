import { useState, useEffect, useContext } from 'react'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faCode, faSignature, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { PageContext } from '../App';
import { NavLinkContext } from './NavBar';

interface NavBarLinkProps {
  to: string;
  active: string;
}

interface TypedIconMapping {
  home: IconDefinition;
  aboutme: IconDefinition;
  projects: IconDefinition;
  articles: IconDefinition;
  [key: string]: IconDefinition;
}

const NavBarLink = (props: NavBarLinkProps) => {
  let text = props.to;
  text === 'aboutme' ? text = 'about me' : void(0);

  let linkTo = '/'.concat(props.to);
  const [isActive, setIsActive] = useState('');
  const pageContext = useContext(PageContext);
  const navLinkContext = useContext(NavLinkContext);
  const handleClick = () => {
    pageContext[0](linkTo);
    window.innerWidth <= 1200 ? navLinkContext(false) : void (0);
  }

  useEffect(() => {
    pageContext[1] === linkTo ? setIsActive('active') : setIsActive('');
    return () => {
    }
  },[pageContext, linkTo])
  
  const iconMapping: TypedIconMapping = {
    home: faHome,
    aboutme: faUser,
    projects: faCode,
    articles: faSignature
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
