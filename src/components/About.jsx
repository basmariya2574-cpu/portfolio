import { motion } from "framer-motion";
import {
FaGithub,
FaLinkedin,
FaGraduationCap,
FaBriefcase,
FaCode,
FaRocket,
} from "react-icons/fa";

function About() {
const facts = [
{
icon: <FaRocket />,
value: "3+",
label: "Projects Completed",
},
{
icon: <FaBriefcase />,
value: "2",
label: "Internships",
},
{
icon: <FaCode />,
value: "12+",
label: "Technical Skills",
},
{
icon: <FaGraduationCap />,
value: "BCA",
label: "Student",
},
];

return (
<section
id="about"
className="py-24 bg-slate-950 text-white"
>
<div className="max-w-7xl mx-auto px-6">

    {/* Header */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <span className="px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-sm font-medium">
        ABOUT ME
      </span>

      <h2 className="text-5xl font-bold mt-6">
        Turning Ideas Into
        <span className="text-blue-400"> Digital Experiences</span>
      </h2>

      <p className="max-w-3xl mx-auto mt-6 text-slate-400 text-lg">
        Passionate about frontend development, UI/UX design,
        and building modern web applications that deliver
        seamless user experiences.
      </p>
    </motion.div>

    <div className="grid lg:grid-cols-2 gap-10">

      {/* Left Side */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="space-y-6"
      >

        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8">
          <h3 className="text-2xl font-semibold mb-4">
            Professional Summary
          </h3>

          <p className="text-slate-300 leading-8">
            I am a passionate BCA student with a strong interest
            in Frontend Development, UI/UX Design, and Automation
            Technologies. I enjoy building responsive and
            user-friendly web applications using modern
            technologies such as React.js and Tailwind CSS.
          </p>

          <p className="text-slate-300 leading-8 mt-4">
            Through internships and personal projects, I have
            gained practical experience in web development,
            automation, and problem-solving. My goal is to
            continuously improve my skills and contribute to
            innovative digital solutions.
          </p>
        </div>

        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8">
          <h3 className="text-2xl font-semibold mb-4">
            Education
          </h3>

          <p className="text-xl font-medium">
            Bachelor of Computer Applications (BCA)
          </p>

          <p className="text-slate-400 mt-2">
            Jamal Mohamed College, Trichy
          </p>

          <p className="text-slate-300 mt-4 leading-7">
            Focused on software development, web technologies,
            database management systems, and programming
            fundamentals.
          </p>
        </div>

      </motion.div>

      {/* Right Side */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="space-y-6"
      >

        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8">
          <h3 className="text-2xl font-semibold mb-4">
            Internship Experience
          </h3>

          <div className="mb-6">
            <h4 className="text-blue-400 font-semibold">
              Frontend Developer Intern
            </h4>

            <p className="text-slate-300 mt-2">
              Developed responsive web interfaces,
              reusable React components, and modern UI
              solutions while following frontend best
              practices.
            </p>
          </div>

          <div>
            <h4 className="text-blue-400 font-semibold">
              UIPath RPA Intern
            </h4>

            <p className="text-slate-300 mt-2">
              Built automation workflows and gained
              practical experience in Robotic Process
              Automation (RPA) technologies.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {facts.map((fact, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 text-center"
            >
              <div className="text-blue-400 text-2xl flex justify-center mb-3">
                {fact.icon}
              </div>

              <h3 className="text-3xl font-bold">
                {fact.value}
              </h3>

              <p className="text-slate-400 mt-2 text-sm">
                {fact.label}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="flex gap-4">
          <a
            href="https://github.com/basmariya2574-cpu"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-5 py-3 rounded-xl bg-white/5 border border-white/10 hover:border-blue-500 transition"
          >
            <FaGithub />
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/basma-riswan-9966223a4"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-5 py-3 rounded-xl bg-white/5 border border-white/10 hover:border-blue-500 transition"
          >
            <FaLinkedin />
            LinkedIn
          </a>
        </div>

      </motion.div>

    </div>
  </div>
</section>

);
}

export default About;