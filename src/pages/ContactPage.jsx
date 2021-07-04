import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy, faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import{ init, sendForm } from 'emailjs-com';
import Footer from '../components/Footer'
import '../styles/Contact.scss';
require('dotenv').config();
init(process.env.REACT_APP_EMAILJS_UID);

const Contact = (props) => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [copied, setCopied] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const [incompleteForm, setIncompleteForm] = useState(false);
  
  const sendEmail = async (e) => {
    let form = document.getElementById('contact_form');
    e.preventDefault();
    if (email && message) {
      console.log(`button clicked... email: ${email}, message: ${message}`)
      try {
        setEmailSent(true);
        await sendForm('portolio_website', 'portfolio_message', form);
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
    } else {
      setIncompleteForm(true);
      setTimeout(() => {
        setIncompleteForm(false);
      }, 2500);
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
            <div className='CheckContainer'>
              {!copied ? <FontAwesomeIcon icon={faCopy}/> : <FontAwesomeIcon icon={faCheck}/>}
            </div>
          </button>
        </div>
        <form id='contact_form'>
          <input className="EmailContainer" placeholder="e-mail" value={email} onChange={(e)=>setEmail(e.target.value)} name='user_email'></input>
          <textarea className="MessageContainer" placeholder="message" type="text" value={message} onChange={(e)=>setMessage(e.target.value)} name='message'></textarea>
        </form>
        {emailSent ? 
          <p>sent!</p> : 
          <button onClick={sendEmail} className='EmailButton'>send e-mail</button>
          }
        {incompleteForm ? 
          <div className="incompleteError">
            <FontAwesomeIcon icon={faTimes}/>
            <p>type your email and message to send</p>
          </div> : 
          void(0)
          }
      </div>
      <Footer/>
    </div>
  )
}

export default Contact
