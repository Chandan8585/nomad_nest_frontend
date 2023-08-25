import React, { useEffect, useState } from 'react'
import "./SearchStayWithDate.scss"
import DateSelector from '../dateSelector/DateSelector'
import { useCategory } from '../../context/category-context';
import axios from 'axios';
import { useDate } from '../../context/date-context';
import { useNavigate } from 'react-router-dom';
const SearchStayWithDate = () => {
    const [hotelData , setHotelData] = useState([]);
    const {hotelCategory} = useCategory();
    const {guest, destination, dateDispatch, isSearchResultOpen} = useDate();
    const navigate = useNavigate();
    
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

    const handleDestinationChange = (event)=> {
        dateDispatch({
            type: "ADD_DESTINATION",
            payload: event.target.value
        })
    }
    const handleGuestChange = (event) => {
        dateDispatch({
            type: "ADD_GUEST",
            payload: event.target.value
        })
    }
    const handleSearchResultClick = (address)=> {
        dateDispatch({
            type: "DESTINATION",
            payload: address
        })
    }
    const handleDestinationFocus = ()=>{
          dateDispatch({
            type: "SHOW_SEARCH_RESULT"
            
          })
    }
const handleSearchButtonClick = ()=> {
         dateDispatch({
            type: "SEARCH_MODAL_CLOSE"
        })
           navigate(`/hotels/${destination}`)
}

   const destinationOptions = hotelData.filter(({address, city, state, country})=> (
        address.toLowerCase().includes(destination.toLowerCase())
    || city.toLowerCase().includes(destination.toLowerCase())
    || state.toLowerCase().includes(destination.toLowerCase())
    || country.toLowerCase().includes(destination.toLowerCase())
    ))

    console.log(destination, guest);
  return (
    <div className="destination-container">
    <div className="d-flex align-center justify-center destination-options">
        <div className="location-search loc-container">
            <label className="label">Where</label>
            <input 
            className="search-dest input" 
            onChange={(event)=>handleDestinationChange(event)}
            value={destination}
            placeholder="Add Destination"
            onFocus={handleDestinationFocus}
            />
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
            <input 
            value={guest}
            className="search-dest input" 
            type="number" 
            placeholder="Add guests"
             onChange={(event)=>handleGuestChange(event)} />
        </div>
        <div className="search-con d-flex align-center cursor" onClick={handleSearchButtonClick}>
            <span className="material-icons-outlined cursor-pointer">
                search
            </span>
            Search
        </div>
    </div>

{ isSearchResultOpen && (   
<div className="search-result-container absolute" >
     {
  destinationOptions && destinationOptions.map(({address, city})=> (
    <p className='p cursor-pointer' onClick={()=>handleSearchResultClick(address)}>
       {address}, {city}   
    </p>
   ))
     }
    </div>) 
    }
 
</div>
  )
}

export default SearchStayWithDate
