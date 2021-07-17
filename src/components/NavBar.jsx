import React, { useState, useEffect, useContext } from 'react'
import ActionButton from './ActionButton';
import NightModeButton from './NightModeButton';
import NavBarLink from './NavBarLink';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faMedium, faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { PageContext } from '../App';

export const NavLinkContext = React.createContext();

const NavBar = (props) => {
  const [navIsExpanded, setNavIsExpanded] = useState(false);
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth
  })
  // let timerID;
  // const navContext = useContext(PageContext)

  // const throttle = (func, delay) => {
  //   if (timerID) return

  //   timerID = setTimeout(() => {
  //     func();
  //     console.log('throttle executed')
  //     timerID = undefined;
  //   }, delay)
  // }

  useEffect(() => {
    const handleResize = () => {
      console.log('handleResize executed...')
      console.log(dimensions);
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth
      })
    }
    // const throttledHandleResize = throttle(handleResize, 500);

    if (window.innerWidth > 900 && !navIsExpanded) {
      // navContext[4] === false ? navContext[5](true) : void(0);
      // !navIsExpanded ? setNavIsExpanded(true) : void(0);
      setNavIsExpanded(true);
    } else if (window.innerWidth <= 900 && navIsExpanded) {
      setNavIsExpanded(false)
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [dimensions])

  // useEffect(() => {
  //   const listenToScroll = () => {
  //     if (window.pageYOffset > 900) {
  //       navContext[5](true);
  //     }
  //   }
  //   window.addEventListener('scroll', listenToScroll, { passive: true });

  //   return () => {
  //     window.removeEventListener('scroll', listenToScroll)
  //   }
  // })

  const toggleNav = () => {
    setNavIsExpanded(!navIsExpanded);
  }

  return (
      <nav className="NavBar">
        <script src="https://kit.fontawesome.com/cd0cc07d13.js" crossOrigin="anonymous"></script>
        <div className="ResponsiveNav">
          <div className="NavBarTitle">
            <div className="NavBarTitleToggle">
              <button onClick={toggleNav}>☰</button>
              <h1>CHRISTIAN VEGA</h1>
            </div>
            {/* <ActionButton link='contact' onChangeNav={props.onChangeNav}/> */}
          </div>
          {
            navIsExpanded &&
          <div className="NavBarCollapsible">
            <div className="NavBarTop">
              <ActionButton link='contact' onChangeNav={props.onChangeNav}/>
              <ul className="LinkContainer">
                <NavLinkContext.Provider value={setNavIsExpanded}>
                  <NavBarLink to='home' active={props.active}/>
                  <NavBarLink to='about-me' active={props.active}/>
                  <NavBarLink to='projects' active={props.active}/>
                  <NavBarLink to='articles' active={props.active}/>
                </NavLinkContext.Provider>
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
