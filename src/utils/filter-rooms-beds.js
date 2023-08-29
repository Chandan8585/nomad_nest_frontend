export const getHotelsByNumberOfRoomsAndBeds = (hotels, noOfBathrooms, noOfBedrooms, noOfBeds)=> {
          if(noOfBathrooms==="Any" || noOfBedrooms==="Any" || noOfBeds==="Any"){
            return hotels;
          }
        const filterByRoomsAndBeds = hotels.filter(({numberOfBathrooms, numberOfBeds, numberOfBedrooms}) => (
            Number(noOfBathrooms) === numberOfBathrooms && Number(noOfBedrooms)=== numberOfBedrooms && Number(noOfBeds) === numberOfBeds
        ))
        return filterByRoomsAndBeds;
}