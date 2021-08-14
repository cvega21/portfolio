import { logosDict } from './LogoSliderDict'

interface LogoSliderProps {
  logos: string[]
}

const LogoSliderSegment = ({ logos }: LogoSliderProps) => {
  const images = logos.map((elem: string) => 
      <img key={logosDict[elem].src} src={logosDict[elem].src} alt={logosDict[elem].alt} className={(logosDict[elem].invert === true ? 'invert' : 'noInvert')}/>
    )
  
  return (
    <>
      {images}
    </>
  )
}

export default LogoSliderSegment
