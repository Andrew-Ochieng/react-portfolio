import { CheckCircle } from "lucide-react";
import aboutImg from "../../assets/dev2.svg";

const About = () => {
    return (
        <section id="about" className="md:mt-0 mt-8">
            <div className="grid sm:grid-cols-2">
            <div className="flex justify-center items-center md:mb-0 mb-16">
                <img className="md:w-[85%] w-[90%] transform scale-x-[-1]" src={aboutImg} alt="About Me" />
            </div>  

                <div>
                    <h1 className="md:text-lg font-semibold text-white uppercase">About Me</h1>
                    <div className="md:my-6 my-4 md:text-4xl text-2xl font-semibold">
                        <p className="text-cyan-500 mb-1">Driven, <span className="text-white">Innovative</span></p>
                        <p className="text-white">Software <span className="text-cyan-500">Developer</span></p>
                    </div>
                    <div className="md:space-y-8 space-y-4">
                        <p className="md:leading-loose">
                            I am a Full Stack Developer with over 3 years of experience
                            building scalable web and mobile applications. Passionate
                            about crafting seamless user experiences, I specialize in
                            front-end and back-end development with solid understanding of wordpress as well, ensuring high-performance
                            and responsive designs.
                        </p>
                        <p>
                            My expertise includes:
                        </p>
                        <ul className="space-y-2">
                            <li className="flex items-center"><CheckCircle className="text-cyan-500 mr-2" /> Develop highly interactive Front end / User Interfaces for the web</li>
                            <li className="flex items-center"><CheckCircle className="text-cyan-500 mr-2" /> Progressive Web Applications (PWA) in normal and SPA Stacks</li>
                            <li className="flex items-center"><CheckCircle className="text-cyan-500 mr-2" /> Integration of third-party services such as Azure / VPS / Cpanel</li>
                            <li className="flex items-center"><CheckCircle className="text-cyan-500 mr-2" /> Integration of payment services such as M-Pesa </li>
                            <li className="flex items-center"><CheckCircle className="text-cyan-500 mr-2" /> Develop highly interactive Mobile Applications</li>
                            <li className="flex items-center"><CheckCircle className="text-cyan-500 mr-2" /> Develop highly interactive Backend / API services</li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* <hr className="section-border" /> */}
        </section>
    );
};

export default About;
