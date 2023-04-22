import '../styles/projects.css'
import ProjectPreview from './ProjectPreview'

function ProjectList(props) {
  return (
    <>
      <h1>My Projects</h1>
      <div className="project-list">
        {props.myProjects.map((project, idx) =>
          <div > <ProjectPreview key={idx} project={project} setShowDetails={props.setShowDetails} setProjectState={props.setProjectState} 
          title={project.title} image={project.image} technology={project.technology}
          />
          </div>
        )}

      </div>

    </>

  )
}

export default ProjectList;