import { Routes, Route } from "react-router-dom";
import "./theme/plugins/jQuery/jquery.min.js";
import "./theme/plugins/bootstrap/bootstrap.min.css";
import "./theme/css/style.css";
// import './theme/css/style.css.map'
import "./theme/plugins/Venobox/venobox.css";
// import './theme/plugins/slick'
// import './theme/plugins/aos/'
import Home from "./Pages/Home";
import About from "./Pages/About.jsx";
import Services from "./Pages/Services.jsx";
import Projects from "./Pages/Projects.jsx";
import Contact from "./Pages/Contact.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/Projects" element={<Projects />} />
      <Route path="/Services" element={<Services />} />
    </Routes>
  );
}

export default App;
