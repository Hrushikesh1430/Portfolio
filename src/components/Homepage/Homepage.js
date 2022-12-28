import Intro from "../Intro/Intro";
import About from "../About/About";
import ProjectList from "../ProjectList/ProjectList";
import Contact from "../Contact/Contact";
import React from "react";

const Homepage = () => {
  return (
    <React.Fragment>
      <Intro />
      <About />
      <ProjectList />
      <Contact />
    </React.Fragment>
  );
};

export default Homepage;
