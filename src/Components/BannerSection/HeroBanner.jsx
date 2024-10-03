import React from "react";
import "./HeroBanner.css";
import arrow from "../../assets/images/rightArrow.svg";
import { Link } from "react-scroll";

const HeroBanner = () => {
  return (
    <section className="herobg container">
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
              to="portfolio"
              smooth="true"
              offset={-260}
              duration={500}
              className="cta-button"
            >
              View Portfolio <img src={arrow} alt="" />
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default HeroBanner;
