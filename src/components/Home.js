import React, { Component } from 'react';

class Home extends Component {
  constructor(props){
    super(props)

    this.state = {
      videos: "",
      searchTerm: "",
      link: `https://www.youtube.com/embed?listType=search&list=nba`
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

  render(){
    return(
      <div>
        <iframe id="player" type="text/html" width="100%" height="450" src={this.state.link} frameBorder="0"></iframe>
        <div className="ui icon input">
          <h1>Search Youtube</h1>
          <input onChange={this.onChange} type="text" placeholder="Search..." />
          <i onClick={this.onClick} className="search link icon"></i>
        </div>

        <div className="ui stackable divided grid">
          <div className="eight wide column">
            <h4 className="ui header">Connect With Us</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className="eight wide column">
            <h4 className="ui header">Connect With Us</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default Home
