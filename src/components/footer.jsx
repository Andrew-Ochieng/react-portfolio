
const Footer = () => {
    const year = new Date().getFullYear()
    // console.log(year)
    return ( 
        <footer className="bg-slate-700 text-white md:py-3 py-3 px-3 md:text-base text-sm">
            <div className="flex items-center justify-center">
                <p>
                    © Andrew Ochieng | All rights reserved |
                    <span className="ml-1 text-cyan-400">{year}</span>
                </p>
            </div>
        </footer>
     );
}
 
export default Footer;