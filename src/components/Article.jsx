import React from 'react'

const Article = (props) => {
    // props.title
    // props.date
    // props.link
    let formattedDate = new Date(props.date).toDateString().slice(3);
    
    return (
        <div className="Article">
          <div className="ArticleTitleAndDate" href="www.povertygang.com">
            <a href="www.povertygang.com">{props.title}</a>
            <h2>{formattedDate}</h2>
          </div>
          <img src={props.image} alt={props.title}/>
        </div>
    )
}

export default Article
