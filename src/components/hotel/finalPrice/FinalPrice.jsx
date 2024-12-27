import React from 'react'
import "./FinalPrice.scss"
import { useDate } from '../../../context/date-context'
import DateSelector from '../../dateSelector/DateSelector'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
const FinalPrice = ({singleHotel}) => {
 const {_id, price, rating} = singleHotel
 const {dateDispatch, guest, checkInDate, checkOutDate} = useDate();
 
  const navigate = useNavigate();

 const handleGuestChange = (event) => {
  const value = parseInt(event.target.value, 10) || 0;
  // Update guest value in the context
  dateDispatch({
    type: "ADD_GUEST",
    payload: value,
  });
};
 const handleReserveClick = ()=> {
   if(!checkInDate || !checkOutDate || guest<=0){
    toast.error("Fill Dates and Number of Guest")
   }else{
    navigate(`/confirm-booking/stay/${_id}`)
    toast.success("Proceeding for payment");
   }
     
 }
  return (
    <div className="price-details-container d-flex direction-column gap shadow">
    <div className="price-rating d-flex align-center justify-space-between">
      <p>
        <span className="fs-bold fs-large">Rs. {price}</span> night
      </p>
      <span className="rating d-flex align-center">
        <span className="material-icons-outlined">star</span>
        <span>{rating}</span>
      </span>
    </div>
    <div className="d-flex direction-column">
      <div className="grid-container-two-col selected-dates">
        <div className="checkin loc-container">
          <label className="label">Check in</label>
          <DateSelector checkInType="in"/>
        
        </div>
        <div className="checkin loc-container">
          <label className="label">Check Out</label>
          <DateSelector checkInType="out"/>
        </div>
      </div>
      <div className="guests gutter-sm">
        <p>GUESTS</p>
        <p>
          {/* {guest <= 0 ? (<input placeholder='Add Guests' type='number' value={guest} onChange={(event)=> handleGuestChange(event)} />):(<input value={guest} />)} */}
          {guest <= 0 ? (
        <input
          placeholder="Add Guests"
          type="number"
          value={guest}
          onChange={(event) => handleGuestChange(event)}
          min={0}
        />
      ) : (
        <input
          type="number"
          value={guest}
          onChange={(event) => handleGuestChange(event)} // Allow updates even for guest > 0
        />
      )}
          </p>
      </div>
    </div>
    <div>
      <button
  onClick={handleReserveClick}
  className="button btn-reserve btn-primary cursor"
  disabled={!checkInDate || !checkOutDate || guest <= 0}
>
  Reserve
</button>
    </div>
    <div className="price-distribution d-flex direction-column">
      <div className="final-price d-flex align-center justify-space-between">
        <span className="span">Rs. {price} x 2 nights</span>
        <span className="span">Rd. {price * 2}</span>
      </div>
      <div className="final-price d-flex align-center justify-space-between">
        <span className="span">Service fee</span>
        <span className="span">Rs. 200</span>
      </div>
      <div className="final-price d-flex align-center justify-space-between">
        <span className="span">Total</span>
        <span className="span">Rs. {price*2 + 200}</span>
      </div>
    </div>
  </div>

  )
}

export default FinalPrice