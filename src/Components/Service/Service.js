import React from "react";
import service1 from "../../images/service1.jpg";
import service2 from "../../images/service2.jpg";
import service3 from "../../images/service3.jpg";
import styles from "./Service.module.css";

const Service = () => {
  return (
    <div class="container">
        <div class="row">
      <div class={styles.cardContainer}>
        <div class="card">
          <img src={service1} class="card-img-top" alt="service1" />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" class="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>

      <div class={styles.cardContainer}>
        <div class="card">
          <img src={service2} class="card-img-top" alt="service2" />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" class="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>

      <div class={styles.cardContainer}>
        <div class="card">
          <img src={service3} class="card-img-top" alt="service3" />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" class="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Service;
