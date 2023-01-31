import myProjects from "../data/projects"

function ProjectDetails() {
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