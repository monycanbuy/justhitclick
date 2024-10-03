import React, { useEffect, useState } from "react";
import "./Header.css";
import logo from "../../assets/images/jhcLogo.png";
import menu from "../../assets/images/menus.svg";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const [sticky, setSticky] = useState(false);
  const [activeLink, setActiveLink] = useState("home");
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);

  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => {
    setMobileMenu((prev) => !prev);
  };

  const handleSetActive = (link) => {
    setActiveLink(link);
  };

  const handleLinkClick = (link) => {
    if (location.pathname !== "/") {
      // Navigate to the homepage
      navigate("/");

      // After navigation, scroll to the specified section
      setTimeout(() => {
        const element = document.getElementById(link);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100); // Delay to ensure the page is loaded
    } else {
      handleSetActive(link);
      const element = document.getElementById(link);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setMobileMenu(false);
  };

  return (
    <nav className={`container ${sticky ? "dark-nav" : ""}`}>
      <RouterLink to="/" className="logo-link">
        <img src={logo} alt="Logo" className="logo" />
      </RouterLink>
      <ul className={mobileMenu ? "" : "hide-mobile-menu"}>
        <li>
          <ScrollLink
            to="hero"
            smooth="true"
            offset={0}
            duration={500}
            className={activeLink === "home" ? "active" : ""}
            onClick={() => handleLinkClick("hero")}
          >
            Home
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            to="service"
            smooth="true"
            offset={-260}
            duration={500}
            className={activeLink === "services" ? "active" : ""}
            onClick={() => handleLinkClick("service")}
          >
            Services
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            to="portfolio"
            smooth="true"
            offset={-260}
            duration={500}
            className={activeLink === "portfolio" ? "active" : ""}
            onClick={() => handleLinkClick("portfolio")}
          >
            Portfolio
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            to="about"
            smooth="true"
            offset={-260}
            duration={500}
            className={activeLink === "about" ? "active" : ""}
            onClick={() => handleLinkClick("about")}
          >
            About
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            to="team"
            smooth="true"
            offset={-260}
            duration={500}
            className={activeLink === "team" ? "active" : ""}
            onClick={() => handleLinkClick("team")}
          >
            Team
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            to="contact"
            smooth="true"
            offset={-260}
            duration={500}
            className="cta-button"
            onClick={() => handleLinkClick("contact")}
          >
            Contact Us
          </ScrollLink>
        </li>
      </ul>
      <img src={menu} alt="Menu" className="menu-icon" onClick={toggleMenu} />
    </nav>
  );
};

export default Header;
