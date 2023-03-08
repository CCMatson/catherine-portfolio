import resume from '../Resume.pdf'

function Resume() {

  return (
    <>
    <section>
    <div className="resume-container">
    <h1>My resume</h1>
    <h4>Click this link to download a copy of my resume:</h4>
    <a href={resume} className="button" download>My resume</a>
    </div>

    </section>
    </>
  )
}

export default Resume;