import React from "react";
import styles from "./Navbar.module.css";
import logo from "../../images/clinic.png";

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-primary ">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
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
            <a class="nav-link active" aria-current="page" href="#">
              Home
            </a>
            <a class="nav-link" href="#">
              About
            </a>
            <a class="nav-link" href="#">
              Service
            </a>
            <a class="nav-link" href="#">
              Contact
            </a>
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
