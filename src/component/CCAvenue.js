import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";

const CCAvenuePayment = () => {
  const [paymentData, setPaymentData] = useState({
    cardNumber: "",
    expiryMonth: "",
    expiryYear: "",
    cvv: "",
    order_id: "", // Add order_id field
    amount: "", // Add amount field
    // Add any other necessary fields
  });

  const handlePayment = async () => {
    try {
      // Send paymentData to the backend for processing
      const response = await axios.post(
        "http://localhost:4400/api/auth/ccAvenuePay",
        paymentData
      );

      // Redirect the user to CCAvenue's payment page
      window.location.href = response.data.paymentUrl;
    } catch (error) {
      // Handle errors (e.g., network issues, server errors, etc.)
      console.error("Error:", error);
    }
  };

  return (
    <>
      <Container>
        <div className="container">
          <h2>CCAvenue Payment</h2>
          <div className="form-group">
            <label htmlFor="cardNumber">Card Number</label>
            <input
              type="text"
              id="cardNumber"
              placeholder="Card Number"
              value={paymentData.cardNumber}
              onChange={(e) =>
                setPaymentData({ ...paymentData, cardNumber: e.target.value })
              }
            />
          </div>
          <div className="form-group">
            <label htmlFor="expiryMonth">Expiry Month</label>
            <input
              type="text"
              id="expiryMonth"
              placeholder="MM"
              value={paymentData.expiryMonth}
              onChange={(e) =>
                setPaymentData({ ...paymentData, expiryMonth: e.target.value })
              }
            />
          </div>
          <div className="form-group">
            <label htmlFor="expiryYear">Expiry Year</label>
            <input
              type="text"
              id="expiryYear"
              placeholder="YYYY"
              value={paymentData.expiryYear}
              onChange={(e) =>
                setPaymentData({ ...paymentData, expiryYear: e.target.value })
              }
            />
          </div>
          <div className="form-group">
            <label htmlFor="cvv">CVV</label>
            <input
              type="text"
              id="cvv"
              placeholder="CVV"
              value={paymentData.cvv}
              onChange={(e) =>
                setPaymentData({ ...paymentData, cvv: e.target.value })
              }
            />
          </div>
          <div className="form-group">
            <label htmlFor="order_id">Order ID</label>
            <input
              type="text"
              id="order_id"
              placeholder="Order ID"
              value={paymentData.order_id}
              onChange={(e) =>
                setPaymentData({ ...paymentData, order_id: e.target.value })
              }
            />
          </div>
          <div className="form-group">
            <label htmlFor="amount">Amount</label>
            <input
              type="text"
              id="amount"
              placeholder="Amount"
              value={paymentData.amount}
              onChange={(e) =>
                setPaymentData({ ...paymentData, amount: e.target.value })
              }
            />
          </div>
          {/* Add any other necessary input fields */}
          <button onClick={handlePayment}>Pay Now</button>
        </div>
      </Container>
    </>
  );
};

export default CCAvenuePayment;
const Container = styled.div``;
