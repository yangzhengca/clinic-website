import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import styles from "./Navbar.module.css";
import logo from "../../images/clinic.png";

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-md navbar-dark sticky-top bg-primary ">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">
          <img class={styles.logo} src={logo} />
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
          <div class="navbar-nav ms-auto fs-3">
            <Link smooth  to="#top" class="nav-link active" aria-current="page">
              Home
            </Link>
            <Link smooth class="nav-link" to="#about">
              About
            </Link>
            <Link smooth class="nav-link" to="#service">
              Service
            </Link>
            <Link smooth class="nav-link" to="#contact">
              Contact
            </Link>
            <div class="d-grid gap-2 col-3 mx-auto">
              <a class="btn btn-small btn-success fs-5 text-wrap" href="#">
                Make An Appointment
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
