import React from "react"
import { NavLink } from 'react-router-dom'

const NavBar = () =>{
  return(
    <div className="ui menu fixed">
      <div className="ui container">
        <NavLink className="header item" to="/">
          Our Company
        </ NavLink>
        <NavLink className="header item" to="/form">
          Form
        </ NavLink>
      </div>
    </div>
  )
}

export default NavBar
