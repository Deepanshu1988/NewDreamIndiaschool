import React from "react";
import styled from "styled-components";

const CardSection = () => {
  return (
    <>
      <Container>
        <div className="container-fluid cardSection" data-aos="zoom-in">
          <div className="row">
            <div className="col-xl-1 col-lg-1 col-md-12 col-sm-12 col-12"></div>
            <div className="col-xl-2 col-lg-2 col-md-4 col-sm-12 col-12">
              <div class="card card-sect">
                <img
                  src="https://res.cloudinary.com/antrix/image/upload/v1692002671/woj/activities_mpxmpv.jpg"
                  class="card-img-top"
                  alt="education"
                />
                <div class="card-body">
                  <h5 class="card-title" style={{ color: "#e74c3c" }}>
                    Education games and activities
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-2 col-md-4 col-sm-12 col-12">
              <div class="card card-sect">
                <img
                  src="https://res.cloudinary.com/antrix/image/upload/v1692002670/woj/kids-creativity_f8p3sp.jpg"
                  class="card-img-top"
                  alt="education"
                />
                <div class="card-body">
                  <h5 class="card-title" style={{ color: "#18473e" }}>
                    Teaching kids to express their creativity
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-2 col-md-4 col-sm-12 col-12">
              <div class="card card-sect">
                <img
                  src="https://res.cloudinary.com/antrix/image/upload/v1692002672/woj/gifted_t0uotr.jpg"
                  class="card-img-top"
                  alt="education"
                />
                <div class="card-body">
                  <h5 class="card-title" style={{ color: "#1c8649" }}>
                    Gifted & Talented Program
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-2 col-md-4 col-sm-12 col-12">
              <div class="card card-sect">
                <img
                  src="https://res.cloudinary.com/antrix/image/upload/v1692002672/woj/music-class_zggmqy.jpg"
                  class="card-img-top"
                  alt="education"
                />
                <div class="card-body">
                  <h5 class="card-title" style={{ color: "#F1C40F" }}>
                    Music activities
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-2 col-md-4 col-sm-12 col-12">
              <div class="card card-sect">
                <img
                  src="https://res.cloudinary.com/antrix/image/upload/v1692002671/woj/learning-language_ejmbjr.jpg"
                  class="card-img-top"
                  alt="education"
                />
                <div class="card-body">
                  <h5 class="card-title" style={{ color: "#58B19F" }}>
                    Learning languages
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-xl-1 col-lg-1 col-md-12 col-sm-12 col-12"></div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default CardSection;
const Container = styled.div`
  .card-sect {
    // box-shadow: 1px 1px 20px black;
    border: none;
    background: transparent;
    img {
      border-radius: 10px;
      transition: transform 0.3s;
      &:hover {
        transform: scale(1.1);
      }
    }

    h5 {
      font-family: "Bricolage Grotesque", sans-serif;
      font-weight: bold;
      line-height: 21px;
      letter-spacing: 1.7px;
      word-spacing: 1px;
    }
  }
`;
