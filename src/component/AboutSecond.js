import React from "react";
import styled from "styled-components";

const AboutSecond = () => {
  return (
    <>
      <Container>
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="imageleft" data-aos="zoom-in-right">
                <img
                  src="https://res.cloudinary.com/antrix/image/upload/v1692003988/woj/wings_jy8xtq.png"
                  alt="wings"
                />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="container imgright" data-aos="zoom-in-left">
                <div className="heading">
                  <h1>About</h1>
                  <img
                    src="https://res.cloudinary.com/antrix/image/upload/v1691994477/woj/logowoj_iezamm.png"
                    alt="logo"
                  />
                </div>
                <p>
                  Our institution boasts a rich history of over five decades,
                  and throughout this remarkable journey, we have continually
                  transformed into a pre-primary education system. Our focus
                  remains on nurturing young minds, empowering toddlers to
                  flourish in their writing and oral abilities with unparalleled
                  excellence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default AboutSecond;
const Container = styled.div`
  .imageleft {
    padding: 5rem;
    @media screen and (max-width: 500px) {
      padding: 1rem;
    }
    img {
      height: object-fit;
      width: 100%;
      border: none;
      border-radius: 2rem;
      box-shadow: 1px 10px 23px #9f9696;
      transition: transform 0.3s;
      &:hover {
        transform: scale(1.1);
      }
    }
  }
  .imgright {
    padding: 5rem;
    margin-top: 7rem;
    border-radius: 1rem;
    background-color: #ffffff1f;
    width: 100%;
    box-shadow: inset 1px 1px 12px white;
    @media screen and (max-width: 500px) {
      padding-top: 0rem;
    }
    p {
      text-align: justify;
    }
    h1 {
      font-size: 5rem;
      font-family: "Birthstone Bounce", cursive;
      color: #3c3e97;
      margin-right: 1rem;
      margin-top: 2rem;
    }
    img {
      height: auto;
      width: 100%;
    }
  }

  .heading {
    display: flex;
    @media screen and (max-width: 500px) {
      display: flex;
      flex-direction: column;
    }
  }
`;
