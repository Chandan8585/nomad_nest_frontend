import React, { Fragment, useEffect, useState } from 'react'
import { useCategory } from '../../context/category-context';
import { useDate } from '../../context/date-context';
import axios from 'axios';
import Navbar from '../../components/navbar/Navbar';
import HotelCard from '../../components/hotel/HotelCard';
import "./SearchResults.scss"
const SearchResults = () => {
    const [hotel, setHotel] = useState([]);
    const {hotelCategory} = useCategory();
    const {destination} = useDate();
    useEffect(()=>{
     (async()=>{
        try {
          const {data} = await axios.get(`https://nomad-nest-backend.onrender.com/api/hotels?category=${hotelCategory}`)
          setHotel(data);
        } catch (error) {
            console.log(error);
        }
     })()
    }, [destination , hotelCategory])
    const filterHotelData = hotel.filter(({address, city, state})=> (
        address.toLowerCase() === destination.toLocaleLowerCase() ||
        city.toLowerCase() === destination.toLocaleLowerCase()  || 
        state.toLowerCase() === destination.toLocaleLowerCase() 

    ))
  return (
    <Fragment>
        <Navbar/>
        <section className='hotels-section d-flex align-center '>
            {
                filterHotelData ? filterHotelData.map((hotel)=> (
                    <HotelCard hotel={hotel} key={hotel._id}/>
                ))
                : (<h1>No Hotel Found</h1>)
            }
        </section>
    </Fragment>
  )
}

export default SearchResults