import { createContext, useContext, useReducer } from "react";
import { filterReducer } from "../reducers/filterReducers";

const initialState = {
    noOfBedrooms:"Any",
    noOfBathrooms: "Any",
    noOfBeds: "Any",
    isFilterModalOpen: false,
    priceRangeValue : [300, 20000],
    propertyType: "Any",
    ratingSelected: "1",
    isCancellable: true
}
const FilterContext = createContext(initialState);

const FilterProvider = ({children})=> {
    const [{isFilterModalOpen, priceRangeValue, noOfBathrooms, noOfBedrooms, noOfBeds, ratingSelected, propertyType, isCancellable}, filterDispatch] = useReducer(filterReducer, initialState);
    return(
        <FilterContext.Provider value={{isFilterModalOpen, priceRangeValue,noOfBathrooms, noOfBedrooms, noOfBeds, ratingSelected, propertyType, isCancellable, filterDispatch}}>
            {children}
        </FilterContext.Provider>
    )
}

const useFilter = ()=> useContext(FilterContext);

export {FilterProvider, useFilter};

