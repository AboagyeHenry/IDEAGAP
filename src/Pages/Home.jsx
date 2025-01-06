import imageBg from "../assets/images/hero-area/banner-bg.png";
import { Outlet } from "react-router-dom";
import bannerHero from "../assets/images/hero-area/banner-img.png";
import featureBg2 from "../assets/images/background-shape/feature-bg-2.png";
import seoBall1 from "../assets/images/background-shape/seo-ball-1.png";
import seoHalfCycle from "../assets/images/background-shape/seo-half-cycle.png";
import greenDot from "../assets/images/background-shape/green-dot.png";
import blueHalfCycle from "../assets/images/background-shape/blue-half-cycle.png";
import yellowTriangle from "../assets/images/background-shape/yellow-triangle.png";
import serviceHalfCycle from "../assets/images/background-shape/service-half-cycle.png";
import teamBgTriangle from "../assets/images/background-shape/team-bg-triangle.png";
import featureBg1 from "../assets/images/background-shape/feature-bg-1.png";
import seoBg from "../assets/images/backgrounds/seo-bg.png";
import serviceBg from "../assets/images/backgrounds/service-bg.png";
import seoBall2 from "../assets/images/background-shape/seo-ball-2.png";
import marketing from "../assets/images/marketing/marketing.png";
import hostel_img from "../assets/images/Projects/MYHSEARCHIMG.png";
import photography from "../assets/images/Projects/PHTOGRAPHYIMG.png";
import cleaning from "../assets/images/Projects/cleaning_img.jpg";
import cooprate from "../assets/images/Projects/cooporate.jpg";
import hostel from "../assets/images/Projects/hostel.png";
import blog1 from "../assets/images/Projects/blog1.jpg";
import blog2 from "../assets/images/Projects/blog2.jpg";
import blog3 from "../assets/images/Projects/blog3.jpg";
import Footer from "../Components/Footer";
import { GrTechnology } from "react-icons/gr";
import { RiCloudWindyLine } from "react-icons/ri";
import { FaLaptopCode } from "react-icons/fa6";
import { SiTechcrunch } from "react-icons/si";
import Navbar from "../Components/navbar";

