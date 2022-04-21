import mongo from '../assets/mongodb.png';
import firebase from '../assets/firebase.png';
import react from '../assets/react.png';
import nodeJS from '../assets/node.svg';
import sass from '../assets/sass.png';
import bootstrap from '../assets/bootstrap-stack.png';
import typescript from '../assets/typescript.png';
import nextjs from '../assets/nextjs.png';
import solidity from '../assets/solidity.png';
import tailwind from '../assets/tailwind.png';
import { ProjectProps, TypedTechStackIcons } from '../types'

const TECH_STACK_ICONS: TypedTechStackIcons = {
  react: react,
  nodeJS: nodeJS,
  mongo: mongo,
  sass: sass,
  firebase: firebase,
  bootstrap: bootstrap,
  nextjs: nextjs,
  typescript: typescript,
  solidity: solidity,
  tailwindCSS: tailwind
}

const Project = (props: ProjectProps) => {


  const currentTechStack = props.stack.map((item: any) => {    
    return <img src={TECH_STACK_ICONS[item.name]} alt={item.name} title={item.name} className={`techStackImage ${item.name}`} key={TECH_STACK_ICONS[item.name]}></img>
  })
  
  const hoursToDisplay = () => {
    if (parseInt(props.time)) {
      let propsTimeInt = parseInt(props.time);
      return `${Math.round(propsTimeInt)} hours`
    } else {
      return 'untracked'
    }
  }

  return (
    <div className="ProjectContainer">
      <a target="_blank" rel="noopener noreferrer" href={props.link} className="ProjectImageLink">
        <div className="ProjectImageContainer">
          <img src={props.gif} alt='portfolio'></img>
          {/* <img src={props.gif[1]} alt='portfolio' id="GifCover"></img> */}
        </div>
      </a>
      <a target="_blank" rel="noopener noreferrer" href={props.link} className="ProjectTextLink">
      <div className="ProjectTextContainer">
        <div className="ProjectText">
          <h1>{props.title}</h1>
          <p className="ProjectTextDescription">{props.description}</p>
        </div>
        <div className="StackAndTimeContainer">
          <div className="StackContainer">
            {currentTechStack}
          </div>
          <div className="TimeContainer">
            <p className="ProjectTime">⏳ {hoursToDisplay()}</p>
            <p className='ProjectNote'><b>project type:</b> {props.type}</p>
          </div>
        </div>
      </div>
      </a>
    </div>
  )
}

export default Project
