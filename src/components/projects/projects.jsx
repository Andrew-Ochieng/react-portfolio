import { projectsData } from "../../data/data";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function Projects() {
  return (
    <section id="projects" className="md:mt-32 mt-16 py-12">
      <div>
        <h3 className="md:text-base text-sm text-center uppercase font-semibold">Latest 
            <span className="text-cyan-400 ml-2">Projects</span>
        </h3>
        <h1 className="section-title">Some of my Work</h1>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projectsData.map((item, index) => (
            <div
              key={index}
              className="relative group rounded-lg bg-slate-900 overflow-hidden transition-all duration-300 shadow hover:shadow-sm shadow-slate-600"
            >
              <div className="relative">
                <img
                  className="rounded-t-lg w-full h-64 object-cover"
                  src={item.image}
                  alt={item.name}
                />
                <div className="absolute inset-0 bg-slate-900 bg-opacity-90 opacity-95 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <h3 className="mb-2 font-bold text-cyan-400 text-lg group-hover:text-cyan-300 transition-colors duration-300">
                    {item.name}
                  </h3>
                  <p className="font-medium md:text-base text-sm text-white mb-3">{item.details}</p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {item.techStack.map((tech, i) => (
                      <span key={i} className="text-xs bg-cyan-700 text-white font-semibold px-2 py-1 rounded-md">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-4">
                    {item.codebaseLink !== "" && (
                      <a
                      href={item.codebaseLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      <FaGithub size={20} />
                    </a>
                    )}
                    <a
                      href={item.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      <FaExternalLinkAlt size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="md:mt-12 mt-4 flex justify-center items-center">
          <a
            className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded transition-colors duration-500 ease-in-out"
            href="https://github.com/Andrew-Ochieng"
            target="_blank"
            rel="noopener noreferrer"
          >
            More Projects
          </a>
        </div>
      </div>
    </section>
  );
}
