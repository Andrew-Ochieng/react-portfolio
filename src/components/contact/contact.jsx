 import ContactForm from "./contactForm";
import ContactInfo from "./contactInfo";

const Contact = () => {
    return ( 
        <section id="contact" className="md:mt-32 my-20" data-aos="fade-up">
            <div className="flex flex-col text-gray-800">
                <h1 className="section-title" data-aos="fade-down">Contact Me</h1>
            </div>
            <div className="grid md:grid-cols-2 md:gap-8 gap-4">
                <div data-aos="fade-right"><ContactInfo /></div>
                <div data-aos="fade-left"><ContactForm /></div>
            </div>
        </section>

     );
}
 
export default Contact;