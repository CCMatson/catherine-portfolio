import myProjects from "../data/projects"
import { hyphenatedWords } from "../utilities/hyphenatedWords"
import { useParams } from "react-router-dom"


function ProjectDetails() {

  const urlString   = useParams()

  function findProjects (string){
    const foundProject = myProjects.filter(project => hyphenatedWords(project) === string) 
    
    }
  
  findProjects( urlString)

  return (
    <>
    <h1>{myProjects[0].name}</h1>
    <p>{myProjects[0].description}</p>
    <img src={myProjects[0].image} alt="" />
    <button>{myProjects[0].repositoryLink}</button>
    <button>{myProjects[0].deploymentLink}</button>
    </>
  )

  }


export default ProjectDetails