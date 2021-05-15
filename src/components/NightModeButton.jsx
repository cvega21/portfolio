import React from 'react'

const NightModeButton = () => {
  const changeTheme = e => {
    document.body.classList.toggle("DarkTheme");
  }
  
  return (
    <div className="NightModeButtonContainer">
      <label className="switch">
        <input type="checkbox" onClick={changeTheme}/>
        <span className="slider round"></span>
      </label>  
    </div>
  )
}

export default NightModeButton
