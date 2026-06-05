import { FaLaptopCode, FaRobot } from "react-icons/fa";

function Internships() {
  return (
    <section id="internships" className="py-24 px-6 bg-slate-950">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-12">
          Internships
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8">
            <FaLaptopCode className="text-4xl text-blue-400 mb-4" />

            <h3 className="text-2xl font-bold mb-4">
              Frontend Development Intern
            </h3>

            <p className="text-slate-300">
              Worked on responsive web interfaces,
              React components, modern UI development,
              and frontend best practices.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8">
            <FaRobot className="text-4xl text-cyan-400 mb-4" />

            <h3 className="text-2xl font-bold mb-4">
              UIPath RPA Intern
            </h3>

            <p className="text-slate-300">
              Built automation workflows, learned
              robotic process automation concepts,
              and optimized business processes.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Internships;