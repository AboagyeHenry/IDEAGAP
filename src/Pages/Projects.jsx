import React from "react";
import bgSmImg from "../assets/images/backgrounds/service-page.png";
import featureBg from "../assets/images/background-shape/feature-bg-2.png";
import seoHalfCycle from "../assets/images/background-shape/seo-half-cycle.png";
import teamBgTriangle from "../assets/images/background-shape/team-bg-triangle.png";
import greenDot from "../assets/images/background-shape/green-dot.png";
import hostel_img from "../assets/images/Projects/MYHSEARCHIMG.png";
import photography from "../assets/images/Projects/PHTOGRAPHYIMG.png";
import cleaning from "../assets/images/Projects/cleaning_img.jpg";
import cooprate from "../assets/images/Projects/cooporate.jpg";
import hostel from "../assets/images/Projects/hostel.png";
import Navbar from "../Components/navbar";
import Footer from "../Components/Footer";

function Projects() {
  return (
    <div>
      <Navbar />

      <section
        className="section-lg service-bg-image position-relative"
        style={{ backgroundImage: `url(${bgSmImg})` }}
      >
        {/* Our Projects */}
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

        {/* Background Images */}
        <img
          className="service-bg-1 up-down-animation"
          src={featureBg}
          alt="Feature Background"
        />
        <img
          className="service-bg-2 left-right-animation"
          src={seoHalfCycle}
          alt="SEO Half Cycle"
        />
        <img
          className="service-bg-3 up-down-animation"
          src={teamBgTriangle}
          alt="Team Background Triangle"
        />
        <img
          className="service-bg-4 left-right-animation"
          src={greenDot}
          alt="Green Dot"
        />
        <img
          className="service-bg-5 up-down-animation"
          src={teamBgTriangle}
          alt="Team Background Triangle"
        />
      </section>

      <Footer />
    </div>
  );
}

export default Projects;
