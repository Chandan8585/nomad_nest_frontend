import React from 'react'
import { useFilter } from '../../../context/filter-context';

const numberOfAmenities = ["Any", "1", "2", "3", "4", "5+"];
const RoomsAndBeds = () => {
    const { filterDispatch, noOfBathrooms, noOfBedrooms ,noOfBeds} = useFilter();
    const handleNoOfBathroomsClick = (number)=> {
        filterDispatch({
            type: "No_OF_BATHROOMS",
            payload: number
        })
    }
    const handleNoOfBedroomsClick = (number)=> {
        filterDispatch({
            type: "No_OF_BEDROOMS",
            payload: number
        })
    }
    const handleNoOfBedsClick = (number)=> {
        filterDispatch({
            type: "No_OF_BEDS",
            payload: number
        })
    }
    
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
        <div className='d-flex direction-row gap'>
            {
                numberOfAmenities.map((number)=> {
                    return(
                        <span className= {`span-label aminity-count align-center justify-center cursor-pointer on-hover 
                        ${noOfBedrooms.toString()===number ? "selected": ""}`}
                        key={number} 
                           onClick={()=> handleNoOfBedroomsClick(number)}
                        >
                        {number}
                        </span>
                    )
                })
            }
        </div>
        <div className='d-flex direction-row gap' >
            {
                numberOfAmenities.map((number)=> {
                    return(
                        <span className= {`span-label aminity-count align-center justify-center cursor-pointer on-hover 
                        ${noOfBeds.toString()===number ? "selected": ""}`}
                         key={number}
                        onClick={()=> handleNoOfBedsClick(number)}
                        >
                        {number}
                        </span>
                    )
                })
            }
        </div>
        
        <div className='d-flex direction-row gap'>
            {
                numberOfAmenities.map((number)=> {
                    return(
                        <span className={`span-label aminity-count align-center justify-center cursor-pointer on-hover ${noOfBathrooms.toString() === number ? "selected" : ""}`}
                         key={number}
                          onClick={()=> handleNoOfBathroomsClick(number)}  
                        >
                        {number}
                        </span>
                    )
                })
            }
        </div>
        </div>
        </div>
    </div>
  )
}

export default RoomsAndBeds