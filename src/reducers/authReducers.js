export const authReducers = (state, {type, payload})=> {
          switch(type){
            case "AUTH_MODAL_OPEN": return {
                   ...state,
                   isAuthModalOpen : !state.isAuthModalOpen 
            }
            case "SWITCH_TO_LOGIN" : return {
              ...state,
              selectedTab : "login"
            }
            case "SWITCH_TO_SIGNUP" : return{
              ...state,
              selectedTab: "signUp"
            }
            case "NAME": return {
              ...state,
              name: payload
            }
         
           case "MOBILE": return {
              ...state,
              mobile: payload
            }
           case "EMAIL": return {
              ...state,
              email: payload
            }
           case "PASSWORD": return {
              ...state,
              password: payload
            }
           case "CONFIRM_PASSWORD": return {
              ...state,
              confirmPassword: payload
            }
           
            case "CLEAR_USER_DATA": return {
              ...state,
              name: "",
              mobile: "",
              password:"",
              email: "",
              confirmPassword:"",
            }
            case "SET_ACCESS_TOKEN": return {
              ...state,
              accessToken: payload
            }
            case "SET_USERNAME": return{
              ...state,
              userName: payload
            }
            case "User_Modal_Open": return{
              ...state,
              isUserModalOpen : !state.isUserModalOpen 
            }
            default: return state
          }
}