import React from 'react'
import "./HotelImage.scss"
const HotelImage = ({singleHotel}) => {
    const {image, imageArr} = singleHotel
    console.log(image)
  return (
    <div className='hotel-image-container d-flex gap-small'>
        <div className="primary-image-container">
            <img className="primary-img" src={image} alt="" />
        </div>
        <div className="d-flex wrap gap-small">
            {
               imageArr && imageArr.map((image)=> (
            
                    <img 
                    src={image} 
                    className='hotel-img'
                    alt={image}
                    key={image}
                    />
                
                ))
            }
        </div>
    </div>
  )
}

export default HotelImage
