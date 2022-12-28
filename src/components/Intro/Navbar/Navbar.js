import "./Navbar.css";
import { Link } from "react-router-dom";
// import { useEffect, useState } from "react";
const Navbar = () => {
  //   const [headercolor, setHeaderColor] = useState("transparent");
  //   const scrollPosition = window.scrollY; // => scroll position
  //   console.log(scrollPosition);

  //   const changeColor = () => {
  //     window.scroll > 10
  //       ? setHeaderColor("antiquewhite;")
  //       : setHeaderColor("transparent");
  //   };

  //   useEffect(() => {
  //     console.log("hey");
  //     window.addEventListener("scroll", changeColor);
  //     return () => {
  //       window.removeEventListener("scroll", changeColor);
  //     };
  //   }, []);
  return (
    <div className="navbar">
      <div className="navbar-left">
        <p>Hrushikesh Tawde</p>
      </div>

      <div className="navbar-right">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
