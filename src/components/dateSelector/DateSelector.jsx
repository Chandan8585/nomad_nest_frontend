import React from 'react'
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";
import "./dateSelector.scss"
const DateSelector = ({placeholder , checkInType}) => {
  return (
    <div>
      <DatePicker 
      placeholder = {placeholder}
      
      />
    </div>
  )
}

export default DateSelector