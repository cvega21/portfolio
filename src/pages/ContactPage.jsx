import React from 'react';
import ActionButton from '../components/ActionButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboard } from '@fortawesome/free-regular-svg-icons';

const Contact = (props) => {

  return (
    <div className="GenericContainer">
      <div className="ContactContainer">
        <h1>let's talk</h1>
        <div>
          <p>christianvega.cvm@gmail.com</p>
          <FontAwesomeIcon icon={faClipboard}/>
        </div>
        <input className="EmailContainer" placeholder="Your e-mail"></input>
        <textarea className="MessageContainer" placeholder="Say hello 🙂" type="text"></textarea>
        <div className="ActionButtonCluster">
          <ActionButton link="send-email" onChangeNav={props.onChangeNav}/>
        </div>
      </div>
    </div>
  )
}

export default Contact
