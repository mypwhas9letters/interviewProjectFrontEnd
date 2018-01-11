import React, { Component } from 'react';

import AboutMe from './AboutMe';
import NewsSection from './newsSection';

class Home extends Component {
  constructor(props){
    super(props)

    this.state = {
      video: false,
      searchTerm: "",
      link: `https://www.youtube.com/embed?listType=search&list=nba`,
    }
  }

  onChangeSearchBar = (event) => {
    this.setState({
      searchTerm: event.target.value
    });
  }

  onClickSearchYoutube = (event) => {
    this.setState({
      link: `https://www.youtube.com/embed?listType=search&list=${this.state.searchTerm}`,
      searchTerm: "",
      video: true
    })
  }

  videoOnClick = (event) => {
    this.setState({video: !this.state.video});
  }

  render(){
    return(
      <div className="homePageMargin">
        <div className="videoBackground" onClick={this.videoOnClick}>
          <div className="playVideoButton">
            <button className="ui huge primary button">
              Play Video Of The Day
            </button>
          </div>
          {this.state.video ? <iframe className="iframeStyling" id="player" type="text/html" width="75%" height="450" src={this.state.link} frameBorder="0" title={this.state.link}></iframe> : null }
        </div>

        <div className="ui container">
          <div className="searchBarStyle">
            <div className="ui form">
              <div className="inline fields">
                <div className="three wide field">
                </div>
                <div className="ten wide field">
                  <input onChange={this.onChangeSearchBar} type="text" placeholder="Seach Youtube..." value={this.state.searchTerm} />
                  <div className="ui submit primary button" onClick={this.onClickSearchYoutube}>Search</div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h1 className="ui horizontal divider header">About The Company</h1>
            <AboutMe />
            <h1 className="ui horizontal divider header">Sports News</h1>
            <NewsSection />
          </div>

        </div>
      </div>
    );
  }
}

export default Home;
