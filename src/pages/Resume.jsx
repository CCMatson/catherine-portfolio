import resume from '../Resume.pdf'

function Resume() {

  return (
    <>
      <section>
            <h1>My Resume</h1>
        <div className="resume-container">

          <div className='resume-text'>
            <h4>Click this button to download a copy of my resume:</h4>
            <a href={resume} className="button" download>Download my resume</a>
          </div>

          <div className='resume-image'>
            <img src="https://i.imgur.com/l2aRtte.gif" alt="" />
          </div>

        </div>

      </section>
    </>
  )
}

export default Resume;