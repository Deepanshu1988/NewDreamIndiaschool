import React from "react";
import styled from "styled-components";

const SchoolFacility = () => {
  return (
    <>
      <Container>
        <div className="pt-4">
          <h1 data-aos="zoom-out-down">School Facility</h1>
        </div>
        <div
          className="container glassy p-5"
          data-aos="fade-left"
          data-aos-anchor="#example-anchor"
          data-aos-offset="500"
          data-aos-duration="500"
        >
          <div className="row mt-5">
            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12">
              <div className="class-level">
                <img
                  src="https://res.cloudinary.com/antrix/image/upload/v1694005561/woj/teacher_1_eekwm9.png"
                  alt=""
                />
                <h3 className="mt-3">
                  Dedicated and Experienced Teaching Staff
                </h3>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12">
              <div className="class-level">
                <img
                  src="https://res.cloudinary.com/antrix/image/upload/v1694006126/woj/fire_chute_piuv5j.png"
                  alt=""
                />
                <h3 className="mt-3">Fire Chute for Safe Evacuation</h3>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12">
              <div className="class-level">
                <img
                  src="https://res.cloudinary.com/antrix/image/upload/v1694006449/woj/music_n4gsan.png"
                  alt=""
                />
                <h3 className="mt-3">Music and Dance</h3>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12">
              <div className="class-level">
                <img
                  src="https://res.cloudinary.com/antrix/image/upload/v1694089529/woj/speech_therapy_b3lezz.png"
                  alt=""
                />
                <h3 className="mt-3">Special Education with Speech Therapy</h3>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12">
              <div className="class-level">
                <img
                  src="https://res.cloudinary.com/antrix/image/upload/v1694089739/woj/nep_tifltb.png"
                  alt=""
                />
                <h3 className="mt-3">
                  NEP Inspired Curriculum for Holistic Education
                </h3>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12">
              <div className="class-level">
                <img
                  src="https://res.cloudinary.com/antrix/image/upload/v1694090196/woj/projector_otqvdp.png"
                  alt=""
                />
                <h3 className="mt-3">Projector Powered Audio Visual Content</h3>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12">
              <div className="class-level">
                <img
                  src="https://res.cloudinary.com/antrix/image/upload/v1694090537/woj/cctv_1_jfsfiv.png"
                  alt=""
                />
                <h3 className="mt-3">CCTV Covered Safe Campus</h3>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12">
              <div className="class-level">
                <img
                  src="https://res.cloudinary.com/antrix/image/upload/v1694090794/woj/seamless_rlf88v.png"
                  alt=""
                />
                <h3 className="mt-3">
                  ERP Enabled Institution for Seamless Communication
                </h3>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default SchoolFacility;
const Container = styled.div`
  h1 {
    font-size: 5rem;
    font-family: "Bricolage Grotesque", sans-serif;
    color: #f99200;
    font-weight: bold;
    text-shadow: 1px 2px 14px #ffdf5e;
  }

  .class-level {
    img {
      height: object-fit;
      width: 100%;
      border-radius: 2rem;
      padding: 3rem;
      box-shadow: inset 1px 1px 12px #c38634;
      transition: transform 0.3s;
      &:hover {
        transform: scale(1.1);
      }
    }
    .btnLevelone {
      background-color: #f0ad4e;
      color: #742b16;
      border: none;
      font-size: 2rem;
      font-weight: bold;
      font-family: "Bricolage Grotesque", sans-serif;
    }
    h3 {
      color: #742b16;
      font-family: "Bricolage Grotesque", sans-serif;
      font-size: 23px;
      font-weight: bold;
      letter-spacing: 2.2px;
      text-shadow: 0px 2px 10px #080808;
    }
  }
  .glassy {
    box-shadow: inset 1px 1px 12px #a59898;
    border-radius: 2rem;
    background: linear-gradient(354deg, #bfcbdc, transparent);
  }
`;
