import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HeroSection = () => {
  return (
    <>
      <Container>
        <div className="herosection">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="herocontent" data-aos="zoom-out-up">
                <h1>
                  welcome to <br />{" "}
                  <span>
                  {/* <img
                      src="https://res.cloudinary.com/antrix/image/upload/v1691994477/woj/logowoj_iezamm.png"
                      alt="logo"
                      srcset=""
                      className="heroSectionLogo"
                    /> */}
                    <p>New Dream India School</p>
                  </span>
                </h1>
                <h2>Where Learning and Fun Go Hand in Hand!</h2>
                {/* <Link to="/e-register">
                  <button className="btn btn-success">Know more</button>
                </Link> */}
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
              <img
                src="https://res.cloudinary.com/antrix/image/upload/v1692945011/woj/herosection-one-cropone_ciyrdq.png"
                alt="hero section"
                className="heroImage"
                data-aos="flip-left"
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default HeroSection;
const Container = styled.div`
  // box-shadow: inset 1px 1px 27px black;
  .herosection {
    background-color: #dcd6d6;
    height: auto;
    box-shadow: 0px 1px 0px #00000052;
    .heroImage {
      height: 30rem;
      width: 100%;
      @media screen and (max-width: 500px) {
        margin-top: 0rem;
      }
    }
  }
  .herocontent {
    text-align: left;
    margin-top: 6rem;
    padding-left: 3rem;
    @media screen and (max-width: 500px) {
      padding: 1rem;
    }
    h1,
    h2 {
      font-family: "Bricolage Grotesque", sans-serif;
    }
    button {
      font-family: "Bricolage Grotesque", sans-serif;
    }
    span {
      font-size: 5rem;
      text-shadow: 1px 8px 12px #ffeaa7;
      color: #3c3e96;
      @media screen and (max-width: 400px) {
        font-size: 4rem;
      }
    }
  }

  .heroSectionLogo {
    width: 70%;
  }
`;
