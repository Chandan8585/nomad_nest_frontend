export const dateReducer = (state, {type, payload}) => {
           switch(type){
            case "CHECK_IN": return {
                ...state,
                  checkInDate : payload
            }
            case "isSearchModalOpen" : return {
                  ...state,
                  isSeachModalOpen: !state.isSeachModalOpen,  
            }
            default: return state 
           }
}