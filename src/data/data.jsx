import img1 from "../assets/img1.jpg"
import img2 from "../assets/img2.jpg"
import img3 from "../assets/img3.png"
import img4 from "../assets/img4.jpg"
import img5 from "../assets/img5.jpg"
import img6 from "../assets/img6.jpg"
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
        name: "Trinity Baptist Church",
        link: "https://trinitybaptistfunyula.co.ke",
        image: img3,
        details: "We exist to glorify God through the preaching and teaching of the Bible with the aim that sinners will be saved and that saints will grow to Christian maturity"
    },
    {
        name: "Afrikaan Eatery",
        link: "https://afrikaan-eatery.vercel.app",
        image: img4,
        details: "Platform where people can order African Dishes from restaurants"
    },
    {
        name: "Engstan Solutions",
        link: "https://engstansolutions.co.ke",
        image: img5,
        details: "A branding business that helps users order branded products from the comfort of their home"
    },
    {
        name: "Medical Zone",
        link: "https://github.com/Andrew-Ochieng/medical-zone-frontend",
        image: img6,
        details: "A platform where patients can keep track of their medical appointment & history"
    },
]


export { projectsData, servicesData, socialsData }