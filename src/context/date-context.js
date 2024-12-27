import { createContext, useContext, useReducer } from "react";
import { dateReducer } from "../reducers/dateReducers";

const initialState = {
   checkInDate : null,
   checkOutDate : null,
   isSearchModalOpen : false,
   destination:"",
   guest:"",
   isSearchResultOpen: true,
}
const DateContext = createContext(initialState);
const DateProvider = ({children})=> {
    const [{checkInDate, checkOutDate, isSearchModalOpen, isSearchResultOpen ,guest, destination}, dateDispatch] = useReducer(dateReducer, initialState); 
    

    return (
      <DateContext.Provider value={{checkInDate, checkOutDate, isSearchModalOpen,isSearchResultOpen, destination,guest, dateDispatch}}>
        {children}
      </DateContext.Provider>
    )
}

const useDate = () => useContext(DateContext);

export  {useDate, DateProvider};



