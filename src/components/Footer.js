import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return(
    <div className="ui inverted vertical footer segment">
    <div className="ui center aligned container">
      <div className="ui stackable inverted divided grid">
        <div className="eight wide column">
          <h4 className="ui inverted header">Links</h4>
          <div className="ui inverted link list">
            <NavLink className="item" to="/">Home</ NavLink>
            <NavLink className="item" to="/form">Form</ NavLink>
            <NavLink className="item" to="/">Link</ NavLink>
            <NavLink className="item" to="/">Link</ NavLink>
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
        <NavLink className="item" to="/">Site Map</ NavLink>
        <NavLink className="item" to="/">Contact Us</ NavLink>
        <NavLink className="item" to="/">Terms and Conditions</ NavLink>
        <NavLink className="item" to="/">Privacy Policy</ NavLink>
      </div>
    </div>
  </div>
  )
}

export default Footer
