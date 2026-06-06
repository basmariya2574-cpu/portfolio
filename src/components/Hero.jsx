import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";

function Hero() {
const stats = [
{ value: "3+", label: "Projects" },
{ value: "12+", label: "Skills" },
{ value: "2", label: "Internships" },
{ value: "BCA", label: "Student" },
];

return (
<section className="relative min-h-screen flex items-center overflow-hidden bg-slate-950 text-white">

  {/* Animated Background */}
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute top-10 left-10 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl animate-pulse"></div>
    <div className="absolute bottom-10 right-10 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
  </div>

  <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">

    <div className="grid lg:grid-cols-2 gap-12 items-center">

      {/* Left Side */}
      <div>
        <motion.p
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-blue-400 font-semibold mb-4"
        >
          Welcome to my Portfolio
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-bold mb-4"
        >
          Basma R
        </motion.h1>

        <TypeAnimation
          sequence={[
            "Frontend Developer",
            2000,
            "React Developer",
            2000,
            "UI/UX Designer",
            2000,
            "UIPath RPA Intern",
            2000,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
          className="text-2xl md:text-3xl text-cyan-400 font-semibold"
        />

        <p className="mt-6 text-slate-400 text-lg max-w-xl">
          Passionate about Frontend Development, UI/UX Design,
          Automation using UIPath, and building modern digital
          experiences. Dedicated to continuous learning and
          creating impactful solutions.
        </p>

        <div className="flex flex-wrap gap-4 mt-8">
          <a
            href="/resume.png"
            download
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl transition"
          >
            <FaDownload />
            Resume
          </a>

          <a
            href="https://www.linkedin.com/in/basma-riswan-9966223a4"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 border border-slate-600 hover:border-blue-500 px-6 py-3 rounded-xl transition"
          >
            <FaLinkedin />
            LinkedIn
          </a>

          <a
            href="https://github.com/basmariya2574-cpu"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 border border-slate-600 hover:border-blue-500 px-6 py-3 rounded-xl transition"
          >
            <FaGithub />
            GitHub
          </a>
        </div>
      </div>

      {/* Right Side */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{
          repeat: Infinity,
          duration: 4,
        }}
        className="flex justify-center"
      >
        <div className="w-80 h-80 rounded-3xl bg-white/10 backdrop-blur-lg border border-white/10 shadow-2xl flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-6xl font-bold text-blue-400">BR</h2>
            <p className="text-slate-300 mt-4">
              Frontend Developer
            </p>
          </div>
        </div>
      </motion.div>

    </div>

    {/* Stats */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
      {stats.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2 }}
          className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-6 text-center"
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