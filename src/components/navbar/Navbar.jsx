import React from 'react'
import "./navbar.scss"
import { Link } from 'react-router-dom'

const Navbar = () => {
  const handleDateClick = ()=> {
    
  }
  return (
<div>
    <header className="heading d-flex align-center">
      <Link to="/">
      <h1 className="heading-1">
        Nomad_nest
    </h1>
      </Link>

      <div
        className="form-container d-flex align-center cursor-pointer shadow">
        <span className="form-option"> Any Where</span>
        <span className="border-right-1px"></span>
        <span className="form-option" onClick={handleDateClick}>Any Week</span>
        <span className="border-right-1px"></span>
        <span className="form-option">Add Guests</span>
        <span class="search material-icons-outlined">search</span>
      </div>

    <nav className="d-flex align-center gap-large" >
      <div className="nav d-flex align-center cursor-pointer">
        <span className="material-icons-outlined profile-option menu">
          menu
        </span>
        <span className="material-icons-outlined profile-option person">
          person_2
        </span>
      </div>
    </nav>

  </header>

  </div>
  )
}

export default Navbar