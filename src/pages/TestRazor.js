import React, { useState } from "react";
import axios from "axios";

const loadScript = (src) => {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve();
    };
    script.onerror = () => {
      reject(new Error(`Failed to load script: ${src}`));
    };
    document.head.appendChild(script);
  });
};

const Payment = () => {
  const [orderId, setOrderId] = useState();

  const initializeRazorpay = async () => {
    await loadScript("https://checkout.razorpay.com/v1/checkout.js");

    const orderData = {
      amount: 1000,
      currency: "INR",
    };

    // Make a request to your backend to create a new order
    const response = await axios.post(
      "http://localhost:4400/api/auth/create-order",
      orderData
    );

    const { amount, currency } = response.data;
    console.log(response.data);

    const options = {
      key: "rzp_test_BGDch2dcTs1gNs",
      amount: amount,
      currency: currency,
      name: "Your Company Name",
      description: "Description of the purchase",
      handler: function (response) {
        console.log(response);
      },
      prefill: {
        name: "User Name",
        email: "user@example.com",
      },
    };

    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };

  return (
    <div>
      <button onClick={initializeRazorpay}>Pay Now</button>
    </div>
  );
};

export default Payment;
