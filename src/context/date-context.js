import { createContext, useContext, useReducer } from "react";
import { dateReducer } from "../reducers/dateReducers";

const initialState = {
   checkInDate : null,
   checkOutDate : null,
   isSearchModalOpen : false,
   isSearchResultOpen : true
}
const DateContext = createContext(initialState);
const DateProvider = ({children})=> {
    const [{checkInDate, checkOutDate}, dateDispatch] = useReducer(dateReducer, initialState); 
      <DateContext.Provider value={{checkInDate, checkOutDate, dateDispatch}}>
        {children}
      </DateContext.Provider>
}

const useDate = () => useContext(DateContext);

export  {useDate, DateProvider};



