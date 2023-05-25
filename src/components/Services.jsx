import React from "react";
import "../styles/Services.css";

function Services() {
  return (
    <div>
      <div className="agenda">
          Our team of experts combines technical expertise with creativity and
          innovation to deliver exceptional results. We work closely with our
          clients to understand their goals and objectives, ensuring that our
          services align with their unique requirements. Whether you're looking
          to establish a strong online presence, optimize your website for
          better performance, or reach a wider audience through effective
          digital marketing strategies, we've got you covered.
        </div>
      <div className="about-us">
        
        <section className="section1">
          <h2>Web Development</h2>
          <p>
            Our team of experienced web developers specializes in creating
            high-quality and responsive websites. We have expertise in various
            web technologies such as HTML, CSS, JavaScript, and frameworks like
            React and Node.js. We are committed to delivering cutting-edge
            solutions tailored to our clients' needs.
          </p>
        </section>

        <section className="section2">
          <h2>UX/UI Design</h2>
          <p>
            Our UX/UI designers are passionate about creating user-centric and
            visually appealing interfaces. We follow a user-centered design
            approach to ensure that the products we design are intuitive,
            engaging, and enhance the overall user experience. We utilize the
            latest design tools and techniques to deliver exceptional designs
            for both web and mobile applications.
          </p>
        </section>

        <section className="section3">
          <h2>Android Development</h2>
          <p>
            Our Android developers are skilled in creating feature-rich and
            scalable Android applications. We have expertise in Java and Kotlin,
            the primary programming languages for Android development. Whether
            you need a native Android app or want to optimize your existing app,
            our team can provide end-to-end Android development solutions.
          </p>
        </section>
      </div>
    </div>
  );
}

export default Services;
