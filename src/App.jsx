import React from "react";
import Header from "./Components/HeaderSection/Header";
import Footer from "./Components/FooterSection/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Components/HomeSection/HomePage";
import MobileDetails from "./Components/MobileSection/MobileDetails";
import Hero from "./Components/HeroSection/Hero";
import WebDetails from "./Components/WebSection/WebDetails";
import IotDetails from "./Components/IotSection/IotDetails";
import Contact from "./Components/ContactSection/Contact";
import Title from "./Components/Title/Title";

const App = () => {
  return (
    <Router>
      <Header />
      <Hero />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/mobiledetails" element={<MobileDetails />} />
          <Route path="/webdetails" element={<WebDetails />} />
          <Route path="/iotdetails" element={<IotDetails />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
