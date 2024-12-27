import React from 'react'
import "./FreeCancel.scss"
import { useFilter } from '../../../context/filter-context'
const FreeCancel = () => {
    const {filterDispatch, isCancellable} = useFilter();
    console.log(isCancellable);
    const handleInputChange= (event)=>{
        filterDispatch({
            type: "CANCELABLE",
            payload : event.target.checked
        })
    }
  return (
    <div className="filter-container">
    <div className="d-flex align-center gap-larger">
      <span className="filter-label">Free Cancellation</span>
      <label className="slide">
        <input
          type="checkbox" onChange={(event)=> handleInputChange(event)} value={isCancellable} checked={isCancellable}
        />
        <span className="slider round"></span>
      </label>
    </div>
  </div>
  )
}

export default FreeCancel