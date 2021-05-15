import React from 'react'
import ActionButton from './ActionButton'

const CoolStuff = () => {
  return (
    <div className="GenericContainer">
      <h1>Cool Stuff</h1>
      <div className="ActionButtonCluster">
        <ActionButton link="articles" navigation="left"/>
      </div>
    </div>
  )
}

export default CoolStuff
