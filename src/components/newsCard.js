import React from 'react';

const NewsCard = (news) =>{
  return(
    <a href={news.news.url} className="ui centered card">
      <div className="image">
        <img src={news.news.urlToImage} alt=""/>
      </div>
      <div className="content">
        {news.news.title}
      </div>
    </a>
  )
}

export default NewsCard;
