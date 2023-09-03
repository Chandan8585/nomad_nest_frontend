export const wishListReducer = (state, {type, payload})=> {
      switch(type){
        case "ADD_TO_WISHLIST" : return{
            ...state,
            wishlist: [...state.wishlist, payload]
        }
        case "REMOVE_FROM_WISHLIST": return {
            ...state,
            wishlist: state.wishlist.filter((hotel)=> hotel._id !== payload)
        }
      
      
        default: return state
      }
}