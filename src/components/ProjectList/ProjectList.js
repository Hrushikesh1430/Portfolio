import Project from "./Project/Project";
import "./ProjectList.css";
import { projects } from "../../data/projectData";
const ProjectList = () => {
  const project_temp = projects.slice(0, 3);
  return (
    <div className="project_list">
      <div className="project_list_text">
        <h1 className="project_list_title">Projects</h1>
        <p className="project_list_descrip">
          I have been developing some projects while learning , please have a
          look...
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
