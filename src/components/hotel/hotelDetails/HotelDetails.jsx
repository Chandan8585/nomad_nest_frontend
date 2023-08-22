
import "./HotelDetails.scss"
const HotelDetails = ({singleHotel}) => {
    console.log("single hotel",singleHotel);
   const { hostName ,hostJoinedOn,numberOfBathrooms,numberOfBeds,numberOfguest,numberOfBedrooms,numberOfStudies, ameneties, healthAndSafety, houseRules,rating} = singleHotel
   console.log("healthandSafety", healthAndSafety);
   console.log("houseRules", houseRules);
   console.log("Amenities", ameneties);
   return (
    <div className="hotel-details-container">
    <div className="host-details">
      <p className="host-name p">
        Hosted by {hostName}, Joined on {hostJoinedOn}
      </p>
      <div className="span hotel-room-details">
        {numberOfguest} guests. {numberOfBeds} bedrooms. 
       {numberOfBedrooms} beds. {numberOfBathrooms} bathrooms. {numberOfStudies} studyrooms
      </div>
    </div>
    <div className="key-features host-details">
      <div className="gutter-bottom-small">
        <p className="p d-flex align-center gap">
          <span class="apps material-icons-outlined">apps</span>Dedicated
          Workspace
        </p>
        <span className="span">
          A common area with wifi that is well suited for working
        </span>
      </div>
      <div className="gutter-bottom-small">
        <p className="p d-flex align-center gap">
          <span class="apps material-icons-outlined">apps</span>Great Location
        </p>
        <span className="span">
          80% of recent guests gave the location a {rating}-star rating
        </span>
      </div>
      <p className="p d-flex align-center gap">
        <span class="apps material-icons-outlined">apps</span>Free
        cancellation before 7 days of booking
      </p>
    </div>
    <div className="amenities-container">
      <p className="p amenities">What this place offers</p>
      <div className="d-flex gap-xxl">
        <div className="d-flex direction-column">
            {
                ameneties && ameneties.map((amenity,index)=>(
                    <span className="span d-flex align-center gap" key={index}>
                    <span class="apps material-icons-outlined">apps</span>{amenity}
                  </span>
                ))
            }
        </div>
        <div className="d-flex direction-column">
            {
               healthAndSafety && healthAndSafety.map((item,index)=>(
                    <span className="span d-flex align-center gap" key={index}>
                    <span class="apps material-icons-outlined">apps</span>{item}
                  </span>
                ))
            }
        </div>
      </div>
      </div>
      <div className="amenities-container">
      <p className="p amenities">Rules and Regulations</p>
      <div className="d-flex gap-xxl">
        <div className="d-flex direction-column">
            {
               houseRules && houseRules.map((rule,index)=>(
                    <span className="span d-flex align-center gap" key={index}>
                    <span class="apps material-icons-outlined">apps</span>{rule}
                  </span>
                ))
            }
        </div>
   
      </div>
    </div>
  </div>
  )
}

export default HotelDetails