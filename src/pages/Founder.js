import React from "react";
import styled from "styled-components";
import Layout from "../Layout/Layout";

const Founder = () => {
  return (
    <>
      <Container>
        <Layout title={"Contact - wings of joy"}>
          <div className="container-fluid pt-5 founder-header">
            <div className="container">
              <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                  <img
                    src="https://res.cloudinary.com/antrix/image/upload/v1692192592/founder1_jfpjs3.jpg"
                    alt="founder"
                  />
                  <h2>Late Mrs. Vimala Maben</h2>
                  <p
                    className="text-center fw-bold"
                    style={{
                      fontFamily: "Bricolage Grotesque",
                      color: "brown",
                    }}
                  >
                    17-03-1929 TO 05-01-2012
                  </p>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                  <h1>Our Founder</h1>
                  <p className="mt-5">
                    <strong>Late Mrs. Vimala Maben</strong> laid the foundation
                    of this educational system by drawing inspiration from her
                    own schooling experience, which was heavily influenced by
                    English. She learned discipline and the importance of
                    striving for perfection, and these qualities are evident in
                    the system she designed. The little school, Joy Prep & K.G.
                    Classes, slowly expanded its reach, offering education up to
                    the Senior Secondary level. The Joy family grew bigger and
                    more efficient, dedicated to imparting education from
                    Kindergarten to the twelfth grade. Today, Mrs. Vimala Maben
                    rests in peace, having achieved her dream of creating an
                    educational institution that focuses on nurturing and
                    educating children to become better human beings. Her legacy
                    lives on as the school continues to work tirelessly to
                    provide quality education to its students. It all began
                    modestly with just six kids who received tutoring from her.
                    Over time, the system grew and evolved, just like a tiny
                    seed growing into a big and flourishing tree. Mrs. Vimala
                    Maben trained her staff well, ensuring they shared her
                    vision for providing quality education.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Layout>
      </Container>
    </>
  );
};

export default Founder;
const Container = styled.div`
  // background: url("https://res.cloudinary.com/antrix/image/upload/v1681813312/party%20people%20rockon/mid-two-bg_ego2on.png");
  .founder-header {
    h1 {
      font-size: 6rem;
      font-family: "Bricolage Grotesque";
      letter-spacing: 1rem;
      color: #3f4197;
      text-shadow: 1px 1px 7px #e1bf3e;
      margin-left: 0rem;
    }
    h2 {
      font-size: 2rem;
      font-family: "Bricolage Grotesque", sans-serif;
      letter-spacing: 5px;
      margin-top: 1rem;
      color: #3f4197;
      text-shadow: 1px 1px 7px #e1bf3e;
      margin-left: 0rem;
    }
    p {
      text-align: justify;
    }
    img {
      box-shadow: 1px 6px 15px #918a8a;
      width: 100%;
      border-radius: 1rem;
    }
  }
`;
