import React, { useState } from "react";
import styled from "styled-components";
import Layout from "../Layout/Layout";
import { FiPhoneCall, FiTwitter } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import { FaFacebookSquare, FaInstagram, FaMapMarkerAlt } from "react-icons/fa";
import { BsArrowLeftCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import MapLocation from "../component/MapLocation";
import cogoToast from "cogo-toast";

const Contact = () => {
  const [fullname, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [mobile, setMobile] = useState("");
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:4400/api/auth/inquiryMail", {
        name: fullname,
        email,
        message,
        number: mobile,
      });
      cogoToast.success("Message sent Successfully !");
      setFullName("");
      setEmail("");
      setMessage("");
      setMobile("");
      // navigate("/about");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Container>
        <Layout title={"Contact - wings of joy"}>
          <div
            className="body-contact pt-5 pb-5"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <div className="secondDiv"></div>
            <div className="container contact-body">
              <div className="contact-form contact-body-less">
                <div className="row mt-5 pt-5 pb-5">
                  {/* <div className="col-2"></div> */}
                  <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                    <h1>Contact Info</h1>

                    <p className="mt-3 g-5 text-start">
                      <span>
                        <FiPhoneCall className="svgcontact" />
                      </span>{" "}
                      <a href="tel:0761-2410880">0761-2410880</a>
                      <a href="tel:0761-2410882">0761-2410882</a>
                      <br /> Toll Free:{" "}
                      <a href="tel:+91 96-96-41-22-22">+91 96-96-41-22-22</a>
                    </p>
                    <p className="text-start">
                      <span>
                        <AiOutlineMail className="svgcontact" />
                      </span>{" "}
                      <a href="mailto:wingsofjoyjbp@gmail.com">
                        wingsofjoyjbp@gmail.com
                      </a>
                    </p>
                    <p className="text-start">
                      <span>
                        <FaMapMarkerAlt className="svgcontact" />
                      </span>{" "}
                      Wings of Joy Campus of Wings of Joy, Near Muskan Plaza
                      Jabalpur - 482002 (M.P.)
                    </p>
                    <div className="container">
                      <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                          <div className="qrbox">
                            <img
                              src="https://res.cloudinary.com/antrix/image/upload/v1692023950/woj/QR_code_gg9sgq.jpg"
                              alt="qr code"
                            />
                          </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                          <div className="qrcont">
                            <p>Scan QR code to get all the details</p>
                            <BsArrowLeftCircleFill
                              style={{ fontSize: "2rem" }}
                            />
                            or click here
                            <a
                              href="https://scnv.io/9tI3?qr=1"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              https://scnv.io/9tI3?qr=1
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="widthsett">
                      <ul className="socialcontact">
                        <li>
                          <a
                            href="https://www.facebook.com/people/Wings-Of-Joy/100094887574349/?locale=hi_IN"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <img
                              src="https://res.cloudinary.com/antrix/image/upload/v1678714799/facebook-2429746_640_pwgv7r.png"
                              alt=""
                              srcset=""
                              className="socialImagenav"
                            />
                          </a>
                        </li>

                        <li>
                          <a
                            href="https://www.instagram.com/woj.laxmipur/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <img
                              src="https://res.cloudinary.com/antrix/image/upload/v1678771526/instagram-1675670_640_qpdp85.png"
                              alt=""
                              srcset=""
                              className="socialImagenav"
                            />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                    <div className="container">
                      <h2 className="text-start">Have a query?</h2>
                      <form onSubmit={onSubmit}>
                        <div class="mb-3">
                          <input
                            type="Name"
                            class="form-control p-3"
                            aria-describedby="emailHelp"
                            placeholder="Enter your Name"
                            id="fullname"
                            value={fullname}
                            required
                            onChange={(e) => setFullName(e.target.value)}
                          />
                        </div>
                        <div class="mb-3">
                          <input
                            type="email"
                            class="form-control p-3"
                            placeholder="Enter your Email"
                            id="email"
                            value={email}
                            required
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </div>
                        <div class="mb-3">
                          <input
                            type="text"
                            class="form-control p-3"
                            placeholder="Enter your mobile number without country code"
                            id="mobile"
                            value={mobile}
                            maxLength={10}
                            required
                            onChange={(e) => setMobile(e.target.value)}
                          />
                        </div>
                        <textarea
                          class="form-control mb-3 p-3"
                          placeholder="Enter your message"
                          id="message"
                          value={message}
                          required
                          onChange={(e) => setMessage(e.target.value)}
                        ></textarea>
                        <button
                          type="submit"
                          class="btn btn-primary w-100 subBtn border"
                        >
                          Submit
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="container-fluid">
            <MapLocation />
          </div> */}
        </Layout>
      </Container>
    </>
  );
};

export default Contact;
const Container = styled.div`
  .subBtn {
    background-color: #4ebe93;
  }

  .socialcontact > li {
    list-style: none;
  }

  .socialImagenav {
    height: 2rem;
    width: 2rem;
    margin: 1rem;
  }

  .socialcontact {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .secondDiv {
    background-color: #4ebe93;
    height: 10rem;
    width: 100%;
    margin-top: 6rem;
    position: absolute;
    z-index: -9999;
  }

  .contact-form {
    background-color: white;
  }

  .widthsett {
    width: auto;
    margin-left: 0rem;
  }

  .contact-body {
    box-shadow: 0px 8px 25px #4ebe93;
    border-radius: 7px;
  }

  .svgcontact {
    color: #4ebe93;
  }

  .contact-body-less {
    display: flex;
    justify-content: space-evenly;
  }

  /* .body-contact {
  background-color: #c1c1c1;
  position: absolute;
  z-index: 1;
} */

  @media screen and (max-width: 542px) {
    .contact-body-less {
      text-align: center;
    }
    .socialcontact {
      display: flex;
      justify-content: space-around;
    }
    .widthsett {
      width: auto;
      margin-left: 0rem;
    }
  }

  .qrbox {
    img {
      height: auto;
      width: 10rem;
    }
  }
  .qrcont {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    flex-direction: column;
  }
  a {
    text-decoration: none;
    color: sky-blue;
  }
`;
