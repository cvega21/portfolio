import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

const NightModeButton = () => {
  const changeTheme = e => {
    document.body.classList.toggle("DarkTheme");
  }
  
  return (
    <div className="NightModeButtonContainer">
      <FontAwesomeIcon icon={faSun} size='lg' className="sunIcon"/>
      <label className="switch">
        <input type="checkbox" onClick={changeTheme}/>
        <span className="slider round"></span>
      </label>  
      <FontAwesomeIcon icon={faMoon} size='lg' className="moonIcon"/>
    </div>
  )
}

export default NightModeButton
