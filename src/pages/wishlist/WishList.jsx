import React, { Fragment } from 'react'
import Navbar from '../../components/navbar/Navbar'
import "./WishList.scss"
import { useWishlist } from '../../context/wishlist-context'
import HotelCard from '../../components/hotel/HotelCard'
import { Link } from 'react-router-dom';
import wishlistEmpty from '../../assets/wishlist_empty.jpg'
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
        (<div className='empty_cart'>
        <p className='d-flex justify-center'>Add Something to your Wishlist By<Link to={"/"}> <span className='click-here'>Clicking Here</span></Link></p>
        <img src={wishlistEmpty} alt="" className='wishlist_img'/>
        </div>)
      }
    </Fragment>
  )
}

export default WishList