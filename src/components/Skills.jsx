import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaPython,
  FaJava,
  FaFigma,
  FaUsers,
  FaComments,
  FaLightbulb,
} from "react-icons/fa";
import { SiTailwindcss, SiUipath } from "react-icons/si";

const containerVariant = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
        { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
        { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
        { name: "React.js", icon: <FaReact className="text-cyan-400" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
      ],
    },
    {
      title: "Programming",
      skills: [
        { name: "Python", icon: <FaPython className="text-green-400" /> },
        { name: "Java", icon: <FaJava className="text-red-400" /> },
        { name: "RDBMS", icon: <span className="text-lg">🗄️</span> },
      ],
    },
    {
      title: "Automation",
      skills: [
        { name: "UIPath", icon: <SiUipath className="text-purple-400" /> },
      ],
    },
    {
      title: "Design",
      skills: [
        { name: "Figma", icon: <FaFigma className="text-pink-400" /> },
        { name: "UI/UX Design", icon: <span className="text-lg">🎨</span> },
      ],
    },
    {
      title: "Soft Skills",
      skills: [
        { name: "Communication", icon: <FaComments className="text-blue-300" /> },
        { name: "Teamwork", icon: <FaUsers className="text-green-300" /> },
        { name: "Problem Solving", icon: <span className="text-lg">🧩</span> },
        { name: "Creativity", icon: <FaLightbulb className="text-yellow-300" /> },
        { name: "Presentation", icon: <span className="text-lg">🎤</span> },
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 px-6 bg-slate-950 text-white">
      <div className="max-w-6xl mx-auto">
        
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-14"
        >
          My Skills
        </motion.h2>

        {/* Grid */}
        <motion.div
          variants={containerVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={cardVariant}
              whileHover={{ scale: 1.03 }}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 
                         hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/20 
                         transition-all duration-300"
            >
              {/* Category Title */}
              <h3 className="text-2xl font-semibold text-blue-400 mb-5">
                {category.title}
              </h3>

              {/* Skills */}
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="flex items-center gap-2 px-4 py-2 rounded-full 
                               bg-blue-500/10 border border-blue-500/20 
                               hover:bg-blue-500/20 hover:scale-105 
                               transition-all duration-200"
                  >
                    <span className="text-lg">{skill.icon}</span>
                    <span className="text-sm">{skill.name}</span>
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;