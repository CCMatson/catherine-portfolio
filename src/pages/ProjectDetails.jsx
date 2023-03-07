import '../styles/projects.css'
import findProjects from "../utilities/findProject"
import { useParams } from "react-router-dom";


function ProjectDetails() {

  const { projectDetails } = useParams()

  const project = findProjects(projectDetails)


  return (
    <>
      <div className="details-page">
        <h1>Project Details:</h1>
        <h1>      {project.title}   </h1>
        <h4>{project.description}</h4>
        <div>
          <a href={project.repositoryLink}>
            <button className="button">Github</button>  </a>
          <a href={project.deploymentLink}>
            <button className="button">Deployment Link</button>  </a>

        </div>
        <img src={project.image} alt="screen shot of the app landing page" />
        <div className="button-container">

        </div>


      </div>
    </>
  )


}


export default ProjectDetails