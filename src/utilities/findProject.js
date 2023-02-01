// import { useParams } from "react-router-dom"
// const  myProjects   = require( "../data/projects.js")
import myProjects from "../data/projects"
const {hyphenatedWords} = require( "./hyphenatedWords" ) 



function findProjects (string){

  const foundProject = myProjects.find(project => {

    const foundTitle = hyphenatedWords(project.title)
    return foundTitle === string
  }) 

  return foundProject
  }



  export default findProjects