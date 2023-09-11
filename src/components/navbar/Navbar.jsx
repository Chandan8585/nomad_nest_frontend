import React from 'react'
import "./navbar.scss"
import { Link, useNavigate } from 'react-router-dom'
import { useDate } from '../../context/date-context'
import { useAuth } from '../../context/auth-context'
import AuthModal from '../AuthModal/AuthModal'
import { useWishlist } from '../../context/wishlist-context'
import UserModal from './userModal/UserModal'
import { toast } from 'react-toastify'
import logo from "../../assets/Nomads-Nest-WEB-LOGO.png"
const Navbar = () => {
  const {dateDispatch,destination, checkInDate, checkOutDate, guest} = useDate();
  const {authDispatch, isShowModalOpen, isUserModalOpen} = useAuth();
  const {wishlist} = useWishlist();
  const navigate = useNavigate();
  const handleSearchClick = ()=> {

     dateDispatch({
      type: "SEARCH_MODAL_OPEN",
     })
     toast.success("Going to SearchBar Opened" );
     }
const handleAuthModal = ()=> {
  authDispatch({
    type: "AUTH_MODAL_OPEN"
  })
  
}
const handleUserModal = ()=> {
  authDispatch({
    type: "User_Modal_Open"
  })

}
const handleWishlistClick = ()=> {
  toast.success("WishList Page Opened");
  navigate("/hotels/wishlist")  
         console.log(wishlist)

}
  return (
<div>
    <header className="heading d-flex align-center">
      <Link to="/" >
      {/* <h1 className="heading-1">
        Nomad_nest
    </h1> */}
    <img src={logo} alt="" className='app-logo'/>
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
        <span className="border-right-1px">
          
        </span>
        <span className="form-option">{`${guest} Guests` || "Add Guests"}</span>
        <span className="search material-icons-outlined">search</span>
      </div>
     
    
     <button
  className="button btn-wishlist absolute d-flex align-center wishlist-btn"
      onClick={handleWishlistClick}>
  <span class="material-icons-outlined wishlist cursor">
favorite_border
</span>
<span className='number-of-items'>
  {wishlist.length}
</span>
   </button>
     

    <nav className="d-flex align-center gap-large" >
      <div className="nav d-flex align-center cursor-pointer">
        <span className="material-icons-outlined profile-option menu" onClick={handleAuthModal}>
          menu
        </span>
      
        <span className="material-icons-outlined profile-option person" onClick={handleUserModal}>
          person_2
        </span>
      </div>
    </nav>
         {
          isShowModalOpen && <AuthModal/>
         }
         {
          isUserModalOpen && <UserModal/>
         }
  </header>

  </div>
  )
}

export default Navbar