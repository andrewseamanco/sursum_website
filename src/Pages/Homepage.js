import React from "react";
import "./Homepage.css";
import AboutPageLinks from "./../Components/AboutPageLinks";
import AboutSursum from "./../Components/AboutSursum";
import AboutSursumSlider from "./../Components/AboutSursumSlider";
import Placements from "./../Components/Placements";
import Footer from "./../Components/Footer";

function Homepage() {
  return (
    <div className="slider">
      <AboutSursumSlider />
      <AboutSursum />
      <Placements />
      <AboutPageLinks />
      <Footer />
    </div>
  );
}

export default Homepage;
