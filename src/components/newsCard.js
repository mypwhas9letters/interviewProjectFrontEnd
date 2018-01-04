import React from 'react';

const NewsCard = (news) =>{
  return(
    <div className="ui card">
      <div className="content">
        {news.news.title}
      </div>
      <div className="image">
        <img src={news.news.urlToImage}/>
      </div>
      <div className="content">
        <a className="header">{news.news.description}</a>
      </div>
    </div>
  )
}

export default NewsCard
