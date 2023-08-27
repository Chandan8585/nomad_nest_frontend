import React from 'react'
import "./FreeCancel.scss"
const FreeCancel = () => {
  return (
    <div className="filter-container">
    <div className="d-flex align-center gap-larger">
      <span className="filter-label">Free Cancelation</span>
      <label className="slide">
        <input
          type="checkbox"
        />
        <span className="slider round"></span>
      </label>
    </div>
  </div>
  )
}

export default FreeCancel