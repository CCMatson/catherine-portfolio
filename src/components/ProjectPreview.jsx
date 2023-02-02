import { hyphenatedWords } from "../utilities/hyphenatedWords";
import { Link } from "react-router-dom";

function ProjectPreview (props) {
  let newURL = hyphenatedWords(props.title)
  return(
    <>
    <div className="preview-container">
      <h3>
    {props.title}
      </h3>
      <img src={props.image} alt={props.title} />
      <section>
        <Link to={`${newURL}` }>
      <button className='learn-more-button'>
        Learn more
      </button>
        </Link>
      </section>
    </div>
      </>
  )

  }

export default ProjectPreview;