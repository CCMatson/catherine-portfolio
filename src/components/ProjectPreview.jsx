function ProjectPreview (props) {
  console.log(props)
  return(
    <>
    <div>
      <h3>
        {props.title}
      </h3>
      <img src={props.image} alt={props.title} />
      <section>
      <button>
        Learn more
      </button>
      </section>


    </div>
      </>
  )

  }

export default ProjectPreview;