import { useRef, useEffect } from 'react';
import ActionButton from '../components/ActionButton'
import Typed from 'typed.js';

const Home = (props) => {
  const typedElement = useRef(null);
  const typed = useRef(null);
  const options = {
    strings: [`^800I'm Christian.^800 Welcome to my portfolio website!`],
    typeSpeed: 17,
    backSpeed: 50
  };
  
  useEffect(() => {
    typed.current = new Typed(typedElement.current, options);
    return () => {
      typed.current.destroy();
    }
  }, [])
  
  return (
    <div className="HomeContainer">
      <div className="HomeContent">
          <div className="HeyThere">
            <h1>Hey there </h1>
            <h1 className="WavingHand">👋🏽</h1>
          </div>
          <div className="TypingContainer">
            <span ref={typedElement}></span>
          </div>
        <ActionButton link="aboutme" navigation="right" />
      </div>
    </div>
  )
}

export default Home
