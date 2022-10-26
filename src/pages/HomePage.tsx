import { useRef, useEffect, MutableRefObject } from 'react';
import ActionButton from '../components/ActionButton'
import Typed from 'typed.js';

const Home = () => {
  const typedElement: any = useRef(null);
  const typed: MutableRefObject<null|Typed> = useRef(null);
  
  useEffect(() => {
    typed.current = new Typed(typedElement.current as Element, {
      strings: [`^800I'm Christian.^800 <br> Welcome to my portfolio website!`],
      typeSpeed: 17,
      backSpeed: 50,
    });

    return () => {
      if (typed && typed.current) {
        typed.current.destroy();
      }
    }
  }, [])
  
  return (
    <div className="HomeContainer">
      <div className="HomeContent">
          <div className="HeyThere">
            <h1>Hey there </h1>
            <span className="WavingHand">👋🏽</span>
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
