import { useContext} from 'react'
import { Link } from "react-router-dom";
import { PageContext, NavContext } from '../App';
import resume from '../assets/resume.pdf'
import { ActionButtonProps } from '../types'

const ActionButton = ({ link, navigation }: ActionButtonProps) => {
  const pageContext = useContext(PageContext);
  const navContext = useContext(NavContext);
  let computedContainerClassName: string = 'ActionButtonContainer';
  let computedClassName: string = "ActionButton";
  let text: string = '';
  let linkTo: string = '/'.concat(link);
  const setActiveNavPage: React.Dispatch<React.SetStateAction<string>> = pageContext[0] as React.Dispatch<React.SetStateAction<string>>;
  const setNavIsExpanded: React.Dispatch<React.SetStateAction<boolean>> = navContext[3] as React.Dispatch<React.SetStateAction<boolean>>;


  if (link === 'contact') {
    computedContainerClassName = 'ActionButtonContactContainer';
    computedClassName = 'ActionButton Contact';
    text = 'contact me';
  } else if (link === 'resume') {
    text = 'see my resume';
    linkTo = resume
  } else if (link === 'aboutme') {
    text = 'About Me '
  }
  else if (link) {
    let textArray: Array<string> = link.split('-');
    textArray.forEach((word: string) => {
      text += word.charAt(0).toUpperCase() + word.slice(1) + ' ';
    })
  }
  
  if (navigation === "right") {
    text += '->'
  } else if (navigation === "left") {
    text = '<- ' + text;
  } 

  const handleClick = () => {
    setActiveNavPage(linkTo);
    window.innerWidth <= 1200 ? setNavIsExpanded(false) : void (0);
    return
  }

  return (
  <Link to={linkTo} className={computedContainerClassName} target={`${link === 'resume' ? '_blank' : ''}`} rel='noreferrer'>
    <button className={computedClassName} onClick={handleClick}>{text}</button>
  </Link>
  )
}

export default ActionButton
