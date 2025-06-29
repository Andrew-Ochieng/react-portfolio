import img1 from "../assets/projects/img-1.jpg"
import img2 from "../assets/projects/img-2.jpg"
import img3 from "../assets/projects/img-3.jpg"
import img4 from "../assets/projects/img-4.jpg"
import img5 from "../assets/projects/img-5.png"
import img6 from "../assets/projects/img-6.jpg"
import img7 from "../assets/projects/img-7.jpg"
import img8 from "../assets/projects/img-8.png"
import img9 from "../assets/projects/img-9.jpg"
import djangoIcon from '../assets/skills/django.svg'
import tailwindcssIcon from '../assets/skills/tailwindcss.svg'
import wordpressIcon from '../assets/skills/wordpress.svg'
import webDevIcon from '../assets/services/web.svg'
import uiUXIcon from '../assets/services/uiux.svg'
import appDevIcon from '../assets/services/app.svg'
import apiIcon from '../assets/services/api.svg'
import paymentIcon from '../assets/services/payment.svg'
import mentorshipIcon from '../assets/services/mentorship.svg'
 
import { GraduationCap, Code, Users, MonitorSmartphone } from "lucide-react";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";

const  socialsData = [
  {
      name: "Github",
      link: "https://github.com/Andrew-Ochieng",
      icon: <FaGithub />
  },
  {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/andrew-ochieng-00b076180/",
      icon: <FaLinkedinIn />
  },
  {
      name: "Gmail",
      link: "mailto:andrewomosh44@gmail.com",
      icon: <IoMailOutline />
  },
  {
      name: "Twitter",
      link: "https://x.com/Andrew__dev",
      icon: <FaTwitter />
  }
]

const servicesData = [
    {
        icon: webDevIcon,
        name: "Web Development",
        details: "Modern and mobile-ready website that will help you reach all of your marketing."
    },
    {
        icon: uiUXIcon,
        name: "UI/UX Design",
        details: "Create intuitive interfaces and delightful user experiences by blending aesthetics with usability."
    },
    {
        icon: appDevIcon,
        name: "App Development",
        details: "Modern and mobile-ready application that will help you reach all of your marketing."
    },
    {
        icon: apiIcon,
        name: "API Design/ Intergration",
        details: "Developing a highly secure, fast and scalable APIs both REST and GraphQL."
    },
    {
        icon: paymentIcon,
        name: "Payment Integration",
        details: "Automate the process of payments to allow users pay right on your platform"
    },
    {
        icon: mentorshipIcon,
        name: "Mentorship",
        details: "Finds great joy in sharing my knowledge with others. As a technical mentor this allows me to give back to the community."
    },
]


const experiencesData = [
  {
    company: "Tera Creations",
    role: "Lead Web Developer",
    duration: "Nov 2024 – June 2025",
    icon: <Users size={16} />, // Leadership & Management Icon
    responsibilities: [
      "Overseeing the development process by managing a team of developers, ensuring that projects are completed on time, within budget, and meet client requirements.",
      "Leading the technical design and architecture of web applications, ensuring that the systems are scalable, efficient, and maintainable.",
      "Collaborating with clients to understand their needs and translate them into functional and aesthetically pleasing web solutions."
    ]
  },
  {
    company: "Vabrise Technologies",
    role: "Technical Lead",
    duration: "July 2024 – June 2025",
    icon: <Users size={16} />, // Leadership & Management Icon
    responsibilities: [
      "Establishing the company’s technical vision and leading all aspects of the company’s technology development and services delivered to company's customers.",
      "Provide leadership within the engineering department through close collaboration, knowledge sharing, and mentorship.",
      "Evaluating and implementing new systems and infrastructure.",
    ]
  },
  {
    company: "Custometrix",
    role: "Software Developer",
    duration: "Nov 2024 – Feb 2025",
    icon: <Code size={16} />, // Coding & Development Icon
    responsibilities: [
      "Maintenance and optimization of the company platforms including system design, specifications development, and system implementation.",
      "Implemented new features, improved application performance, and resolved critical bugs.",
      "Collaborated with cross-functional teams, including designers and product managers, to enhance user experience."
    ]
  },
  {
    company: "Space Ya Tech",
    role: "Frontend Developer Intern",
    duration: "May 2024 – Oct 2024",
    icon: <MonitorSmartphone size={16} />, // Frontend & UI Development Icon
    responsibilities: [
      "Built interactive features and functionalities using modern front-end technologies.",
      "Optimized code for performance and responsiveness across various devices.",
      "Collaborated with designers, back-end developers, and program leads to deliver exceptional user experiences."
    ]
  }
];

