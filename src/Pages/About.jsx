import videothumb from "../assets/images/about/video-thumb.jpg";
import greendot from "../assets/images/background-shape/green-dot.png";
import bluedot from "../assets/images/background-shape/blue-dot.png";
import greenhalfcircle from "../assets/images/background-shape/green-half-cycle.png";
import seoBall1 from "../assets/images/background-shape/seo-ball-1.png";
import teamBgTriangle from "../assets/images/background-shape/team-bg-triangle.png";
import serviceHalfCycle from "../assets/images/background-shape/service-half-cycle.png";
import hostel_img from "../assets/images/Projects/MYHSEARCHIMG.png";
import photography from "../assets/images/Projects/PHTOGRAPHYIMG.png";
import cleaning from "../assets/images/Projects/cleaning_img.jpg";
import cooprate from "../assets/images/Projects/cooporate.jpg";
import hostel from "../assets/images/Projects/hostel.png";
import blog1 from "../assets/images/Projects/blog1.jpg"
import blog2 from "../assets/images/Projects/blog2.jpg"
import blog3 from "../assets/images/Projects/blog3.jpg"
import serviceBg from "../assets/images/backgrounds/service-bg.png";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const About = () => {
  return (
    <div>
      {/* <section className="fixed-top navigation">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light">
            <a className="navbar-brand" href="index.html">
              <img src="images/logo.png" alt="logo" />
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
                  <a className="nav-link" href="index.html">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link page-scroll" href="index.html#feature">
                    Feature
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="about.html">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="service.html">
                    Service
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link page-scroll" href="index.html#team">
                    Team
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link page-scroll" href="index.html#pricing">
                    Pricing
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="contact.html">
                    Contact
                  </a>
                </li>
              </ul>
              <a href="#" className="btn btn-primary ml-lg-3 primary-shadow">
                Try Free
              </a>
            </div>
          </nav>
        </div>
      </section> */}

      <Navbar />

      <section className="section-lg about pb-0">
        <div className="container">
          <div className="row mt-7">
            <div className="col-lg-12">
              <h2 className="section-title">
                About IdeaGap And It&apos;s Innovative IT Solutions
              </h2>
            </div>
            <div className="col-lg-12 mb-100">
              <p>
                Idea Gap is a technology hub dedicated to simplifying daily
                living using computerized systems. We offer a wide range of
                services, including the development of web applications, mobile
                applications, management systems, and other computerized
                systems. Additionally, we house a competitive program for
                tertiary students, an incubator and accelerator program, and an
                Academy of Developers. Our goal is to create a vibrant ecosystem
                where talent, innovation, and investment converge, and where the
                "Brain drain" can be transformed into a "Brain Gain" through
                Diaspora engagement.
              </p>
            </div>
            <div className="col-lg-12">
              <div className="about-video">
                <img
                  className="img-fluid w-100"
                  src={videothumb}
                  alt="video-thumb"
                />
                <a
                  className="venobox play-btn"
                  href="https://www.youtube.com/embed/2yoYxetUrWQ"
                  data-vbtype="iframe"
                >
                  <i className="ti-control-play"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <img
          src={greendot}
          alt="background-shape"
          className="about-bg-1 up-down-animation"
        />
        <img
          src={bluedot}
          alt="background-shape"
          className="about-bg-2 left-right-animation"
        />
        <img
          src={greenhalfcircle}
          alt="background-shape"
          className="about-bg-3 up-down-animation"
        />
        <img
          src={seoBall1}
          alt="background-shape"
          className="about-bg-4 left-right-animation"
        />
        <img
          src={teamBgTriangle}
          alt="background-shape"
          className="about-bg-5 up-down-animation"
        />
        <img
          src={serviceHalfCycle}
          alt="background-shape"
          className="about-bg-6 left-right-animation"
        />
      </section>

      <section
        className="section product"
        style={{ backgroundImage: "url(images/backgrounds/about-bg.png)" }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12 text-center">
              <h2 className="section-title">Our Projects</h2>
              <p className="mb-100">Our Recently Completed Projects.</p>
            </div>
            <div className="col-md-4 col-sm-6 mb-50">
              <a href="#">
                <img
                  src={hostel_img}
                  alt="product-img"
                  className="rounded w-100 img-fluid"
                />
              </a>
              <h4 className="mb-0">Hostel Booking</h4>
              <p>Unidaz Hostel</p>
            </div>
            <div className="col-md-4 col-sm-6 mb-50">
              <a href="#">
                <img
                  src={hostel}
                  alt="product-img"
                  className="rounded w-100 img-fluid"
                />
              </a>
              <h4 className="mb-0">MYHSEARCH</h4>
              <p>Hostel Search and Booking System</p>
            </div>
            <div className="col-md-4 col-sm-6 mb-50">
              <a href="#">
                <img
                  src={cleaning}
                  alt="product-img"
                  className="rounded w-100 img-fluid"
                />
              </a>
              <h4 className="mb-0">CLEANING COMPANY WEBSITE</h4>
              <p>Unidaz Hostel</p>
            </div>
            <div className="col-md-4 col-sm-6 mb-50">
              <a href="#">
                <img
                  src={photography}
                  alt="product-img"
                  className="rounded w-100 img-fluid"
                />
              </a>
              <h4 className="mb-0">PHOTOGRAPHY WEBSITE</h4>
              <p>Folks Media Production</p>
            </div>
            <div className="col-md-4 col-sm-6 mb-50">
              <a href="#">
                <img
                  src={cooprate}
                  alt="product-img"
                  className="rounded w-100 img-fluid"
                />
              </a>
              <h4 className="mb-0">COORPORATE WEBSITE</h4>
              <p>Same Consult</p>
            </div>
            <div className="col-md-4 col-sm-6 mb-50">
              <a href="#">
                <img
                  src={hostel_img}
                  alt="product-img"
                  className="rounded w-100 img-fluid"
                />
              </a>
              <h4 className="mb-0">KEYWORD RESEARCH</h4>
              <p>Keyword Analysis</p>
            </div>
            <div className="col-12 text-center">
              <a href="#" className="btn btn-primary">
                Explore More Projects
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Our Vision & Mission */}
      {/* <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2 className="section-title">Our Vision</h2>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of the Semantics, a
                large language ocean.
              </p>
            </div>
            <div className="col-md-6">
              <img
                src={vision}
                alt="vision"
                className="img-fluid w-100"
              />
            </div>
          </div>


          <div className="row mt-20">
            <div className="col-md-6 ">
              <img
                src={vision}
                alt="vision"
                className="img-fluid w-100"
              />
            </div>
            <div className="col-md-6">
              <h2 className="section-title">Our Vision</h2>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of the Semantics, a
                large language ocean.
              </p>
            </div>
          </div>
        </div>
      </section> */}

      {/* <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-title">Our Clients</h2>
              <ul className="list-inline text-center">
                <li className="list-inline-item mx-5 mb-5">
                  <a href="#">
                    <img
                      src={client1}
                      alt="clients-logo"
                      className="img-fluid"
                    />
                  </a>
                </li>
                <li className="list-inline-item mx-5 mb-5">
                  <a href="#">
                    <img
                      src={client2}
                      alt="clients-logo"
                      className="img-fluid"
                    />
                  </a>
                </li>
                <li className="list-inline-item mx-5 mb-5">
                  <a href="#">
                    <img
                      src={client4}
                      alt="clients-logo"
                      className="img-fluid"
                    />
                  </a>
                </li>
                <li className="list-inline-item mx-5 mb-5">
                  <a href="#">
                    <img
                      src={client5}
                      alt="clients-logo"
                      className="img-fluid"
                    />
                  </a>
                </li>
                <li className="list-inline-item mx-5 mb-5">
                  <a href="#">
                    <img
                      src={client5}
                      alt="clients-logo"
                      className="img-fluid"
                    />
                  </a>
                </li>
                <li className="list-inline-item mx-5 mb-5">
                  <a href="#">
                    <img
                      src={client6}
                      alt="clients-logo"
                      className="img-fluid"
                    />
                  </a>
                </li>
                <li className="list-inline-item mx-5 mb-5">
                  <a href="#">
                    <img
                      src={client7}
                      alt="clients-logo"
                      className="img-fluid"
                    />
                  </a>
                </li>
                <li className="list-inline-item mx-5 mb-5">
                  <a href="#">
                    <img
                      src={client8}
                      alt="clients-logo"
                      className="img-fluid"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section> */}

      {/* Blogs */}
      <section className="section-lg service">
  <div className="container">
    <div className="row justify-content-center text-center mb-5">
      <div className="col-lg-8">
        <h2 className="section-title mb-3">Our Blog</h2>
        <p className="text-muted">Latest Blog & News</p>
      </div>
    </div>

    <div className="row justify-content-center">
      <div className="col-sm-12 col-md-6 col-lg-4 mb-4">
        <div className="card h-100">
          <img
            src={blog1}
            alt="product-img"
            className="card-img-top rounded img-fluid"
          />
          <div className="card-body">
            <h5 className="card-title">Andrews Denku</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the bulk of the cards content.
            </p>
            <i className="d-block text-muted mb-3">20th December, 2025</i>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>

      <div className="col-sm-12 col-md-6 col-lg-4 mb-4">
        <div className="card h-100">
          <img
            src={blog2}
            alt="product-img"
            className="card-img-top rounded img-fluid"
          />
          <div className="card-body">
            <h5 className="card-title">Andrews Denku</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the bulk of the cards content.
            </p>
            <i className="d-block text-muted mb-3">20th December, 2025</i>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>

      <div className="col-sm-12 col-md-6 col-lg-4 mb-4">
        <div className="card h-100">
          <img
            src={blog3}
            alt="product-img"
            className="card-img-top rounded img-fluid"
          />
          <div className="card-body">
            <h5 className="card-title">Andrews Denku</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the bulk of the cards content.
            </p>
            <i className="d-block text-muted mb-3">20th December, 2025</i>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
    </div>
  </div>

  <img
    className="img-fluid service-bg position-absolute w-100"
    src={serviceBg}
    alt="service-bg"
    style={{ top: 0, left: 0, zIndex: -1 }}
  />
</section>

      <Footer />
    </div>
  );
};

export default About;
