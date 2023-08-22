import React from 'react'
import "./navbar.scss"
import { Link } from 'react-router-dom'

const Navbar = () => {

  return (
<div>
    <header className="heading d-flex align-center">
      <Link to="/">
      <h1 className="heading-1">
        Nomad_nest
    </h1>
      </Link>
 
    
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