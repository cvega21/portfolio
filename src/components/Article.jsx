import React from 'react'

const Article = (props) => {
    let formattedDate = new Date(props.date).toDateString().slice(3);
    
    return (
        <div className="Article">
            <a href={props.link} className="ArticleLink">
              <div className="ArticleTitleAndDate">
                  <p>{props.title}</p>
                  <h2>{formattedDate}</h2>
              </div>
              <img src={props.image} alt={props.title}/>
            </a>
        </div>
    )
}

export default Article
