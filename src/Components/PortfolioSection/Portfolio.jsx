import React from "react";
import "./Portfolio.css";
import proj1 from "../../assets/images/POS-Application.png";
import proj2 from "../../assets/images/AuthenticationApp.png";

const Portfolio = () => {
  return (
    <div className="portfolio">
      <h2>Our Recent Project</h2>
      <div className="portfolio-container">
        <div className="portfolio-item">
          <img src={proj1} alt="Project 1" />
          <div className="portfolio-caption">
            <h3>Web Development Project</h3>
            <p>POS Application for POS operators in Nigeria</p>
          </div>
        </div>
        <div className="portfolio-item">
          <img src={proj2} alt="Project 2" />
          <div className="portfolio-caption">
            <h3>Web Development Project</h3>
            <p>Authentication App using Firebase</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
