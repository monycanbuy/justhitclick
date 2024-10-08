import React from "react";
import "./Hero.css";
import arrow from "../../assets/images/rightArrow.svg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="hero container">
      <div className="hero-text">
        <h1>
          Bringing
          <span> Ideas to Life</span> Through Web, Mobile, and IoT Solutions
        </h1>
        <p>
          We're specialized in crafting innovative digital solutions, from
          custom websites and mobile applications to cutting-edge IoT systems.
          With a focus on seamless user experiences and robust functionality, I
          transform your ideas into technology that empowers your business to
          thrive in the digital age.
        </p>
        <ul>
          <li>
            <Link
              to="conpany-details"
              smooth="true"
              offset={-260}
              duration={500}
              className="cta-button"
            >
              Learn More <img src={arrow} alt="" />
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Hero;
