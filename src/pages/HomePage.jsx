import React, { useRef, useEffect } from 'react';
import ActionButton from '../components/ActionButton'
import Typed from 'typed.js';

const Home = (props) => {
  const typedElement = useRef(null);
  const typed = useRef(null);
  
  useEffect(() => {
    const options = {
      strings: [`^800I'm Christian.^800 Welcome to my portfolio website!`],
      typeSpeed: 17,
      backSpeed: 50
    };

    typed.current = new Typed(typedElement.current, options);

    return () => {
      typed.current.destroy();
    }
  }, [])
  
  return (
    <div className="HomeContainer">
      <div className="HomeContent">
          <h1>Hey there 👋</h1>
          <div className="TypingContainer">
            <span ref={typedElement}></span>
          </div>
        <ActionButton link="about-me" navigation="right" onChangeNav={props.onChangeNav}/>
      </div>
    </div>
  )
}

export default Home
