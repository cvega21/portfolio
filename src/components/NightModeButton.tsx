import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import React from 'react'

const NightModeButton: React.FC = () => {
  const changeTheme = (e: React.MouseEvent) => {
    document.body.classList.toggle("DarkTheme");
  }
  
  return (
    <div className="NightModeButtonContainer">
      <FontAwesomeIcon icon={faSun} size='lg' className="sunIcon"/>
      <label className="switch">
        <input type="checkbox" onClick={e => changeTheme(e)}/>
        <span className="slider round"></span>
      </label>  
      <FontAwesomeIcon icon={faMoon} size='lg' className="moonIcon"/>
    </div>
  )
}

export default NightModeButton
