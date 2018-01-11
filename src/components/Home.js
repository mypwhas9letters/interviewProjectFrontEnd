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
      link: `https://www.youtube.com/embed?listType=search&list=${this.state.searchTerm}`,
      searchTerm: null,
      video: true
    })
  }

  videoOnClick = (event) => {
    this.setState({video: !this.state.video})
  }

  render(){
    return(
      <div className="homeMargin">
        <div className="youtubeCover" onClick={this.videoOnClick}>
          <div className="vidCover">
            <div>
              <h1 style={{color: "white", display: "inline-block"}}>Test</h1>

            <button className="ui huge blue basic button">
              Play Video
            </button>
            </div>
          </div>
          {this.state.video ? <iframe className="cover centered" id="player" type="text/html" width="75%" height="450" src={this.state.link} frameBorder="0" title={this.state.link}></iframe> : null }
        </div>

        <div className="ui container">

          <div className="searchBarStyle">
            <div className="ui form">
              <div className="inline fields">
                <div className="three wide field">
                </div>
                <div className="ten wide field">
                  <input onChange={this.onChange} type="text" placeholder="Youtube..." />
                    <div className="ui submit primary button" onClick={this.onClick}>Search</div>
                  </div>
                </div>
            </div>
          </div>

          <div className="sections1">
            <h1 className="ui horizontal divider header">About The Company</h1><br/>
            <AboutMe /><br/>
          </div>

          <div>
            <h1 className="ui horizontal divider header">Sports News</h1>
            <NewsSection />
          </div>
        </div>

      </div>
    )
  }
}

export default Home;
