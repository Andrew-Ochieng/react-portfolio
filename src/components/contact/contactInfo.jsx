import contactImg from "../../assets/contact.svg"
import {socialsData} from "../../data/data"

const ContactInfo = () => {
    
    
    return ( 
        <div>
            <div className="">
                <div>
                    <img className='md:w-96 md:h-96' src={contactImg} alt="" />
                </div>
            </div>
            <p className="">
                Phone: +2547 1081 5080 <br />
                Email: andrewomosh44@gmail.com <br />
            </p>
            <p className="mt-2 font-medium text-slate-400">FIND WITH ME</p>
            <div>
                {socialsData.map((social, index) => (
                    <button key={index} className="icon-btn">
                        <a  
                            href={social.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            >{social.icon}
                    </a>
                    </button>
                ))}
            </div>
        </div>
     );
}
 
export default ContactInfo;