import React, { Component } from 'react';
import NewsCard from './newsCard'

class Home extends Component {
  constructor(props){
    super(props)

    this.state = {
      videos: "",
      searchTerm: "",
      link: `https://www.youtube.com/embed?listType=search&list=nba`,
      news: ""
    }
  }

  onChange = (event) => {
    this.setState({
      searchTerm: event.target.value
    })
  }

  onClick = (event) => {
    this.setState({
      link: `https://www.youtube.com/embed?listType=search&list=${this.state.searchTerm}`
    })
  }

  componentDidMount(){
    fetch("https://newsapi.org/v2/top-headlines?sources=espn&apiKey=3ebd6d3dde004ab78b03260d588e97e1")
    .then(res => res.json())
    .then(json => this.setState({news: json.articles}))
  }

  render(){
    const newsList = this.state.news === "" ? null : this.state.news.map(news => <NewsCard news={news} key={news.title}/>)
    return(
      <div className="homeMargin">
        <h1 className="ui container">Top Video of the Day</h1>
        <iframe className="centered" id="player" type="text/html" width="75%" height="450" src={this.state.link} frameBorder="0"></iframe>
      <div className="ui container">
        <label>Search Youtube</label>
        <input onChange={this.onChange} type="text" placeholder="Search..." />
        <button className="ui primary button" onClick={this.onClick}>Search</button>
        <div className="ui stackable divided grid">
          <div className="eight wide column">
            <h2 className="ui header">About Us</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className="eight wide column">
            <h2 className="ui header">About Us</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>

        <h1>News Articles</h1>
        <div className="ui link cards">
          {newsList}
        </div>
      </div>

      </div>
    )
  }
}

export default Home
