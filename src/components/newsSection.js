import React, { Component } from 'react';
import NewsCard from './newsCard';
import Slider from 'react-slick';

class NewsSection extends Component {
  constructor(props){
    super(props)

    this.state = {
      news: ""
    }
  }

  next = () => {
    this.slider.slickNext()
  }
  previous = () => {
    this.slider.slickPrev()
  }

  componentDidMount(){
    fetch("https://newsapi.org/v2/top-headlines?sources=espn&apiKey=3ebd6d3dde004ab78b03260d588e97e1")
    .then(res => res.json())
    .then(json => this.setState({news: json.articles}))
  }

  render(){
    var settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      responsive: [ { breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1} }, { breakpoint: 992, settings: { slidesToShow: 2, slidesToScroll: 2 } }]
    };
    const newsList = this.state.news === "" ? null : this.state.news.map(news => <div className="newsMargin" key={news.title}><NewsCard news={news} /></div>)
    return(
      <div>
        <Slider ref={c => this.slider = c } {...settings}>
          {newsList}
        </Slider>
        <div style={{textAlign: 'center'}}>
          <div className="blue ui buttons">
            <button className="ui labeled icon button" onClick={this.previous}>
              <i className="left chevron icon"></i>
              Previous
            </button>
            <button className="ui right labeled icon button" onClick={this.next}>
              <i className="right chevron icon"></i>
              Next
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsSection;
