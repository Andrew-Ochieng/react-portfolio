import { CheckCircle } from "lucide-react";
import aboutImg from "../../assets/dev2.svg";
import { motion } from "framer-motion";

const About = () => {
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const imageVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const listItem = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5
      }
    })
  };

  return (
    <section id="about" className="md:mt-0 mt-8">
      <div className="grid sm:grid-cols-2">
        {/* Image Section */}
        <motion.div 
          className="flex justify-center items-center md:mb-0 mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={imageVariants}
        >
          <img 
            className="md:w-[85%] w-[90%] transform scale-x-[-1]" 
            src={aboutImg} 
            alt="About Me" 
          />
        </motion.div>  

        {/* Content Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={container}
        >
          <motion.h1 
            className="md:text-lg font-semibold text-white uppercase"
            variants={item}
          >
            About Me
          </motion.h1>

          <motion.div 
            className="md:my-6 my-4 md:text-4xl text-2xl font-semibold"
            variants={container}
          >
            <motion.p className="text-cyan-500 mb-1" variants={item}>
              Driven, <span className="text-white">Innovative</span>
            </motion.p>
            <motion.p className="text-white" variants={item}>
              Software <span className="text-cyan-500">Developer</span>
            </motion.p>
          </motion.div>

          <motion.div 
            className="md:space-y-8 space-y-4"
            variants={container}
          >
            <motion.p className="md:leading-loose" variants={item}>
              I am a Full Stack Developer with over 3 years of experience
              building scalable web and mobile applications. Passionate
              about crafting seamless user experiences, I specialize in
              front-end and back-end development with solid understanding of wordpress as well, ensuring high-performance
              and responsive designs.
            </motion.p>

            <motion.p variants={item}>
              My expertise includes:
            </motion.p>

            <motion.ul className="space-y-2" variants={container}>
              {[
                "Develop highly interactive Front end / User Interfaces for the web",
                "Progressive Web Applications (PWA) in normal and SPA Stacks",
                "Integration of third-party services such as Azure / VPS / Cpanel",
                "Integration of payment services such as M-Pesa",
                "Develop highly interactive Mobile Applications",
                "Develop highly interactive Backend / API services"
              ].map((text, i) => (
                <motion.li 
                  key={i}
                  className="flex items-center"
                  variants={listItem}
                  custom={i}
                  whileHover={{ x: 5 }}
                >
                  <CheckCircle className="text-cyan-500 mr-2" /> 
                  {text}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;