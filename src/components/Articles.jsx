import React, { useState, useEffect } from 'react'
import ActionButton from './ActionButton'
import Article from './Article'

const Articles = (props) => {
  const [articles, setArticles] = useState([]);
  const [mediumData, setMediumData] = useState('');
  
  useEffect(() => {
    const getArticles = async () => {
      let response = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@christianvegaaa');
      let responseJSON = await response.json();
      setArticles(responseJSON['items'])
      // return responseJSON['items']
    }
    
    
    if (!articles.length) {
      getArticles();
    }
  }, [articles])

  // const renderArticles = (mediumPosts) => {
  //   console.log(mediumPosts);
  //   mediumPosts.map((article) => {
  //     return 1
  //   })
  // }
  
  return (
    <div className="GenericContainer">
      <h1>Articles</h1>
      <div className="ArticlesContainer">
        {articles.map((item) => {
        return <Article title={item.title} date={item.pubDate} image={item.thumbnail} key={item.pubDate}/>
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
