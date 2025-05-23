import { servicesData } from "../../data/data";
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }, []);

  return ( 
    <section id="services" className="md:mt-40 mt-20 py-12">
      <div data-aos="fade-up">
        <h1 className="section-title">What I Do</h1>
      </div>
      
      <div 
        className="grid md:grid-cols-3 md:gap-8 gap-4"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        {servicesData.map((item, index) => (
          <div 
            key={index} 
            className='md:h-full h-60 flex flex-col items-center text-center justify-center md:p-8 p-4 bg-slate-800 border-2 border-slate-800 hover:border-cyan-500 hover:-translate-y-1 duration-300 rounded-xl shadow-lg'
            data-aos="fade-up"
            data-aos-delay={150 + (index * 100)}
            data-aos-offset="100"
          >
            <img 
              className="md:w-16 w-12 md:mb-4 mb-2" 
              src={item.icon} 
              alt={item.name} 
              data-aos="zoom-in"
              data-aos-delay={200 + (index * 100)}
            />
            <h3 className="md:text-2xl text-lg font-semibold uppercase md:pb-3 mb-2">{item.name}</h3>
            <p>{item.details}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
 
export default Services;