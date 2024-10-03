import React from "react";
import Header from "./Components/HeaderSection/Header";
import Hero from "./Components/HeroSection/Hero";
import HeroBanner from "./Components/BannerSection/HeroBanner";
import { useLocation } from "react-router-dom";

const Layout = () => {
  const location = useLocation(); // Now useLocation is within the Router context

  return (
    <>
      <Header />
      {location.pathname === "/" ? <Hero /> : <HeroBanner />}{" "}
      {/* Conditional rendering */}
    </>
  );
};

export default Layout;
