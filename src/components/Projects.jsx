import { FaGithub } from "react-icons/fa";

function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-slate-900">

      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-12">
          Featured Projects
        </h2>

        {/* AniStream */}
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 mb-8">

          <span className="bg-blue-600 px-4 py-2 rounded-full text-sm">
            Featured Project
          </span>

          <h3 className="text-3xl font-bold mt-6 mb-4">
            AniStream
          </h3>

          <p className="text-slate-300 mb-6">
            Modern Anime Streaming Platform built
            using React and modern frontend technologies.
          </p>

          <div className="flex flex-wrap gap-3 mb-6">
            <span className="bg-blue-500/20 px-3 py-2 rounded-full">
              React
            </span>

            <span className="bg-blue-500/20 px-3 py-2 rounded-full">
              JavaScript
            </span>

            <span className="bg-blue-500/20 px-3 py-2 rounded-full">
              Tailwind CSS
            </span>
          </div>

          <ul className="space-y-2 text-slate-300 mb-6">
            <li>✓ Anime Catalog</li>
            <li>✓ Watch Page</li>
            <li>✓ My List</li>
            <li>✓ Responsive Design</li>
            <li>✓ Modern UI</li>
          </ul>

          <button className="flex items-center gap-2 bg-blue-600 px-5 py-3 rounded-xl">
            <FaGithub />
            View Project
          </button>

        </div>

      </div>
    </section>
  );
}

export default Projects;