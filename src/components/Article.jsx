import React from 'react'

const Article = (props) => {
    let formattedDate = new Date(props.date).toDateString().slice(3);
    
    return (
        <div className="Article">
            <a target="_blank" rel="noopener noreferrer" href={props.link} className="ArticleLink">
              <div className="ArticleTitleAndDate">
                  <h2>{props.title}</h2>
                  <h3>{formattedDate}</h3>
              </div>
              <img src={props.image} alt={props.title}/>
            </a>
        </div>
    )
}

export default Article
