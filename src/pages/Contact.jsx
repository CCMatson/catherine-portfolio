import '../styles/contact.css'

function Contact() {
  return (
    <>
      <section>
        <div className="contact-page">
          <div className="contact-one">
            <h1>Contact Information</h1>
            <h4>Here is the link to my <a href="https://github.com/CCMatson" className="link">Github </a><img src="https://skillicons.dev/icons?i=github" alt="github-logo" />  </h4>

            <h4>Use this link to connect on <a href="https://www.linkedin.com/in/catherine-c-matson/" className="link">LinkedIn </a><img src="https://skillicons.dev/icons?i=linkedin" alt="linkedin-logo" /></h4>
          </div>
          <div className='contact-two'>
            <img src="https://i.imgur.com/CpUxw8v.gif" alt="woman at a desk with a laptop answering emails" />
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact;