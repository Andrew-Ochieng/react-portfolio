import { FaGithub, FaGoogle, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import contactImg from "../../assets/contact.svg"

const ContactInfo = () => {
    
    return ( 
        <div>
            <div className="">
                <div>
                    <img src={contactImg} alt="" />
                </div>
            </div>
            <p className="">
                Phone: +254710815080 <br />
                Email: andrewomosh44@gmail.com <br />
            </p>
            <p className="mt-2 font-medium text-slate-400">FIND WITH ME</p>
            <div>
                <button className="icon-btn"><FaGithub /></button>
                <button className="icon-btn"><FaLinkedinIn /> </button>
                <button className="icon-btn"><FaGoogle /></button>
                <button className="icon-btn"><FaTwitter /></button>
            </div>
        </div>
     );
}
 
export default ContactInfo;