import React from "react";
import "./HeroBanner.css";
import arrow from "../../assets/images/rightArrow.svg";
import { Link } from "react-scroll";

const HeroBanner = () => {
  return (
    <section className="herobg container">
      <div className="hero-text">
        <h1>
          <span> Justhitclick-Digital</span> Technologies Limited
        </h1>
        <p>
          is a Software development company that routinely offers a web API, an
          application programming interface for web browsers, or a web interface
          that is fashioned for a customer’s needs.
        </p>
        <p>
          As a company, we drive success through technological innovation,
          probity, and collaboration.
        </p>
      </div>
    </section>
  );
};

export default HeroBanner;
