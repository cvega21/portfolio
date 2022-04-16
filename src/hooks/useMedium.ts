import { useState, useEffect } from 'react'
import { ArticleType } from '../types'

export const useMedium = (username: string) => {
  const [articles, setArticles] = useState<ArticleType[]>([]);
  
  useEffect(() => {
    // get Medium article data on page load
    const getArticles = async () => {
      try {
        let response = await fetch(`https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${username}`);
        let responseJSON = await response.json();
        setArticles(responseJSON['items'])
      } catch (e) {
        console.error('error. ', e)
      }
    }
    if (!articles?.length) {
      getArticles();
    }

    return () => {

    }
  }, [articles, username])

  return articles
}