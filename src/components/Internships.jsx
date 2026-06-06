import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaRobot,
  FaBuilding,
  FaCalendarAlt,
} from "react-icons/fa";

function Internships() {
  const internships = [
    {
      icon: <FaLaptopCode />,
      title: "Frontend Developer Intern",
      company: "Qryptex Technologies",
      companyLink: "https://qryptex.in",
      duration: "2026",
      color: "text-blue-400",
      points: [
        "Developed responsive web interfaces using React.js and Tailwind CSS.",
        "Built reusable and scalable React components.",
        "Implemented modern UI/UX design principles.",
        "Worked on Smart Canteen UI, AniStream, and Portfolio projects.",
        "Improved responsiveness, accessibility, and user experience.",
      ],
    },
    {
      icon: <FaRobot />,
      title: "UIPath RPA Intern",
      company: "UIPath RPA Internship",
      duration: "2026",
      color: "text-cyan-400",
      points: [
        "Built automation workflows using UIPath.",
        "Learned Robotic Process Automation concepts.",
        "Automated repetitive business processes.",
        "Improved workflow efficiency and accuracy.",
        "Gained practical exposure to enterprise automation tools.",
      ],
    },
  ];

  return (
    <section
      id="internships"
      className="py-24 px-6 bg-slate-950 text-white"
    >
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-sm font-medium">
            EXPERIENCE
          </span>

          <h2 className="text-5xl font-bold mt-6">
            Internship
            <span className="text-blue-400"> Experience</span>
          </h2>

          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            Practical experience gained through internships,
            real-world projects, and hands-on learning.
          </p>
        </motion.div>

        {/* Internship Cards */}
        <div className="space-y-8">

          {internships.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{
                y: -8,
                transition: { duration: 0.2 },
              }}
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
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">

                <div className="flex items-center gap-4">

                  <div
                    className={`
                      w-16 h-16
                      rounded-2xl
                      bg-white/5
                      border border-white/10
                      flex items-center justify-center
                      text-3xl
                      ${item.color}
                    `}
                  >
                    {item.icon}
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold">
                      {item.title}
                    </h3>

                    <div className="flex items-center gap-2 text-slate-400 mt-2">
                      <FaBuilding />

                      {item.companyLink ? (
                        <a
                          href={item.companyLink}
                          target="_blank"
                          rel="noreferrer"
                          className="hover:text-blue-400 transition"
                        >
                          {item.company}
                        </a>
                      ) : (
                        <span>{item.company}</span>
                      )}
                    </div>
                  </div>

                </div>

                <div className="flex items-center gap-2 text-slate-400">
                  <FaCalendarAlt />
                  {item.duration}
                </div>

              </div>

              <ul className="space-y-3">
                {item.points.map((point, i) => (
                  <li
                    key={i}
                    className="text-slate-300 flex gap-3"
                  >
                    <span className="text-green-400">✓</span>
                    {point}
                  </li>
                ))}
              </ul>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Internships;