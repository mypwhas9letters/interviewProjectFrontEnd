import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () =>{
  return(
    <div className="ui inverted menu borderless fixed">
      <div className="ui container">
        <Link className="item" to="/">
          <h1>Sports News</h1>
        </ Link>
        <div className="right menu">
          <Link className="ui item" to="/form">
            Sign Up
          </ Link>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
