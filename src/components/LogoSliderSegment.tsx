import { logosDict } from './LogoSliderDict'

interface LogoSliderProps {
  logos: string[]
}

const LogoSliderSegment = ({ logos }: LogoSliderProps) => {
  return (
    <>
      {    
        logos.map((elem: string) => {
          return <img src={logosDict[elem].src} alt={logosDict[elem].alt} className={(logosDict[elem].invert === true ? 'invert' : 'noInvert')}/>
        })
      }
    </>
  )
}

const example = () => {
  return (
    <LogoSliderSegment logos={['javascript, react, html']}/>
  )
}

export default LogoSliderSegment
