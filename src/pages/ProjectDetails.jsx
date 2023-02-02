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
    <h1>      {project.title}   </h1>
    <h4>{project.description}</h4>
    <img src="../Cookbook.png" alt="" />
    </>
  )



  // const projectDetails  = useParams()

  // function findProjects (string){
  //   const foundProject = myProjects.filter(project => hyphenatedWords(project.title) === string) 
  //   console.log('my project' , myProjects)
  //   console.log('projectDetails' , projectDetails)
  //   console.log('this is foundProject function' , foundProject)
    // console.log(hyphenatedWords(project.title), 'project title')
  //   return foundProject
  //   }
  // findProjects(projectDetails)

  }


export default ProjectDetails;