import React, { Fragment } from 'react'
import Navbar from '../../components/navbar/Navbar'
import "./WishList.scss"
import { useWishlist } from '../../context/wishlist-context'
import HotelCard from '../../components/hotel/HotelCard'
import { Link } from 'react-router-dom'
const WishList = () => {
    const{wishlist} = useWishlist();
  return (
    <Fragment>
          <Navbar/>
          <h2 className="heading-2 d-flex justify-center wrap">Your Wishlist</h2>
      { wishlist.length > 0 ?  
     (   <section className="wishlist-page d-flex align-center wrap gap-larger">
          {wishlist &&
            wishlist.map((hotel) => <HotelCard key={hotel._id} hotel={hotel} />)}
        </section> ) : 
        (<p className='d-flex justify-center'>To Add Something in Wishlist<Link to={"/"}> Click Here</Link></p>)
      }
    </Fragment>
  )
}

export default WishList