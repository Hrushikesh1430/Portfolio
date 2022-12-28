import "./intro.css";
import "font-awesome/css/font-awesome.min.css";
import React from "react";
import Navbar from "./Navbar/Navbar";
const Intro = () => {
  return (
    <React.Fragment>
      <Navbar />
      <div className="intro-main">
        <div className="intro-left">
          <div className="wrapper-left">
            <h2 className="intro-name1">Hello, my name is</h2>
            <h1 className="intro-name2">Hrushikesh Tawde</h1>
            <div className="title">
              <div className="title-wrapper">
                <div className="title-item">Full Stack Web Developer</div>
                <div className="title-item">Tabla Player</div>
                <div className="title-item">Writer</div>
              </div>
            </div>
            <p className="intro-descrip">
              I am a full stack Developer, eager to learn new web techologies
              and implement them to create stylish modern websites
            </p>
            <div className="socialicons">
              <ul>
                <li>
                  <a href="https://www.linkedin.com/in/hrushikesh-tawde-0031511a4/">
                    <i className="fa fa-linkedin" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a href="https://github.com/Hrushikesh1430">
                    <i className="fa fa-github" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com">
                    <i className="fa fa-twitter" aria-hidden="true"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="intro-right">
          <div className="intro-bg"></div>
          {/* <img src={Me} alt="" className="intro-img"></img> */}
        </div>
      </div>
    </React.Fragment>
  );
};
export default Intro;
