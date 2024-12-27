import React from 'react'
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import "./priceRange.scss";
import { useFilter } from '../../../context/filter-context';

const minDifference = 500;
function valuetext(value){
  return `${value}`;
}
const PriceRange = () => {
  const {priceRangeValue, filterDispatch} = useFilter();
  
  const handlePriceChange = (event, newValue, activeThumb)=> {
    if(!Array.isArray(newValue)){
      return;
    }
    if(activeThumb===0){
      filterDispatch({
        type: "MINIMUM_PRICE",
        payload: {
          newValue,
          priceRangeValue,
          minDifference
        },
      });
    } else{
      filterDispatch({
        type: "MAXIMUM_PRICE",
        payload:{
          newValue,
          priceRangeValue,
          minDifference,
        }
      })
    }
  }
return (
    <div className='filter-container'>
<span className="filter-label">Price Range</span>
          <Box sx={{ width: "90%" }}>
    <Slider 
    sx={{ color: "rgb(103, 67, 56)" }}
      getAriaLabel={() => 'Minimum Difference'}
      value={priceRangeValue}
      valueLabelDisplay="on"
      getAriaValueText={valuetext}
      min={100}
      max={25000}
     onChange={handlePriceChange}
    />
  </Box>
    </div>

);
}


export default PriceRange
