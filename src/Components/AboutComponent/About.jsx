import React from "react";
import "./About.css";
import logo from "../../assets/images/jhcLogo.png";

const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={logo} alt="logo" className="about-img" />
        <img src="play-icon.png" alt="Play Video" className="play-icon" />
      </div>
      <div className="about-right">
        <h3>About Justhitclick-Digital Technologies Ltd.</h3>
        <p>
          Justhitclick-Digital Technologies Limited is a specialized software
          development company focused on delivering high-quality solutions in
          web, mobile, and IoT application development. We are committed to
          using cutting-edge technology to create custom software that aligns
          with our clients' unique business goals.
        </p>
        <p>
          Our range of services includes web APIs and application programming
          interfaces, designed to provide seamless user experiences. Our
          solutions meet the specific needs of each client, ensuring both
          functionality and efficiency.
        </p>
        <p>
          We believe success is driven by technological innovation, integrity,
          and collaboration. We work closely with clients to deliver
          transformative digital solutions that foster business growth.
        </p>
      </div>
    </div>
  );
};

export default About;
