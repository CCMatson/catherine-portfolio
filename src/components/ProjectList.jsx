import ProjectPreview from './ProjectPreview'

function ProjectList (props) {
  console.log('project list works')
  return (
    <>
      <h1>Projects List</h1>
      <div>
        <ul>
          {props.myProjects.map((project, idx) =>
          <li> <ProjectPreview key={idx} title={project.title} image={project.image} />
          </li>
          )} 
        </ul> 
      </div>
      </>

  )
}

export default ProjectList;