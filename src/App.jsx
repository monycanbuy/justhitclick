import React from "react";
import Header from "./Components/HeaderSection/Header";
import Hero from "./Components/HeroSection/Hero";
import Service from "./Components/ServiceSection/Service";
import Title from "./Components/Title/Title";
import Portfolio from "./Components/PortfolioSection/Portfolio";
import About from "./Components/AboutComponent/About";
import Contact from "./Components/ContactSection/Contact";
import Partners from "./Components/PartnersSection/Partners";
import Team from "./Components/TeamSection/Team";
import Footer from "./Components/FooterSection/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
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
      <Footer />
    </div>
  );
};

export default App;
