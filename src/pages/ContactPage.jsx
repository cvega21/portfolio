import React, { useState } from 'react';
import ActionButton from '../components/ActionButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboard } from '@fortawesome/free-regular-svg-icons';
import{ init, sendForm } from 'emailjs-com';
require('dotenv').config();
init(process.env.REACT_APP_EMAILJS_UID);

const Contact = (props) => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  
  const sendEmail = async (e) => {
    let form = document.getElementById('contact_form');
    e.preventDefault();
    try {
      let response = await sendForm('portolio_website', 'portfolio_message', form);
      console.log(response);
      console.log('...success?')
    } catch (e) {
      console.error(e);
    } finally {
      return 
    }
  }

  return (
    <div className="GenericContainer">
      <div className="ContactContainer">
        <h1>let's talk</h1>
        <div>
          <p>christianvega.cvm@gmail.com</p>
          <FontAwesomeIcon icon={faClipboard}/>
        </div>
        <form id='contact_form'>
          <input className="EmailContainer" placeholder="your e-mail" value={email} onChange={(e)=>setEmail(e.target.value)} name='user_email'></input>
          <textarea className="MessageContainer" placeholder="your message" type="text" value={message} onChange={(e)=>setMessage(e.target.value)} name='message'></textarea>
        </form>
        <div className="ActionButtonCluster">
          <button onClick={sendEmail} className='EmailButton'>send e-mail</button>
        </div>
      </div>
    </div>
  )
}

export default Contact
