export const dateReducer = (state, {type, payload}) => {
           switch(type){
            case "CHECK_IN": return {
                ...state,
                  checkInDate : payload
            }
            case "CHECK_OUT" : return {
                ...state,
                checkOutDate : payload
            }
            case "SEARCH_MODAL_OPEN" : return {
                  ...state,
                  isSearchModalOpen: !state.isSearchModalOpen, 
            }
            case "ADD_DESTINATION": return {
                ...state,
                 destination : payload
            }
            case "ADD_GUEST" : return {
                ...state,
                guest : payload
            }
            case "DATE_FOCUS":
                return {
                  ...state,
                  isSearchResultOpen: false,
                };
            default: return state 
           }
}

