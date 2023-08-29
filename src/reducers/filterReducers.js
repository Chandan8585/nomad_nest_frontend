export const filterReducer = (state, {type, payload})=> {
     switch(type){
        case "OPEN_FILTER_MODAL": return{
            ...state,
            isFilterModalOpen : !state.isFilterModalOpen
        }
        case "CLOSE_FILTER_MODAL": return {
            ...state,
            isFilterModalOpen : !state.isFilterModalOpen
        }
        case "MINIMUM_PRICE": return {
           ...state,
           priceRangeValue : [Math.min(payload.newValue[0],
             payload.priceRangeValue[1]-payload.minDifference),
              payload.priceRangeValue[1]]
        }
        case "MAXIMUM_PRICE": return {
            ...state,
            priceRangeValue: [payload.priceRangeValue[0] , Math.max(payload.newValue[1], payload.priceRangeValue[0]-payload.minDifference),
             ]
        }
        case "No_OF_BATHROOMS": return {
              ...state,
              noOfBathrooms: payload === "Any" ? payload : payload === "5+" ? 5 : Number(payload)
        }
        case "No_OF_BEDROOMS": return {
            ...state,
            noOfBedrooms:    payload === "Any" ? payload : payload === "5+" ? 5 : Number(payload),
        }
        case "No_OF_BEDS": return {
            ...state,
            noOfBeds:    payload === "Any" ? payload : payload === "5+" ? 5 : Number(payload),
        }
        case "CHOOSE_PROPERTY": return {
            ...state,
            propertyType: payload 
        }
        case "SELECTED_RATING": return {
            ...state,
            ratingSelected: payload
        }
        case "CANCELABLE" : return {
            ...state,
            isCancellable : payload
        }
         default : return state
         
     }
}