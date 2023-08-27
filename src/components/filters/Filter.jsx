import React from 'react'
import PriceRange from './priceRange/PriceRange'
import "./filter.scss"
import RoomsAndBeds from './roomsAndBeds/RoomsAndBeds'
import PropertyType from './propertyType/PropertyType'
import Rating from './rating/Rating'
import FreeCancel from './freeCancel/FreeCancel'
const Filter = () => {
  return (
    <div className='filter-modal'>
        <div className="filter-page shadow">
            <div className="d-flex justify-space-between align-center">
                <span className="filter-label">Filter</span>
                <button className="btn btn-close cursor-pointer">
                <span class="material-symbols-outlined">
               close
                </span> 
                </button>
            </div>
            <PriceRange/>
            <RoomsAndBeds/>
            <PropertyType/>
            <Rating/>
            <FreeCancel/>
            <div className="d-flex align-center justify-space-between">
              <button className="button cursor btn-link-primary">Clear ALL</button>
              <button className="button cursor btn-primary btn-apply">Apply </button>
            </div>
        </div>
    </div>
  )
}

export default Filter