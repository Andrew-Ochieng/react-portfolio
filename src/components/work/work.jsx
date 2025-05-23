import { useState, useEffect } from "react";
import { experiencesData, educationData } from "../../data/data";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function WorkExperience() {
  const [showExperience, setShowExperience] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }, []);

  return (
    <section className="md:mt-40 mt-20 py-12" id="experience">
      <div data-aos="fade-up">
        <h3 className="md:text-base text-sm text-center uppercase font-semibold">
          My
          <span className="text-cyan-400 ml-2">Resume</span>
        </h3>
        <h1 className="section-title">Work Experience</h1>
      </div>

      <div className="text-white p-4 md:mb-48 mb-24">
        <div 
          className="flex justify-between mb-8 bg-slate-800 rounded-xl"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <button
            className={`md:py-4 px-6 py-3 md:w-48 w-full md:rounded-lg rounded-l-lg font-semibold transition duration-300 ${
              showExperience ? "bg-cyan-500 text-slate-900" : "slate-800 text-gray-300"
            }`}
            onClick={() => setShowExperience(true)}
          >
            Experience
          </button>
          <button
            className={`md:py-4 px-6 py-3 md:w-48 w-full md:rounded-lg rounded-r-lg font-semibold transition duration-300 ${
              !showExperience ? "bg-cyan-500 text-slate-900" : "slate-800 text-gray-300"
            }`}
            onClick={() => setShowExperience(false)}
          >
            Education
          </button>
        </div>

        <div className="relative border-l-4 border-cyan-500 pl-6 space-y-6">
          {(showExperience ? experiencesData : educationData).map((item, index) => (
            <div
              key={index}
              className="relative bg-slate-800 md:p-6 p-3 rounded-lg shadow-lg w-full xl:max-w-[1000px] md:max-w-[800px] mx-auto"
              data-aos="fade-up"
              data-aos-delay={150 + (index * 100)}
              data-aos-offset="100"
            >
              <div 
                className="absolute -left-12 top-6 bg-cyan-200 p-2 rounded-full text-slate-800"
                data-aos="zoom-in"
                data-aos-delay={200 + (index * 100)}
              >
                <div className="bg-cyan-500 p-1 rounded-full">
                  {showExperience ? item.icon : item.icon}
                </div>
              </div>

              <h2 className="md:text-2xl text-lg text-cyan-500 font-semibold">{item.role || item.degree}</h2>
              <h3 className="md:text-lg text-gray-300">{item.company || item.school}: {item.duration || item.year}</h3>
              <ul className="list-disc list-inside mt-2 text-gray-400">
                {item.content?.map((task, i) => (
                  <li key={i}>{task}</li>
                ))}
              </ul>

              {item.responsibilities && (
                <ul className="list-disc list-inside mt-2 text-gray-400">
                  {item.responsibilities.map((task, i) => (
                    <li key={i}>{task}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}