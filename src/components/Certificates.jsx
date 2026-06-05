function Certificates() {
  return (
    <section id="certificates" className="py-24 px-6 bg-slate-950">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-12">
          Certifications
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
            <h3 className="text-xl font-bold text-blue-400">
              Frontend Development Internship
            </h3>

            <p className="text-slate-300 mt-3">
              Successfully completed Frontend Development Internship.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
            <h3 className="text-xl font-bold text-cyan-400">
              UIPath RPA Internship
            </h3>

            <p className="text-slate-300 mt-3">
              Successfully completed UIPath Robotic Process Automation Internship.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Certificates;