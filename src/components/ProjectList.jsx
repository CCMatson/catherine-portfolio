import ProjectPreview from './ProjectPreview'

function ProjectList(props) {
  console.log('project list works')
  return (
    <>
      <h1>My Projects</h1>
      <div className="project-list">
        {props.myProjects.map((project, idx) =>
          <div className='project-preview'> <ProjectPreview key={idx} title={project.title} image={project.image} technology={project.technology}/>
          </div>
        )}

      </div>

    </>

  )
}

export default ProjectList;