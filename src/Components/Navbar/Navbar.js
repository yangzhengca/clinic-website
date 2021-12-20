import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import styles from "./Navbar.module.css";
import logo from "../../images/clinic.png";

const Navbar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-md navbar-light bg-light sticky-top">
        <div class="container-fluid">
          {/* <a class="navbar-brand" href="/">
            <img style={{maxWidth: "10%"}} src={logo} alt="logo" />
          </a> */}
          <a class="navbar-brand fs-2" href="#">
            The Clinic
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <ul class="navbar-nav mb-2 mb-lg-0 ms-auto">
              <li class="nav-item">
                <a href="#top" class="nav-link" aria-current="page">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a href="#about" class="nav-link">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a href="#service" class="nav-link">
                  Service
                </a>
              </li>

              {/* <li class="nav-item">
                <a href="#contact" class="nav-link">
                  Contact
                </a>
              </li> */}
              <li class="nav-item appointment-btn btn-outline">
                <a
                  target="_top"
                  class="nav-link"
                  href="https://squareup.com/appointments/book/9zcg02zd6if7v6/LJPXV0AAC92MW/start"
                  rel="nofollow"
                >
                  Appointment
                </a>

                {/* <a href="/" class="nav-link">
                  Appointment
                </a> */}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
