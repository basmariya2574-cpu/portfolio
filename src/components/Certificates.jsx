import { motion } from "framer-motion";
import { FaCertificate } from "react-icons/fa";
import uipathcert from "../assets/uipath-certificate.jpg";

const certificates = [
  {
    title: "UIPath RPA Internship Certificate",
    description:
      "Successfully completed internship training in UIPath Robotic Process Automation (RPA), gaining practical knowledge in workflow automation, business process optimization, and automation solutions.",
    iconColor: "text-blue-500",
    badge: "Certified",
    badgeColor: "bg-blue-500/10 text-blue-400 border-blue-500/30",
    image: uipathcert,
  },
  {
    title: "Frontend Development Internship",
    description:
      "Completed internship experience in frontend development, building responsive web interfaces, React.js applications, reusable UI components, and modern user experiences.",
    iconColor: "text-green-500",
    badge: "Internship Completed",
    badgeColor: "bg-green-500/10 text-green-400 border-green-500/30",
    image: null,
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const card = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

function Certificates() {
  return (
    <section
      id="certificates"
      className="py-24 bg-gradient-to-b from-slate-900 to-slate-950 text-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-4"
        >
          Certifications & Internships
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-slate-400 mb-14"
        >
          Professional training, certifications and internship experience.
        </motion.p>

        {/* Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          {certificates.map((item, index) => (
            <motion.div
              key={index}
              variants={card}
              whileHover={{ scale: 1.03 }}
              className="bg-white/5 backdrop-blur-md border border-white/10 
                         rounded-3xl p-8 shadow-xl transition-all duration-300"
            >
              {/* Icon */}
              <FaCertificate className={`text-5xl mb-6 ${item.iconColor}`} />

              {/* Title */}
              <h3 className="text-2xl font-bold mb-4">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-slate-300 leading-7">
                {item.description}
              </p>

              {/* Badge */}
              <div className="mt-6 flex flex-col gap-5">
                <span
                  className={`inline-block px-4 py-2 rounded-full border text-sm font-medium w-fit ${item.badgeColor}`}
                >
                  {item.badge}
                </span>

                {/* Image (only if exists) */}
                {item.image && (
                  <img
                    src={item.image}
                    alt="certificate"
                    className="w-full rounded-xl border border-white/10 hover:scale-[1.02] transition"
                  />
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Certificates;