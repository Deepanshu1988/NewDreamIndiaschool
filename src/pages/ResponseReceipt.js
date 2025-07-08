import React, { useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import { styled } from "styled-components";
import axios from "axios";

const ResponseReceipt = () => {
  const [details, setDetails] = useState([]);
  const [currentAge, setCurrentAge] = useState(null);
  const [receipt, setReceipt] = useState([]);

  const getLastData = async () => {
    try {
      const res = await axios.get(
        "http://localhost:4400/api/auth/getLastStudent"
      );
      setDetails(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getLastReciept = async () => {
    try {
      const res = await axios.get(
        "http://localhost:4400/api/auth/getLastReceipt"
      );
      setReceipt(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getLastData();
    getLastReciept();
  }, []);

  function printDocument() {
    const printContents =
      document.getElementById("printable-section").innerHTML;
    const originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
  }

  // console.log(details.date_of_birth);
  useEffect(() => {
    if (details.date_of_birth) {
      const dob = new Date(details.date_of_birth);
      const currentDate = new Date();

      const yearDiff = currentDate.getFullYear() - dob.getFullYear();
      const monthDiff = currentDate.getMonth() - dob.getMonth();
      const dayDiff = currentDate.getDate() - dob.getDate();

      if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        setCurrentAge(yearDiff - 1);
      } else {
        setCurrentAge(yearDiff);
      }
    }
  }, [details.date_of_birth]);

  console.log(currentAge);

  console.log(details);

  console.log(receipt.time.split("T")[0]);
  const date = receipt.time.split("T")[0];
  return (
    <>
      <Layout title={"Response Receipt - Wings of Joys"}>
        <Container>
          <div id="printable-section">
            <div className="container receiptBox mt-3 border">
              <div className="headingPart border-bottom">
                <div className="row">
                  <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3">
                    <img
                      src="https://res.cloudinary.com/antrix/image/upload/v1692943490/woj/woj_circle_logo_eyc3mz.png"
                      alt="woj"
                      className="sideLogo"
                      style={{ height: "7rem" }}
                    />
                  </div>
                  <div className="col-xl-7 col-lg-7 col-md-7 col-sm-7 col-7">
                    <h2 className="text-center">Wings of Joy</h2>
                    <h6 className="text-center">
                      Campus of Wings of Joy, MR-4 Road, Near Muskan Plaza,
                      Jabalpur, Jabalpur (Madhya Pradesh)
                    </h6>
                    <h6 className="text-center">
                      Phone: +917612410880, Email: wingsofjoyjbp@gmail.com
                    </h6>
                    <h6 className="text-center">FEE RECEIPT [2023-24]</h6>
                  </div>
                  <div className="col-xl-2 col-lg-2 col-md-2 col-sm-12 col-12"></div>
                </div>
              </div>
              <div className="secondSec border-bottom">
                <div className="row mt-2">
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
                    <div>
                      <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
                          <h4 className="text-start">Receipt No.</h4>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
                          <p className="mt-2 text-start">: {receipt.receipt}</p>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
                          <h4 className="text-start">Candidate's Name</h4>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
                          <p className="mt-2 text-start">
                            : {details.firstname + " " + details.lastname}
                          </p>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
                          <h4 className="text-start">Form No. </h4>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
                          <p className="mt-2 text-start">: {receipt.pay_id}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
                    <div>
                      <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
                          <h4 className="text-start">Date</h4>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
                          <p className="mt-2 text-start">: {date}</p>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
                          <h4 className="text-start">Class</h4>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
                          <p className="mt-2 text-start">
                            : {details.class_for_admission}
                          </p>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
                          <h4 className="text-start">Father's Name</h4>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
                          <p className="mt-2 text-start">
                            : Mr. {details.father_name}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="descrpt border-bottom">
                <div className="row">
                  <div className="col-xl-8 col-lg-8 col-md-8 col-sm-6 col-6 ">
                    <h5>Description</h5>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6 border-left">
                    <h5>Paid Amount</h5>
                  </div>
                </div>
              </div>
              <div className="descrpt border-bottom">
                <div className="row">
                  <div className="col-xl-8 col-lg-8 col-md-8 col-sm-6 col-6">
                    <p className="text-start mt-2">Registration Fee</p>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6 border-left">
                    <p className="mt-2 amt">500.00</p>
                  </div>
                </div>
              </div>
              <div className="text-center border-top border-bottom mt-5">
                <h5>Payment Mode</h5>
              </div>
              <div className="paymode">
                <div className="row">
                  <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1 col-1"></div>
                  <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2">
                    <h6 className="mt-2">Pay Mode</h6>
                  </div>
                  <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2 border">
                    <h6 className="mt-2">Bank</h6>
                  </div>
                  <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2 border">
                    <h6 className="mt-2">Chq/DD No.</h6>
                  </div>
                  <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2 border">
                    <h6 className="mt-2">Date</h6>
                  </div>
                  <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2 ">
                    <h6 className="mt-2">Amount</h6>
                  </div>
                  <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1 col-1"></div>
                </div>
              </div>
              <div className="paymode">
                <div className="row">
                  <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1 col-1 border-top"></div>
                  <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2 border-top">
                    <h6 className="mt-2">Online/UPI</h6>
                  </div>
                  <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2 border">
                    {/* <h6 className="mt-2"></h6> */}
                  </div>
                  <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2 border">
                    {/* <h6 className="mt-2">Chq/DD No.</h6> */}
                  </div>
                  <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2 border">
                    {/* <h6 className="mt-2">Date</h6> */}
                  </div>
                  <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2 border-top">
                    <h6 className="mt-2">500.00</h6>
                  </div>
                  <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1 col-1 border-top"></div>
                </div>
              </div>
              <div className="d-flex border-top justify-content-evenly">
                <span>
                  <strong>Total in words :</strong> Five Hundred Rupees Only
                </span>
                <span>
                  <strong>Total :</strong> 500.00
                </span>
              </div>
              <div className="border-top">
                <div className="row">
                  <div className="col-xl-7 col-lg-7 col-md-7 col-sm-7 col-7 border-left">
                    <h6 className="pt-5 text-start">
                      Received By : Wings of Joy
                    </h6>
                  </div>
                  <div className="col-xl-5 col-lg-5 col-md-5 col-sm-5 col-5 border-left">
                    <h6 className="pt-5 text-center">Signature</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <button className="btn btn-success mt-5" onClick={printDocument}>
            Print
          </button>
        </Container>
      </Layout>
    </>
  );
};

export default ResponseReceipt;
const Container = styled.div`
  .sideLogo {
    height: 7rem;
  }
  .receiptBox {
    border: 1px solid black;
  }
  .border-left {
    border-left: 1px solid grey;
  }
  @media print {
    /* Set the page size to match the content size */
    @page {
      size: auto;
      margin: 3rem;
      padding: 3rem;
    }

    .amt {
      padding-right: 3rem;
    }
    /* Hide unnecessary elements */
    body * {
      visibility: hidden;
    }

    /* Display only the printable section */
    #printable-section,
    #printable-section * {
      visibility: visible;
    }
    .sideLogo {
      height: 1rem;
      width: 1rem;
    }
    .receiptBox {
      border: 1px solid black;
    }
    .border-left {
      border-left: 1px solid grey;
    }
  }
`;
