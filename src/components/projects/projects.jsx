import { projectsData } from "../../data/data";

export default function Projects() {
  return (
    <section id="projects" className="py-12">
            <hr className="section-border"/> 

      <div>
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-200">Some of my Work</h1>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-8 sm:gap-8 gap-4">
          {projectsData.map((item, index) => (
            <div
              key={index}
              className="group p-1 border border-dashed border-slate-500 shadow shadow-slate-700 rounded-md bg-gray-800 transition-all duration-300 hover:shadow-lg hover:shadow-slate-600"
            >
              <a href={item.link} target="_blank" rel="noopener noreferrer" className="block">
                <div>
                  <img className="rounded-md w-full h-auto" src={item.image} alt={item.name} />
                </div>
                <div className="md:py-3 py-2 px-2">
                  <h3 className="mb-2 font-semibold text-cyan-500 group-hover:text-cyan-400 transition-colors duration-300">
                    {item.name}
                  </h3>
                  <p className="font-light text-sm text-gray-300">{item.details}</p>
                </div>
              </a>
            </div>
          ))}
        </div>
        <div className="md:mt-12 mt-4 flex justify-center items-center">
          <a
            className="btn bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded transition-colors duration-500 ease-in-out"
            href="https://github.com/Andrew-Ochieng"
            target="_blank"
            rel="noopener noreferrer"
          >
            More Projects
          </a>
        </div>
      </div>
      <hr className="mt-12 border-t border-gray-700" />
    </section>
  );
}