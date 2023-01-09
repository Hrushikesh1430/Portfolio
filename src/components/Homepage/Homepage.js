import Intro from "../Intro/Intro";
import About from "../About/About";
import Contact from "../Contact/Contact";
import React from "react";

const Homepage = () => {
  return (
    <React.Fragment>
      <Intro />
      <About />
      <Contact />
    </React.Fragment>
  );
};

export default Homepage;
