import { FaCertificate } from "react-icons/fa";
import uipathcert from "../assets/uipath-certificate.jpg";

function Certificates() {
  return (
    <section
      id="certificates"
      className="py-24 bg-gradient-to-b from-slate-900 to-slate-950 text-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center mb-4">
          Certifications & Internships
        </h2>

        <p className="text-center text-slate-400 mb-14">
          Professional training, certifications and internship experience.
        </p>

        <div className="grid md:grid-cols-2 gap-8">

          {/* UIPath */}
          <div className="bg-white text-slate-800 rounded-3xl p-8 shadow-xl hover:-translate-y-2 transition duration-300">

            <FaCertificate className="text-5xl text-blue-600 mb-6" />

            <h3 className="text-2xl font-bold mb-4">
              UIPath RPA Internship Certificate
            </h3>

            <p className="text-slate-600 leading-8">
              Successfully completed internship training in
              UIPath Robotic Process Automation (RPA),
              gaining practical knowledge in workflow automation,
              business process optimization, and automation solutions.
            </p>

            <div className="mt-6">
              <span className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full font-medium">
                Certified
              </span>
             <img
  src={uipathcert}
  alt="UIPath Certificate"
  className="w-full rounded-xl mb-5 border"
/>

            </div>
          </div>

          {/* Frontend */}
          <div className="bg-white text-slate-800 rounded-3xl p-8 shadow-xl hover:-translate-y-2 transition duration-300">

            <FaCertificate className="text-5xl text-green-600 mb-6" />

            <h3 className="text-2xl font-bold mb-4">
              Frontend Development Internship
            </h3>

            <p className="text-slate-600 leading-8">
              Completed internship experience in frontend development,
              building responsive web interfaces, React.js applications,
              reusable UI components, and modern user experiences.
            </p>

            <div className="mt-6">
              <span className="bg-green-100 text-green-600 px-4 py-2 rounded-full font-medium">
                Internship Completed
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Certificates;