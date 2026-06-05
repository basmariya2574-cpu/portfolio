import anistream from "../assets/anistream.png";

import {
  FaGithub,
  FaLaptopCode,
  FaRobot,
  FaPalette,
} from "react-icons/fa";

function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-slate-900">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-12">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {/* AniStream */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:scale-105 transition">

            <span className="bg-blue-600 px-4 py-2 rounded-full text-sm">
              Featured Project
            </span>
            <img
  src={anistream}
  alt="AniStream"
  className="w-full h-70 object-cover rounded-2xl mb-5"
/>


   
            <h3 className="text-2xl font-bold mt-5 mb-3 text-blue-400">
              AniStream
            </h3>

            <p className="text-slate-300 mb-4">
              Modern Anime Streaming Platform built using React.js.
            </p>

            <ul className="space-y-2 text-slate-300 mb-6">
              <li>✓ Anime Catalog</li>
              <li>✓ Watch Page</li>
              <li>✓ My List</li>
              <li>✓ Responsive Design</li>
              <li>✓ Modern UI</li>
              <li>✓ React Based Application</li>
            </ul>

            <div className="flex flex-wrap gap-2 mb-6">
              <span className="bg-blue-500/20 px-3 py-1 rounded-full">
                React
              </span>

              <span className="bg-blue-500/20 px-3 py-1 rounded-full">
                JavaScript
              </span>

              <span className="bg-blue-500/20 px-3 py-1 rounded-full">
                Tailwind CSS
              </span>
            </div>

            <button className="flex items-center gap-2 bg-blue-600 px-5 py-3 rounded-xl">
              <FaGithub />
              View Project
            </button>
          </div>

          {/* Smart Canteen */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:scale-105 transition">

            <FaPalette className="text-4xl text-pink-400 mb-4" />

            <h3 className="text-2xl font-bold mb-3">
              Smart Canteen
            </h3>

            <p className="text-slate-300 mb-4">
              College Startup Project designed to improve food ordering and canteen management.
            </p>

            <ul className="space-y-2 text-slate-300 mb-6">
              <li>✓ UI/UX Design</li>
              <li>✓ Wireframing</li>
              <li>✓ User Flow Design</li>
              <li>✓ Figma Prototyping</li>
              <li>✓ Digital Menu Concept</li>
            </ul>

            <div className="flex flex-wrap gap-2">
              <span className="bg-pink-500/20 px-3 py-1 rounded-full">
                Figma
              </span>

              <span className="bg-pink-500/20 px-3 py-1 rounded-full">
                UI/UX
              </span>

              <span className="bg-pink-500/20 px-3 py-1 rounded-full">
                Prototyping
              </span>
            </div>

          </div>

          {/* Gesture Car */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:scale-105 transition">

            <FaRobot className="text-4xl text-cyan-400 mb-4" />

            <h3 className="text-2xl font-bold mb-3">
              Gesture Control & Obstacle Avoiding Car
            </h3>

            <p className="text-slate-300 mb-4">
              Smart vehicle project developed using sensors and gesture control technology.
            </p>

            <ul className="space-y-2 text-slate-300 mb-6">
              <li>✓ Gesture Based Control</li>
              <li>✓ Obstacle Detection</li>
              <li>✓ Automatic Avoidance</li>
              <li>✓ Sensor Integration</li>
              <li>✓ Embedded System Concepts</li>
            </ul>

            <div className="flex flex-wrap gap-2">
              <span className="bg-cyan-500/20 px-3 py-1 rounded-full">
                Arduino
              </span>

              <span className="bg-cyan-500/20 px-3 py-1 rounded-full">
                Sensors
              </span>

              <span className="bg-cyan-500/20 px-3 py-1 rounded-full">
                IoT
              </span>
            </div>

          </div>

          {/* Portfolio */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:scale-105 transition">

            <FaLaptopCode className="text-4xl text-green-400 mb-4" />

            <h3 className="text-2xl font-bold mb-3">
              Portfolio Website
            </h3>

            <p className="text-slate-300 mb-4">
              Personal portfolio website built using React.js and Tailwind CSS.
            </p>

            <ul className="space-y-2 text-slate-300 mb-6">
              <li>✓ Responsive Design</li>
              <li>✓ Modern UI</li>
              <li>✓ Smooth Animations</li>
              <li>✓ Recruiter Friendly</li>
              <li>✓ Professional Layout</li>
            </ul>

            <div className="flex flex-wrap gap-2">
              <span className="bg-green-500/20 px-3 py-1 rounded-full">
                React
              </span>

              <span className="bg-green-500/20 px-3 py-1 rounded-full">
                Tailwind CSS
              </span>

              <span className="bg-green-500/20 px-3 py-1 rounded-full">
                Vite
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Projects;