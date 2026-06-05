import { motion } from "framer-motion";


import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Internships from "./components/Internships";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-slate-950 text-white">


<motion.div
 initial={{ opacity: 0, y: 50 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.6 }}
>
  ...
</motion.div>

      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Education />
      <Internships />
      <Projects />
      <Certificates />
      <Contact />
      <Footer />
      
    </div>
  );
}

export default App;