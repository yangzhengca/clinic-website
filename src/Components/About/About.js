import React from "react";
import doctor from '../../images/doctor.jpg'
import styles from "./About.module.css"


const About = () => {
  return (
    <section id="about" >
    <div class="container p-5">
      <div class="row p-5">
        <div class="col-6">
            <h1>Dr. Who</h1>
            <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
            </p>
        </div>
        <div class="col-6">
            <div class={styles.img}>
            <img src={doctor} class="ms-auto" alt="doctor" />
            </div>
            
        </div>
      </div>
    </div>
    </section>
  );
};

export default About;
