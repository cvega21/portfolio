import React from 'react'

const Article = (props) => {
    // props.title
    // props.date
    // props.link
    console.log(props);
    
    return (
        <div className="Article">
          <h1>{props.title}</h1>
          <h2>{props.date}</h2>
          <img src={props.image} alt={props.title}/>
        </div>
    )
}

export default Article
