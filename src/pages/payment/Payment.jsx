import React, { useEffect, useState } from 'react'
import "./payment.scss"
import { Fragment } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { useDate } from '../../context/date-context'
import { v4 as uuid } from "uuid";
// import { useAuth } from '../../context/auth-context'
const Payment = () => {
   const {checkInDate, checkOutDate, guest} = useDate();
  //  const {accessToken} = useAuth();
  // const accessToken = localStorage.getItem("accessToken")
   const {id} = useParams();
    const navigate = useNavigate();
   const [singleHotel, setSingleHotel] = useState({});
   const {image,name, address, state, price, rating} = singleHotel
   const numberOfNights =
   checkInDate && checkOutDate
     ? (checkOutDate.getTime() - checkInDate.getTime()) / (1000 * 3600 * 24)
     : 0;
   const totalPayableAmount = price * numberOfNights + 150;
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

   const OrderId = uuid()
   const LoadScript = (source)=> {
     return new Promise(resolve => {
      const Script = document.createElement("script");
      Script.src = source;
      Script.onload = resolve(true);
      Script.onerror = resolve(false);
      document.body.appendChild(Script);
     })
   } 
   const handleConfirmBooking = async()=> {
    const response = await LoadScript("https://checkout.razorpay.com/v1/checkout.js");
    if(!response){
      console.log({message: "Razorpay SDK failed to load"});
    }
    const options = {
      key: "rzp_test_JX7jDsaYTwl8CJ",
      amount: totalPayableAmount * 100,
      currency : "INR",
      name: "Nomad_Nest",
      email: "chandanwingshr@gmail.com",
      contact: "8851479441",
      description: "Thank you For Booking with us",
      
     
      handler: ({payment_id}) => {
        setSingleHotel({ ...singleHotel, 
          orderId: OrderId,
         payment_id,
         checkInDate: checkInDate.toLocaleDateString("en-US", {day:"numeric",month:"short"}),
         checkOutDate: checkOutDate.toLocaleDateString("en-US", { day: "numeric", month: "short" }),
         totalPayableAmount 
         
        });

        navigate(`/hotels/order-summary/${id}?OrderId=${uuid()}`);
        console.log(OrderId);
        console.log({id});

      },

      prefill: {
         name: "Chandan Pratap",
         email: "chandanwingshr@gmail.com",
         contact: "8851479441"
      }
    }
    const paymentObject = await new window.Razorpay(options);
    paymentObject.open();
      
   };
  return (
    <Fragment>
    <header className="heading">
      <h1 className="heading-1">
        <Link className="link" to="/">
          Nomad_Nest
        </Link>
      </h1>
    </header>
    <main className="payment-page d-flex justify-center">
      <div className="final-details-container d-flex direction-column gap-md">
        <h2>Trip Details</h2>
        <div className="dates-and-guests d-flex direction-column gap-md">
          <h3>Your Trip</h3>
          <div>
            <p>Dates</p>
            <span>
     {
        checkInDate.toLocaleDateString("en-US", {
            day:"numeric",
            month:"short",
        })}{" "} - {
      checkOutDate.toLocaleDateString("en-US", {
        day:"numeric",
        month:"short",
      })
      }
            </span>
          </div>
          <div>
            <p>Guests</p>
            <span>{ guest}</span>
          </div>
        </div>
        <div className="d-flex direction-column gap-sm">
          <h3>Pay with</h3>
          <div>Razorpay</div>
        </div>
        <button
          className="button btn-primary btn-reserve cursor btn-pay"
        onClick={handleConfirmBooking}
        >
          Confirm Booking
        </button>
      </div>
      <div className="final-details d-flex direction-column gap-large">
        <div className="d-flex gap-sm">
          <img className="image" src={image} alt={name} />
          <div className="d-flex direction-column">
            <div className="d-flex direction-column grow-shrink-basis">
              <span>{name}</span>
              <span>
               {address} {state}
              </span>
            </div>
            <div className="rating-container">
              <span className="rating d-flex align-center">
                <span className="material-icons-outlined">star</span>
                <span>{rating}</span>
              </span>
            </div>
          </div>
        </div>
        <div className="tag">
          Your booking is protected by{" "}
          <strong className="strong">Nomad_Nest</strong> cover
        </div>
        <div className="price-detail-container">
          <div className="price-distribution d-flex direction-column">
            <h3>Price Details </h3>
            <div className="final-price d-flex align-center justify-space-between">
              <span className="span">
                Rs. nights
              </span>
              <span className="span">Rs. {price }</span>
            </div>
            <div className="final-price d-flex align-center justify-space-between">
              <span className="span">Service fee</span>
              <span className="span">Rs. 150</span>
            </div>
            <div className="final-price d-flex align-center justify-space-between">
              <span className="span">Total</span>
              <span className="span">Rs. {totalPayableAmount}</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  </Fragment>

  )
}

export default Payment