import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../images/logo.jpg'

const NavBar = () =>{
  return(
    <div className="ui menu fixed">
      <div className="ui container">
        <NavLink className="item" to="/">
          <img src={logo} />
        </ NavLink>
        <NavLink className="header item" to="/">
          Sports News
        </ NavLink>
        <div class="right menu">
          <NavLink className="ui item" to="/form">
            Sign Up For Our Mailing List
          </ NavLink>
        </div>
      </div>
    </div>
  )
}

export default NavBar
