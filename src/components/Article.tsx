import React from 'react';
import { DateTime } from 'luxon';

interface Article {
  title: string;
  date: string;
  image: string;
  key: string;
  link: string;
}

const Article = (props: Article) => {
  let parsedDate: DateTime = DateTime.fromISO(props.date.slice(0,10));
  let stringDate: string = parsedDate.toLocaleString(DateTime.DATE_MED);
  
  return (
    <div className="Article">
      <a target="_blank" rel="noopener noreferrer" href={props.link} className="ArticleLink">
        <div className="ArticleTitleAndDate">
          <h2>{props.title}</h2>
          <h3>{stringDate}</h3>
        </div>
          <img src={props.image} alt={props.title}/>
        <div>
        </div>
      </a>
    </div>
  )
}

export default Article
