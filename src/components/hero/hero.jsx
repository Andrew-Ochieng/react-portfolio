import { FaGithub, FaGoogle, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import hero from "../../assets/hero.png"
import { Typewriter } from "react-simple-typewriter";
import { socialsData } from "../../data/data";

const Hero = () => {
    return ( 
        <section className="md:mb-40 mb-16" id="about">
            <div className="grid md:grid-cols-2 md:gap-8 gap-4 md:pt-12 pt-6">
                <div className="md:hidden flex items-center justify-center md:mt-0 mb-8">
                    <div className="md:px-8 px-4 pt-8 bg-slate-900 rounded-lg shadow-lg hover:shadow-xl shadow-slate-800 hover:shadow-slate-800">
                        <img className="sm:max-h-[27rem] max-h-[20rem] " src={hero} alt="Hero Image" />
                    </div>
                </div>
                <div className="flex flex-col gap-4 md:items-start items-center text-center md:text-start">
                    <p className='uppercase md:text-base text-sm'>Hello, I'm</p>
                    <h1 className="xl:text-6xl md:text-5xl sm:text-4xl text-3xl font-extrabold">
                        <span className="text-cyan-400">Andrew</span> <span className="md:ml-2 ml-1 text-white">Ochieng</span>
                    </h1>
                    <p className="md:text-3xl font-medium text-cyan-300">
                        <Typewriter
                            words={[
                                'Fullstack Developer.',
                                'Wordpress Developer.', 
                                'Graphics Designer.', 
                                'UI/UX Designer,',
                                'Technical Mentor.',
                            ]}
                            loop={Infinity}
                            cursor
                            cursorStyle='|'
                            typeSpeed={50}
                            deleteSpeed={50}
                            delaySpeed={3000}
                        />
                    </p>
                    <p className="md:text-lg font-light md:leading-loose leading-relaxed">
                        Results-driven Software Engineer with 3+ years of experience in building scalable solutions and leading 
                        transformative projects. Skilled in problem-solving, innovation, and fostering collaboration to deliver 
                        high-impact applications.
                    </p>
                    <div className="flex gap-4 mt-4">
                        <a 
                            href="https://tinyurl.com/mrx6refe" 
                            target="_blank" rel="noopener noreferrer"
                            className="px-4 py-2 border rounded-md border-cyan-500 bg-cyan-500 text-white font-medium 
                            hover:bg-transparent hover:text-cyan-500 transition-all">
                            View Resume
                        </a>
                        <a href="#contact" className="px-4 py-2 border rounded-md border-cyan-500 text-cyan-500 font-medium 
                            hover:bg-cyan-500 hover:text-white transition-all">
                            Contact Me
                        </a>
                    </div>
                    <div className="flex gap-4 mt-6">
                        {socialsData.map((social, index) => (
                            <a  
                                key={index}
                                className="md:p-3 p-2 rounded-full border border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-white transition-all"
                                href={social.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`Visit ${social.name}`}
                            >
                                {social.icon}
                            </a>
                        ))}
                    </div>
                </div>

                <div className="sm:flex hidden items-center justify-center md:mt-0 mt-8">
                    <div className="md:px-8 px-4 pt-8 bg-slate-900 rounded-lg shadow-lg hover:shadow-xl shadow-slate-800 hover:shadow-slate-800">
                        <img className="sm:max-h-[27rem] max-h-[20rem] " src={hero} alt="Hero Image" />
                    </div>
                </div>
            </div>
            
        </section>
     );
}
 
export default Hero;