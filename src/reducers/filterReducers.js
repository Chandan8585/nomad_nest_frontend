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
         default : return state
         
     }
}