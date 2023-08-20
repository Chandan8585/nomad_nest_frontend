
export const categoryReducer = (state, {type, payload})=> {
        switch(type){
        
            case "HOTEL_CATEGORY":
                return {
                    ...state,
                    hotelCategory: payload
                }
            
            default : return state
        }
}