import "./Blogs.css";
import Navbar from "../Intro/Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import data from "../../data/blogs.json";
const Blogs = () => {
  const navigate = useNavigate();
  const readmoreHandler = (key) => {
    navigate(`${key}`);
  };
  return (
    <>
      <Navbar />
      <div className="blogs">
        <div className="blog-content">
          <p className="main-blog">My Blogs</p>
          <div className="blogList">
            {data["blogs"].map((item, index) => {
              return (
                <div className="blog-card" key={item.key}>
                  <p className="blog-title">{item.title}</p>
                  <p className="blog-date">{item.date}</p>
                  <p className="blog-info">{item.info}</p>
                  <button
                    className="read-more"
                    onClick={() => readmoreHandler(item.key)}
                  >
                    Read more
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogs;
