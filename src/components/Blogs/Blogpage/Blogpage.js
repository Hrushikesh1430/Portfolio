import React from "react";
import { useParams } from "react-router-dom";
import data from "../../../data/blogs.json";
import "./Blogpage.css";
import Navbar from "../../Intro/Navbar/Navbar";
const BlogPage = () => {
  const { id } = useParams();
  const blog = data["blogs"].filter((item) => {
    return item.key === parseInt(id);
  });
  console.log(blog);

  return (
    <React.Fragment>
      <Navbar />
      <div className="blog-page">
        {blog.map((item) => {
          return (
            <div className="blog-page-main">
              <p className="blog-page-title">{item.title}</p>
              <p className="blog-page-date">{item.date}</p>
              <p className="blog-page-info">{item.info}</p>
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
};
export default BlogPage;
