import React from 'react'
const ratings = ["1", '2', '3','4', '5']
const Rating = () => {
  return (
    <div className="filter-container">
      <span className="filter-label">Ratings</span>
      <div className="d-flex align-center gap">
        {ratings.map((rating) => (
          <span
            className="span-label aminity-count star d-flex align-center justify-center cursor-pointer on-hover"
            key={rating}
            
          >
            {rating} &Up
          </span>
        ))}
      </div>
    </div>
  )
}

export default Rating