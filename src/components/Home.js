import React, { Component } from 'react';
import NewsSection from './newsSection';
import AboutMe from './AboutMe';

class Home extends Component {
  constructor(props){
    super(props)

    this.state = {
      video: false,
      searchTerm: "",
      link: `https://www.youtube.com/embed?listType=search&list=nba`,
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

  videoOnClick = (event) => {
    this.setState({video: !this.state.video})
  }

  render(){
    return(
      <div className="homeMargin">
        <div class="youtubeCover" onClick={this.videoOnClick}>
          <h1 className="vidCover">Top Videos</h1>
          {this.state.video ? <iframe className="cover centered" id="player" type="text/html" width="75%" height="450" src={this.state.link} frameBorder="0"></iframe> : null }
        </div>

        <div className="ui container">
          <div>
            <label>Search Youtube</label>
            <input onChange={this.onChange} type="text" placeholder="Search..." />
            <button className="ui primary button" onClick={this.onClick}>Search</button>
          </div>

          <div>
            <h2 class="ui horizontal divider header">About The Company</h2><br/>
            <AboutMe /><br/>
          </div>

          <div>
            <h2 class="ui horizontal divider header">Sports News</h2>
            <NewsSection />
          </div>
        </div>

      </div>
    )
  }
}

export default Home;
