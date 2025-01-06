import bgSmImg from "../assets/images/backgrounds/service-page.png";
import featureBg from "../assets/images/background-shape/feature-bg-2.png";
import seoHalfCycle from "../assets/images/background-shape/seo-half-cycle.png";
import teamBgTriangle from "../assets/images/background-shape/team-bg-triangle.png";
import greenDot from "../assets/images/background-shape/green-dot.png";
import Footer from "../Components/Footer";
import { TfiLayersAlt } from "react-icons/tfi";
import Navbar from "../Components/navbar";


const Services = () => {
  return (
    <div>
      
      <Navbar/>

      <section
  className="section-lg service-bg-image position-relative"
  style={{ backgroundImage: `url(${bgSmImg})` }}
>
  <div className="container">
    <div className="row mt-7">
      <div className="col-12 text-center">
        <h2 className="section-title">Our Services</h2>
        <p className="mb-100">
        Services Built Specifically For Your Business
        </p>
      </div>

      {[
        { title: 'Digital Solutions', description: 'Our digital solutions offer expert assistance in developing custom software, mobile apps, websites, and cloud services tailored to your business needs. We focus on enhancing your operational efficiency and driving growth by delivering innovative and reliable technology solutions that align with your strategic goals.', cssClass: '',icon: <TfiLayersAlt className="round-icon green mb-4" /> },
        { title: 'Software Consultancy', description: 'Our software consultancy provides expert guidance throughout the software development process, from initial requirements analysis to deployment and support. We ensure each step is aligned with your business goals, delivering optimal and reliable solutions.', cssClass: ' translate-y-150',icon: <TfiLayersAlt className="round-icon orange mb-4" /> },
        { title: 'Diaspora Engagement', description: "We foster collaboration between our nation's Diasporas and local initiatives, facilitating connections through events, investments, and mentorship to boost the growth of the technology ecosystem.", cssClass: '',icon: <TfiLayersAlt className="round-icon orange mb-4" /> },
        { title: 'Techwiz', description: "A competition empowering students to showcase skills and ideas, providing mentorship and project-based learning for real-world readiness and career kickstarts.", cssClass: 'translate-y-150',icon: <TfiLayersAlt className="round-icon blue mb-4" /> },
        // { title: 'Lower Budget', description: 'Far far away...', cssClass: '',icon: <TfiLayersAlt className="round-icon green mb-4" /> },
        // { title: 'Great Service', description: 'Far far away...', cssClass: 'translate-y-150', icon: <TfiLayersAlt className="round-icon orange mb-4" /> },
      ].map((item, index) => (
        <div key={index} className={`col-sm-6 mb-4 ${item.cssClass}`}>
          <div className="rounded bg-white p-4 shadow-primary">
            <div>{item.icon}</div>
            <h4>{item.title}</h4>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>

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


    <div className="mt-10">
    <Footer/>
    </div>
    </div>
  );
};

export default Services;
