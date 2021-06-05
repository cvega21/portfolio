import React from 'react'
import ActionButton from './ActionButton'

const CoolStuff = (props) => {
  return (
    <div className="GenericContainer">
      <h1>Cool Stuff</h1>
      <div className="ActionButtonCluster">
        <ActionButton link="articles" navigation="left" onChangeNav={props.onChangeNav}/>
      </div>
    </div>
  )
}

export default CoolStuff
