import React, { useState } from "react";

function PaymentCC() {
  const [formData, setFormData] = useState({
    merchant_id: "",
    order_id: "",
    currency: "INR",
    amount: "1.00",
    redirect_url: "http://127.0.0.1:3001/ccavResponseHandler",
    cancel_url: "http://127.0.0.1:3001/ccavResponseHandler",
    language: "EN",
    billing_name: "Peter",
    billing_address: "Santacruz",
    billing_city: "Mumbai",
    billing_state: "MH",
    billing_zip: "400054",
    billing_country: "India",
    billing_tel: "9876543210",
    billing_email: "testing@domain.com",
    delivery_name: "Sam",
    delivery_address: "Vile Parle",
    delivery_city: "Mumbai",
    delivery_state: "Maharashtra",
    delivery_zip: "400038",
    delivery_country: "India",
    delivery_tel: "0123456789",
    merchant_param1: "additional Info.",
    merchant_param2: "additional Info.",
    merchant_param3: "additional Info.",
    merchant_param4: "additional Info.",
    merchant_param5: "additional Info.",
    promo_code: "",
    customer_identifier: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform form submission logic here.
  };

  return (
    <div>
      <form
        method="POST"
        name="customerData"
        action="/ccavRequestHandler"
        onSubmit={handleSubmit}
      >
        <table width="40%" height="100" border="1" align="center">
          <caption>
            <font size="4" color="blue">
              <b>Integration Kit</b>
            </font>
          </caption>
        </table>
        <table width="40%" height="100" border="1" align="center">
          <tbody>
            {/* Render form fields */}
            {Object.entries(formData).map(([fieldName, fieldValue]) => (
              <tr key={fieldName}>
                <td>{fieldName.replace(/_/g, " ")}</td>
                <td>
                  <input
                    type="text"
                    name={fieldName}
                    value={fieldValue}
                    onChange={handleChange}
                  />
                </td>
              </tr>
            ))}
            <tr>
              <td></td>
              <td>
                <input type="submit" value="Checkout" />
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
}

export default PaymentCC;
