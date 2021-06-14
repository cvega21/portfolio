import React from 'react'
import ActionButton from '../components/ActionButton'

const CoolStuff = (props) => {
  const testTogglCall = async () => {
    let test = await fetch('https://api.track.toggl.com/api/v8/me', {
      headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Basic 07677d9a20a59edd57848c9d0574fdf0:api_token',
            mode: 'no-cors'
          },
    })
    console.log(test.json());

  }
  
  return (
    <div className="GenericContainer">
      <h1>Cool Stuff</h1>
      <button onClick={testTogglCall}>test toggl call</button>
      <div className="ActionButtonCluster">
        <ActionButton link="articles" navigation="left" onChangeNav={props.onChangeNav}/>
      </div>
    </div>
  )
}

export default CoolStuff
