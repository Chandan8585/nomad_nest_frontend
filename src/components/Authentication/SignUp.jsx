import React from 'react'
import "./Auth.scss"
import { useAuth } from '../../context/auth-context'
import { validateName } from '../../utils/name-regex';
import { validateNumber } from '../../utils/number-regex';
import { validateEmail } from '../../utils/email-regex';
import { validatePassword } from '../../utils/password-regex';
const SignUp = () => {
  const { name, email, password, confirmPassword, mobile, authDispatch} = useAuth();
  console.log({name, email, password, mobile, confirmPassword})

const handleFormSubmit = (event)=> {
  event.preventDefault();
  authDispatch({
    type: "CLEAR_USER_DATA",
  });
}

  const handleNameChange = (event)=> {
    const isValidateName = validateName( event.target.value)
if(isValidateName){
  authDispatch({
    type: "NAME",
    payload: event.target.value 
  })
}else{
  console.log("invalid NAME")
}
 }
  const handleNumberChange = (event)=> {
    const isValidateNumber = validateNumber(event.target.value);
    if(isValidateNumber){
      authDispatch({
        type: "MOBILE",
        payload: event.target.value
      })
    }else{
      console.log("invalid MOBILE")
    }
    
  }
  const handleEmailChange = (event)=> {
    const isValidateEmail = validateEmail(event.target.value);
    if(isValidateEmail){
      authDispatch({
        type: "EMAIL",
        payload: event.target.value
      })
    }else{
      console.log("invalid EMAIL")
    }

  }
    const handlePasswordChange = (event)=> {
      const isValidatePassword = validatePassword(event.target.value);
       if(isValidatePassword){
        authDispatch({
          type: "PASSWORD",
          payload: event.target.value
        })
       }else{
        console.log("invalid PASSWORD")
      }
  }
  const handleConfirmPasswordChange = (event)=> {
    const isValidatePassword = validatePassword(event.target.value);
    if(isValidatePassword){
     authDispatch({
       type: "CONFIRM_PASSWORD",
       payload: event.target.value
     })
    }else{
      console.log("invalid CONFIRM_PASSWORD")
    }
  }
  return (
    <div className="auth-container">
    <form onSubmit={handleFormSubmit}>
    <div className="d-flex direction-column lb-in-container">
        <label className="auth-label">
          Name <span className="asterisk">*</span>{" "}
        </label>
        <input
          // value={name}
          type='text'
          className="auth-input"
          placeholder="Enter Name"
          required
          onChange={(event)=>handleNameChange(event)}
        />
        
      </div>
      <div className="d-flex direction-column lb-in-container">
        <label className="auth-label">
          Mobile Number <span className="asterisk">*</span>{" "}
        </label>
        <input
          // value={mobile}
          // type="number"
          className="auth-input"
          maxLength="10"
          placeholder="Enter Mobile Number"
          required
          onChange={handleNumberChange}
        />
      </div>
  
      <div className="d-flex direction-column lb-in-container">
        <label className="auth-label">
          Email <span className="asterisk">*</span>{" "}
        </label>
        <input
          // value={email}
          className="auth-input"
          placeholder="Enter Email"
          type="email"
          required
          onChange={handleEmailChange}
        />
      </div>
      <div className="d-flex direction-column lb-in-container">
        <label className="auth-label">
          Password <span className="asterisk">*</span>{" "}
        </label>
        <input
          // value={password}
          className="auth-input"
          placeholder="Enter Password"
          type="password"
          required
          onChange={handlePasswordChange}
        />
      </div>
      <div className="d-flex direction-column lb-in-container">
        <label className="auth-label">
          Confirm Password <span className="asterisk">*</span>{" "}
        </label>
        <input
          // value={confirmPassword}
          className="auth-input"
          placeholder="Enter Password"
          type="password"
          required
          onChange={handleConfirmPasswordChange}
        />
      </div>
      <div>
        <button className="button btn-primary btn-login cursor">
          Submit
        </button>
      </div>
    </form>
  </div>
  )
}

export default SignUp