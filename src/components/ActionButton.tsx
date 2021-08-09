import { useContext} from 'react'
import { Link } from "react-router-dom";
import { PageContext, NavContext } from '../App';

interface ActionButtonProps {
  link: string;
  navigation: string;
}

const ActionButton = ({ link, navigation }: ActionButtonProps) => {
  let computedContainerClassName: string = 'ActionButtonContainer';
  let computedClassName: string = "ActionButton";
  let text: string = '';
  let linkTo: string = '/'.concat(link);

  const changePage = useContext(PageContext);
  const navContext = useContext(NavContext);

  if (link === 'contact') {
    computedContainerClassName = 'ActionButtonContactContainer';
    computedClassName = 'ActionButton Contact';
    text = 'contact me';
  } else if (link === 'resume') {
    text = 'see my resume';
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
