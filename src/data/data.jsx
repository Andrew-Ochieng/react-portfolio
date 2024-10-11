import img1 from "../assets/img1.jpg"
import img2 from "../assets/img2.jpg"
import img3 from "../assets/img3.png"
import img4 from "../assets/img4.png"
import img5 from "../assets/img5.jpg"
import img6 from "../assets/img6.png"
import { FaGithub, FaGoogle, FaLinkedinIn, FaTwitter } from "react-icons/fa";

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
        name: "Google",
        link: "andrewomosh44@gmail.com",
        icon: <FaGoogle />
    },
    {
        name: "Twitter",
        link: "https://x.com/Andrew__dev",
        icon: <FaTwitter />
    }
]

const servicesData = [
    {
        name: "Web Development",
        details: "I do web development for both frontend and backend. I can build a website for you or your business."
    },
    {
        name: "API Design/ Intergration",
        details: "Developing highly secure, fast and scalable Restful API's for your application."
    },
    {
        name: "Payment Integration",
        details: "I do payment Integration to automate the process of payment. I can integrate with M-Pesa, Paypal and Stripe payment gateways."
    }
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
        link: "http://vabrisetech.com",
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
    
]


export { projectsData, servicesData, socialsData }