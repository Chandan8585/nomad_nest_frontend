import React, { Fragment, useEffect, useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import { useParams } from 'react-router-dom'
import HotelImage from '../../components/hotel/hotelImages/HotelImage';
import axios from 'axios';
import "./singleHotel.scss"
import HotelDetails from '../../components/hotel/hotelDetails/HotelDetails';
import FinalPrice from '../../components/hotel/finalPrice/FinalPrice';
const SingleHotel = () => {
    const {_id} = useParams();
    
    const [singleHotel, setSingleHotel] = useState({});
    console.log("check",{_id});
    

    useEffect(()=> {
         (async()=> {
            try {
            const {data} =await axios.get(`https://nomad-nest-backend.onrender.com/api/hotels/:${_id}`);
            
            setSingleHotel(data);
           
            } catch (error) {
                console.log(error)
            }
         } )()
    }, []);
     const {name, state} = singleHotel
     console.log(singleHotel);
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