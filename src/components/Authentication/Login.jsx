import React from 'react'
import "./Auth.scss"
import { useAuth } from '../../context/auth-context'
const Login = () => {
  const {authDispatch} = useAuth();
  const handleMobileChange = (event)=> {
     authDispatch({
      case : "MOBILE",
      payload : event.target.value
     })
  }
  const handlePasswordChange = (event)=> {
    authDispatch({
      case : "PASSWORD",
      payload : event.target.value
     })
  }
  return (
    <div className="auth-container">
    <form>
      <div className="d-flex direction-column lb-in-container">
        <label className="auth-label">
          Mobile Number <span className="asterisk">*</span>{" "}
        </label>
        <input
    
          type="number"
          className="auth-input"
          maxLength="10"
          placeholder="Enter Mobile Number"
          required
          onChange={handleMobileChange}
        />
      </div>
      <div className="d-flex direction-column lb-in-container">
        <label className="auth-label">
          Password <span className="asterisk">*</span>{" "}
        </label>
        <input
        
          className="auth-input"
          placeholder="Enter Password"
          type="password"
          required
          onChange={handlePasswordChange}
        />
      </div>
      <div>
        <button className="button btn-primary btn-login cursor">Login</button>
      </div>
    </form>
    <div className="cta">
      <button
        className="button btn-outline-primary cursor-pointer"

      >
        Login with Test Credentials
      </button>
    </div>
  </div>

  )
}

export default Login