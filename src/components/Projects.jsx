import { motion } from "framer-motion";
import anistream from "../assets/anistream.png";

import {
FaGithub,
FaPalette,
FaRobot,
FaArrowRight,
} from "react-icons/fa";

function Projects() {
const projects = [
{
title: "Smart Canteen",
icon: <FaPalette className="text-pink-400 text-4xl" />,
description:
"A startup-focused UI/UX project designed to improve food ordering and canteen management through a modern digital experience.",
technologies: ["Figma", "UI/UX", "Prototyping"],
color: "bg-pink-500/20",
},
{
title: "Gesture Control & Obstacle Avoiding Car",
icon: <FaRobot className="text-cyan-400 text-4xl" />,
description:
"An intelligent vehicle project that combines gesture recognition and obstacle avoidance using sensors and embedded systems concepts.",
technologies: ["Arduino", "Sensors", "IoT"],
color: "bg-cyan-500/20",
},
];

return (
<section
id="projects"
className="py-24 px-6 bg-slate-950 text-white"
>
<div className="max-w-7xl mx-auto">

    {/* Section Header */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <span className="px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-sm font-medium">
        MY WORK
      </span>

      <h2 className="text-5xl font-bold mt-6">
        Featured <span className="text-blue-400">Projects</span>
      </h2>

      <p className="text-slate-400 max-w-2xl mx-auto mt-4">
        A collection of projects showcasing my skills in
        frontend development, UI/UX design, and innovation.
      </p>
    </motion.div>

    {/* Featured Project */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="
        bg-white/5
        backdrop-blur-md
        border border-white/10
        rounded-3xl
        overflow-hidden
        mb-10
        hover:border-blue-500
        transition-all
        duration-300
      "
    >
      <div className="grid lg:grid-cols-2">

        <div>
          <img
            src={anistream}
            alt="AniStream"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="p-10 flex flex-col justify-center">

          <span className="w-fit px-4 py-2 rounded-full bg-blue-500/20 text-blue-400 text-sm mb-4">
            ⭐ Featured Project
          </span>

          <h3 className="text-4xl font-bold mb-4 text-blue-400">
            AniStream
          </h3>

          <p className="text-slate-300 leading-8 mb-6">
            A modern anime streaming platform built using
            React.js featuring a responsive interface,
            watch pages, personalized collections,
            and a scalable frontend architecture.
          </p>

          <div className="flex flex-wrap gap-3 mb-8">
            <span className="bg-blue-500/20 px-3 py-2 rounded-full">
              React
            </span>

            <span className="bg-blue-500/20 px-3 py-2 rounded-full">
              JavaScript
            </span>

            <span className="bg-blue-500/20 px-3 py-2 rounded-full">
              Tailwind CSS
            </span>

            <span className="bg-blue-500/20 px-3 py-2 rounded-full">
              Vite
            </span>
          </div>

          <a
            href="https://github.com/basmariya2574-cpu"
            target="_blank"
            rel="noreferrer"
            className="
              flex items-center
              gap-3
              w-fit
              px-6
              py-3
              bg-blue-600
              hover:bg-blue-700
              rounded-xl
              transition
            "
          >
            <FaGithub />
              View Source Code →
          </a>

        </div>
      </div>
    </motion.div>

    {/* Other Projects */}
    <div className="grid md:grid-cols-2 gap-8">
      {projects.map((project, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ y: -8 }}
          className="
            bg-white/5
            backdrop-blur-md
            border border-white/10
            rounded-3xl
            p-8
            hover:border-blue-500
            transition-all
            duration-300
          "
        >
          {project.icon}

          <h3 className="text-2xl font-bold mt-6 mb-4">
            {project.title}
          </h3>

          <p className="text-slate-300 leading-7 mb-6">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className={`${project.color} px-3 py-2 rounded-full`}
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-2 text-blue-400">
            Learn More
            <FaArrowRight />
          </div>
        </motion.div>
      ))}
    </div>

  </div>
</section>

);
}

export default Projects;