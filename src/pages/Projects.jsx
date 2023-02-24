import  myProjects  from "../data/projects";
import ProjectList from '../components/ProjectList'


function Projects() {
  console.log(myProjects)
  return (
    <>
      <div>
        <ul>
        <ProjectList myProjects={myProjects} />
        {/* <ProjectDetails myProjects={myProjects}/> */}
        </ul> 
      </div>
      </>

  )
}

export default Projects;