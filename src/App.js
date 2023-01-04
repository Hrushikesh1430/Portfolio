import Blogs from "./components/Blogs/Blogs";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Homepage from "./components/Homepage/Homepage";
import ProjectPage from "./components/ProjectPage/ProjectPage";
import BlogPage from "./components/Blogs/Blogpage/Blogpage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="projects" element={<ProjectPage />} />
          <Route path="blogs/:id" element={<BlogPage />} />
          <Route path="*" element={<Homepage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
