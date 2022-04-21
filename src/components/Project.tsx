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
import calculator from '../assets/calculator.gif';
import quoteGenerator from '../assets/quoteGenerator.gif';
import fitness from '../assets/fitness.gif';
import timer from '../assets/timer.gif';
import soundboard from '../assets/soundboard.gif';
import portfolio from '../assets/portfolio.gif';
import firechain from '../assets/firechain.gif';
import adamint from '../assets/adamint.gif';
import { ProjectProps, TypedTechStackIcons } from '../types';

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

const GIF_SOURCES: any = {
  'ADAMINT': adamint,
  'FIRECHAIN': firechain,
  'PORTFOLIO WEBSITE': portfolio,
  'WORKOUT TRACKER': fitness,
  'EDM SOUNDBOARD': soundboard,
  'POMODORO TIMER': timer,
  'CALCULATOR': calculator,
  'QUOTE GENERATOR': quoteGenerator,
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
          <img src={GIF_SOURCES[props.title]} alt={props.title}></img>
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
