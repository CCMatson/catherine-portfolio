import  myProjects  from "../data/projects";
import ProjectList from '../components/ProjectList'


function Projects() {
  console.log(myProjects)
  return (
    <>
      <div className="projects">
       
        <ProjectList myProjects={myProjects} />
        {/* <ProjectDetails myProjects={myProjects}/> */}
      
      </div>
      </>

  )
}

export default Projects;