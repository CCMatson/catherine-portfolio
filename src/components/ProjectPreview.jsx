import '../styles/projects.css'

import { hyphenatedWords } from "../utilities/hyphenatedWords";
import { Link } from "react-router-dom";

function ProjectPreview (props) {
  let newURL = hyphenatedWords(props.title)
  return(
    <>
    <div className='preview-title'>
    <div className="project-preview">
      <h1>{props.title}  </h1>
    <h2>
    {props.technology}
      </h2>
      <img src={props.image} alt={props.title} />
      <section>
        <Link to={`${newURL}` }>
      <button className='button'>
        Learn more
      </button>
        </Link>
      </section>
    </div>
    </div>

      </>
  )

  }

export default ProjectPreview;