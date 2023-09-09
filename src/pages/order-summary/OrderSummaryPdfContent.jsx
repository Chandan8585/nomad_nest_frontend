// OrderSummaryPdfContent.jsx
import React from 'react';
import { Page, Text, Image, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    margin: 10,
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

const OrderSummaryPdfContent = ({ orderData }) => {
  const { name, checkInDate, checkOutDate, address, state, totalPayableAmount, image, OrderId } = orderData;

  return (
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>Order Summary</Text>
        <Text>Hotel: {name}</Text>
        <Text>Check-in Date: {checkInDate}</Text>
        <Text>Check-out Date: {checkOutDate}</Text>
        <Text>Total Amount: Rs. {totalPayableAmount}</Text>
        <Text>Address: {address} {state}</Text>
        <Text>Order ID: {OrderId}</Text>
        <Image src={image} style={styles.image} />

      </View>
    </Page>
  );
};

export default OrderSummaryPdfContent;