const Home = () => {
  return (
    <div>
      <Navbar/>

      <section
        className="hero-section hero"
        style={{ backgroundImage: `url(${imageBg})` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center zindex-1">
              <h4>Hub of Tech Talents</h4>
              <h1 className="mb-3">
                An Innovative IT Solutions
                <br />
                for Business Growth
              </h1>
              <p className="mb-4">
                At IdeaGap, we provide a collaborative environment for tech
                enthusiast,
                <br />
                students, enterpreneurs and industry professionals.
              </p>
              <a href="#" className="btn btn-secondary btn-lg">
                Contact Us
              </a>
              <img
                className="img-fluid w-100 banner-image"
                src={bannerHero}
                alt="banner-img"
              />
            </div>
          </div>
        </div>

        <div id="scene">
          <img
            className="img-fluid hero-bg-1 up-down-animation"
            src={featureBg2}
            alt="Feature Background"
          />
          <img
            className="img-fluid hero-bg-2 left-right-animation"
            src={seoBall1}
            alt="SEO Ball"
          />
          <img
            className="img-fluid hero-bg-3 left-right-animation"
            src={seoHalfCycle}
            alt="SEO Half Cycle"
          />
          <img
            className="img-fluid hero-bg-4 up-down-animation"
            src={greenDot}
            alt="Green Dot"
          />
          <img
            className="img-fluid hero-bg-5 left-right-animation"
            src={blueHalfCycle}
            alt="Blue Half Cycle"
          />
          <img
            className="img-fluid hero-bg-6 up-down-animation"
            src={seoBall1} // Reusing seoBall1
            alt="SEO Ball"
          />
          <img
            className="img-fluid hero-bg-7 left-right-animation"
            src={yellowTriangle}
            alt="Yellow Triangle"
          />
          <img
            className="img-fluid hero-bg-8 up-down-animation"
            src={serviceHalfCycle}
            alt="Service Half Cycle"
          />
          <img
            className="img-fluid hero-bg-9 up-down-animation"
            src={teamBgTriangle}
            alt="Team Background Triangle"
          />
        </div>
      </section>

      <section className="section feature mb-0" id="feature">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-title mb-0">Our Services</h2>
              <p className="mb-80">
                Services Built Specifically For Your Business
              </p>
            </div>

            <div className="col-md-6 mb-80">
              <div className="d-flex feature-item">
                <div>
                  <RiCloudWindyLine className="feature-icon mr-4" />
                </div>
                <div>
                  <h4>Digital Solutions</h4>
                  <p>
                    Our digital solutions offer expert assistance in developing
                    custom software, mobile apps, websites, and cloud services
                    tailored to your business needs. We focus on enhancing your
                    operational efficiency and driving growth by delivering
                    innovative and reliable technology solutions that align with
                    your strategic goals.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6 mb-80">
              <div className="d-flex feature-item">
                <div>
                  <FaLaptopCode className="feature-icon mr-4" />
                </div>
                <div>
                  <h4>Software Consultancy</h4>
                  <p>
                    Our software consultancy provides expert guidance throughout
                    the software development process, from initial requirements
                    analysis to deployment and support. We ensure each step is
                    aligned with your business goals, delivering optimal and
                    reliable solutions.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6 mb-80">
              <div className="d-flex feature-item">
                <div>
                  <GrTechnology className="feature-icon mr-4" />
                </div>
                <div>
                  <h4>Diaspora Engagement</h4>
                  <p>
                    We foster collaboration between our nation's Diasporas and
                    local initiatives, facilitating connections through events,
                    investments, and mentorship to boost the growth of the
                    technology ecosystem.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6 mb-80">
              <div className="d-flex feature-item">
                <div>
                  <SiTechcrunch className="feature-icon mr-4" />
                </div>
                <div>
                  <h4>Techwiz</h4>
                  <p>
                    A competition empowering students to showcase skills and
                    ideas, providing mentorship and project-based learning for
                    real-world readiness and career kickstarts.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          className="feature-bg-1 up-down-animation"
          src={featureBg1}
          alt="Feature Background 1"
        />
        <img
          className="feature-bg-2 left-right-animation"
          src={featureBg2}
          alt="Feature Background 2"
        />
      </section>

      {/* Our Projects */}
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

      <section className="section-lg seo">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="seo-image">
                <img className="img-fluid" src={marketing} alt="form-img" />
              </div>
            </div>
            <div className="col-md-5">
              <h2 className="section-title">
                A Complete Range Of IDEA<span className="textSpan">GAP</span>{" "}
                data visualization
              </h2>
              <p>
                The steady increase in our balance and market value over the
                years.
                <br />
                Our commitment to excellence and efficiency, ensuring we deliver
                on our promises and exceed expectations.
              </p>
            </div>
          </div>
        </div>

        <img className="img-fluid seo-bg" src={seoBg} alt="SEO Background" />
        <img
          className="seo-bg-shape-1 left-right-animation"
          src={seoBall1}
          alt="SEO Ball 1"
        />
        <img
          className="seo-bg-shape-2 up-down-animation"
          src={seoHalfCycle}
          alt="SEO Half Cycle"
        />
        <img
          className="seo-bg-shape-3 left-right-animation"
          src={seoBall2}
          alt="SEO Ball 2"
        />
      </section>

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

      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-title">Contact</h2>
          </div>
        </div>
        <div className="row contact-bg p-5 rounded mb-5">
          <div className="col-lg-7 mb-4 mb-lg-0">
            <form action="#">
              <input
                type="text"
                className="form-control mb-3"
                id="name"
                name="name"
                placeholder="Your Name"
              />
              <input
                type="email"
                className="form-control mb-3"
                id="mail"
                name="mail"
                placeholder="Your Email"
              />
              <input
                type="text"
                className="form-control mb-3"
                id="subject"
                name="subject"
                placeholder="Subject"
              />
              <textarea
                name="message"
                id="message"
                className="form-control mb-3"
                placeholder="Your Message"
              ></textarea>
              <button type="submit" value="send" className="btn btn-secondary">
                SEND MESSAGE
              </button>
            </form>
          </div>
          <div className="col-lg-5">
            <p className="mb-5">
              If you will like to know more about our experience designing and
              delivering cloud solutions, or get advice on your own technology
              challenges, get in touch. With dedicated engineers on-hand 24/7,
              we’re set up to become an extension of your team.
            </p>
            <a href="tel:+442081446356" className="text-color h5 d-block">
              +233 50 155 7296
            </a>
            <a
              href="mailto:info@altostack.io"
              className="mb-5 text-color h5 d-block"
            >
              {" "}
              info@ideagap.con
            </a>
            <p>
              Tesano
              <br />
              Accra - Lapaz
            </p>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-4 col-sm-6 mb-4 mb-lg-0">
            <div className="card p-4 border-blue">
              <h5>
                <i className="ti-layers-alt round-icon blue mr-2"></i> Sales
              </h5>
              <p className="mb-0">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 mb-4 mb-lg-0">
            <div className="card p-4 border-blue">
              <h5>
                <i className="ti-desktop round-icon green mr-2"></i> Help &
                Support
              </h5>
              <p className="mb-0">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 mb-4 mb-lg-0">
            <div className="card p-4 border-blue">
              <h5>
                <i className="ti-panel round-icon orange mr-2"></i> Legal
                Departments
              </h5>
              <p className="mb-0">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <Outlet />
    </div>
  );
};

export default Home;
