

export const getHotelsByPrice = (hotels, priceRangeValuee)=>{
      const filterHotels = hotels.filter((hotel)=> (hotel.price >= priceRangeValuee[0] && hotel.price <= priceRangeValuee[1])) ;
      return filterHotels;
}