import React from 'react'
import ActionButton from '../components/ActionButton'

const Contact = (props) => {

  return (
    <div className="GenericContainer">
      <div className="ContactContainer">
          <h1>Get in touch!</h1>
          <input className="MessageContainer"></input>
        </div>
        <div className="ActionButtonCluster">
          <ActionButton link="send" onChangeNav={props.onChangeNav}/>
        </div>
    </div>
  )
}

export default Contact
