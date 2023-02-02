import ProjectPreview from './ProjectPreview'

function ProjectList (props) {
  console.log('project list works')
  return (
    <>
    <div className="project-list">
      <h1>My Projects</h1>
      <div className="project-preview">
        {/* <ul> */}
          {props.myProjects.map((project, idx) =>
          <div> <ProjectPreview key={idx} title={project.title} image={project.image} />
          </div>
          )} 
        {/* </ul>  */}
      </div>
    </div>
      </>

  )
}

export default ProjectList;