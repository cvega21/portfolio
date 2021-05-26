import React, { useState, useEffect } from 'react'
import ActionButton from './ActionButton'

const Articles = () => {
  const [articles, setArticles] = useState('');
  const [mediumData, setMediumData] = useState('');
  
  useEffect(() => {
    const getArticles = async () => {
      let response = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@christianvegaaa');
      let responseJSON = await response.json();
      setMediumData(responseJSON['feed']['title']);
      // responseJSON.map(())
      responseJSON['items'].map((article) => {
        console.log(article['title'],article['pubDate']);  
      })
    }
    
    
    if (!articles) {
      getArticles();
    }
  })

  // const renderArticles = (mediumPosts) => {
  //   console.log(mediumPosts);
  //   mediumPosts.map((article) => {
  //     return 1
  //   })
  // }
  
  return (
    <div className="GenericContainer">
      <h1>Articles</h1>
      <p>wassup boy this a test. {mediumData}</p>
      <div className="ActionButtonCluster">
        <ActionButton link="projects" navigation="left"/>
        <ActionButton link="cool-stuff" navigation="right"/>
      </div>
    </div>
  )
}

export default Articles
