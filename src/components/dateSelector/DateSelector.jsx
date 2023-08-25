import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './dateSelector.scss';
import { useDate } from '../../context/date-context';

const DateSelector = ({ placeholder, checkInType }) => {
  const { checkInDate, checkOutDate, dateDispatch } = useDate();

  const handleDateChange = (date) => {
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
        selected={checkInType === 'in' ? checkInDate : checkOutDate}
        closeOnScroll={true}
        className="search-dest input"
        onFocus={handleDateFocus}
        dateFormat="dd/MM/yyyy"
      />
    </div>
  );
};

export default DateSelector;
