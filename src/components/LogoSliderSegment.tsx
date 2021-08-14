import { logosDict } from './LogoSliderDict'
import React, { useState } from 'react'

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

const example = () => {
  return (
    <LogoSliderSegment logos={['javascript, react, html']}/>
  )
}

export default LogoSliderSegment
