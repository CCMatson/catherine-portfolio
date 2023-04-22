import './App.css';
import { useState } from 'react';
import { Element } from 'react-scroll';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Projects from './pages/Projects';
import NavBar from './components/NavBar';
import ProjectDetails from './pages/ProjectDetails';

function App() {
  // const [showDetails, setShowDetails] = useState(false)
  // const [projectState, setProjectState] = useState({})
  return (
    <div className="App">
        <NavBar/>
        <Element name="home">
        <Home />
        </Element>
        <Element name="about">
        <About />
        </Element>

        <Element name="projects">
        <Projects />
        {/* <Projects setShowDetails={setShowDetails} setProjectState={setProjectState}/>
        {showDetails && <ProjectDetails project={projectState} setShowDetails={setShowDetails} />} */}
        </Element>
        <Element name="contact">
        <Contact />
        </Element>
        <Element name="resume">
        <Resume />
        </Element>   

    </div>
  );
}

export default App;
