import React, { useEffect, useState } from 'react'
import "./SearchStayWithDate.scss"
import DateSelector from '../dateSelector/DateSelector'
import { useCategory } from '../../context/category-context';
import axios from 'axios';
import { useDate } from '../../context/date-context';
const SearchStayWithDate = () => {
    const [hotelData , setHotelData] = useState([]);
    const {hotelCategory} = useCategory();
    const {destination, dateDispatch} = useDate();
    useEffect(()=> {
        (async()=> {
      try {
         const {data} = await axios.get(`https://nomad-nest-backend.onrender.com/api/hotels?category=${encodeURIComponent(hotelCategory)}`);
         setHotelData(data);
      } catch (error) {
         console.log(error);
      }
          })();
         },[hotelCategory])

    const handleDestinationClick = (event)=> {
        dateDispatch({
            type: "ADD_DESTINATION",
            payload: event.target.value
        })
    }
    const handleGuestClick = (event) => {
        dateDispatch({
            type: "ADD_GUEST",
            payload: event.target.value
        })
    }

   const destinationOptions = hotelData.filter(({address, city, state, country})=> (
        address.toLowerCase().includes(destination.toLowerCase())
    || city.toLowerCase().includes(destination.toLowerCase())
    || state.toLowerCase().includes(destination.toLowerCase())
    || country.toLowerCase().includes(destination.toLowerCase())
    ))
  return (
    <div className="destination-container">
    <div className="d-flex align-center justify-center destination-options">
        <div className="location-search loc-container">
            <label className="label">Where</label>
            <input className="search-dest input" onClick={(event)=>handleDestinationClick(event)} />
        </div>
        <div className="checkin loc-container">
            <label className="label">Check in</label>
            <DateSelector placeholder="Add Date" checkInType="in"/>

        </div>
        <div className="checkout loc-container">
            <label className="label">Check out</label>
            <DateSelector placeholder="Add Date" checkInType="out"/>
        </div>
        <div className="guest loc-container">
            <label className="label">No. of Guests</label>
            <input className="search-dest input" type="number" placeholder="Add guests" onClick={(event)=>handleGuestClick(event)} />
        </div>
        <div className="search-con d-flex align-center cursor" >
            <span className="material-icons-outlined cursor-pointer">
                search
            </span>
            Search
        </div>
    </div>
    <div className="search-result-container absolute">
     {
   destinationOptions.map(({address, city})=> (
    <p className='p cursor-pointer' >
       {address}, {city}   
    </p>
   ))
     }
    </div>
</div>
  )
}

export default SearchStayWithDate
