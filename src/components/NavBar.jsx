import { Link } from "react-router-dom";

function NavBar() {
    return (
        <nav className="navBar">
            {/* <div className="nav-link"> */}
            <div className="links-container">
            <Link className="link-pages"
                to='/'
            >
                Catherine Matson
            </Link>
            {/* </div> */}
            <div >
                <Link className="link-pages"
                    to='/projects'
                >
                    Projects
                </Link>
            </div>
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


            </div>
        </nav>
    )
}

export default NavBar;