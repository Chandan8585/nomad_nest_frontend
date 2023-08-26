import React from 'react'
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import "./priceRange.scss";
const value = 10;
function valuetext(value){
  return `${value}`;
}
const PriceRange = () => {;
return (
    <div className='filter-container'>
<span className="filter-label">Price Range</span>
          <Box sx={{ width: "90%" }}>
    <Slider 
    sx={{ color: "darkOrange" }}
      getAriaLabel={() => 'Minimum Difference'}
      value={value}
      valueLabelDisplay="on"
      getAriaValueText={valuetext}
      min={100}
      max={25000}

    />
  </Box>
    </div>

);
}


export default PriceRange
