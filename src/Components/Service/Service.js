import React from "react";
import service1 from "../../images/service1.jpg";
import service2 from "../../images/service2.jpg";
import service3 from "../../images/service3.jpg";
import styles from "./Service.module.css";

const Service = () => {
  return (
    <section id="service">
      <div class="container p-5">
        <h2 class="text-center p-5">Our Services</h2>
        <div class="row">
          <div class="col-md-4">
            <div class="card d-flex">
              <img src={service1} class="card-img-top" alt="service1" />
              <div class="card-body">
                <h5 class="card-title">Hyperthermia</h5>
                <p class="card-text">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. 
                </p>
                <a href="https://squareup.com/appointments/book/9zcg02zd6if7v6/LJPXV0AAC92MW/start" class="btn btn-primary">
                  Book Now
                </a>
              </div>
            </div>
          </div>

          <div class="col-md-4">
            <div class="card">
              <img src={service2} class="card-img-top" alt="service2" />
              <div class="card-body">
                <h5 class="card-title">Massage</h5>
                <p class="card-text">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. 
                </p>
                <a href="https://squareup.com/appointments/book/9zcg02zd6if7v6/LJPXV0AAC92MW/start" class="btn btn-primary">
                Book Now
                </a>
              </div>
            </div>
          </div>

          <div class="col-md-4">
            <div class="card">
              <img src={service3} class="card-img-top" alt="service3" />
              <div class="card-body">
                <h5 class="card-title">Cupping</h5>
                <p class="card-text">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. 
                </p>
                <a href="https://squareup.com/appointments/book/9zcg02zd6if7v6/LJPXV0AAC92MW/start" class="btn btn-primary">
                Book Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
