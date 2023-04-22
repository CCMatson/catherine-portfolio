import '../styles/projects.css'

import { hyphenatedWords } from "../utilities/hyphenatedWords";
// import { Link } from "react-router-dom";

const ProjectPreview = (props) => {
  // const handleBtnClick = () => {
  //   const newURL = hyphenatedWords(props.project.title)
  //   // window.open(newURL, '_blank')
  //   props.setShowDetails(true)
  //   props.setProjectState(props.project)
  // }


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

// function ProjectPreview (props) {
//   let newURL = hyphenatedWords(props.title)
//   return(
//     <>
//     <div className='preview-title'>
//     <div className="project-preview">
//       <h1>{props.title}  </h1>
//     <h4>
//     {props.technology}
//       </h4>
//       <img src={props.image} alt={props.title} />
//       <section>
//         <Link to={`${newURL}` }>
//       <button className='button'>
//         Learn more
//       </button>
//         </Link>
//       </section>
//     </div>
//     </div>

//       </>
//   )

//   }

export default ProjectPreview;