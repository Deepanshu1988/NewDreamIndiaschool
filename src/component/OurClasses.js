import React from "react";
import styled from "styled-components";

const OurClasses = () => {
  return (
    <>
      <Container>
        <div className="classHeading" data-aos="zoom-out-right">
          <h1>Our Class</h1>
        </div>
        <div className="container pb-3">
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
              <div className="class-level">
                <img
                  src="https://res.cloudinary.com/antrix/image/upload/v1693655753/woj/NURSERY_1_nf9jev.png"
                  alt=""
                />
                {/* <button className="btn btn-success mt-3 btnLevelone">
                  level-I
                </button> */}
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
              <div className="class-level">
                <img
                  src="https://res.cloudinary.com/antrix/image/upload/v1693656326/woj/lower-kg_kwaa4l.png"
                  alt=""
                />
                {/* <button
                  className="btn btn-success mt-3 btnLevelone"
                  style={{ backgroundColor: "#5cb85c" }}
                >
                  level-II
                </button> */}
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
              <div className="class-level">
                <img
                  src="https://res.cloudinary.com/antrix/image/upload/v1693656539/woj/upper-kg_hqvutb.png"
                  alt=""
                />
                {/* <button
                  className="btn btn-success mt-3 btnLevelone"
                  style={{ backgroundColor: "#5bc0de" }}
                >
                  level-III
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default OurClasses;
const Container = styled.div`
  .classHeading {
    h1 {
      font-size: 5rem;
      font-family: "Bricolage Grotesque", sans-serif;
    }
  }
  .class-level {
    img {
      height: object-fit;
      width: 100%;
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
      transition: transform 0.3s;
      &:hover {
        transform: scale(1.1);
      }
    }
  }
`;
