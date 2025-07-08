import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useAuth } from "../context/Index";

const Header = () => {
  const [auth, setAuth] = useAuth();
  return (
    <>
      <Container>
        <div>
          <nav class="navbar navbar-expand-lg navbar-light bg-light naxbar">
            <div class="container-fluid">
              <Link>
                <img
                  src="https://res.cloudinary.com/antrix/image/upload/v1692943490/woj/woj_circle_logo_eyc3mz.png"
                  class="navbar-brand"
                  alt="logo"
                />
              </Link>

              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <Link class="nav-link" aria-current="page" to="/">
                      Home
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link" to="/about">
                      About
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link" to="/founder">
                      Founder
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link
                      class="nav-link"
                      to={!auth.user ? "/gallery-login" : "/gallery"}
                    >
                      Gallery
                    </Link>
                  </li>
                  <li class="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="https://woj.nascorptechnologies.com/Index"
                      id="navbarDropdown"
                      role="button"
                      target="_blank"
                      rel="noreferrer"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      School App Link
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                      <li>
                        <a
                          class="dropdown-item"
                          target="_blank"
                          rel="noreferrer"
                          href="https://play.google.com/store/apps/details?id=com.db.nascorp.woj"
                        >
                          For Android Mobile
                        </a>
                      </li>
                      <li>
                        <a
                          class="dropdown-item"
                          target="_blank"
                          rel="noreferrer"
                          href="https://apps.apple.com/us/app/wings-of-joy-jabalpur/id6447137020"
                        >
                          For IOS Mobile
                        </a>
                      </li>
                      <li>
                        <a
                          class="dropdown-item"
                          target="_blank"
                          rel="noreferrer"
                          href="https://woj.nascorptechnologies.com/Index"
                        >
                          For Web Browser
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link" to="/uniform">
                      Uniform
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link" to="/contact">
                      Contact
                    </Link>
                  </li>
                </ul>
                <Link to="/e-register">
                  <button className="btn btn-success fs-3">Register now</button>
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </Container>
    </>
  );
};

export default Header;
const Container = styled.div`
  .naxbar {
    background-color: transparent !important;
    padding: 1rem 1rem;
    box-shadow: 0px 0px 11px #c4b8b8;
    // box-shadow: 1px 1px 10px black;
    img {
      height: 7rem;
      width: 11rem;
    }
    li {
      font-size: 1.5rem;
      font-weight: bold;
      font-family: "Bricolage Grotesque", sans-serif;
      color: #3d3f99;
    }
    button {
      font-family: "Bricolage Grotesque", sans-serif;
      background-color: #f53237;
      border: none;
    }
  }
`;
