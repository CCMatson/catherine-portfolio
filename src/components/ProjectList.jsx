import ProjectPreview from './ProjectPreview'

function ProjectList (props) {
  console.log('project list works')
  return (
    <>
    <div className="project-list">
      <h1>Projects List</h1>
      <div className="project-preview">
        {/* <ul> */}
          {props.myProjects.map((project, idx) =>
          <li> <ProjectPreview key={idx} title={project.title} image={project.image} />
          </li>
          )} 
        {/* </ul>  */}
      </div>
    </div>
      </>

  )
}

export default ProjectList;