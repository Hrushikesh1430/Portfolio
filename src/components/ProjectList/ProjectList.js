import Project from "./Project/Project";
import "./ProjectList.css";
import { projects } from "../../data/projectData";
const ProjectList = () => {
  const project_temp = projects.slice(0, 3);
  return (
    <div className="project_list">
      <div className="project_list_text">
        <h1 className="project_list_title">Create & Inspire. It's lama</h1>
        <p className="project_list_descrip">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here',
        </p>
      </div>
      <div className="lists">
        {project_temp.map((item, index) => (
          <Project key={index} img={item.img} href={item.link} />
        ))}
        {/* <Project />
        <Project />
        <Project /> */}
      </div>
    </div>
  );
};

export default ProjectList;
