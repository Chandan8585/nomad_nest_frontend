import React, { useEffect, useState } from 'react'
import { useAuth } from '../../context/auth-context'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import "./orderSummary.scss"
const OrderSummary = () => {
     const [singleHotel, setSingleHotel] = useState({});
    const {checkInDate, checkOutDate} = useAuth();
    const {id} = useParams();
    useEffect(()=> {
        (async()=> {
           try {
           const {data} =await axios.get(`https://nomad-nest-backend.onrender.com/api/hotels/${id}`);
           
           setSingleHotel(data);
          
           } catch (error) {
               console.log(error)
           }
        } )()
   }, [id]);
    const {image,name, address, state, price} = singleHotel

   const numberOfNights =
   checkInDate && checkOutDate
     ? (checkOutDate.getTime() - checkInDate.getTime()) / (1000 * 3600 * 24)
     : 0;
   const totalPayableAmount = price * numberOfNights + 150;
  return (
    <div className="order-summary-container">
    <div className="order-summary">
      <h1>Order Summary</h1>
      <div className="order-details">
        <h2>Booking Details</h2>
        <p>Hotel: {name}</p>
        <p>Check-in Date: {checkInDate}</p>
        <p>Check-out Date: {checkOutDate}</p>
        <p>Total Amount: Rs. {totalPayableAmount}</p>
        <p>Address {address}{state}</p>
        <p>Order ID: {`${id+1}`}</p>
      </div>
      <div>
        <img src={image} alt="" />
      </div>
    </div>
  </div>
  )
}

export default OrderSummary