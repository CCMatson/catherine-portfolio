import '../styles/about.css'

function About() {
  return (
    <>
      <div className='about-container'>
        <section id='about'>
          <h1>Software engineer with experience collaborating on cross-functional teams in Agile environments.</h1>
          <h4>What would you do if you knew you would not fail? In 2023, I asked myself that question and decided to take a leap of faith. I paused a rewarding career in science education to invest in my career by taking a General Assembly's Software Engineering Intensive. My career pivot into tech has been fullfilling, and I'm excited about the future.</h4>
        </section>
        <section id="technology">
          <h1>Technology:</h1>
          <div className="icons">
            <div>
              <label htmlFor="">React</label>
              <img src="https://skillicons.dev/icons?i=react" alt="react-icon" />
            </div>
            <div>
              <label htmlFor="">Typscript</label>
              <img src="https://skillicons.dev/icons?i=ts" alt="typescript-icon" />
            </div>
            <div>
              <label htmlFor="">Javascript</label>
              <img src="https://skillicons.dev/icons?i=js" alt="" />
            </div>
            <div>
              <label htmlFor="">Express</label>
              <img src="https://skillicons.dev/icons?i=express" alt="express-logo" />
            </div>
            <div>
              <label htmlFor="">Node</label>
              <img src="https://skillicons.dev/icons?i=nodejs" alt="node-icon" />
            </div>
            <div>
              <label htmlFor="">CSS</label>
              <img src="https://skillicons.dev/icons?i=css" alt="css-logo" />
            </div>
            <div>
              <label htmlFor="">HTML</label>
              <img src="https://skillicons.dev/icons?i=html" alt="html-icon" />
            </div>
            <div>
              <label htmlFor="">Postman</label>
              <img src="https://skillicons.dev/icons?i=postman" alt="postman-icon" />
            </div>
            <div>
              <label htmlFor="">MongoDB</label>
              <img src="https://skillicons.dev/icons?i=mongodb" alt="mongoDB" />
            </div>
            <div>
              <label htmlFor=""> PostgreSQL</label>
              <img src="https://skillicons.dev/icons?i=postgres" alt="postgres-icon" />
            </div>
            <div>
              <label htmlFor="">VS Code</label>
              <img src="https://skillicons.dev/icons?i=vscode" alt="vscode-icon" />
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default About;