import { Link } from "react-scroll";
import '../styles/nav.css'

function NavBar() {
    return (
        <nav className="navBar">
            <ul>
                <li>
                    <Link 
                    className="link-pages"
                        to='about'
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >
                        About
                    </Link>
                </li>
                <li>
                    <Link 
                    className="link-pages"
                        to='projects'
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >
                        Projects
                    </Link>
                </li>
                <li>
                    <Link className="link-pages"
                        to='contact'
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >
                        Contact
                    </Link>
                </li>
                <li>
                    <Link className="link-pages"
                        to='resume'
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >
                        Resume
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;