 import ContactForm from "./contactForm";
import ContactInfo from "./contactInfo";

const Contact = () => {
    return ( 
        <section id="contact">
            <div className="flex flex-col items-center justify-center text-gray-800 md:mt-32 mt-20">
                <h1 className="section-title">Contact Me</h1>
            </div>
            <div className="grid md:grid-cols-2 md:gap-16 sm:gap-8 gap-6 md:mb-32 mb-16 rounded-lg">
                <div className="flex flex-col md:p-5 p-4 text-gray-500 bg-slate-900 rounded-xl shadow-xl shadow-slate-800">
                    <ContactInfo />
                </div>
                <ContactForm />                    
            </div>
        </section>
     );
}
 
export default Contact;