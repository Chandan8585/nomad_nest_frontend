import React from 'react'
import "./userModal.scss"
import { useAuth } from '../../../context/auth-context'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
const UserModal = () => {
    const {authDispatch} = useAuth();
    const navigate = useNavigate();
    const handleLogoutClick = ()=> {
        localStorage.removeItem("accessToken")
        authDispatch({
            type: "AUTH_MODAL_OPEN"
          }) 
          toast.success("Logged Out Successful");
    }
    const handleUserProfileClick = ()=> {
        navigate("/user-profile")
    }
  return (
    <div className='user-modal-container'>
    
        <button className='modal-options ' onClick={handleLogoutClick}>
           Logout
        </button>
        <button className='modal-options' onClick={handleUserProfileClick}>
           User Profile
        </button>
        <button className='modal-options'>
           Booking History
        </button>
        
     
    </div>
  )
}

export default UserModal