import findProjects from "../utilities/findProject"
import { useParams } from "react-router-dom";
// import { Link } from "react-router-dom";
// import { hyphenatedWords } from "../utilities/hyphenatedWords"
// import { useLocation } from "react-router-dom"
// import myProjects from "../data/projects";


function ProjectDetails() {

  const {projectDetails} = useParams()

  const project = findProjects(projectDetails)


  return (
    <>
    <h1>Project Details:</h1>
    <h2>      {project.title}   </h2>
    <h4>{project.description}</h4>
    <img src={project.image} alt="screen shot of the app landpage" />
    <div className="button-container">

    <a href={project.repositoryLink}>
    <button className="button">Github</button>  </a>
    <a href={project.deploymentLink}>
    <button className="button">Deployment Link</button>  </a>


    </div>
    </>
  )


  }


export default ProjectDetails