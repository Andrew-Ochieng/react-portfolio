import { servicesData } from "../../data/data";

const Services = () => {
    
    return ( 
        <>
            <section id="services" className="md:mt-40 mt-20">
                <h1 className="section-title">What I Do</h1>
                <div className="grid md:grid-cols-3 md:gap-8 gap-4">
                    {servicesData.map((item, index) => (
                        <div key={index} className='md:h-full h-60 flex flex-col items-center text-center justify-center md:p-8 p-4 bg-slate-800 border-2 border-slate-800 hover:border-cyan-500 hover:-translate-y-1 duration-300 rounded-xl shadow-lg'>
                            <img className="md:w-16 w-12 md:mb-4 mb-2" src={item.icon} alt="" />
                            <h3 className="md:text-2xl text-lg font-semibold uppercase md:pb-3 mb-2">{item.name}</h3>
                            <p>{item.details}</p>
                        </div>
                    ))}
                </div>
                {/* <hr className="section-border"/>  */}
            </section>
        </>
     );
}
 
export default Services;