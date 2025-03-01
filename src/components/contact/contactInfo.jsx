import { FaWhatsapp } from "react-icons/fa";
import contactImg from "../../assets/contact.svg";
import { socialsData } from "../../data/data";
import { Phone, Mail} from "lucide-react";

const ContactInfo = () => {
    const handleWhatsappClick = () => {
        const phoneNumber = "254710815080"; // Replace with actual phone number
        const message = "Hello! I need more information."; // Replace with your message
        const encodedMessage = encodeURIComponent(message);
        
        window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
      };


    return (
        <div>
            <div className="">
                <div className="flex md:justify-start justify-center">
                    <img className="md:w-80 md:h-80" src={contactImg} alt="Contact illustration" />
                </div>
            </div>
            <div className="flex flex-col md:items-start items-center">
                <p className="text-white flex items-center gap-2">
                    <Phone className="text-cyan-500" size={20} />
                    <a href="tel:+254710815080" className="hover:underline">+254710815080</a>
                </p>
                <p className="text-white flex items-center gap-2 mt-2">
                    <Mail className="text-cyan-500" size={20} />
                    <a href="mailto:andrewomosh44@gmail.com" className="hover:underline">andrewomosh44@gmail.com</a>
                </p>
                <p className="text-white flex items-center gap-2 mt-2 cursor-pointer" onClick={handleWhatsappClick}>
                    <FaWhatsapp className="text-cyan-500" size={20} />
                    +254710815080
                </p>

                <p className="md:mt-5 mt-2 font-semibold text-cyan-400 uppercase">Reach Out</p>
                
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
        </div>
    );
};

export default ContactInfo;
