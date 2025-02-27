import { useState, useEffect, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const menuRef = useRef(null);

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
    }, [menuRef]);

    return (
        <>
            <nav ref={menuRef} className='md:px-32 px-4 py-4 top-0 left-0 sticky z-[100] bg-gray-900 text-gray-200 opacity-80 shadow-xl'>
                <div className='md:flex items-center justify-between'>
                    <div className="flex justify-between items-center">
                        <Link to='/' className='md:text-2xl text-xl font-semibold text-white'>
                            <span className="text-cyan-500">Andrew</span> Ochieng
                        </Link>
                        <button onClick={() => setOpen((prev) => !prev)} className="md:hidden text-xl text-white border-2 border-white rounded-full p-2">
                            {open ? <FaTimes /> : <FaBars />}
                        </button>
                    </div>
                    <div className='md:flex hidden text-white'>
                        <ul className="md:flex items-center md:text-lg font-medium">
                            {menus.map((item, index) => (
                                <div key={index}>
                                    <li className='md:mx-3 md:my-0 my-4' onClick={() => setOpen(false)}>
                                        <a href={item.route}>
                                            {item.name}
                                        </a>
                                    </li>
                                </div>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className={`${open ? "left-0" : "left-[-100%]"} sm:hidden absolute top-0 right-0 bottom-0 space-y-8 py-6 px-8 w-[85%] h-screen duration-300 ease-in-out bg-slate-900 opacity-100`}>
                    <ul className="flex flex-col justify-center mt-8 text-base font-medium">
                        {menus.map((item, index) => (
                            <div key={index}>
                                <li onClick={() => setOpen(false)} className='md:mx-3 md:my-0 my-4'>
                                    <a href={item.route}>
                                        {item.name}
                                    </a>
                                </li>
                            </div>
                        ))}
                    </ul>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
