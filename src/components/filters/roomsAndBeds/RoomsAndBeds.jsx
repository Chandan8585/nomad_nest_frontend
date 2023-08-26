import React from 'react'

const numberOfAmenities = ["Any", "1", "2", "3", "4", "5+"];
const RoomsAndBeds = () => {
  return (
    <div className='filter-container'>
       <span className='filter-label'>Rooms And Beds</span>
       <div className="d-flex align-center gap-large">
        <div className="d-flex direction-column gap">
          <span className="span-label">Bedrooms</span>
          <span className="span-label">Beds</span>
          <span className="span-label">Bathrooms</span>
        </div>
        <div className='d-flex direction-column gap'>
            {
                numberOfAmenities.map((number)=> {
                    return(
                        <span className='span-label aminity-count align-center justify-center cursor-pointer on-hover' key={number}>
                        {number}
                        </span>
                    )
                })
            }
        </div>
        <div className='d-flex direction-column gap' >
            {
                numberOfAmenities.map((number)=> {
                    return(
                        <span className='span-label aminity-count align-center justify-center cursor-pointer on-hover' key={number}>
                        {number}
                        </span>
                    )
                })
            }
        </div>
        <div className='d-flex direction-column gap'>
            {
                numberOfAmenities.map((number)=> {
                    return(
                        <span className='span-label aminity-count align-center justify-center cursor-pointer on-hover' key={number}>
                        {number}
                        </span>
                    )
                })
            }
        </div>
    </div>
    </div>
  )
}

export default RoomsAndBeds