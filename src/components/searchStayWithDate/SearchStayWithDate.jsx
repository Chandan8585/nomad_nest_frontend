import React, { useState } from 'react'
import "./SearchStayWithDate.scss"
import DateSelector from '../dateSelector/DateSelector'
const SearchStayWithDate = () => {
    const [state, setState] = useState();
  return (
    <div className="destination-container">
    <div className="d-flex align-center justify-center destination-options">
        <div className="location-search loc-container">
            <label className="label">Where</label>
            <input className="search-dest input"  />
        </div>
        <div className="checkin loc-container">
            <label className="label">Check in</label>
            <DateSelector placeholder="checkIn" checkType="checkIn"/>
        </div>
        <div className="checkout loc-container">
            <label className="label">Check out</label>
            <DateSelector placeholder="check out" checkType="checkOut"/>
        </div>
        <div className="guest loc-container">
            <label className="label">No. of Guests</label>
            <input className="search-dest input" type="number" placeholder="Add guests"  />
        </div>
        <div className="search-con d-flex align-center cursor" >
            <span className="material-icons-outlined cursor-pointer">
                search
            </span>
            Search
        </div>
    </div>
    <div className="search-result-container">
     {isSearchModalOpen && }
    </div>
</div>
  )
}

export default SearchStayWithDate