const educationData = [
  { 
    school: "Moringa School", 
    degree: "Certificate in Software Development", 
    year: "2022 - 2023", 
    icon: <GraduationCap size={16} />,
    content: [
        "Completed an intensive, project-based training program focusing on full-stack software development.",
        "Gained hands-on experience with modern web technologies and software engineering principles.",
        "Collaborated on multiple team projects, simulating real-world software development scenarios."
    ]
},
{ 
  school: "University of Eastern Africa, Baraton", 
  degree: "Bachelor of Education", 
  year: "2017 - 2021", 
  icon: <GraduationCap size={16} />,
  content: [
      "Gained in-depth knowledge in teaching methodologies, educational psychology, and curriculum development.",
      "Acquired skills in instructional planning, classroom management, and student engagement.",
      "Gained hands-on experience in classroom settings, applying educational theory to real-world teaching environment."
  ]
}
];



const projectsData = [
    {
      name: "Tera Creations",
      image: img1,
      details: "We blend cutting-edge AI technology with data-driven digital marketing strategies to help businesses scale, attract more customers, and dominate the online space.",
      techStack: ['Wordpress', 'PHP', 'Javascript'],
      codebaseLink: "",
      liveLink: "https://www.teracreations.com",
    },
    {
      name: "Kiddie Kloset",
      image: img2,
      details: "A one-stop baby shop committed to ensure every mother and baby receives the best products that Enhance Joy, Care, Comfort and Safety for Mothers and Their Precious Babies.",
      techStack: ['Wordpress', 'PHP', 'Javascript'],
      codebaseLink: "",
      liveLink: "https://kiddiekloset.com",        
    },
    {
      name: "Space Ya Tech",
      image: img3,
      details: "The fastest growing Africa, open-source community looking to change the way young Africans get started in technology",
      techStack: ['React', 'Javascript', 'HTML', 'CSS'],
      codebaseLink: "https://github.com/SpaceyaTech/SYT-Web-Redesign",
      liveLink: "https://www.spaceyatech.com",
    },
    {
        name: "Lumbz Sportswear",
        image: img4,
        details: "One-stop shop for quality sportswear. Providing top-notch sportswear since 2023.",
        techStack: ['Vue', 'Javascript', 'Django', 'PostgreSQL'],
        codebaseLink: "",
        liveLink: "https://lumbzsportswear.com",
        
    },
    {
        name: "Elimu360",
        image: img5,
        details: "Elimu360 is a comprehensive SaaS platform revolutionizing school administration, learning management, and institutional operations for educational institutions across Africa.",
        techStack: ['React', 'Javascript', 'HTML', 'Tailwindcss'],
        codebaseLink: "",
        liveLink: "https://elimu360.com",
    },
    {
        name: "Ng’ara Maisha Sacco",
        image: img6,
        details: "We are a cooperative society committed to improving the financial well-being of its members through innovative and member-centric financial solutions",
        techStack: ['Wordpress'],
        codebaseLink: "",
        liveLink: "https://nmsacco.co.ke",
    },
    {
      name: "Vabrise Technologies",
      image: img7,
      details: "A tech company that manages your bussiness without having to worry about the the software solutions you are using. Less hustle more growth.",
      techStack: ['React', 'Javascript', 'Node.js', 'MongoDB'],
      codebaseLink: "https://github.com/Vabrise-Technologies-Ltd/Vabrise",
      liveLink: "https://vabrisetech.com",      
    },
    {
      name: "Trinity Baptist Church - Funyula",
      image: img8,
      details: "Trinity Baptist Church – Funyula, is a reformed christian church  with the mission to honor God through sincere worship, impactful preaching, and effective Biblical teaching.",
      techStack: ['PHP', 'Laravel', 'React', 'Javascript', 'MySQL'],
      codebaseLink: "",
      liveLink: "https://tbcfunyula.com",        
    },
    {
      name: "Engstan Solutions",
      image: img9,
      details: "A branding business that helps customers order branded products from the comfort of their home",
      techStack: ['React', 'Javascript', 'Supabase', 'HTML', 'CSS'],
      codebaseLink: "",
      liveLink: "https://engstansolutions.co.ke",
    },
]

const skillsData = [
    { name: "JavaScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "Python", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "PHP", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
    { name: "Django", src: djangoIcon },
    { name: "Laravel", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" },
    { name: "TypeScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "React", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Vue.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
    { name: "Bootstrap", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
    { name: "Tailwindcss", src: tailwindcssIcon },
    { name: "HTML5", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS3", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    // { name: "PostgreSQL", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    // { name: "MongoDB", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "MySQL", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" },
    { name: "Firebase", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
    { name: "Supabase", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg" },
    // { name: "Docker", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    // { name: "Linux", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
    { name: "WordPress", src: wordpressIcon },
    { name: "Figma", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
    { name: "Illustrator", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg" },
];


export { projectsData, servicesData, socialsData, skillsData, experiencesData, educationData }