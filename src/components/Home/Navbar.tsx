/* eslint-disable jsx-a11y/anchor-is-valid */

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item text-black">
                        <a className="nav-link mr-5" href="#">
                            Home <span className="sr-only">(current)</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link mr-5" href="#">
                            About
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link mr-5" href="#">
                            Dental Services
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link mr-5 text-white" href="#">
                            Reviews
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link mr-5 text-white" href="#">
                            Blogs
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link mr-5 text-white" href="#">
                            Contact Us
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
