import contactImg from "../../assets/contact.svg"
import {socialsData} from "../../data/data"

const ContactInfo = () => {
    return ( 
        <div>
            <div className="">
                <div className="flex justify-center">
                    <img className='md:w-80 md:h-80' src={contactImg} alt="Contact illustration" />
                </div>
            </div>
            <div className="flex flex-col items-center">
                <p>
                    Phone: <a href="tel:+254710815080">+2547 1081 5080</a> <br />
                    Email: <a href="mailto:andrewomosh44@gmail.com">andrewomosh44@gmail.com</a> <br />
                </p>
                <p className="mt-2 font-medium text-slate-400">FIND WITH ME</p>
                <div>
                    {socialsData.map((social, index) => (
                        <button key={index} className="icon-btn">
                            <a  
                                className="text-xl"
                                href={social.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`Visit ${social.name}`}
                            >
                                {social.icon}
                            </a>
                        </button>
                    ))}
                </div>
            </div>
        </div>
     );
}
 
export default ContactInfo;