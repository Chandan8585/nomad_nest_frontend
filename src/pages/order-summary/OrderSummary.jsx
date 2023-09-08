import React, { useEffect, useState } from 'react'
// import { useAuth } from '../../context/auth-context'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import "./orderSummary.scss"
import { useDate } from '../../context/date-context';
import { v4 as uuid } from "uuid";

const OrderSummary = () => {
     const [singleHotel, setSingleHotel] = useState({});
    const {checkInDate, checkOutDate} = useDate();
    
    const {id} = useParams();
  const OrderId = uuid()
    
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
        <p>Check-in Date: {checkInDate && checkInDate.toLocaleDateString("en-US", {
            day:"numeric",
            month:"short",
            // year: "numeric"
        })}</p>
        <p>Check-out Date: {checkInDate && checkOutDate.toLocaleDateString("en-US", {
            day:"numeric",
            month:"short",
            // year: "numeric"
        })}</p>
        
        <p>Total Amount: Rs. {totalPayableAmount}</p>
        <p>Address: {address}{" "}{state}</p>
        <div>
        <img src={image} alt="" className='object-fit image'/>
      </div>
        <p>Order ID: {`${OrderId}`}</p>
      </div>
    
    </div>
  </div>
  )
}

export default OrderSummary