import React from "react";
// import "./Footer.css";
// import logo from "../../images/logo.png";
import styled from "styled-components";
import { Link } from "react-router-dom";
// import { GrProjects, GrServices } from "react-icons/gr";
import { CgOrganisation } from "react-icons/cg";
// import { AiOutlineProject, AiTwotoneProject } from "react-icons/ai";
import { MdMiscellaneousServices } from "react-icons/md";

const Footer = () => {
  const handleTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <Container className="container-fluid pt-5 pb-1 footer-body">
      <div className="">
        <div className="row">
          <div className="col-1"></div>
          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
            <div className="foot-data">
              <h3 style={{ color: "#3d3f99" }} className="h3-foot">Contact</h3>
              <ul className="mt-3">
                <li>
                  <img
                    src="https://res.cloudinary.com/antrix/image/upload/v1692023950/woj/QR_code_gg9sgq.jpg"
                    alt="barcode details"
                    srcset=""
                    className="h-50 w-50"
                  />
                  <p>Scan QR code to get all the details</p>
                  <p>
                    or click{" "}
                    <a
                      href="https://scnv.io/9tI3?qr=1"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      https://scnv.io/9tI3?qr=1
                    </a>
                  </p>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12">
            <div className="foot-data">
              <h3 style={{ color: "#3d3f99" }}>
                <CgOrganisation /> School links
              </h3>
              <ul>
                <li onClick={handleTop}>
                  <Link to="/about">About</Link>
                </li>
                <li onClick={handleTop}>
                  <Link to="/founder">Founder</Link>
                </li>
                <li onClick={handleTop}>
                  <Link to="/gallery">Gallery</Link>
                </li>
                <li onClick={handleTop}>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12 col-12">
            <div className="foot-data">
              <h3 className="text-center" style={{ color: "#3d3f99" }}>
                Follow Us
              </h3>
              <div className="widthsett mt-4">
                <ul className="socialcontact d-flex justify-content-center">
                  <li className="mx-3">
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
          </div>
          <div className="col-1"></div>
        </div>
      </div>
      <div className="last-foot mt-5 text-center">
        <div className="row">
          <div className="col-lg-3 col-md-3 col-sm-12 col-12">
            {/* <Link to="/Terms" onClick={handleTop}>
              <p>Terms & Conditions</p>
            </Link> */}
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-12">
            {" "}
            <p className="text-center">©2023 Wings of Joy</p>{" "}
          </div>
          <div className="col-lg-3 col-md-3 col-sm-12 col-12">
            {/* {" "}
            <Link to="/privacy" onClick={handleTop}>
              <p>Privacy Policy</p>
            </Link>{" "} */}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Footer;
const Container = styled.div`
  // background: linear-gradient(358deg, #43c6ac, #f8f8f9);
  background-color: #f5f5f587;
  .foot-data {
    @media screen and (max-width:500px){
      
    }
    h3 {
      // color: #3d3f99;
      font-family: "Bricolage Grotesque", sans-serif;
      font-size: 2rem;
    }
    ul {
      padding-left: 0rem;
      li {
        list-style: none;
        img {
          box-shadow: 1px 7px 78px #334957;
        }
        a {
          text-decoration: none;
          color: #4244ad;
          font-family: "Bricolage Grotesque", sans-serif;
        }
        a:hover {
          color: #000;
        }
      }
    }
  }
  .last-foot {
    p {
      text-shadow: rgb(78 190 147) 1px 1px 7px;
      color: #0b100e;
      font-weight: 700;
      font-family: "Bricolage Grotesque", sans-serif;
    }
    p::before {
      content: "";
      background-color: red;
      width: 10rem;
      height: 10rem;
    }
  }
  .first-foot {
    h6 {
      text-shadow: rgb(78 190 147) 1px 1px 7px;
      color: #0b100e;
      font-weight: 700;
    }
  }
  .footer-body {
    background: linear-gradient(358deg, #43c6ac, #f8f8f9);
  }
  .socialImagenav {
    height: 2rem;
  }
`;
