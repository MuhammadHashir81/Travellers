
import React from "react";
import { NavLink } from "react-router";
import { useContext } from "react";
import { AuthContext } from "./ContextApi/AuthProvider";

const Navbar = () => {
    const { handleLogOut } = useContext(AuthContext);
    // get token from local storage
    const token = localStorage.getItem('userToken')


    const navLinks = [
        { name: 'Home', path: '/home' },
        { name: 'Destinations', path: '/home/destinations' },
        { name: 'Contact', path: '/home/contact' },
        { name: 'About', path: '/home/about' },
    ];

    const logOutUser = () => {
        handleLogOut();
        window.location.reload();
    }

    const ref = React.useRef(null)

    const [isScrolled, setIsScrolled] = React.useState(false);
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(ref.current.scrollTop > 10);
        };
        ref.current.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div ref={ref} className=" ">
            <nav className={` top-0 left-0 bg-green-950 w-full flex items-center justify-between px-4 md:px-16 lg:px-24 xl:px-32 transition-all duration-500 z-50 ${isScrolled ? "bg-white/80 shadow-md text-gray-700 backdrop-blur-lg py-3 md:py-4" : "py-4 md:py-6"}`}>

                {/* Logo */}
                <NavLink to="/home" className="flex items-center gap-2">
                    <h1 className="text-white text-5xl font-primary">Travellers</h1>
                </NavLink>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-4 lg:gap-8">
                    {navLinks.map((link, i) => (
                        <a key={i} href={link.path} className={`group flex flex-col gap-0.5 font-primary ${isScrolled ? "text-gray-700" : "text-white"}`}>
                            {link.name}
                            <div className={`${isScrolled ? "bg-gray-700" : "bg-white"} h-0.5 w-0 group-hover:w-full transition-all duration-300`} />
                        </a>
                    ))}
                    <button className={`border px-4 py-1 text-sm font-light rounded-full cursor-pointer ${isScrolled ? 'text-black' : 'text-white'} transition-all font-primary`}>
                        Your Booking
                    </button>

                </div>

                {/* Desktop Right */}
                <div className="hidden md:flex items-center gap-4">

                    {
                        token ?(
                            <button onClick={logOutUser} className={`cursor-pointer px-8 py-2.5 rounded-full ml-4 transition-all duration-500 ${isScrolled ? "text-white bg-black" : "bg-red-500 text-white font-primary"}`}>
                                Logout
                            </button>
                        )
                        :
                        (
                    <NavLink to='/signup' className={`cursor-pointer px-8 py-2.5 rounded-full ml-4 transition-all duration-500 ${isScrolled ? "text-white bg-black" : "bg-green-500 text-white font-primary"}`}>
                      Login</NavLink>

                        )
                    }
                </div>

                {/* Mobile Menu Button */}
                <div className="flex items-center gap-3 md:hidden">
                    <svg onClick={() => setIsMenuOpen(!isMenuOpen)} className={` h-6 w-6 cursor-pointer ${isScrolled ? "invert" : ""}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <line x1="4" y1="6" x2="20" y2="6" />
                        <line x1="4" y1="12" x2="20" y2="12" />
                        <line x1="4" y1="18" x2="20" y2="18" />
                    </svg>
                </div>

                {/* Mobile Menu */}
                <div className={`fixed top-0 left-0 w-full h-screen bg-white text-base flex flex-col md:hidden items-center justify-center gap-6 font-medium text-gray-800 transition-all duration-500 ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}>
                    <button className="absolute top-4 right-4" onClick={() => setIsMenuOpen(false)}>
                        <svg className="h-6 w-6 cursor-pointer" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                    </button>

                    {navLinks.map((link, i) => (
                        <a key={i} href={link.path} onClick={() => setIsMenuOpen(false)}>
                            {link.name}
                        </a>
                    ))}

                    <button className="border px-4 py-1 text-sm font-light rounded-full cursor-pointer transition-all">
                        Your Booking
                    </button>

                    <button className="cursor-pointer bg-black text-white px-8 py-2.5 rounded-full transition-all duration-500 ">
                        Login
                    </button>
                </div>
            </nav>
        </div>
    );
}


export default Navbar