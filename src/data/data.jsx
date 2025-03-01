import img1 from "../assets/projects/img1.jpg"
import img2 from "../assets/projects/img2.jpg"
import img3 from "../assets/projects/img3.png"
import img4 from "../assets/projects/img4.png"
import img5 from "../assets/projects/img5.jpg"
import img6 from "../assets/projects/img6.png"
import img7 from "../assets/projects/img7.png"
import img8 from "../assets/projects/img8.png"
import djangoIcon from '../assets/skills/django.svg'
import tailwindcssIcon from '../assets/skills/tailwindcss.svg'
import wordpressIcon from '../assets/skills/wordpress.svg'
import webDevIcon from '../assets/services/web.svg'
import uiUXIcon from '../assets/services/uiux.svg'
import appDevIcon from '../assets/services/app.svg'
import apiIcon from '../assets/services/api.svg'
import paymentIcon from '../assets/services/payment.svg'
import mentorshipIcon from '../assets/services/mentorship.svg'
 
import { Briefcase, GraduationCap, Code, PenTool, Users, MonitorSmartphone, Wrench } from "lucide-react";
import { FaGithub, FaLinkedinIn, FaPhone, FaTwitter } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";

const  socialsData = [
  {
    name: "Github",
    link: "254710815080",
    icon: <FaPhone />
  },
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
    company: "Vabrise Technologies",
    role: "Technical Lead",
    duration: "Jan 2023 – Present",
    icon: <Users size={16} />, // Leadership & Management Icon
    responsibilities: [
      "Establishing the company’s technical vision and leading all aspects of the company’s technology development and services delivered to company's customers.",
      "Evaluating and implementing new systems and infrastructure.",
      "Responsible for championing engineering culture and empowering upcoming tech talent in within the company.",
      "Provide leadership within the engineering department through close collaboration, knowledge sharing, and mentorship."
    ]
  },
  {
    company: "Custometrix",
    role: "Software Developer Intern",
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
  },
  {
    company: "Women In Mining Kenya",
    role: "Web Developer",
    duration: "Apr 2023 – May 2023",
    icon: <PenTool size={16} />, // UI/UX & Web Design Icon
    responsibilities: [
      "Created a fully responsive visual design of the website.",
      "Optimized SEO for the website for traffic purposes.",
      "Performed regular maintenance for optimum speed & interactivity."
    ]
  },
  {
    company: "EngStan Solutions Ltd",
    role: "Web Developer",
    duration: "Feb 2023 – Apr 2023",
    icon: <Wrench size={16} />, // Maintenance & Optimization Icon
    responsibilities: [
      "Designed a Figma UI for the website.",
      "Ensured cross-browser compatibility and optimized site performance.",
      "Implemented SEO to increase traffic."
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
        "Collaborated on multiple team projects, simulating real-world software development scenarios.- Completed an intensive, project-based training program focusing on full-stack software development. - Gained hands-on experience with modern web technologies and software engineering principles. - Collaborated on multiple team projects, simulating real-world software development scenarios."
    ]
},
  { 
    school: "University of Eastern Africa, Baraton", 
    degree: "Bachelor of Education", 
    year: "2017 - 2021", 
    icon: <GraduationCap size={16} />,
    content: [
        "Completed an intensive, project-based training program focusing on full-stack software development.",
        "Gained hands-on experience with modern web technologies and software engineering principles.",
        "Collaborated on multiple team projects, simulating real-world software development scenarios.- Completed an intensive, project-based training program focusing on full-stack software development. - Gained hands-on experience with modern web technologies and software engineering principles. - Collaborated on multiple team projects, simulating real-world software development scenarios."
    ]
}
];



const projectsData = [
    {
        name: "Space Ya Tech",
        image: img1,
        details: "The fastest growing Africa, open-source community looking to change the way young Africans get started in technology",
        techStack: ['React', 'Javascript', 'Node.js', 'MongoDB'],
        codebaseLink: "https://github.com/SpaceyaTech/SYT-Web-Redesign",
        liveLink: "https://www.spaceyatech.com",
    },
    {
        name: "Vabrise Technologies",
        image: img2,
        details: "A tech company that manages your bussiness without having to worry about the the software solutions you are using. Less hustle more growth.",
        techStack: ['React', 'Javascript', 'Node.js', 'MongoDB'],
        codebaseLink: "https://github.com/Vabrise-Technologies-Ltd/Vabrise",
        liveLink: "https://vabrisetech.com",
    },
    {
        name: "Lumbz Sportswear",
        image: img3,
        details: "One-stop shop for quality sportswear. Providing top-notch sportswear since 2023.",
        techStack: ['Vue', 'Javascript', 'Django', 'PostgreSQL'],
        codebaseLink: "",
        liveLink: "https://lumbzsportswear.com",
        
    },
    {
        name: "Savanna Academy",
        image: img4,
        details: "We offer training programs in Software Development, Cyber Security, Graphics Design and Digital Marketing under the instruction of industry experts.",
        techStack: ['React', 'Javascript', 'Django', 'PostgreSQL'],
        codebaseLink: "",
        liveLink: "https://savannaacademy.com",
    },
    {
        name: "Engstan Solutions",
        image: img5,
        details: "A branding business that helps customers order branded products from the comfort of their home",
        techStack: ['React', 'Javascript', 'Supabase', 'HTML', 'CSS'],
        codebaseLink: "",
        liveLink: "https://engstansolutions.co.ke",
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
        name: "Kiddie Kloset",
        image: img7,
        details: "A one-stop baby shop committed to ensure every mother and baby receives the best products that Enhance Joy, Care, Comfort and Safety for Mothers and Their Precious Babies.",
        techStack: ['Wordpress'],
        codebaseLink: "",
        liveLink: "https://kiddiekloset.com",        
    },
    {
        name: "Trinity Baptist Church - Funyula",
        image: img8,
        details: "Trinity Baptist Church – Funyula, is a reformed christian church  with the mission to honor God through sincere worship, impactful preaching, and effective Biblical teaching.",
        techStack: ['Wordpress', 'PHP'],
        codebaseLink: "",
        liveLink: "https://tbcfunyula.com",        
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