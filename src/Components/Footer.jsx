import { FaInstagram,FaFacebookF,FaLinkedinIn } from "react-icons/fa6";
import { IoLocationOutline,IoCallOutline,IoMailOpenOutline } from "react-icons/io5";




const Footer = () => {
  return (
    <section>
      {/* Footer */}
      <footer className="bg-body-tertiary mt-7 text-center text-md-start">
        <div className="container p-4">
          <div className="row">
            <div className="col-lg-4 col-md-12 mb-4 mb-md-0">
              <h5 className="text-uppercase text-start">IdeaGap</h5>
              <p>
                The Technology Hub where Tech Talents converge, creating
                innovative ideas to bridge the societal gap.
              </p>
              <div className="d-flex justify-content-center align-items-center gap">
              <IoMailOpenOutline className="icons"/>
              <FaFacebookF className="icons"/>
              <FaInstagram className="icons"/>
              <FaLinkedinIn className="icons"/>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase">Short Link</h5>
              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!" className="text-body">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-body">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-body">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-body">
                    Service
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-body">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase mb-0">Contact Us</h5>
              <ul className="list-unstyled">
                <li className="d-flex gap-3 align-items-center justify-content-center">
                <IoLocationOutline className="icons" />
                  <a href="#!" className="text-body text-start">
                    COLT-GCTU, Tesano
                  </a> 
                </li>
                <li className="d-flex gap-3 align-items-center justify-content-center">
                <IoCallOutline className="icons" />
                  <a href="#!" className="text-body">
                    +233 50 155 7296
                  </a>
                </li>
                <li className="d-flex gap-3 align-items-center justify-content-center">
                <IoMailOpenOutline className="icons" />
                  <a href="#!" className="text-body">
                    info@ideagap.org
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
        >
          © 2020 Copyright:
          <a className="text-body" href="https://mdbootstrap.com/">
            {" "}
           info@ideagap.com
          </a>
        </div>
        {/* Copyright */}
      </footer>
      {/* Footer */}
    </section>
  );
};

export default Footer;
