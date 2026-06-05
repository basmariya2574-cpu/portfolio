import { motion } from "framer-motion";

function Education() {
  return (
    <section id="education" className="py-24 px-6 bg-slate-900">
      <motion.div
 initial={{ opacity: 0, y: 50 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.6 }}
>
  ...
</motion.div>

      <div className="max-w-5xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-12">
          Education
        </h2>

        <div className="space-y-8">

          <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
            <h3 className="text-xl font-bold text-blue-400">
              Bachelor of Computer Applications (BCA)
            </h3>
            <p>Jamal Mohamed College</p>
            <p className="text-slate-400">Currently Pursuing</p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
            <h3 className="text-xl font-bold text-blue-400">
              Higher Secondary (12th)
            </h3>
            <p>Score: 74.4%</p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
            <h3 className="text-xl font-bold text-blue-400">
              SSLC (10th)
            </h3>
            <p>Score: 72%</p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Education;