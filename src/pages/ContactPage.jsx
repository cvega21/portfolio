import React, { useState } from 'react';
import ActionButton from '../components/ActionButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy, faCheck } from '@fortawesome/free-solid-svg-icons';
import{ init, sendForm } from 'emailjs-com';
require('dotenv').config();
init(process.env.REACT_APP_EMAILJS_UID);

const Contact = (props) => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [copied, setCopied] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  
  const sendEmail = async (e) => {
    let form = document.getElementById('contact_form');
    e.preventDefault();
    try {
      setEmailSent(true);
      let response = await sendForm('portolio_website', 'portfolio_message', form);
    } catch (e) {
      console.error(e);
    } finally {
      setEmail('');
      setMessage('');
      setTimeout(() => {
        setEmailSent(false);
      }, 2500);
      return 
    }
  }

  const copyEmail = () => {
    setCopied(true);
    navigator.clipboard.writeText('christianvega.cvm@gmail.com');
    setTimeout(() => {
      setCopied(false);
    },2000);
  }

  return (
    <div className="GenericContainer">
      <div className="ContactContainer">
        <div>
          <h1>let's talk</h1>
          <button href='' onClick={copyEmail}>
            <p>christianvega.cvm@gmail.com</p>
            {!copied ? <FontAwesomeIcon icon={faCopy}/> : <FontAwesomeIcon icon={faCheck}/>}
          </button>
        </div>
        <form id='contact_form'>
          <input className="EmailContainer" placeholder="e-mail" value={email} onChange={(e)=>setEmail(e.target.value)} name='user_email'></input>
          <textarea className="MessageContainer" placeholder="message" type="text" value={message} onChange={(e)=>setMessage(e.target.value)} name='message'></textarea>
        </form>
        {emailSent ? <p>sent!</p> : <button onClick={sendEmail} className='EmailButton'>send e-mail</button>}
      </div>
    </div>
  )
}

export default Contact
