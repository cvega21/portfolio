import React, { useState, useEffect, useContext } from 'react'
import ActionButton from './ActionButton';
import NightModeButton from './NightModeButton';
import NavBarLink from './NavBarLink';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faMedium, faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { NavContext } from '../App';

export const NavLinkContext = React.createContext('');

const NavBar = (props: any) => {
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth
  })
  const navContext = useContext(NavContext);
  const setNavIsExpanded: React.Dispatch<React.SetStateAction<boolean>> = navContext[3] as React.Dispatch<React.SetStateAction<boolean>>;

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth
      })
    }

    if (window.innerWidth > 1200 && !navContext[2]) {
      setNavIsExpanded(true);
    } else if (window.innerWidth <= 1200 && navContext[2]) {
      setNavIsExpanded(false);
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [dimensions])

  const toggleNavContext = () => {
    setNavIsExpanded(!navContext[2]);
  }

  return (
      <nav className="NavBar">
        <script src="https://kit.fontawesome.com/cd0cc07d13.js" crossOrigin="anonymous"></script>
        <div className="ResponsiveNav">
          <div className="NavBarTitle">
            <div className="NavBarTitleToggle">
              <button onClick={toggleNavContext}>☰</button>
              <h1 onClick={() => 
              {
                if (window.innerWidth <= 1200) {}
                toggleNavContext()
              }
              
              }>CHRISTIAN VEGA</h1>
            </div>
          </div>
          {
            navContext[2] &&
          <div className="NavBarCollapsible">
              <div className="NavBarTop">
                <ActionButton link='contact'/>
                <ul className="LinkContainer">
                    <NavBarLink to='home' active={props.active}/>
                    <NavBarLink to='aboutme' active={props.active}/>
                    <NavBarLink to='projects' active={props.active}/>
                    <NavBarLink to='articles' active={props.active}/>
                </ul>
              </div>
              <div className="NavBarBottom">
                <NightModeButton/>
                <div className="SocialIcons">
                  <a target="_blank" rel="noopener noreferrer" href='https://www.linkedin.com/in/christian-vm/'>
                    <FontAwesomeIcon icon={faLinkedin} size='2x' />
                  </a>
                  <a target="_blank" rel="noopener noreferrer" href='https://medium.com/@christianvegaaa'>
                    <FontAwesomeIcon icon={faMedium} size='2x'/>
                  </a>
                  <a target="_blank" rel="noopener noreferrer" href='https://github.com/cvega21'>
                    <FontAwesomeIcon icon={faGithubSquare} size='2x'/>
                  </a>
                </div>
              </div>
          </div>
          }
        </div>
      </nav>
  )
}

export default NavBar
