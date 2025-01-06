import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

const Navbar = () => {
  return (
    <div>
      <section className="fixed-top navigation">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light">
            <a className="navbar-brand" href="/">
              <div className="d-flex flex-row justify-content-center align-items-center">
                <img className="ideagapLogo" src={logo} />
                <h4 className="texth4">
                  IDEA<span className="textSpan">GAP</span>
                </h4>
              </div>
            </a>
            <button
              className="navbar-toggler border-0"
              type="button"
              data-toggle="collapse"
              data-target="#navbar"
              aria-controls="navbar"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse text-center" id="navbar">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link to="/" className="nav-link">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/Projects" className="nav-link page-scroll">
                    Projects
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/About" className="nav-link">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/Services" className="nav-link">
                    Service
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/Contact" className="nav-link">
                    Contact
                  </Link>
                </li>
              </ul>
              <Link to={"/Projects"}><a href="#" className="btn btn-primary ml-lg-3 primary-shadow">
                Our Projects
              </a></Link>
            </div>
          </nav>
        </div>
      </section>
    </div>
  );
};

export default Navbar;
