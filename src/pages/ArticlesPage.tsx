import { useEffect } from 'react'
import ActionButton from '../components/ActionButton'
import Article from '../components/Article'
import Footer from '../components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';

export interface ArticleType {
  author: string;
  categories: Array<string>;
  content: string;
  description: string;
  enclosure: object;
  guid: string;
  link: string;
  pubDate: string;
  thumbnail: string;
  title: string;
}

interface ArticlesProps {
  articles: Array<ArticleType>;
}

const Articles = (props: ArticlesProps) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    return () => {
    }
  }, [])
  
  return (
    <div className = "GenericContainer">
      <h1>Articles</h1>
      {props.articles?.length 
        ? 
      <div className = "ArticlesContainer">
        {props.articles?.map((item: ArticleType) => { 
            return <Article 
                    title={item.title} 
                    date={item.pubDate}
                    image={item.thumbnail}
                    key={item.pubDate}
                    link={item.link}/> 
        })}
      </div> 
        : 
      <FontAwesomeIcon icon={faCircleNotch} className='loadingIcon'/>}
      <div className="ActionButtonCluster">
        <ActionButton link="projects" navigation="left" />
      </div>
      <Footer/>
    </div>
  )
}

export default Articles
