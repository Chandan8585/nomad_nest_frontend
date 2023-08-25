import React from 'react'
import "./hotelcard.scss"
import { useNavigate } from 'react-router-dom';
const HotelCard = ({hotel}) => {
    const {_id, image, name, address, state, rating, price} = hotel;
           const navigate = useNavigate();
          
    const handleHotelCardClick = ()=> {
        
        navigate(`/hotels/${name}/${address}-${state}/${_id}/reserve`);
    }
  return (
    <div className="relative hotelcard-container shadow cursor-pointer" key={_id} onClick={handleHotelCardClick}>
    <div 
    // onClick={handleHotelCardClick}
    >
      <img className="img" src={image} alt={name} />
      <div className="hotelcard-details">
        <div className="d-flex align-center">
          <span className="location">
            {address}, {state}
          </span>
          <span className="rating d-flex align-center">
            <span className="material-icons-outlined">star</span>
            <span>{rating}</span>
          </span>
        </div>
        <p className="hotel-name">{name}</p>
        <p className="price-details">
          <span className="price">Rs. {price}</span>
          <span>night</span>
        </p>
      </div>
    </div>
    <button
      className="button btn-wishlist absolute d-flex align-center"
    //   onClick={handleWishlistClick}
    >
      <span
        className={
            "material-icons favorite cursor"
        //  ${
        //   isHotelInWishlist ? "fav-selected" : ""
        // }`
    }
      >
        favorite
      </span>
    </button>
  </div>
  )
}

export default HotelCard