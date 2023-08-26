import React from 'react'
import { v4 as uuid } from "uuid";

  const PropertyTypes = [{id: uuid(), type: "House"}, {id: uuid(), type: "Flat"},{id: uuid(), type: "Guest House"},{id: uuid(), type: "Hotels"}]
const PropertyType = () => {
  return (
    <div className="filter-container">
      <span className="filter-label">Property Type</span>
      <div className="d-flex gap-larger">
        {PropertyTypes.map(({ id, type }) => (
          <span
            className={`span-label property-type cursor-pointer align-center justify-center`}
            key={id}
        >
            {type}
          </span>
        ))}
      </div>
    </div>

  )
}

export default PropertyType