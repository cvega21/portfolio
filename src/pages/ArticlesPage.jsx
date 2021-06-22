import React from 'react'
import ActionButton from '../components/ActionButton'
import Article from '../components/Article'
import Footer from '../components/Footer'

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
      </div>
      <Footer/>
    </div>
  )
}

export default Articles
