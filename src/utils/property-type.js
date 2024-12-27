export const getFilteredPropertyByType = (hotels, type)=> {
    if(type === "Any"){
        return hotels;
    }
     const filteredHotels =  hotels.filter(({propertyType})=> (propertyType === type));
     return filteredHotels;

}