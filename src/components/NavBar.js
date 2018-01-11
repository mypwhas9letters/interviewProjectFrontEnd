import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../images/logo.png'

const NavBar = () =>{
  return(
    <div className="ui menu inverted borderless fixed">
      <div className="ui container">
        <h2 className="ui image header">
          <img src={logo} alt="" />
        </h2>
        <NavLink className="item" to="/">
          <h1>Sports News</h1>
        </ NavLink>
        <div className="right menu">
          <NavLink className="ui item" to="/form">
            Sign Up
          </ NavLink>
        </div>
      </div>
    </div>
  )
}

export default NavBar
