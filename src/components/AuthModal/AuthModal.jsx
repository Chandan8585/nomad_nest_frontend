import React from 'react'
import "./AuthModal.scss"
import { useAuth } from '../../context/auth-context'
import Login from '../Authentication/Login';
import SignUp from '../Authentication/SignUp';
const AuthModal = () => {
    const {authDispatch, selectedTab} = useAuth();
    const handleCloseModal = ()=> {
          authDispatch({
            type: "AUTH_MODAL_OPEN"
          })
    }
    const handleLoginClick = ()=> {
        authDispatch({
            type: "SWITCH_TO_LOGIN"
        })
    }
    const handleSignUpClick = ()=> {
      authDispatch({
        type: "SWITCH_TO_SIGNUP"
      })
    }
  return (
    <div className="auth-modal-container fixed">
      <div className="auth-modal absolute shadow right-0">
        <div className="d-flex align-center shadow">
          <button
            className= {`button btn-auth grow-shrink-basis cursor-pointer ${selectedTab==="login" ? "btn-auth-selected" : ""}`}
            onClick={handleLoginClick}
          >
            Login
          </button>
          <button
            className= {`button btn-auth grow-shrink-basis cursor-pointer 
            ${selectedTab==="signUp" ? "btn-auth-selected" : ""}`}
            onClick={handleSignUpClick}
          >
            Signup
          </button>
          <button
            className="button btn-auth btn-close d-flex align-center justify-center cursor-pointer"
            
          >
            <span className="material-icons-outlined" onClick={handleCloseModal}>close</span>
          </button>
        </div>
        <div>
          {selectedTab === "login" ? <Login/> : selectedTab==="signUp" ? <SignUp/> : ""}
        </div>
      </div>
    </div>
  )
}

export default AuthModal