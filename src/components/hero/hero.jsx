import { FaGithub, FaGoogle, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import hero from "../../assets/hero.png";
import { Typewriter } from "react-simple-typewriter";
import { socialsData } from "../../data/data";
import { motion } from "framer-motion";

// Animation variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const imageVariants = {
  hidden: { opacity: 0, x: 50 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8 } }
};

const Hero = () => {
  return (
    <section className="md:mb-40 mb-16" id="about">
      <div className="grid md:grid-cols-2 md:gap-8 gap-4 md:pt-12 pt-6">
        {/* Mobile Image */}
        <div className="md:hidden flex items-center justify-center md:mt-0 mb-8">
          <motion.div
            initial="hidden"
            animate="show"
            variants={imageVariants}
            className="md:px-8 px-4 pt-8 bg-slate-900 rounded-lg shadow-lg hover:shadow-xl shadow-slate-800 hover:shadow-slate-800"
          >
            <img className="sm:max-h-[27rem] max-h-[20rem]" src={hero} alt="Hero Image" />
          </motion.div>
        </div>

        {/* Content */}
        <motion.div
          className="flex flex-col gap-4 md:items-start items-center text-center md:text-start"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.p className='uppercase md:text-base text-sm' variants={item}>
            Hello, I'm
          </motion.p>

          <motion.h1 
            className="xl:text-6xl md:text-5xl sm:text-4xl text-3xl font-extrabold"
            variants={container}
          >
            <motion.span className="text-cyan-400" variants={item}>
              Andrew
            </motion.span>
            <motion.span className="md:ml-2 ml-1 text-white" variants={item}>
              Ochieng
            </motion.span>
          </motion.h1>

          <motion.p className="md:text-3xl font-medium text-cyan-300" variants={item}>
            <Typewriter
              words={[
                'Fullstack Developer.',
                'Lead Developer.', 
                'Frontend Developer.',
                'Backend Developer.',
                'UI/UX Designer.',
                'Graphics Designer.'
              ]}
              loop={Infinity}
              cursor
              cursorStyle='|'
              typeSpeed={50}
              deleteSpeed={50}
              delaySpeed={3000}
            />
          </motion.p>

          <motion.p 
            className="md:text-lg font-light md:leading-loose leading-relaxed"
            variants={item}
          >
            Results-driven Software Engineer with 3+ years of experience in building scalable solutions and leading 
            transformative projects. Skilled in problem-solving, innovation, and fostering collaboration to deliver 
            high-impact applications.
          </motion.p>

          <motion.div 
            className="flex gap-4 mt-4"
            variants={container}
          >
            <motion.a 
              href="https://tinyurl.com/mrx6refe" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-4 py-2 border rounded-md border-cyan-500 bg-cyan-500 text-white font-medium 
              hover:bg-transparent hover:text-cyan-500 transition-all"
              variants={item}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Resume
            </motion.a>
            <motion.a 
              href="#contact" 
              className="px-4 py-2 border rounded-md border-cyan-500 text-cyan-500 font-medium 
              hover:bg-cyan-500 hover:text-white transition-all"
              variants={item}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.a>
          </motion.div>

          <motion.div 
            className="flex gap-4 mt-6"
            variants={container}
          >
            {socialsData.map((social, index) => (
              <motion.a  
                key={index}
                className="md:p-3 p-2 rounded-full border border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-white transition-all"
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${social.name}`}
                variants={item}
                whileHover={{ 
                  scale: 1.1,
                  backgroundColor: "#06b6d4",
                  color: "#ffffff"
                }}
                whileTap={{ scale: 0.9 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Desktop Image */}
        <motion.div 
          className="sm:flex hidden items-center justify-center md:mt-0 mt-8"
          initial="hidden"
          animate="show"
          variants={imageVariants}
        >
          <div className="md:px-8 px-4 pt-8 bg-slate-900 rounded-lg shadow-lg hover:shadow-xl shadow-slate-800 hover:shadow-slate-800">
            <motion.img 
              className="sm:max-h-[27rem] max-h-[20rem]" 
              src={hero} 
              alt="Hero Image"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;