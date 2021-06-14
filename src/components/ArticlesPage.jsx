import React from 'react'
import ActionButton from './ActionButton'
import Article from './Article'

const Articles = (props) => {

  return (
    <div className = "GenericContainer">
      <h1>Articles</h1>
      <div className = "ArticlesContainer">
        {props.articles.map((item) => { 
            return <Article 
                    title={item.title} 
                    date={item.pubDate}
                    image={item.thumbnail}
                    key={item.pubDate}
                    link={item.link}/> 
        })}
      </div>
      <div className="ActionButtonCluster">
        <ActionButton link="projects" navigation="left" onChangeNav={props.onChangeNav}/>
        <ActionButton link="cool-stuff" navigation="right" onChangeNav={props.onChangeNav}/>
      </div>
    </div>
  )
}

export default Articles
