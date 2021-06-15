import React from 'react'
import ActionButton from '../components/ActionButton'

const Contact = (props) => {

  return (
    <div className="GenericContainer">
      <div>
      <ActionButton link="home" navigation="left" onChangeNav={props.onChangeNav}/>
      <div className="ActionButtonCluster">
      </div>
      <h1>Get in touch!</h1>
      <input></input>
      </div>
    </div>
  )
}

export default Contact
