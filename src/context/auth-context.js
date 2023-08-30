    import { createContext, useContext, useReducer } from "react"
    import { authReducers } from "../reducers/authReducers";

    const initialState = {
        isAuthModalOpen: false,
        selectedTab : "login",
        name: "",
        mobile: "",
        password:"",
        email: "",
        confirmPassword:""
    }

    const AuthContext = createContext(initialState);

    const AuthProvider = ({children})=> {
        const [{isAuthModalOpen, selectedTab ,confirmPassword, name, email, password, mobile}, authDispatch] = useReducer( authReducers, initialState);
        return (
            <AuthContext.Provider value={{isAuthModalOpen,confirmPassword, selectedTab, name, email, password, mobile, authDispatch}}>
                {children}
            </AuthContext.Provider>
        )
    }
    const useAuth = ()=> useContext(AuthContext);

    export {useAuth, AuthProvider}