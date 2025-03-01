import { useState, useEffect, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const menuRef = useRef(null);
    const navigate = useNavigate();
    const location = useLocation();

    const menus = [
        { name: "About", route: "#about" },
        { name: "Services", route: "#services" },
        { name: "Skills", route: "#skills" },
        { name: "Experience", route: "#experience" },
        { name: "Projects", route: "#projects" },
        { name: "Contact", route: "#contact" },
    ];

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleNavigation = (route) => {
        setOpen(false);

        if (location.pathname !== "/") {
            navigate("/");
            setTimeout(() => {
                scrollToSection(route);
            }, 100); // Delay to ensure home page loads first
        } else {
            scrollToSection(route);
        }
    };

    const scrollToSection = (route) => {
        const element = document.querySelector(route);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <nav className='md:px-32 px-4 py-4 top-0 left-0 sticky z-[100] bg-gray-900 text-gray-200 opacity-80 shadow-xl'>
            <div className='md:flex items-center justify-between'>
                {/* Logo and Toggle Button */}
                <div className="flex justify-between items-center">
                    <Link to='/' className='md:text-2xl text-xl font-semibold text-white'>
                        <span className="text-cyan-500">Andrew</span> Ochieng
                    </Link>
                    <button onClick={() => setOpen((prev) => !prev)} className="md:hidden text-xl text-white border-2 border-white rounded-full p-2">
                        {open ? <FaTimes /> : <FaBars />}
                    </button>
                </div>

                {/* Desktop Menu */}
                <div className='md:flex hidden text-white'>
                    <ul className="md:flex items-center md:text-lg font-medium">
                        {menus.map((item, index) => (
                            <li key={index} className='md:mx-3 md:my-0 my-4'>
                                <button className="text-white" onClick={() => handleNavigation(item.route)}>
                                    {item.name}
                                </button>
                            </li>
                        ))}
                        <Link 
                            to='/articles' 
                            onClick={() => setOpen(false)}
                            className='border border-cyan-500 text-white px-4 py-1 rounded-md hover:bg-cyan-500 duration-300 ease-in-out'>
                            Blog
                        </Link>
                    </ul>
                </div>
            </div>

            {/* Mobile Menu */}
            <div ref={menuRef} className={`${open ? "right-0" : "right-[-100%]"} fixed sm:hidden top-0 bottom-0 space-y-8 py-6 px-8 w-[85%] h-screen duration-300 ease-in-out bg-slate-900 opacity-100`}>
                    <button onClick={() => setOpen((prev) => !prev)} className="md:hidden text-xl text-white border-2 border-white rounded-full p-2 absolute top-4 right-4">
                        {open ? <FaTimes /> : <FaBars />}
                    </button>
                <ul className="flex flex-col justify-center mt-8 text-base font-medium">
                    {menus.map((item, index) => (
                        <li key={index} onClick={() => handleNavigation(item.route)} className='my-4'>
                            <button className="text-white">{item.name}</button>
                        </li>
                    ))}
                    <Link 
                        to='/articles' 
                        onClick={() => setOpen(false)}
                        className='border border-cyan-500 text-white px-4 py-1 rounded-md hover:bg-cyan-500 duration-300 ease-in-out w-16'>
                        Blog
                    </Link>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
