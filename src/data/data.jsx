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

const projectsData = [
    {
        name: "Space Ya Tech",
        link: "https://www.spaceyatech.com",
        image: img1,
        details: "The fastest growing Africa, open-source community looking to change the way young Africans get started in technology"
    },
    {
        name: "Vabrise Technologies",
        link: "https://vabrisetech.com",
        image: img2,
        details: "A tech company that manages your bussiness without having to worry about the the software solutions you are using. Less hustle more growth."
    },
    {
        name: "Lumbz Sportswear",
        link: "https://lumbzsportswear.com",
        image: img3,
        details: "One-stop shop for quality sportswear. Providing top-notch sportswear since 2023."
    },
    {
        name: "Savanna Academy",
        link: "https://savannaacademy.com",
        image: img4,
        details: "We offer training programs in Software Development, Cyber Security, Graphics Design and Digital Marketing under the instruction of industry experts."
    },
    {
        name: "Engstan Solutions",
        link: "https://engstansolutions.co.ke",
        image: img5,
        details: "A branding business that helps customers order branded products from the comfort of their home"
    },
    {
        name: "Ng’ara Maisha Sacco",
        link: "https://nmsacco.co.ke",
        image: img6,
        details: "We are a cooperative society committed to improving the financial well-being of its members through innovative and member-centric financial solutions"
    },
    {
        name: "Kiddie Kloset",
        link: "https://kiddiekloset.com",
        image: img7,
        details: "A one-stop baby shop committed to ensure every mother and baby receives the best products that Enhance Joy, Care, Comfort and Safety for Mothers and Their Precious Babies."
    },
    {
        name: "Ng’ara Maisha Sacco",
        link: "https://tbcfunyula.com",
        image: img8,
        details: "Trinity Baptist Church – Funyula, is a reformed christian church  with the mission to honor God through sincere worship, impactful preaching, and effective Biblical teaching."
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


export { projectsData, servicesData, socialsData, skillsData }