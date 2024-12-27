import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './dateSelector.scss';
import { useDate } from '../../context/date-context';

const DateSelector = ({ placeholder, checkInType }) => {
  const { checkInDate, checkOutDate, dateDispatch } = useDate();
  const handleDateChange = (date) => {
    if (checkInType === 'out' && checkInDate && date <= checkInDate) {
      date = new Date(checkInDate.getTime() + 24 * 60 * 60 * 1000); // Add 1 day to check-in date
    }
    dateDispatch({
      type: checkInType === 'in' ? 'CHECK_IN' : 'CHECK_OUT',
      payload: date,
    });
  };


  const handleDateFocus = () => {
    dateDispatch({
      type: 'DATE_FOCUS',
    });
  };

  return (
    <div>
      <DatePicker
        placeholder={placeholder}
        onChange={(date) => handleDateChange(date)}
        selected={checkInType === 'in'  ? checkInDate : checkOutDate}
        closeOnScroll={true}
        className="search-dest input"
        onFocus={handleDateFocus}
        dateFormat="dd/MM/yyyy"
        // minDate={new Date()}
        minDate={checkInType === 'out' ? checkInDate || new Date() : new Date()} // Dynamic minDate

      />
    </div>
  );
};

export default DateSelector;

