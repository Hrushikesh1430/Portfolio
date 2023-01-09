import React from "react";
import Navbar from "../Intro/Navbar/Navbar";
import Project from "../ProjectList/Project/Project";
import "./ProjectPage.css";
import { projects } from "../../data/projectData";
const ProjectPage = () => {
  return (
    <React.Fragment>
      <Navbar />
      <div className="project-page">
        <p className="project-page-title">
          Some Projects that I have worked on...
        </p>
        <div className="project-container">
          {projects.map((item, index) => {
            return (
              <div className="project-parent">
                <p className="project-page-project-title">{item.title}</p>
                <Project key={index} img={item.img} href={item.link}></Project>
                <div className="project-page-links">
                  <button
                    className="live-project-button"
                    onClick={() => {
                      window.open(item.link, "_blank");
                    }}
                  >
                    <a href={item.link} target="_blank" rel="noreferrer">
                      Live Project
                    </a>
                  </button>
                  <button
                    className="live-project-button"
                    onClick={() => {
                      window.open(item.link, "_blank");
                    }}
                  >
                    <a href={item.source} target="_blank" rel="noreferrer">
                      View Source code
                    </a>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProjectPage;
