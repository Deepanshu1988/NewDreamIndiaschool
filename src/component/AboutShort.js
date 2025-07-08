import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { LiaBirthdayCakeSolid } from "react-icons/lia";
import axios from "axios";
import BirthdayList from "./BirthdayList";
import NoticeDisplay from "./NoticeDisplay";

const AboutShort = () => {
  const videoRef = useRef(null);
  const [details, setDetails] = useState([]);
  const [todaysBirthdays, setTodaysBirthdays] = useState([]);
  const [showScroll, setShowScroll] = useState(null);
  const [allNotice, setAllNotice] = useState([]);

  const getStudent = async () => {
    try {
      const res = await axios.get(
        "http://localhost:4400/api/auth/getAllStudent"
      );

      const data = await res.data;
      setDetails(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // Start playing the video when the component mounts
    if (videoRef.current) {
      videoRef.current.play();
    }
    getStudent();
  }, []);

  useEffect(() => {
    const today = new Date();
    const birthdaysToday = details.filter((user) => {
      const birthDate = new Date(user.date_of_birth);

      return (
        birthDate.getMonth() === today.getMonth() &&
        birthDate.getDate() === today.getDate()
      );
    });
    setTodaysBirthdays(birthdaysToday);
  }, [details]);

  console.log(todaysBirthdays);

  const getAllNotice = async () => {
    try {
      const res = await axios.get(
        "http://localhost:4400/api/auth/getAllNotice"
      );
      setAllNotice(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllNotice();
  }, []);

  return (
    <>
      <Container>
        <div className="container-fluid pt-5 pb-5">
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
              <div className="container">
                <div className="heading mt-5">
                  {/* <img
                    src="https://res.cloudinary.com/antrix/image/upload/v1691989050/logowoj_lj3qob.png"
                    alt="logo"
                    srcset=""
                  /> */}
                  <span>New Dream India School</span>
                  <p>
                    Our institution has a rich history spanning over five
                    decades, during which we have continuously evolved. From our
                    humble beginnings, we have transformed into a leading
                    academic establishment specializing in pre-primary
                    education.
                  </p>
                </div>
                {/* <div>
                  <img
                    src="https://res.cloudinary.com/antrix/image/upload/v1692184019/headhome-cr_zxbpjk.png"
                    alt="kids"
                    style={{ width: "100%" }}
                  />
                </div> */}
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="container">
                <video
                  ref={videoRef}
                  src="https://res.cloudinary.com/antrix/video/upload/v1691997104/woj/wingof_joy_first_vid_qopig9.mp4"
                  autoplay
                  controls
                  loop
                  muted
                ></video>
              </div>
            </div>
            <div className="col-xl-2 col-lg-2 col-md-12 col-sm-12 col-12">
              <div className="noticeBoard mt-2 rounded">
                <h1>Notice</h1>
                <NoticeDisplay items={allNotice} />
              </div>
              <div className="noticeBoard mt-2 rounded">
                <h1>
                  <LiaBirthdayCakeSolid /> Happy Birthday
                </h1>
                <BirthdayList items={todaysBirthdays} />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default AboutShort;
const Container = styled.div`
  .heading {
    p {
      font-family: "Bricolage Grotesque", sans-serif;
      text-align: justify;
    }
  }
  video {
    height: fit-object;
    width: 100%;
    margin-top: 2rem;
  }

  .noticeBoard {
    border: 1px solid #3c3e96;
    height: 50%;
    font-family: "Bricolage Grotesque", sans-serif;
    @media screen and (max-width: 500px) {
      height: 20rem;
      overflow: hidden;
    }
    h1 {
      color: #ffffff;
      background-color: #3c3e96;
      padding: 11px;
      font-size: 1.5rem;
    }
    ul {
      li {
        list-style: none;
        text-align: left;
        padding-left: 1rem;
      }
    }
  }
  .birthCard {
    height: 50%;
    align-items: center;
    img {
      height: 5rem;
      width: 5rem;
    }
  }
    span{
    font-size: 4rem;
      text-shadow: 1px 4px 5px #ffeaa7;
      color: #3c3e96;
      @media screen and (max-width: 400px) {
        font-size: 5rem;
      }
    }
    }
`;
