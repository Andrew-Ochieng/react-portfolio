 import ContactForm from "./contactForm";
import ContactInfo from "./contactInfo";

const Contact = () => {
    return ( 
        <section id="contact" className="md:mt-32 my-20">
            <div className="flex flex-col  text-gray-800 ">
                <h1 className="section-title">Contact Me</h1>
            </div>
            <div className="grid md:grid-cols-2 md:gap-8 gap-4">
                <ContactInfo />
                <ContactForm />

            </div>
        </section>
     );
}
 
export default Contact;