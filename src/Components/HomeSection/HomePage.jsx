import React from "react";
import Partners from "../PartnersSection/Partners";
import Title from "../Title/Title";
import Service from "../ServiceSection/Service";
import About from "../AboutComponent/About";
import Portfolio from "../PortfolioSection/Portfolio";
import Contact from "../ContactSection/Contact";
import Team from "../TeamSection/Team";

const HomePage = () => {
  return (
    <div>
      <Partners />
      <div className="container">
        <Title subTitle="Our Service" title="Whate We Offer" />
        <Service />
        <About />
        <Portfolio />
        <Title subTitle="Contact Us" title="Get in Touch" />
        <Contact />
      </div>
      <Team />
    </div>
  );
};

export default HomePage;
