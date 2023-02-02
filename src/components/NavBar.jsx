import { Link } from "react-router-dom";

function NavBar() {
    return (
        <nav className="navBar">
            <div className="nav-link">
            <Link className="link-home"
                to='/'
            >
                Catherine Matson
            </Link>
            </div>

            <div className="links-container">
                <div>
                    <Link className="link-pages"
                        to='/about'
                    >
                        About
                    </Link>
                </div>

                <div>
                    <Link className="link-pages"
                        to='/contact'
                    >
                        Contact
                    </Link>
                </div>

                <div>
                    <Link className="link-pages"
                        to='/resume'
                    >
                        Resume
                    </Link>
                </div>

                <div >
                    <Link className="link-pages"
                        to='/projects'
                    >
                        Projects
                    </Link>
                </div>

            </div>
        </nav>
    )
}

export default NavBar;