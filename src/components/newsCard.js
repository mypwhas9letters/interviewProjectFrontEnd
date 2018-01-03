import React from 'react';

const NewsCard = (news) =>{
  return(
      <div className="column">
        <div className="ui fluid card">
          <div className="image">
            <img src={news.news.urlToImage}/>
             {news.news.title}
        </div>
          <div className="content">
            <a className="header">{news.news.description}</a>
          </div>
        </div>
      </div>
  )
}

export default NewsCard
