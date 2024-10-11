import React, { useState, useEffect } from 'react';
import { FaChevronUp } from "react-icons/fa6";

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
            <div className="flex items-center justify-center">
                <p>
                    © Andrew Ochieng | All rights reserved |
                    <span className="ml-1 text-cyan-400">{year}</span>
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