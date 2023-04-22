import '../styles/projects.css'
// import { hyphenatedWords } from "../utilities/hyphenatedWords";

const ProjectPreview = (props) => {

  return (
    <div className='preview-title'>
      <div className="project-preview">
        <h1>{props.project.title}  </h1>
        <h4>
          {props.project.technology}
        </h4>
        <img src={props.project.image} alt={props.project.title} />

        <section>
        <div>
          <a href={props.project.repositoryLink}>
            <button className="button">Github</button>  </a>
          <a href={props.project.deploymentLink}>
            <button className="button">Deployment Link</button>  </a>
        </div>
        </section>
      </div>
    </div>
  )
}


export default ProjectPreview;