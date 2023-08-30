import React from 'react'
import { useFilter } from '../../../context/filter-context'
const ratings = ['1', '2', '3','4', '5']
const Rating = () => {
    const { ratingSelected, filterDispatch} = useFilter();
    const handleRatingClick = (rating)=> {
           filterDispatch({
            type: "SELECTED_RATING",
            payload: rating
           })
    }
  return (
    <div className="filter-container">
      <span className="filter-label">Ratings</span>
      <div className="d-flex align-center gap">
        {ratings.map((rating) => (
          <span
            className={`span-label aminity-count star d-flex align-center justify-center cursor-pointer on-hover ${ratingSelected === rating? "selected" : ""}` }
            key={rating}
            onClick={()=> handleRatingClick(rating)}
          >
            {rating} &Up
          </span>
        ))}
      </div>
    </div>
  )
}

export default Rating