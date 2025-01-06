import React from "react";
import serviceHalfCycle from "../assets/images/background-shape/service-half-cycle.png";
import greenDot from "../assets/images/background-shape/green-dot.png"
import greenhalfcircle from "../assets/images/background-shape/green-half-cycle.png"
import featureBg from "../assets/images/background-shape/feature-bg-2.png"
import Navbar from "../Components/navbar";
import Footer from "../Components/Footer";



const Contact = () => {
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
                  <a className="nav-link" href="index.html">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link page-scroll" href="index.html#feature">Feature</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="about.html">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="service.html">Service</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link page-scroll" href="index.html#team">Team</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link page-scroll" href="index.html#pricing">Pricing</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="contact.html">Contact</a>
                </li>
              </ul>
              <a href="#" className="btn btn-primary ml-lg-3 primary-shadow">Try Free</a>
            </div>
          </nav>
        </div>
      </section> */}

      <Navbar/>

      <section className="section-lg contact">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-title">Contact</h2>
            </div>
          </div>
          <div className="row contact-bg p-5 rounded mb-5">
            <div className="col-lg-7 mb-4 mb-lg-0">
              <form action="#">
                <input type="text" className="form-control mb-3" id="name" name="name" placeholder="Your Name" />
                <input type="email" className="form-control mb-3" id="mail" name="mail" placeholder="Your Email" />
                <input type="text" className="form-control mb-3" id="subject" name="subject" placeholder="Subject" />
                <textarea name="message" id="message" className="form-control mb-3" placeholder="Your Message"></textarea>
                <button type="submit" value="send" className="btn btn-secondary">SEND MESSAGE</button>
              </form>
            </div>
            <div className="col-lg-5">
              <p className="mb-5">
                If you will like to know more about our experience designing and delivering cloud solutions, or get advice on your own technology challenges, get in touch. With dedicated engineers on-hand 24/7, we’re set up to become an extension of your team.
              </p>
              <a href="tel:+442081446356" className="text-color h5 d-block">+233 50 155 7296</a>
              <a href="mailto:info@altostack.io" className="mb-5 text-color h5 d-block"> info@ideagap.con</a>
              <p>Tesano<br />Accra - Lapaz</p>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-sm-6 mb-4 mb-lg-0">
              <div className="card p-4 border-blue">
                <h5><i className="ti-layers-alt round-icon blue mr-2"></i> Sales</h5>
                <p className="mb-0">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mb-4 mb-lg-0">
              <div className="card p-4 border-blue">
                <h5><i className="ti-desktop round-icon green mr-2"></i> Help & Support</h5>
                <p className="mb-0">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mb-4 mb-lg-0">
              <div className="card p-4 border-blue">
                <h5><i className="ti-panel round-icon orange mr-2"></i> Legal Departments</h5>
                <p className="mb-0">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
              </div>
            </div>
          </div>
        </div>

        <img className="contact-bg-1 up-down-animation" src={featureBg} alt="background-shape" />
        <img className="contact-bg-2 left-right-animation" src={greenhalfcircle} alt="background-shape" />
        <img className="contact-bg-3 up-down-animation" src={greenDot} alt="background-shape" />
        <img className="contact-bg-4 left-right-animation" src={serviceHalfCycle} alt="background-shape" />
        <img className="contact-bg-5 up-down-animation" src={featureBg} alt="background-shape" />
      </section>

    <Footer/>
    </div>
  );
};

export default Contact;
