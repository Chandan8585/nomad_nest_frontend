import { createContext, useContext, useReducer } from "react";
import { categoryReducer } from "../reducers/categoryReducers";
const initialState = {
    hotelCategory: "National Parks"
}
const CategoryContext = createContext();

const CategoryProvider = ({children})=> {
    
const [{hotelCategory}, categoryDispatch] = useReducer(categoryReducer, initialState);
return (
    <CategoryContext.Provider value={{hotelCategory, categoryDispatch}}>
    {children}
    </CategoryContext.Provider>
)
}
const useCategory =()=> useContext(CategoryContext);
export { useCategory, CategoryProvider}  
