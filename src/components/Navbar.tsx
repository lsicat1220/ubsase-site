import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
    const [navbarIsOpen, setNavbarVisibility] = useState<boolean>(false);
    const location = useLocation();

    const closeNavbar = () => setNavbarVisibility(false);

    const navLinks = [
        { label: "Events", to: "/events" },
        { label: "About", to: "/about" },
        { label: "Leadership", to: "/leadership" },
        { label: "Example", to: "/example" },
    ];

    return (
        <>
            <nav className="z-50 fixed w-full flex flex-row justify-between items-center bg-white shadow-sm border-b-4 border-black px-4">
                <Link onClick={closeNavbar} to="/">
                    <img
                        src="/src/assets/sase-logo/logo-main.svg"
                        className="h-14 m-2"
                        alt="UB Sase Logo"
                    />
                </Link>

                <div className="hidden md:flex flex-row items-center space-x-1 text-lg font-black italic uppercase">
                    {navLinks.map(({ label, to }) => (
                        <Link
                            key={to}
                            to={to}
                            className={`px-3 py-1 transition-colors ${
                                location.pathname === to
                                    ? "bg-black text-white"
                                    : "text-black hover:bg-black hover:text-white"
                            }`}
                        >
                            {label}
                        </Link>
                    ))}
                </div>

                <div
                    className="md:hidden hover:cursor-pointer p-2"
                    onClick={() => setNavbarVisibility(!navbarIsOpen)}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 -960 960 960" fill="#2E2E2E">
                        <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
                    </svg>
                </div>
            </nav>

            <div
                className={`fixed left-0 right-0 z-40 flex flex-col md:hidden bg-white shadow-md transition-all duration-300 overflow-hidden ${navbarIsOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}
                style={{ top: "60px" }}
            >
                {navLinks.map(({ label, to }) => (
                    <Link
                        key={to}
                        className="px-6 py-4 font-black italic uppercase border-b border-black/10 hover:bg-black hover:text-white transition-colors"
                        onClick={closeNavbar}
                        to={to}
                    >
                        {label}
                    </Link>
                ))}
            </div>

            {navbarIsOpen && (
                <div className="fixed inset-0 z-39 md:hidden" onClick={closeNavbar} />
            )}
        </>
    );
}
