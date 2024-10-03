import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { Link, useLocation, useNavigate } from "react-router-dom"; // Import useLocation and useNavigate
import "./Footer.css";

const Footer = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const location = useLocation(); // Get current location

  // Function to handle "Get in Touch" click
  const handleGetInTouch = () => {
    if (location.pathname !== "/") {
      // If not on homepage, navigate to /contact
      navigate("/contact");
    } else {
      // If on homepage, scroll to the contact section
      document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="footer container">
      <div className="footer-section company-info">
        <h3>Justhitclick-Digital Technologies Limited</h3>
        <div className="social-icons">
          <a href="https://facebook.com">
            <FontAwesomeIcon icon={faFacebook} className="fa-icon" />
          </a>
          <a href="https://twitter.com">
            <FontAwesomeIcon icon={faTwitter} className="fa-icon" />
          </a>
          <a href="https://linkedin.com">
            <FontAwesomeIcon icon={faLinkedin} className="fa-icon" />
          </a>
        </div>
      </div>

      <div className="footer-section nav-menu">
        <ul>
          <li>
            <Link to="hero" smooth="true" offset={0} duration={500}>
              Home
            </Link>
          </li>
          <li>
            <Link to="service" smooth="true" offset={-260} duration={500}>
              Services
            </Link>
          </li>
          <li>
            <Link to="portfolio" smooth="true" offset={-260} duration={500}>
              Portfolio
            </Link>
          </li>
          <li>
            <Link to="about" smooth="true" offset={-260} duration={500}>
              About
            </Link>
          </li>
          <li>
            <Link to="team" smooth="true" offset={-260} duration={500}>
              Team
            </Link>
          </li>
          <li>
            <Link to="contact" smooth="true" offset={-260} duration={500}>
              Contact Us
            </Link>
          </li>
        </ul>
      </div>

      <div className="footer-section contact-info">
        <p>
          <strong>Phone:</strong> +2347054032321
        </p>
        <p>
          <strong>Email:</strong> support@justhitclick.com
        </p>
        <p>
          <strong>Address:</strong> 30A, Alternative Route, Chevron Drive,
          Lekki, Lagos State, Nigeria
        </p>
        <ul>
          <li>
            <button className="cta-button" onClick={handleGetInTouch}>
              Get in Touch
            </button>
          </li>
        </ul>
      </div>
      <div className="footer-bottom">
        <hr className="footer-divider" />
        <p className="rights-reserved">
          © 2024 Justhitclick-Digital Technologies Ltd
        </p>
      </div>
    </footer>
  );
};

export default Footer;
