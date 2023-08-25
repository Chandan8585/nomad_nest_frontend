import React, { Fragment, useEffect, useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import { useParams } from 'react-router-dom'
import HotelImage from '../../components/hotel/hotelImages/HotelImage';
import axios from 'axios';
import "./singleHotel.scss"
import HotelDetails from '../../components/hotel/hotelDetails/HotelDetails';
import FinalPrice from '../../components/hotel/finalPrice/FinalPrice';
const SingleHotel = () => {
    const {id} = useParams();
    
    const [singleHotel, setSingleHotel] = useState({});
    
    

    useEffect(()=> {
         (async()=> {
            try {
            const {data} =await axios.get(`https://nomad-nest-backend.onrender.com/api/hotels/${id}`);
            
            setSingleHotel(data);
           
            } catch (error) {
                console.log(error)
            }
         } )()
    }, [id]);
     const {name, state} = singleHotel
     
  return (
    <Fragment>
        <Navbar/>
        <main className='single-hotel-page'>
            <span>{name}, {state}</span>
        <HotelImage singleHotel= {singleHotel}/>
        <div className='d-flex'>
          <HotelDetails singleHotel={singleHotel}/>
          
          <FinalPrice singleHotel={singleHotel}/>
        </div>
        </main>
        
    </Fragment>
  )
}

export default SingleHotel