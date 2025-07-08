import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { styled } from "styled-components";

const ViewStudentData = () => {
  const [details, setDetails] = useState([]);
  const [currentAge, setCurrentAge] = useState(null);
  const { id } = useParams();

  const getSelectedStudentData = async () => {
    try {
      const res = await axios.get(
        `http://localhost:4400/api/auth/getstudentviaid/${id}`
      );
      setDetails(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const downloadBirthCertificate = async (id) => {
    console.log(id);
    try {
      const response = await axios.get(
        `http://localhost:4400/api/auth/getStudentBirthCertificateviaId/${id}`,
        {
          responseType: "blob", // Request binary data
        }
      );

      // Create a blob from the response data
      const blob = new Blob([response.data], { type: "application/pdf" });

      // Create a URL for the blob
      const url = window.URL.createObjectURL(blob);

      // Open the URL in a new tab
      window.open(url, "_blank");

      // Release the URL when it's no longer needed to free up memory
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSelectedStudentData();
  }, []);

  console.log(details.time);
  const dateString = details.time;
  const dateObj = new Date(dateString);
  const year = dateObj.getFullYear();
  const month = (dateObj.getMonth() + 1).toString().padStart(2, "0"); // Month is zero-based
  const day = dateObj.getDate().toString().padStart(2, "0");
  const formattedDate = `${year}-${month}-${day}`;
  console.log(formattedDate);

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

  return (
    <>
      <Container>
        <div id="printable-section">
          <div className="container headimg">
            <div className="container pt-5 pb-5">
              <div className="row">
                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3">
                  <div className="d-flex justify-content-center">
                    <img
                      src="https://res.cloudinary.com/antrix/image/upload/v1692194664/woj/wojlogpdf_aogzak.png"
                      alt="woj"
                    />
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
                  <div className="titleWoj">
                    <h1 className="text-center">Wings of Joy School</h1>
                    <p className="text-center">Jabalpur</p>
                    <p className="text-center">
                      Phone No. : 9696412222 | Email : wingsofjoyjbp@gmail.com
                      Website : http://wojindia.com
                    </p>
                    <h2 className="text-center">
                      Registration Form({details.class_for_admission}) 2023 -
                      2024
                    </h2>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3">
                  <div className="d-flex justify-content-center">
                    <img
                      src="https://res.cloudinary.com/antrix/image/upload/v1692195547/woj/wojpdf2_x7okg9.jpg"
                      alt="woj"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="container pb-2">
              <p className="text-end">Application Date : {formattedDate}</p>
              <button
                className="btn btn-success"
                style={{ float: "right" }}
                onClick={printDocument}
              >
                Print
              </button>
            </div>
          </div>
          <div className="container student-section">
            <h1 className="text-start m-2">STUDENT DETAILS</h1>
            <div className="container mt-5">
              <div className="row">
                {/* <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6"></div> */}
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
                  <div className="container">
                    <p className="text-start">
                      Class into which admission is sought:{" "}
                    </p>
                  </div>
                </div>
                <div className="col-xl-9 col-lg-9 col-md-6 col-sm-6 col-6">
                  {" "}
                  <p className="text-start">{details.class_for_admission}</p>
                  <hr />
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                {/* <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6"></div> */}
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
                  <div className="container">
                    <p className="text-start">Student Name :</p>
                  </div>
                </div>
                <div className="col-xl-9 col-lg-9 col-md-6 col-sm-6 col-6">
                  {" "}
                  <p className="text-start">
                    {details.firstname + " " + details.lastname}
                  </p>
                  <hr />
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                {/* <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6"></div> */}
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
                  <div className="container">
                    <p className="text-start">DOB:</p>
                  </div>
                </div>
                <div className="col-xl-9 col-lg-9 col-md-6 col-sm-6 col-6">
                  {" "}
                  <p className="text-start">{details.date_of_birth}</p>
                  <hr />
                </div>
              </div>
            </div>
            {/* <div className="container">
              <div className="row">
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
                  <div className="container">
                    <p className="text-start">DOB in Words</p>
                  </div>
                </div>
                <div className="col-xl-9 col-lg-9 col-md-6 col-sm-6 col-6">
                  {" "}
                  <p className="text-start">Third June Two Thousand Twenty</p>
                  <hr />
                </div>
              </div>
            </div> */}
            <div className="container">
              <div className="row">
                {/* <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6"></div> */}
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
                  <div className="container">
                    <p className="text-start">Age</p>
                  </div>
                </div>
                <div className="col-xl-9 col-lg-9 col-md-6 col-sm-6 col-6">
                  {" "}
                  <p className="text-start">{currentAge}</p>
                  <hr />
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                {/* <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6"></div> */}
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
                  <div className="container">
                    <p className="text-start">Gender</p>
                  </div>
                </div>
                <div className="col-xl-9 col-lg-9 col-md-6 col-sm-6 col-6">
                  {" "}
                  <p className="text-start">{details.gender}</p>
                  <hr />
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                {/* <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6"></div> */}
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
                  <div className="container">
                    <p className="text-start">Religion</p>
                  </div>
                </div>
                <div className="col-xl-9 col-lg-9 col-md-6 col-sm-6 col-6">
                  {" "}
                  <p className="text-start">{details.Religion}</p>
                  <hr />
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                {/* <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6"></div> */}
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
                  <div className="container">
                    <p className="text-start">Caste</p>
                  </div>
                </div>
                <div className="col-xl-9 col-lg-9 col-md-6 col-sm-6 col-6">
                  {" "}
                  <p className="text-start">{details.caste}</p>
                  <hr />
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                {/* <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6"></div> */}
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
                  <div className="container">
                    <p className="text-start">Category</p>
                  </div>
                </div>
                <div className="col-xl-9 col-lg-9 col-md-6 col-sm-6 col-6">
                  {" "}
                  <p className="text-start">{details.category}</p>
                  <hr />
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                {/* <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6"></div> */}
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
                  <div className="container">
                    <p className="text-start">Mobile No.</p>
                  </div>
                </div>
                <div className="col-xl-9 col-lg-9 col-md-6 col-sm-6 col-6">
                  {" "}
                  <p className="text-start">{details.mobile}</p>
                  <hr />
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                {/* <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6"></div> */}
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
                  <div className="container">
                    <p className="text-start">Aadhar No.</p>
                  </div>
                </div>
                <div className="col-xl-9 col-lg-9 col-md-6 col-sm-6 col-6">
                  {" "}
                  <p className="text-start">{details.adhar_number}</p>
                  <hr />
                </div>
              </div>
            </div>
          </div>
          {/* father */}
          <div className="container student-section">
            <h1 className="text-start m-2">FATHER'S DETAILS</h1>
            <div className="container mt-5">
              <div className="row">
                {/* <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6"></div> */}
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
                  <div className="container">
                    <p className="text-start">Name: </p>
                  </div>
                </div>
                <div className="col-xl-9 col-lg-9 col-md-6 col-sm-6 col-6">
                  {" "}
                  <p className="text-start">{details.father_name}</p>
                  <hr />
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                {/* <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6"></div> */}
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
                  <div className="container">
                    <p className="text-start">Educational Qualification :</p>
                  </div>
                </div>
                <div className="col-xl-9 col-lg-9 col-md-6 col-sm-6 col-6">
                  {" "}
                  <p className="text-start">{details.father_qualification}</p>
                  <hr />
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                {/* <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6"></div> */}
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
                  <div className="container">
                    <p className="text-start">Occupation :</p>
                  </div>
                </div>
                <div className="col-xl-9 col-lg-9 col-md-6 col-sm-6 col-6">
                  {" "}
                  <p className="text-start">{details.father_occupation}</p>
                  <hr />
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                {/* <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6"></div> */}
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
                  <div className="container">
                    <p className="text-start">Profession</p>
                  </div>
                </div>
                <div className="col-xl-9 col-lg-9 col-md-6 col-sm-6 col-6">
                  {" "}
                  <p className="text-start">{details.father_profession}</p>
                  <hr />
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                {/* <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6"></div> */}
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
                  <div className="container">
                    <p className="text-start">Employer</p>
                  </div>
                </div>
                <div className="col-xl-9 col-lg-9 col-md-6 col-sm-6 col-6">
                  {" "}
                  <p className="text-start">{details.father_employer}</p>
                  <hr />
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                {/* <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6"></div> */}
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
                  <div className="container">
                    <p className="text-start">Business details</p>
                  </div>
                </div>
                <div className="col-xl-9 col-lg-9 col-md-6 col-sm-6 col-6">
                  {" "}
                  <p className="text-start">
                    {details.father_business_details}
                  </p>
                  <hr />
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                {/* <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6"></div> */}
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
                  <div className="container">
                    <p className="text-start">Email</p>
                  </div>
                </div>
                <div className="col-xl-9 col-lg-9 col-md-6 col-sm-6 col-6">
                  {" "}
                  <p className="text-start">{details.father_email}</p>
                  <hr />
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                {/* <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6"></div> */}
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
                  <div className="container">
                    <p className="text-start">Mobile</p>
                  </div>
                </div>
                <div className="col-xl-9 col-lg-9 col-md-6 col-sm-6 col-6">
                  {" "}
                  <p className="text-start">{details.father_mobile}</p>
                  <hr />
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                {/* <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6"></div> */}
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
                  <div className="container">
                    <p className="text-start">Annual Income</p>
                  </div>
                </div>
                <div className="col-xl-9 col-lg-9 col-md-6 col-sm-6 col-6">
                  {" "}
                  <p className="text-start">{details.father_annual_income}</p>
                  <hr />
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                {/* <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6"></div> */}
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
                  <div className="container">
                    <p className="text-start">Residential Address</p>
                  </div>
                </div>
                <div className="col-xl-9 col-lg-9 col-md-6 col-sm-6 col-6">
                  {" "}
                  <p className="text-start">
                    {details.father_residential_address}
                  </p>
                  <hr />
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                {/* <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6"></div> */}
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
                  <div className="container">
                    <p className="text-start">Office Address</p>
                  </div>
                </div>
                <div className="col-xl-9 col-lg-9 col-md-6 col-sm-6 col-6">
                  {" "}
                  <p className="text-start">{details.father_office_address}</p>
                  <hr />
                </div>
              </div>
            </div>
          </div>
          {/* mother */}
          <div className="container student-section">
            <h1 className="text-start m-2">MOTHER'S DETAILS</h1>
            <div className="container mt-5">
              <div className="row">
                {/* <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6"></div> */}
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
                  <div className="container">
                    <p className="text-start">Name: </p>
                  </div>
                </div>
                <div className="col-xl-9 col-lg-9 col-md-6 col-sm-6 col-6">
                  {" "}
                  <p className="text-start">{details.mother_name}</p>
                  <hr />
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                {/* <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6"></div> */}
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
                  <div className="container">
                    <p className="text-start">Educational Qualification :</p>
                  </div>
                </div>
                <div className="col-xl-9 col-lg-9 col-md-6 col-sm-6 col-6">
                  {" "}
                  <p className="text-start">{details.mother_qualification}</p>
                  <hr />
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                {/* <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6"></div> */}
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
                  <div className="container">
                    <p className="text-start">Occupation :</p>
                  </div>
                </div>
                <div className="col-xl-9 col-lg-9 col-md-6 col-sm-6 col-6">
                  {" "}
                  <p className="text-start">{details.mother_occupation}</p>
                  <hr />
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                {/* <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6"></div> */}
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
                  <div className="container">
                    <p className="text-start">Profession</p>
                  </div>
                </div>
                <div className="col-xl-9 col-lg-9 col-md-6 col-sm-6 col-6">
                  {" "}
                  <p className="text-start">{details.mother_profession}</p>
                  <hr />
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                {/* <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6"></div> */}
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
                  <div className="container">
                    <p className="text-start">Employer</p>
                  </div>
                </div>
                <div className="col-xl-9 col-lg-9 col-md-6 col-sm-6 col-6">
                  {" "}
                  <p className="text-start">{details.mother_employer}</p>
                  <hr />
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                {/* <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6"></div> */}
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
                  <div className="container">
                    <p className="text-start">Business details</p>
                  </div>
                </div>
                <div className="col-xl-9 col-lg-9 col-md-6 col-sm-6 col-6">
                  {" "}
                  <p className="text-start">
                    {details.mother_business_details}
                  </p>
                  <hr />
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                {/* <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6"></div> */}
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
                  <div className="container">
                    <p className="text-start">Email</p>
                  </div>
                </div>
                <div className="col-xl-9 col-lg-9 col-md-6 col-sm-6 col-6">
                  {" "}
                  <p className="text-start">{details.mother_email}</p>
                  <hr />
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                {/* <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6"></div> */}
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
                  <div className="container">
                    <p className="text-start">Mobile</p>
                  </div>
                </div>
                <div className="col-xl-9 col-lg-9 col-md-6 col-sm-6 col-6">
                  {" "}
                  <p className="text-start">{details.mother_mobile}</p>
                  <hr />
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                {/* <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6"></div> */}
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
                  <div className="container">
                    <p className="text-start">Annual Income</p>
                  </div>
                </div>
                <div className="col-xl-9 col-lg-9 col-md-6 col-sm-6 col-6">
                  {" "}
                  <p className="text-start">{details.mother_annual_income}</p>
                  <hr />
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                {/* <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6"></div> */}
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
                  <div className="container">
                    <p className="text-start">Residential Address</p>
                  </div>
                </div>
                <div className="col-xl-9 col-lg-9 col-md-6 col-sm-6 col-6">
                  {" "}
                  <p className="text-start">
                    {details.mother_residential_address}
                  </p>
                  <hr />
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                {/* <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6"></div> */}
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
                  <div className="container">
                    <p className="text-start">Office Address</p>
                  </div>
                </div>
                <div className="col-xl-9 col-lg-9 col-md-6 col-sm-6 col-6">
                  {" "}
                  <p className="text-start">{details.mother_office_address}</p>
                  <hr />
                </div>
              </div>
            </div>
          </div>

          {/* siblings details */}
          <div className="container student-section">
            <h1 className="text-start m-2">
              Brother / Sister studying in Joy Sr. Sec. School, Jabalpur
            </h1>
            <h3 className="text-start m-2">Sibling details 1 :</h3>
            <div className="container mt-5">
              <div className="row">
                {/* <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6"></div> */}
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
                  <div className="container">
                    <p className="text-start">Child Name: </p>
                  </div>
                </div>
                <div className="col-xl-9 col-lg-9 col-md-6 col-sm-6 col-6">
                  {" "}
                  <p className="text-start">{details.child_one_name}</p>
                  <hr />
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                {/* <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6"></div> */}
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
                  <div className="container">
                    <p className="text-start">Roll no :</p>
                  </div>
                </div>
                <div className="col-xl-9 col-lg-9 col-md-6 col-sm-6 col-6">
                  {" "}
                  <p className="text-start">
                    {details.child_one_addmission_no}
                  </p>
                  <hr />
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                {/* <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6"></div> */}
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
                  <div className="container">
                    <p className="text-start">Class :</p>
                  </div>
                </div>
                <div className="col-xl-9 col-lg-9 col-md-6 col-sm-6 col-6">
                  {" "}
                  <p className="text-start">{details.child_one_class}</p>
                  <hr />
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                {/* <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6"></div> */}
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
                  <div className="container">
                    <p className="text-start">Section</p>
                  </div>
                </div>
                <div className="col-xl-9 col-lg-9 col-md-6 col-sm-6 col-6">
                  {" "}
                  <p className="text-start">{details.child_one_section}</p>
                  <hr />
                </div>
              </div>
            </div>
            <h3 className="text-start m-3">Sibling details 2 :</h3>
            <div className="container">
              <div className="row">
                {/* <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6"></div> */}
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
                  <div className="container">
                    <p className="text-start">Child Name :</p>
                  </div>
                </div>
                <div className="col-xl-9 col-lg-9 col-md-6 col-sm-6 col-6">
                  {" "}
                  <p className="text-start">{details.child_two_name}</p>
                  <hr />
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                {/* <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6"></div> */}
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
                  <div className="container">
                    <p className="text-start">Roll No. :</p>
                  </div>
                </div>
                <div className="col-xl-9 col-lg-9 col-md-6 col-sm-6 col-6">
                  {" "}
                  <p className="text-start">
                    {details.child_two_addmission_no}
                  </p>
                  <hr />
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                {/* <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6"></div> */}
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
                  <div className="container">
                    <p className="text-start">Class :</p>
                  </div>
                </div>
                <div className="col-xl-9 col-lg-9 col-md-6 col-sm-6 col-6">
                  {" "}
                  <p className="text-start">{details.child_two_section}</p>
                  <hr />
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                {/* <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6"></div> */}
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
                  <div className="container">
                    <p className="text-start">Section :</p>
                  </div>
                </div>
                <div className="col-xl-9 col-lg-9 col-md-6 col-sm-6 col-6">
                  {" "}
                  <p className="text-start">{details.child_two_section}</p>
                  <hr />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <button className="btn btn-success mt-5 mb-2" onClick={printDocument}>
            Print Details
          </button>
        </div>
        <div className="d-flex justify-content-center">
          <button
            className="btn btn-info mb-2"
            onClick={() => downloadBirthCertificate(details.id)}
          >
            Download Birth Certificate
          </button>
        </div>
        <div className="d-flex justify-content-center">
          <Link to="/admin-home">
            <button className="btn btn-success">Admin Dashboard</button>
          </Link>
        </div>
      </Container>
    </>
  );
};

export default ViewStudentData;
const Container = styled.div`
  .headimg {
    background-color: #fff;
  }
  .titleWoj {
    h1,
    h2,
    p {
      color: #7e7474;
    }
  }
  h1 {
    color: #3e409b;
  }

  .student-section {
    border: 1px solid black;
    margin-top: 2rem;
  }
`;
