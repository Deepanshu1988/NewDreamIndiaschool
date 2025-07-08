import React from "react";
import styled from "styled-components";
import Layout from "../Layout/Layout";
import { BiSolidBookReader } from "react-icons/bi";
import { RiParentFill } from "react-icons/ri";
import { GiTeacher } from "react-icons/gi";
import { FaMusic } from "react-icons/fa";
import MeetExpert from "../component/MeetExpert";
import SchoolFacility from "../component/SchoolFacility";

const About = () => {
  const rotatingStyle = {
    width: "100%",
    height: "100%",
    animation: `
      @keyframes rotateAnimation {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }
      rotateAnimation 4s linear infinite`,
  };
  return (
    <>
      <Container>
        <Layout title={"About - wings of joy"}>
          <div className="aboutHero">
            <div className="row">
              <div>
                <div className="abouthead p-5" data-aos="fade-right">
                  <h1>About</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid">
            <div className="aboutDetails" data-aos="fade-left">
              <div className="row pt-5">
                <div className="aboutT mb-3">
                  <h1>Read about Wings of Joy</h1>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                  <div className="container-fluid">
                    <img
                      src="https://res.cloudinary.com/antrix/image/upload/v1692012888/woj/about-1_xwjqfj.png"
                      alt="logo-about"
                      className="img-write"
                      data-aos="fade-up-right"
                    />
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                  <div className="container tri-cont" data-aos="fade-down-left">
                    <p>
                      We are an institution for academics that has been in
                      existence for over 5 decades now and since its humble
                      inception, we have gradually evolved into a system of
                      pre-primary education that molds the toddlers in it into
                      developing their writing and oral skills with utmost
                      perfection. A nurtured child of our founder Late Mrs.
                      Vimala Maben, Joy Tutorials has found its place on the map
                      and continues to do so by spreading quality education to
                      all and one.Her motto has always remained to ‘train less
                      but train well’, which we continue to do so as every
                      toddler requires the needed time and attention to grow and
                      develop. <br />
                      <br />
                      We are known well in the region for the discipline we
                      maintain in the school, the attention laid by the teacher
                      on each and every child, our ways to ensure the academics
                      being imparted to each and every child and the personal
                      attention granted to every parent for a smooth exchange of
                      information and understanding.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="container-fluid" data-aos="flip-up">
            <div className="row mt-5">
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
                <div className="card">
                  <div className="box">
                    <BiSolidBookReader
                      style={{ color: "white", fontSize: "2rem" }}
                    />
                  </div>
                  <h2>Active Learning</h2>
                  <p>
                    Active Learning is an engaging and interactive approach to
                    education that encourages students to take an active role in
                    their learning journey.
                  </p>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
                {" "}
                <div className="card">
                  <div className="box">
                    <RiParentFill
                      style={{ color: "white", fontSize: "2rem" }}
                    />
                  </div>
                  <h2>Parents Day</h2>
                  <p>
                    At Wings Of Joy, we value the partnership between parents
                    and teachers. We believe that a child's development is
                    enhanced when there is a strong connection between the home
                    and school environment.
                  </p>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
                {" "}
                <div className="card">
                  <div className="box">
                    <GiTeacher style={{ color: "white", fontSize: "2rem" }} />
                  </div>
                  <h2>Expert Teachers</h2>
                  <p>
                    At Wings Of Joy, our Teachers are certified in early
                    childhood education. our dedicated and caring teachers play
                    a pivotal role in shaping the educational journey of our
                    little learners.
                  </p>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
                {" "}
                <div className="card">
                  <div className="box">
                    <FaMusic style={{ color: "white", fontSize: "2rem" }} />
                  </div>
                  <h2>Music Lessons</h2>
                  <p>
                    Our dedicated music instructors are passionate about sharing
                    their love for music with young learners.
                  </p>
                </div>
              </div>
            </div>
          </div> */}
          {/* <SchoolFacility /> */}
          <div className="container-fluid pt-5" data-aos="zoom-in">
            <div className="teacherheading">
              <h1>Meet our Team</h1>
            </div>
            <MeetExpert />
          </div>
        </Layout>
      </Container>
    </>
  );
};

export default About;
const Container = styled.div`
  // background: url("https://res.cloudinary.com/antrix/image/upload/v1681813312/party%20people%20rockon/mid-two-bg_ego2on.png");
  background: linear-gradient(1deg, #8bc3d9, #eef1f0, #fff);
  .aboutHero {
    height: auto;
    background: linear-gradient(1deg, #f2f4f4, #eef1f0, #8bc3d9);
  }
  .rightImage {
    img {
      width: 100%;
      height: 100%;
      animation: App-logo-spin infinite 20s linear;
    }
    @keyframes App-logo-spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
  }
  .abouthead {
    height: 100%;
    display: flex;
    align-content: center;
    justify-content: center;
    align-items: center;
    h1 {
      font-size: 8rem;
      font-family: "Birthstone Bounce", cursive;
      letter-spacing: 1rem;
      color: #3f4197;
      text-shadow: 1px 1px 23px #e1bf3e;
      margin-left: 0rem;
    }
  }
  .aboutT {
    h1 {
      font-size: 3rem;
      font-family: "Bricolage Grotesque", sans-serif;
      letter-spacing: 0.5rem;
      color: #3f4197;
      text-shadow: 1px 1px 7px #e1bf3e;
    }
  }
  .img-write {
    border-radius: 2rem;
    width: 100%;
  }
  p {
    text-align: justify;
  }
  .card {
    padding: 1rem;
    background: transparent;
    border: none;
    align-items: center;
    .card-title {
      margin-bottom: 0.5rem;
      text-shadow: 1px 6px 9px black;
    }
    .box {
      background-color: #78cf46;
      border-radius: 50%;
      height: 4rem;
      width: 4rem;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    h2 {
      color: #3d3f99;
    }
    p {
      text-align: justify;
    }
  }

  .cardbox {
  }

  .teacherheading {
    h1 {
      font-family: "Bricolage Grotesque", sans-serif;
      font-weight: bold;
      font-size: 3.5rem;
      color: #3e4096;
      letter-spacing: 0.5rem;
      text-shadow: 1px 5px 10px #4c4c33;
    }
  }
`;
