import React from 'react'
import ActionButton from './ActionButton';
import NightModeButton from './NightModeButton';
import NavBarLink from './NavBarLink';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faMedium, faGithubSquare, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';

const NavBar = (props) => {

  return (
      <nav className="NavBar">
        <script src="https://kit.fontawesome.com/cd0cc07d13.js" crossOrigin="anonymous"></script>
        <div className="NavBarTop">
          <h1>CHRISTIAN VEGA</h1>
          <ActionButton link='contact' onChangeNav={props.onChangeNav}/>
          <ul className="LinkContainer">
            <NavBarLink to='home' active={props.active} onChangeNav={props.onChangeNav}/>
            <NavBarLink to='about-me' active={props.active} onChangeNav={props.onChangeNav}/>
            <NavBarLink to='projects' active={props.active} onChangeNav={props.onChangeNav}/>
            <NavBarLink to='articles' active={props.active} onChangeNav={props.onChangeNav}/>
          </ul>
        </div>
        <div className="NavBarBottom">
          <NightModeButton/>
          <div className="SocialIcons">
            <FontAwesomeIcon icon={faLinkedin} size='2x'/>
            <FontAwesomeIcon icon={faMedium} size='2x'/>
            <FontAwesomeIcon icon={faGithubSquare} size='2x'/>
            <FontAwesomeIcon icon={faTwitterSquare} size='2x'/>
          </div>
        </div>
      </nav>
  )
}

export default NavBar
