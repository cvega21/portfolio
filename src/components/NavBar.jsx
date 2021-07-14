import React, { useState, useEffect } from 'react'
import ActionButton from './ActionButton';
import NightModeButton from './NightModeButton';
import NavBarLink from './NavBarLink';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faMedium, faGithubSquare, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';

const NavBar = (props) => {
  const [navIsExpanded, setNavIsExpanded] = useState(false);
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth
  })

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth
      })
      // console.log({
      //   height: window.innerHeight,
      //   width: window.innerWidth
      // });
    }
    window.innerWidth > 900 && !navIsExpanded ? setNavIsExpanded(true) : void(0)
    window.innerWidth <= 900 && navIsExpanded ? setNavIsExpanded(false) : void(0)

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [dimensions])

  useEffect(() => {
    let linkButtons = document.getElementsByClassName('LinkButtonContainer');
    // console.log(linkButtons.length);
    // console.log(linkButtons);
    // console.log(typeof(linkButtons));
    // console.log('hi')
    for (let i = 0; i < linkButtons.length; i++) {
      console.log(linkButtons[i].style);
      // console.log('hello')
    }

    return () => {
    }
  }, [navIsExpanded])



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
              {/* <p>{navIsExpanded && 'expanded'}</p> */}
            </div>
            <ActionButton link='contact' onChangeNav={props.onChangeNav}/>
          </div>
          {
            navIsExpanded &&
          <div className="NavBarCollapsible">
            <div className="NavBarTop">
              <ul className="LinkContainer">
                <NavBarLink to='home' active={props.active}/>
                <NavBarLink to='about-me' active={props.active}/>
                <NavBarLink to='projects' active={props.active}/>
                <NavBarLink to='articles' active={props.active}/>
              </ul>
            </div>
            <div className="NavBarBottom">
              <NightModeButton/>
              <div className="SocialIcons">
                <a href='https://www.linkedin.com/in/christian-vm/'>
                  <FontAwesomeIcon icon={faLinkedin} size='2x' />
                </a>
                <a href='https://medium.com/@christianvegaaa1'>
                  <FontAwesomeIcon icon={faMedium} size='2x'/>
                </a>
                <a href='https://github.com/cvega21'>
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
