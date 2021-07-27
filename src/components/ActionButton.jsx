import React, { useContext} from 'react'
import { Link } from "react-router-dom";
import { PageContext, NavContext } from '../App';

const ActionButton = (props) => {
  let computedContainerClassName = 'ActionButtonContainer';
  let computedClassName = "ActionButton";
  let text = '';
  let linkTo = '/'.concat(props.link);

  const changePage = useContext(PageContext);
  const navContext = useContext(NavContext);

  if (props.link === 'contact') {
    computedContainerClassName = 'ActionButtonContactContainer';
    computedClassName = 'ActionButton Contact';
    text = 'contact me';
  } else if (props.link === 'resume') {
    text = 'see my resume';
  } else if (props.link === 'aboutme') {
    text = 'About Me '
  }
  else if (props.link) {
    let textArray = props.link.split('-');
    textArray.forEach(word => {
      text += word.charAt(0).toUpperCase() + word.slice(1) + ' ';
    })
  }
  
  if (props.navigation === "right") {
    text += '->'
  } else if (props.navigation === "left") {
    text = '<- ' + text;
  } 

  const handleClick = () => {
    changePage[0](linkTo);
    window.innerWidth <= 1200 ? navContext[3](false) : void (0);
    return
  }

  return (
  <Link to={linkTo} className={computedContainerClassName}>
    <button className={computedClassName} onClick={handleClick}>{text}</button>
  </Link>
  )
}

export default ActionButton
