import React from 'react';

const Footer = () => {
  return(
    <div className="ui inverted vertical footer segment">
    <div className="ui center aligned container">
      <div className="ui stackable inverted divided grid">
        <div className="eight wide column">
          <h4 className="ui inverted header">Links</h4>
          <div className="ui inverted link list">
            <a href="" className="item">Home</a>
            <a href="" className="item">Form</a>
            <a href="" className="item">Link Three</a>
            <a href="" className="item">Link Four</a>
          </div>
        </div>
        <div className="eight wide column">
          <h4 className="ui inverted header">Connect With Us</h4>
            <button className="ui facebook button">
              <i className="facebook icon"></i>
              Facebook
            </button>
            <button className="ui twitter button">
              <i className="twitter icon"></i>
              Twitter
            </button>
            <button className="ui instagram button">
              <i className="instagram icon"></i>
              Instagram
            </button>
            <button className="ui youtube button">
              <i className="youtube icon"></i>
              YouTube
            </button>
        </div>
      </div>
      <div className="ui horizontal inverted small divided link list">
        <a className="item" href="">Site Map</a>
        <a className="item" href="">Contact Us</a>
        <a className="item" href="">Terms and Conditions</a>
        <a className="item" href="">Privacy Policy</a>
      </div>
    </div>
  </div>
  )
}

export default Footer
