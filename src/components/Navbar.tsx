import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
    const [navbarIsOpen, setNavbarVisibility] = useState<boolean>(false);

    const handleShowNavbar = () => {
        setNavbarVisibility(!navbarIsOpen);
    };
    const closeNavbar = () => {
        setNavbarVisibility(false);
    };

    return (
        <>
            <nav className="z-50 fixed space-x-0 bg-gray-dark/95 backdrop-blur-xs w-full flex flex-row justify-between shadow-md items-center text-gray-light">
                <Link onClick={closeNavbar} to="/">
                    <img
                        src="/src/assets/sase-logo/logo-main.svg"
                        className="h-11 m-2"
                        alt="UB Sase Logo"
                    />
                </Link>

                <div className="text-2xl font-bold justify-right p-4 flex flex-row md:visible items-center space-x-4 h-fit">
                    <Link className="hidden md:block hover:text-sase-blue transition-colors" to="/events">
                        Events
                    </Link>
                    <Link className="hidden md:block hover:text-sase-blue transition-colors" to="/leadership">
                        Leadership
                    </Link>
                    <Link className="hidden md:block hover:text-sase-blue transition-colors" to="/merch">
                        Merch
                    </Link>
                    <Link className="block bg-sase-blue px-4 py-1 rounded-l border-2 hover:bg-sase-green transition-colors" to="/contact">
                        Join Us!
                    </Link>
                    
                    <div
                        className="menu-button md:hidden hover:cursor-pointer"
                        onClick={handleShowNavbar}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 hover:fill-sase-blue transition-colors"
                            viewBox="0 -960 960 960"
                            fill="#f5f5f5"
                        >
                            <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
                        </svg>
                    </div>
                </div>
            </nav>
            <div
                className={`text-lg text-white bg-gray-dark/95  fixed left-0 right-0 z-40 flex flex-col md:hidden backdrop-blur-sm shadow-md transition-all duration-300 ease-in-out overflow-hidden ${navbarIsOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}
                style={{ top: "60px" }}
            >
                <Link
                    className="px-6 py-4 font-semibold border-b border-black/10 hover:bg-gray-dark/85 hover:text-sase-blue transition-colors"
                    onClick={closeNavbar}
                    to="/events"
                >
                    Events
                </Link>
                <Link
                    className="px-6 py-4 font-semibold border-b border-black/10 hover:bg-gray-dark/85 hover:text-sase-blue transition-colors"
                    onClick={closeNavbar}
                    to="/leadership"
                >
                    Leadership
                </Link>
                <Link
                    className="px-6 py-4 font-semibold border-b border-black/10 hover:bg-gray-dark/85 hover:text-sase-blue transition-colors"
                    onClick={closeNavbar}
                    to="/merch"
                >
                    Merch
                </Link>
                <Link
                    className="px-6 py-4 font-semibold border-b border-black/10 hover:bg-gray-dark/85 hover:text-sase-blue transition-colors"
                    onClick={closeNavbar}
                    to="/contact"
                >
                    Join Us!
                </Link>
            </div>
            {navbarIsOpen && (
                <div
                    className="fixed inset-0 z-39 md:hidden"
                    onClick={closeNavbar}
                />
            )}
        </>
    );
}
