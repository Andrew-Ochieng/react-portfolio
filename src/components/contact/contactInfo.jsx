import { FaWhatsapp } from "react-icons/fa";
import contactImg from "../../assets/contact.png";

const ContactInfo = () => {
    const handleWhatsappClick = () => {
        const phoneNumber = "254710815080"; // Replace with actual phone number
        const message = "Hello! I need more information."; // Replace with your message
        const encodedMessage = encodeURIComponent(message);
        
        window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
      };


    return (
        <div className="flex md:justify-start justify-center">
            <img className="w-full h-full" src={contactImg} alt="Contact illustration" />
        </div>
    );
};

export default ContactInfo;
