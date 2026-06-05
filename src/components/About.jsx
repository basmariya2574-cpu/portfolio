import { motion } from "framer-motion";

import {
  FaEnvelope,
  FaPhone,
  FaLinkedin,
  FaUniversity,
  FaMapMarkerAlt,
} from "react-icons/fa";

function About() {
  return (
    <section id="about" className="py-24 bg-slate-950 text-white">
      <motion.div
 initial={{ opacity: 0, y: 50 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.6 }}
>
  ...
</motion.div>
      <div className="max-w-7xl mx-auto px-6">

        <div className="mb-4">
          <span className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold">
            WHO I AM
          </span>
        </div>

        <h2 className="text-5xl font-bold mb-16">
          About <span className="text-blue-600">Me</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* Left Side */}
          <div>
            <p className="text-lg leading-9 text-slate-300">
              I'm <strong>Basma R</strong>, a third-year BCA student at
              Jamal Mohamed College, Trichy. My journey in technology is
              driven by curiosity, creativity, and a passion for building
              meaningful digital experiences.
            </p>

            <p className="text-lg leading-9 text-slate-300 mt-6">
              I have completed internships in Frontend Development and
              UIPath Robotic Process Automation (RPA). My interests include
              React.js, UI/UX Design, automation, and modern web
              technologies.
            </p>

            <p className="text-lg leading-9 text-slate-300 mt-6">
              I enjoy collaborating with teams, learning new technologies,
              solving real-world problems, and creating user-friendly
              digital solutions.
            </p>

            <div className="flex items-center gap-3 mt-8 text-slate-300">
              <FaMapMarkerAlt className="text-pink-950" />
              <span>
                South Street, Krishnajipattinam, Pudukkottai,
                Tamil Nadu, India
              </span>
            </div>
          </div>

          {/* Right Side */}
          <div className="space-y-10">

            <div className="flex items-center gap-5">
              <FaEnvelope className="text-blue-600 text-xl" />
              <div>
                <p className="text-sm uppercase text-slate-400">
                  Email
                </p>
                <p className="font-medium">
                  basmariya2574@gmail.com
                </p>
              </div>
            </div>

            <div className="flex items-center gap-5">
              <FaPhone className="text-blue-600 text-xl" />
              <div>
                <p className="text-sm uppercase text-slate-400">
                  Phone
                </p>
                <p className="font-medium">
                  +91 9597062184
                </p>
              </div>
            </div>

            <div className="flex items-center gap-5">
              <FaLinkedin className="text-blue-600 text-xl" />
              <div>
                <p className="text-sm uppercase text-slate-400">
                  LinkedIn
                </p>
                <p className="font-medium">
                  linkedin.com/in/basma-riswan
                </p>
              </div>
            </div>

            <div className="flex items-center gap-5">
              <FaUniversity className="text-blue-600 text-xl" />
              <div>
                <p className="text-sm uppercase text-slate-400">
                  College
                </p>
                <p className="font-medium">
                  Jamal Mohamed College, Trichy
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default About;