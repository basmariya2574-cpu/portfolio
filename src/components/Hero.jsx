import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";

function Hero() {
  const stats = [
    { value: "3+", label: "Projects" },
    { value: "12+", label: "Skills" },
    { value: "2", label: "Internships" },
    { value: "BCA", label: "Student" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950 text-white">

      {/* Background Gradient */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">

        {/* Hero Content */}
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-blue-400 font-semibold mb-4"
        >
          Welcome to my Portfolio
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold mb-4"
        >
          Basma R
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-xl md:text-2xl text-slate-300 mb-6"
        >
          BCA Student | Frontend Developer | UIPath RPA Intern
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="max-w-3xl mx-auto text-slate-400 text-lg mb-10"
        >
          Passionate about Frontend Development, UI/UX Design,
          Automation using UIPath, and building modern digital
          experiences. Dedicated to continuous learning, teamwork,
          and creating impactful solutions.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          <a
            href="/resume.pdf"
            download
            className="bg-blue-600 px-6 py-3 rounded-xl"
          >
            <FaDownload />
            Download Resume
          </a>
           
          <a
            href="https://linkedin.com/in/Basma Riswan"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 border border-slate-600 hover:border-blue-500 px-6 py-3 rounded-xl transition"
          >
            <FaLinkedin />
            LinkedIn
          </a>

          <a
            href="https://github.com/basmariya2574-cpu/AniStream.git"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 border border-slate-600 hover:border-blue-500 px-6 py-3 rounded-xl transition"
          >
            <FaGithub />
            GitHub
          </a>
        </motion.div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="
                backdrop-blur-md
                bg-white/10
                border border-white/10
                rounded-2xl
                p-6
                shadow-xl
              "
            >
              <h3 className="text-3xl font-bold text-blue-400">
                {item.value}
              </h3>

              <p className="text-slate-300 mt-2">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Hero;