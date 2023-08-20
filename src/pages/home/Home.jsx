import React, { Fragment, useEffect, useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import axios from "axios";
import "./home.scss"
import HotelCard from '../../components/hotel/HotelCard';
import InfiniteScroll from "react-infinite-scroll-component";
import Category from '../../components/category/Category';
const Home = () => {
    const [hotelData , setHotelData] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(16);
    const [testData , setTestData] = useState([]);
    const [hasMore, setHasMore] = useState(true);


    useEffect(()=> {
   (async()=> {
 try {
    const {data} = await axios.get("https://nomad-nest-backend.onrender.com/api/hotels");
    setTestData(data);
    setHotelData(data ? data.slice(0,16) : []);
 } catch (error) {
    console.log(error);
 }
     })();
    },[])

   const fetchMoreData = ()=> {
    if(hotelData.length >= testData.length){
        setHasMore(false);
        return
    }
    setTimeout(()=> {
        if(hotelData && hotelData.length > 0){
              setHotelData(hotelData.concat(testData.slice(currentIndex, currentIndex + 16)))
              setCurrentIndex(prev=> prev + 16);
            }
      else{
        setHotelData([])
      }
      }, 1000)  
   };

     
  return (
    <Fragment>
        <Navbar/>
        <Category/>
        <main>
            { hotelData && hotelData.length > 0 ? (
        <InfiniteScroll
  dataLength={hotelData.length} //This is important field to render the next data
  next={fetchMoreData}
  hasMore={hasMore}
  loader={ hotelData.length > 0 && <h3 className='loading'>Loading...</h3>}
  endMessage={<p>You have seen it all</p>}
>
<main className='main d-flex align-center wrap gap-larger'>
        {
           hotelData && hotelData.map((hotel)=> (<HotelCard hotel={hotel} key={hotel._id}/>))
        }
</main>
</InfiniteScroll>
            ) : (<></>)
}
        </main>
    </Fragment>
  )
}

export default Home