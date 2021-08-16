import { LOGOS_DICT } from './LogoSliderDict'

interface LogoSliderProps {
  logos: string[]
}

const LogoSliderSegment = ({ logos }: LogoSliderProps) => {
  const images = logos.map((elem: string) => 
      <img key={LOGOS_DICT[elem].src} src={LOGOS_DICT[elem].src} alt={LOGOS_DICT[elem].alt} className={(LOGOS_DICT[elem].invert === true ? 'invert' : 'noInvert')}/>
    )
  
  return (
    <>
      {images}
    </>
  )
}

export default LogoSliderSegment
