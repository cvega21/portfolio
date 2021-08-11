import React from 'react'
import { logosDict } from './LogoSliderDict'

interface LogoSliderPropsElem {
  src: string;
  alt: string;
  invert: boolean;
}

interface LogoSliderProps {
  props: LogoSliderPropsElem[]
}

const LogoSliderSegment: React.FC<LogoSliderProps> = ({ props }) => {
  return (
    <>
      {    
        props.map(elem => {
          return <img src={elem.src} alt={elem.alt} className={(elem.invert === true ? 'invert' : 'noInvert')}/>
        })
      }
      {/* {    
        props.map(name => {
          return <img src={logosDict[name].src} alt={logosDict[name].alt} className={(logosDict[name].invert === true ? 'invert' : 'noInvert')}/>
        })
      } */}
    </>
  )
}

// const LogoSliderSegment2: React.FC = ({props}: Array<string>) => {
//   return (
//     <>
//       {    
//         props.map(elem => {
//           return <img src={elem.src} alt={elem.alt} className={(elem.invert === true ? 'invert' : 'noInvert')}/>
//         })
//       }
//       {/* {    
//         props.map(name => {
//           return <img src={logosDict[name].src} alt={logosDict[name].alt} className={(logosDict[name].invert === true ? 'invert' : 'noInvert')}/>
//         })
//       } */}
//     </>
//   )
// }

export default LogoSliderSegment
