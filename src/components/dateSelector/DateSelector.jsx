import React from 'react'
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";
import "./DateSelector.scss"
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