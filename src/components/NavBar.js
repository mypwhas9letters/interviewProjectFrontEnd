import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../images/logo.jpg'

const NavBar = () =>{
  return(
    <div className="ui menu borderless fixed">
      <div className="ui container">
        <NavLink className="header item" to="/">
          <img className="logo" src={logo} />
        </ NavLink>
        <NavLink className="header item" to="/">
          <h2>Sports News</h2>
        </ NavLink>
        <div className="right menu">
          <NavLink className="ui item" to="/form">
            Sign Up For Our Mailing List
          </ NavLink>
        </div>
      </div>
    </div>
  )
}

export default NavBar
