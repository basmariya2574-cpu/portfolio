import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

function Contact() {
  const socialLinks = [
    {
      icon: <FaEnvelope />,
      link: "mailto:basmariya2574@gmail.com",
      label: "Email",
    },
    {
      icon: <FaGithub />,
      link: "https://github.com/",
      label: "GitHub",
    },
    {
      icon: <FaLinkedin />,
      link: "https://linkedin.com/",
      label: "LinkedIn",
    },
  ];

  return (
    <section
      id="contact"
      className="py-24 px-6 bg-gradient-to-b from-slate-900 to-slate-950 text-white"
    >
      <div className="max-w-4xl mx-auto text-center">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          Contact Me
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-slate-300 mb-12"
        >
          Let’s connect and collaborate on something amazing 🚀
        </motion.p>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-8"
        >
          {socialLinks.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.label}
              className="group flex items-center justify-center w-16 h-16 
                         rounded-full bg-white/5 border border-white/10 
                         hover:bg-blue-500/20 hover:border-blue-500 
                         transition-all duration-300"
            >
              <span
                className="text-2xl group-hover:scale-125 
                           transition-transform duration-300"
              >
                {item.icon}
              </span>
            </a>
          ))}
        </motion.div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-slate-500 mt-12 text-sm"
        >
          Open for internships • freelance • collaboration
        </motion.p>
      </div>
    </section>
  );
}

export default Contact;