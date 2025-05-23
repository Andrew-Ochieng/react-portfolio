import contactImg from "../../assets/contact2.svg";

const ContactInfo = () => {

    return (
        <div className="flex items-center" data-aos="zoom-in">
            <img className="w-full h-full" src={contactImg} alt="Contact illustration" />
        </div>

    );
};

export default ContactInfo;
