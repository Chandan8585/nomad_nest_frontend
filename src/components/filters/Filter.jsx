import React from 'react'
import PriceRange from './priceRange/PriceRange'
import "./filter.scss"
import RoomsAndBeds from './roomsAndBeds/RoomsAndBeds'
import PropertyType from './propertyType/PropertyType'
import Rating from './rating/Rating'
import FreeCancel from './freeCancel/FreeCancel'
import { useFilter } from '../../context/filter-context'
const Filter = () => {
  const {filterDispatch} = useFilter();
  const handleFilterModalClose =()=>{
        filterDispatch({
          type: "CLOSE_FILTER_MODAL"
        })
  }
  const handleClearAllFeature = ()=>{
    filterDispatch({
      type: "CLEAR_ALL"
    })
  }
  return (
    <div className='filter-modal'>
        <div className="filter-page shadow">
            <div className="d-flex justify-space-between align-center">
                <span className="filter-label">Filter</span>
                <button className="btn btn-close cursor-pointer" onClick={handleFilterModalClose}>
                <span class="material-icons-outlined">
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
              <button className="button cursor btn-link-primary" onClick={handleClearAllFeature}>Clear ALL</button>
              <button className="button cursor btn-primary btn-apply" onClick={handleFilterModalClose}>Apply </button>
            </div>
        </div>
    </div>
  )
}

export default Filter