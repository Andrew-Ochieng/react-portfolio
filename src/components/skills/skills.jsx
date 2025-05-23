import { skillsData } from "../../data/data";
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Skills = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }, []);

  return ( 
    <section id="skills" className="py-12">
      <div data-aos="fade-up">
        <h3 className="md:text-base text-sm text-center uppercase font-semibold">
          My <span className="text-cyan-400 ml-2">Talent</span>
        </h3>
        <h1 className="section-title">Professional Skills</h1>
      </div>
      
      <div 
        className="grid md:grid-cols-6 grid-cols-3 md:gap-8 gap-4 items-center"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        {skillsData.map((skill, index) => (
          <figure 
            key={index}
            className="flex flex-col items-center justify-center bg-slate-800 shadow-md shadow-gray-800 hover:-translate-y-2 border-2 border-slate-800 hover:border-cyan-500 duration-300 md:p-4 p-2 md:w-32 w-26 rounded-lg"
            data-aos="zoom-in"
            data-aos-delay={150 + (index * 50)}
            data-aos-offset="50"
          >
            <img 
              className='md:w-12 w-9' 
              src={skill.src} 
              alt={skill.name} 
              loading="lazy" 
              decoding="async" 
            />
            <span className="mt-2 text-sm md:text-base">{skill.name}</span>
          </figure>
        ))}
      </div> 
    </section>
  );
}
 
export default Skills;