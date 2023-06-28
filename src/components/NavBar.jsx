import { Link } from "react-scroll";
import '../styles/nav.css'
import { useState } from "react";

function NavBar() {

    const [showMenu, setShowMenu] = useState(false);

    return (
        <nav id="nav" className={showMenu ? "navMenu" : "navBar"}>
            <ul className={showMenu ? "mobile-menu-link" : "menu-link"}>
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

           <div className="hamburger-menu">
            <img onClick={ () => setShowMenu(!showMenu) } src="menu-hamburger-white.svg" alt="Hamburger menu" />
           </div>

        </nav>
    )
}

export default NavBar;