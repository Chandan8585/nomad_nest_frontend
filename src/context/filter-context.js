import { createContext, useContext, useReducer } from "react";
import { filterReducer } from "../reducers/filterReducers";

const initialState = {
    isFilterModalOpen: false,
    priceRangeValue : [300, 20000]
}
const FilterContext = createContext(initialState);

const FilterProvider = ({children})=> {
    const [{isFilterModalOpen, priceRangeValue}, filterDispatch] = useReducer(filterReducer, initialState);
    return(
        <FilterContext.Provider value={{isFilterModalOpen, priceRangeValue, filterDispatch}}>
            {children}
        </FilterContext.Provider>
    )
}

const useFilter = ()=> useContext(FilterContext);

export {FilterProvider, useFilter};

