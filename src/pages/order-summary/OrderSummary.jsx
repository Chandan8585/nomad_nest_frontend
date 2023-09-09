import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import "./orderSummary.scss";
import { useDate } from '../../context/date-context';
import { v4 as uuid } from "uuid";
import jsPDF from 'jspdf'; // Import jsPDF
import html2canvas from 'html2canvas';
const OrderSummary = () => {
  const [singleHotel, setSingleHotel] = useState({});
  const { checkInDate, checkOutDate } = useDate();
  const { id } = useParams();
  const OrderId = uuid();

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(`https://nomad-nest-backend.onrender.com/api/hotels/${id}`);
        setSingleHotel(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [id]);

  const { image, name, address, state, price } = singleHotel;

  const numberOfNights = checkInDate && checkOutDate
    ? (checkOutDate.getTime() - checkInDate.getTime()) / (1000 * 3600 * 24)
    : 0;
  const totalPayableAmount = price * numberOfNights + 150;

  
  const downloadPDF = async () => {
    const doc = new jsPDF();
  
    // Define the content to be added to the PDF
    const content = `
      Order Summary
      Hotel: ${name}
      Check-in Date: ${checkInDate && checkInDate.toLocaleDateString("en-US", {
        day: "numeric",
        month: "short",
      })}
      Check-out Date: ${checkInDate && checkOutDate.toLocaleDateString("en-US", {
        day: "numeric",
        month: "short",
      })}
      Total Amount: Rs. ${totalPayableAmount}
      Address: ${address} ${state}
      Order ID: ${OrderId}
    `;
  
    // Add content to the PDF
    doc.text(content, 10, 10);
  
    // Capture the image as a base64 data URI
    const imageElement = document.getElementById('image-element');
    
    if (imageElement) {
      const image = await html2canvas(imageElement);
      const imageData = image.toDataURL('image/jpeg');
  
      // Add the captured image to the PDF
      doc.addImage(imageData, 'JPEG', 10, 50, 100, 100);
  
      // Save the PDF as 'order_summary.pdf'
      doc.save('order_summary.pdf');
    } else {
      console.error('Image element not found.');
    }
  };
  
  

  return (
    <div className="order-summary-container">
   
      <div className="order-summary">
      <button onClick={downloadPDF} className='download-pdf-btn'>Download PDF</button>
        <h1>Order Summary</h1>
        <div className="order-details">
          <h2>Booking Details</h2>
          <p>Hotel: {name}</p>
          <p>Check-in Date: {checkInDate && checkInDate.toLocaleDateString("en-US", {
            day: "numeric",
            month: "short",
          })}</p>
          <p>Check-out Date: {checkInDate && checkOutDate.toLocaleDateString("en-US", {
            day: "numeric",
            month: "short",
          })}</p>
          <p>Total Amount: Rs. {totalPayableAmount}</p>
          <p>Address: {address}{" "}{state}</p>
          <div>
            <img src={image} alt="" className='object-fit image' id='image-element'/>
          </div>
          <p>Order ID: {`${OrderId}`}</p>
        </div>
      

      </div>
    </div>
  );
};

export default OrderSummary;
