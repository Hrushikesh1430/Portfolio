import "./Project.css";
const Project = (props) => {
  return (
    <div className="product">
      <div className="browser">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
      </div>
      <a href={props.href} target="_blank" rel="noreferrer">
        <img
          src={`/assets/images/${props.img}`}
          alt="project"
          className="project_image"
        ></img>
      </a>
    </div>
  );
};

export default Project;
