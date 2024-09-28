import React from "react";
import "./Partners.css";
import univasa from "../../assets/images/univasaLogo.png";
import bemas from "../../assets/images/bemasLogo.png";
import fivegel from "../../assets/images/5gelLogo.jpg";

const Partners = () => {
  return (
    <section className="partners">
      <h2>Our Partners</h2>
      <div className="partners-container">
        <div className="partner-item">
          <img src={univasa} alt="Partner 1" />
        </div>
        <div className="partner-item">
          <img src={bemas} alt="Partner 2" />
        </div>
        <div className="partner-item">
          <img src={fivegel} alt="Partner 3" />
        </div>
      </div>
    </section>
  );
};

export default Partners;
