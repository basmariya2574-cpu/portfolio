import { motion } from "framer-motion";

function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["HTML", "CSS", "JavaScript", "React.js", "Tailwind CSS"],
    },
    {
      title: "Programming",
      skills: ["Python", "Java", "RDBMS"],
    },
    {
      title: "Automation",
      skills: ["UIPath"],
    },
    {
      title: "Design",
      skills: ["Figma", "UI/UX Design"],
    },
    {
      title: "Soft Skills",
      skills: [
        "Communication",
        "Teamwork",
        "Problem Solving",
        "Creativity",
        "Presentation Skills",
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 px-6 bg-slate-950">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          Skills
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6"
            >
              <h3 className="text-2xl font-semibold text-blue-400 mb-4">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;