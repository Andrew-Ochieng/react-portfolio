import { projectsData } from "../../data/data";

const Projects = () => {
    return ( 
        <section id="projects">
            <div>
                <h1 className="section-title">Some of my Work</h1>
                <div className="grid md:grid-cols-3 md:gap-16 sm:gap-8 gap-4">
                    {projectsData.map((item, index) => (
                        <div key={index} className='shadow-lg shadow-gray-800 hover:bg-slate-800 duration-500 rounded-xl '>
                            <div>
                                <img className="rounded-t-xl" src={item.image} alt="" />
                            </div>
                            <a href={item.link} target="_blank">
                                <div className="md:px-4 px-3 py-2">
                                <h3 className="mb-2 font-semibold ">{item.name}</h3>
                                <p>{item.details}</p>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
                <button className="md:mt-8 mt-4 ">
                    <a className="btn" href="https://github.com/Andrew-Ochieng" target='_blank' >More Projects</a>
                </button>
            </div>
            <hr className="section-border"/> 
        </section>
     );
}
 
export default Projects;