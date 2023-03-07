import  myProjects  from "../data/projects";
import ProjectList from '../components/ProjectList'
import '../styles/projects.css'


function Projects() {
  return (
    <>
      <div className="projects">   
        <ProjectList myProjects={myProjects} />   
      </div>
      </>

  )
}

export default Projects;