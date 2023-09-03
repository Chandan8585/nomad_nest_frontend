import { createContext, useContext, useReducer } from "react"
import { wishListReducer } from "../reducers/wishlistReducers";

const initialState = {
    wishlist : [],
    
}

const wishlistContext = createContext(initialState);

const WishListProvider = ({children})=> {
    const [{wishlist}, wishlistDispatch] = useReducer( wishListReducer, initialState);
    return( 
     <wishlistContext.Provider value= {{wishlist, wishlistDispatch}}>
        {children}
     </wishlistContext.Provider>
     )
   
}

const useWishlist =()=> useContext(wishlistContext);

export {WishListProvider, useWishlist}