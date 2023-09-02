import React, { Fragment, useEffect, useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import axios from "axios";
import "./home.scss"
import HotelCard from '../../components/hotel/HotelCard';
import InfiniteScroll from "react-infinite-scroll-component";
import Category from '../../components/category/Category';
import { useCategory } from '../../context/category-context';
import { useDate } from '../../context/date-context';
import SearchStayWithDate from '../../components/searchStayWithDate/SearchStayWithDate';
import { useFilter } from '../../context/filter-context';
import Filter from '../../components/filters/Filter';
import { getHotelsByPrice } from '../../utils/price-range';
import { getHotelsByNumberOfRoomsAndBeds } from '../../utils/filter-rooms-beds';
import { getFilteredPropertyByType } from '../../utils/property-type';
import { getFilteredHotelByRating } from '../../utils/filter-rating';
import { getFilteredByCancellableHotels } from '../../utils/filter-cancellable';
import { useAuth } from '../../context/auth-context';
import AuthModal from '../../components/AuthModal/AuthModal';

const Home = () => {
    const [hotelData , setHotelData] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(16);
    const [testData , setTestData] = useState([]);
    const [hasMore, setHasMore] = useState(true);
    const [loading, setLoading] = useState(false);
   const {isSearchModalOpen} = useDate();
   const {isAuthModalOpen} = useAuth();
const {hotelCategory} = useCategory();
const {priceRangeValue, isFilterModalOpen, noOfBathrooms, noOfBeds, noOfBedrooms, propertyType, ratingSelected , isCancellable} = useFilter();

    useEffect(()=> {
   (async()=> {
 try {
    const {data} = await axios.get(`https://nomad-nest-backend.onrender.com/api/hotels?category=${encodeURIComponent(hotelCategory)}`);
    
    setLoading(true);
    setTestData(data);
    setHotelData(data ? data.slice(0,16) : []);
 } catch (error) {
    console.log(error);
    setLoading(true);
 }
     })();
    },[hotelCategory])



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

    const filterHotelByPrice = getHotelsByPrice(hotelData, priceRangeValue);
    const filterHotelByRoomsAndBeds = getHotelsByNumberOfRoomsAndBeds(filterHotelByPrice, noOfBathrooms, noOfBeds, noOfBedrooms);
    const filterHotelByPropertyType = getFilteredPropertyByType(filterHotelByRoomsAndBeds, propertyType);
    const filterHotelByRating = getFilteredHotelByRating(filterHotelByPropertyType, ratingSelected);
    const filteredHotelByIsCancellable = getFilteredByCancellableHotels(filterHotelByRating, isCancellable);
  return (
    <Fragment>
      <main> 
      { loading ? (
        <>  
        <Navbar/>
        <Category/>
       
        <main>
    
            { hotelData && hotelData.length > 0 ? (
        <InfiniteScroll
  dataLength={hotelData.length} //This is important field to render the next data
  next={fetchMoreData}
  hasMore={hasMore}
  loader={ hotelData.length > 0 && <h3 className='loading alert-text'>Loading...</h3>}
  endMessage={<p>You have seen it all</p>}
>
<main className='main d-flex align-center wrap gap-larger'>
        {
           filteredHotelByIsCancellable && filteredHotelByIsCancellable.map((hotel)=> (<HotelCard hotel={hotel} key={hotel._id}/>))
        }
</main>
</InfiniteScroll>
            ) : (<></>)
}
        </main> 
        </>
        ) : (
        <h1>Loading...</h1>
      ) 
} 
</main>
{
  isSearchModalOpen && <SearchStayWithDate/>
}
{ 
            isFilterModalOpen && <Filter/>
}
{
          isAuthModalOpen && <AuthModal/>
}
    </Fragment>
  )
}

export default Home