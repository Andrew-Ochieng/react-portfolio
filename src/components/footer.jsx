import React, { useState, useEffect } from 'react';
import { FaChevronUp } from "react-icons/fa6";
import { socialsData } from '../data/data';

const Footer = () => {
    const [isVisible, setIsVisible] = useState(false);
    const year = new Date().getFullYear();

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return ( 
        <footer className="bg-slate-700 text-white md:py-3 py-3 px-3 md:text-base text-sm">
            <div className="flex sm:flex-row flex-col items-center justify-between md:max-w-7xl w-full mx-auto">
                <div className="flex sm:gap-4 gap-3 sm:mb-0 mb-3">                    
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

                <p>
                    Copyright © {year}  <span className="ml-1 text-cyan-400">Andrew Ochieng </span> 
                    | All rights reserved
                    
                </p>
            </div>

            <button
                onClick={scrollToTop}
                className={`fixed bottom-10 right-8 md:p-4 p-3 bg-cyan-500 text-white rounded-full shadow-md focus:outline-none hover:bg-cyan-600 transition-all duration-300 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
                }`}
                aria-label="Scroll to top"
            >
                <FaChevronUp />
            </button>
        </footer>
    );
}
 
export default Footer;