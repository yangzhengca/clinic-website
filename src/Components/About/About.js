import React from "react";
import doctor from "../../images/doctor.jpg";
import styles from "./About.module.css";

const About = () => {
  return (
    <section id="about">
      {/* <div class=".container-fluid"> */}
        <div class="row mt-5">
          <div class="col-md-5">
            <div class="about-info">
              <h2 class="mt-5 p-5">Welcome to The Clinic</h2>
              <p class="px-5">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's printer took a
                galley of type and scrambled it to make a type specimen book.
              </p>
              <h2 class="p-5">Doctor John Doe</h2>
              <p class="px-5">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's printer took a
                galley of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
          <div class="col-md-6">
            <img src={doctor} class={styles.img} alt="" />
            {/* <figcaption>
                    <h3>Dr. Neil Jackson</h3>
                    <p>General Principal</p>
                  </figcaption> */}
          </div>
          {/* <div class="col-6">
            <div class={styles.img}>
            <img src={doctor} class="ms-auto" alt="doctor" />
            </div>
            
        </div> */}
        </div>
      {/* </div> */}
    </section>
  );
};

export default About;
