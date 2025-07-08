import React from "react";
import styled from "styled-components";

const LearningPro = () => {
  return (
    <>
      <Container>
        <div className="headpro mt-5">
          <h1>Learning Program</h1>
        </div>
        <div className="container">
          <div className="learnImage">
            <img
              src="https://res.cloudinary.com/antrix/image/upload/v1693660120/woj/English_nevzrm_photoshoped_gpfnde.png"
              alt="learing chart"
              className="learning-chart"
            />
          </div>
        </div>
      </Container>
    </>
  );
};

export default LearningPro;
const Container = styled.div`
  .headpro {
    h1 {
      color: #255152;
      font-size: 5rem;
      font-family: "Bricolage Grotesque", sans-serif;
      text-shadow: 1px 1px 1px #484b3c;
      font-weight: bold;
      letter-spacing: 4px;
    }
  }
  .learnImage {
    padding-top: 2rem;
    padding-bottom: 2rem;
    img {
      height: 40rem;
      width: 40rem;
      @media screen and (max-width: 500px) {
        height: 20rem;
        width: 20rem;
      }
    }
  }
`;
