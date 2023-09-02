import React from 'react'
import "./Auth.scss"
import { useAuth } from '../../context/auth-context'
import {
  validateEmail,
  validateName,
  validateNumber,
  validatePassword,
} from "../../utils/index";
import { signUpHandler } from '../../services/AuthSignUp';

let isValidateName, isValidateNumber, isValidateEmail, isValidatePassword, isValidateConfirmPassword;

const SignUp = () => {
  const { name, email, password, confirmPassword, mobile, authDispatch} = useAuth();
  console.log({name, email, password, mobile, confirmPassword})



const handleNameChange = (event)=> {
     isValidateName = validateName(event.target.value)
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
    isValidateNumber = validateNumber(event.target.value);
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
    isValidateEmail = validateEmail(event.target.value);
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
      isValidatePassword = validatePassword(event.target.value);
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
 isValidateConfirmPassword = validatePassword(event.target.value);
    if(isValidateConfirmPassword){
     authDispatch({
       type: "CONFIRM_PASSWORD",
       payload: event.target.value
     })
    }else{
      console.log("invalid CONFIRM_PASSWORD")
    }
  }
  const handleFormSubmit = (event)=> {
    event.preventDefault();
    console.log("clicked")
    console.log({isValidateName, 
      isValidateNumber,
       isValidateEmail,
      isValidatePassword,
       isValidateConfirmPassword})
    if(isValidateName &&
      isValidateNumber &&
       isValidateEmail &&
      isValidatePassword &&
       isValidateConfirmPassword){
        signUpHandler(name, mobile, email, password)
        // authDispatch({
        //   type: "CLEAR_USER_DATA",
        //  })
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
          defaultValue ={name}
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
          defaultValue={mobile}
          type="number"
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
          defaultValue={email}
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
          defaultValue={password}
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
          defaultValue={confirmPassword}
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