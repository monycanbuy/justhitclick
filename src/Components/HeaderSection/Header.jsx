import React, { useEffect, useState } from "react";
import "./Header.css";
import logo from "../../assets/images/jhcLogo.png";
import menu from "../../assets/images/menu.svg";
import { Link } from "react-scroll";

const Header = () => {
  const [sticky, setSticky] = useState(false);
  const [activeLink, setActiveLink] = useState("home"); // To track the active link

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);

  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  };

  const handleSetActive = (link) => {
    setActiveLink(link); // Update active link
  };
  return (
    <nav className={`container ${sticky ? "dark-nav" : ""}`}>
      <img src={logo} alt="" className="logo" />
      <ul className={mobileMenu ? "" : "hide-mobile-menu"}>
        <li>
          <Link
            to="hero"
            smooth="true"
            offset={0}
            duration={500}
            className={activeLink === "home" ? "active" : ""}
            onClick={() => handleSetActive("home")}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="service"
            smooth="true"
            offset={-260}
            duration={500}
            className={activeLink === "services" ? "active" : ""}
            onClick={() => handleSetActive("services")}
          >
            Services
          </Link>
        </li>
        <li>
          <Link
            to="portfolio"
            smooth="true"
            offset={-260}
            duration={500}
            className={activeLink === "portfolio" ? "active" : ""}
            onClick={() => handleSetActive("portfolio")}
          >
            Portfolio
          </Link>
        </li>
        <li>
          <Link
            to="about"
            smooth="true"
            offset={-260}
            duration={500}
            className={activeLink === "about" ? "active" : ""}
            onClick={() => handleSetActive("about")}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="team"
            smooth="true"
            offset={-260}
            duration={500}
            className={activeLink === "team" ? "active" : ""}
            onClick={() => handleSetActive("team")}
          >
            Team
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            smooth="true"
            offset={-260}
            duration={500}
            className="cta-button"
          >
            Contact Us
          </Link>
        </li>
      </ul>
      <img src={menu} alt="" className="menu-icon" onClick={toggleMenu} />
    </nav>
  );
};

export default Header;
