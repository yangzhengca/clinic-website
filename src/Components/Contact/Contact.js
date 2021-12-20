import React from "react";

const Contact = () => {
  return (
    <section id="contact">
      <div id="google-map">
        <iframe          
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8546.527672813305!2d-104.6056587968957!3d50.44300278934134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x531c1e376dcac753%3A0x66c099361407330a!2sRegina%20General%20Hospital!5e0!3m2!1sen!2sca!4v1639505162661!5m2!1sen!2sca"
          width="800"
          height="600"
          style={{ border: 0 }}
          allowfullscreen="true"
          loading="lazy"

        ></iframe>
      </div>
    </section>
  );
};

export default Contact;
