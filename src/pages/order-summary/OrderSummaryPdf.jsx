// OrderSummaryPdf.jsx
import React from 'react';
import { PDFViewer } from '@react-pdf/renderer';
import OrderSummaryPdfContent from './OrderSummaryPdfContent';

const OrderSummaryPdf = ({ orderData }) => {
  return (
    <PDFViewer width="100%" height="500">
      <OrderSummaryPdfContent orderData={orderData} />
    </PDFViewer>
  );
};

export default OrderSummaryPdf;
