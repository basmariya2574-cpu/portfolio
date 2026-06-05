import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-slate-900">

      <div className="max-w-4xl mx-auto text-center">

        <h2 className="text-4xl font-bold mb-8">
          Contact Me
        </h2>

        <p className="text-slate-300 mb-10">
          Let's connect and collaborate.
        </p>

        <div className="flex flex-wrap justify-center gap-6">

          <a href="mailto:yourmail@gmail.com">
            <FaEnvelope size={30} />
          </a>

          <a href="#">
            <FaGithub size={30} />
          </a>

          <a href="#">
            <FaLinkedin size={30} />
          </a>

        </div>

      </div>

    </section>
  );
}

export default Contact;