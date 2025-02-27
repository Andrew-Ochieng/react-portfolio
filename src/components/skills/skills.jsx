import {skillsData} from "../../data/data";

const Skills = () => {
    return ( 
        <section id="skills">
            <h3 className="md:text-base text-sm text-center uppercase font-semibold">My 
                <span className="text-cyan-400 ml-2">Talent</span>
            </h3>
            <h1 className="section-title">Professional Skills</h1>
            <div className="grid md:grid-cols-6 grid-cols-3 md:gap-8 gap-4 items-center">
                {skillsData.map((skill, index) => (
                    <figure className="flex flex-col items-center justify-center bg-slate-800 shadow-md shadow-gray-800 hover:-translate-y-2 border-2 border-slate-800  hover:border-cyan-500 duration-300 md:p-4 p-2 md:w-32 w-26 rounded-lg">
                        <img key={index} className='md:w-12 w-9' src={skill.src} alt={skill.name} loading="lazy" decoding="async" />
                        <span className="mt-2">{skill.name}</span>
                    </figure>
                ))}
            </div> 
        </section>
     );
}
 
export default Skills;
