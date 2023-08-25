import React from 'react'
import "./navbar.scss"
import { Link } from 'react-router-dom'
import { useDate } from '../../context/date-context'

const Navbar = () => {
  const {dateDispatch,destination, checkInDate, checkOutDate, guest} = useDate();
  const handleSearchClick = ()=> {

     dateDispatch({
      type: "SEARCH_MODAL_OPEN",
     })
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
        className="form-container d-flex align-center cursor-pointer shadow" onClick={handleSearchClick}>
        <span className="form-option"> { destination ||"Any Where"}</span>
        <span className="border-right-1px"></span>
        <span className="form-option" > {checkInDate && checkOutDate
              ? `${checkInDate.toLocaleDateString('en-US', {
                  day: 'numeric',
                  month: 'short',
                })} - ${checkOutDate.toLocaleDateString('en-US', { day: 'numeric', month: 'short' })}`
              : 'ANY WEEK'}</span>
        <span className="border-right-1px"></span>
        <span className="form-option">{`${guest} Guests` || "Add Guests"}</span>
        <span className="search material-icons-outlined">search</span>
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