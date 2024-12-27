export const getFilteredHotelByRating = (hotels, ratingValue)=> {
    if(ratingValue==="1"){
        return hotels
    }
       const filteredHotels = hotels.filter(({rating})=> (rating===ratingValue));
       return filteredHotels;
}