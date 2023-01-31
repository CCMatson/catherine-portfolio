import { hyphenatedWords } from "../utilities/hyphenatedWords";
import { Link } from "react-router-dom";

function ProjectPreview (props) {
  console.log(props)
  let newURL = hyphenatedWords(props.title)
  return(
    <>
    <div>
      <h3>
    {props.title}
      </h3>
      <img src={props.image} alt={props.title} />
      <section>
        <Link to={`/projects/${newURL}` }>
      <button>
        Learn more
      </button>
        
        </Link>
      </section>


    </div>
      </>
  )

  }

export default ProjectPreview;