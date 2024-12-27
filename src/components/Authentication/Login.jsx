import React from 'react'
import "./Auth.scss"
import { useAuth } from '../../context/auth-context'
import { validateNumber } from '../../utils/number-regex';
import { validatePassword } from '../../utils/password-regex';
import { LoginHandler } from '../../services/AuthLogin';
import { toast } from 'react-toastify';
let isValidateNumber, isValidatePassword;
const Login = () => {
  
  const {mobile, password, authDispatch} = useAuth();
  const handleMobileChange = (event)=> {
  isValidateNumber = validateNumber(event.target.value)
  if(isValidateNumber){
    authDispatch({
      case : "MOBILE",
      payload : event.target.value
     })
     }
  }
  const handlePasswordChange = (event)=> {
    isValidatePassword = validatePassword(event.target.value)
if(isValidatePassword){
  authDispatch({
    case : "PASSWORD",
    payload : event.target.value
   })
} 
}
const handleFormSubmit = async(event)=> {
   event.preventDefault();
   console.log("Login Validation",{isValidateNumber,isValidatePassword})

     if(isValidateNumber && isValidatePassword){
    const {accessToken, userName} = await LoginHandler(mobile, password);
    console.log("from login", {accessToken, userName});
    // authDispatch({
    //   type: "SET_ACCESS_TOKEN",
    //   payload: accessToken,
    // })
    if(accessToken){
      toast.success("Logged In  successful!")
    }
    localStorage.setItem("accessToken", accessToken);

    authDispatch({
      type: "SET_USERNAME",
      payload: userName,
    })
   }
 
  // LoginHandler(mobile, password);
   authDispatch({
    type: "CLEAR_USER_DATA",
   })
   authDispatch({
    type: "AUTH_MODAL_OPEN",
   });

}

const handleTestCredentials = async (event)=> {
    event.preventDefault();
    const {accessToken, userName} =await LoginHandler(7827352953, "Abcd@1234");
    // authDispatch({
    //   type: "SET_ACCESS_TOKEN",
    //   payload: accessToken,
    // })
    if(accessToken){
      toast.success("Logged In  successful!")
    }
    localStorage.setItem("accessToken", accessToken);
    authDispatch({
      type: "SET_USERNAME",
      payload: userName,
    })
    authDispatch({
      type: "CLEAR_USER_DATA",
     })
     authDispatch({
      type: "AUTH_MODAL_OPEN",
     });
    
}
  return (
    <div className="auth-container">
    <form onSubmit={handleFormSubmit}>
      <div className="d-flex direction-column lb-in-container">
        <label className="auth-label">
          Mobile Number <span className="asterisk">*</span>{" "}
        </label>
        <input
          // defaultValue={mobile}
          type="number"
          className="auth-input"
          maxLength="10"
          placeholder="Enter Mobile Number"
          required
          onChange={()=>handleMobileChange}
        />
      </div>
      <div className="d-flex direction-column lb-in-container">
        <label className="auth-label">
          Password <span className="asterisk">*</span>{" "}
        </label>
        <input
        // defaultValue={password}
          className="auth-input"
          placeholder="Enter Password"
          type="password"
          required
          onChange={()=>handlePasswordChange}
        />
      </div>
      <div>
        <button className="button btn-primary btn-login cursor">Login</button>
      </div>
    </form>
    <div className="cta">
      <button
        className="button btn-outline-primary cursor-pointer"
        onClick={handleTestCredentials}
      >
        Login with Test Credentials
      </button>
    </div>
  </div>

  )
}

export default Login










 //  if(isValidateNumber && isValidatePassword){
  //   const {accessToken, userName} = await LoginHandler(mobile, password);
  //   console.log("from login", {accessToken, userName});
  //   authDispatch({
  //     type: "SET_ACCESS_TOKEN",
  //     payload: accessToken,
  //   })
  //   authDispatch({
  //     type: "SET_USERNAME",
  //     payload: userName,
  //   })
  //  }