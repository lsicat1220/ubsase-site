import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
    const location = useLocation();

    return (
        <nav className="h-24 w-full bg-white fixed top-0 left-0 flex flex-row justify-between items-center px-8 md:px-12 z-[1000] border-b-[6px] border-black">
            <Link to="/" className="hover:scale-105 transition-transform">
                <img src="/src/assets/logo-full.png" className="h-16" alt="UB Sase Logo" />
            </Link>

            <div className="flex flex-row items-center space-x-2 md:space-x-6">
                {[
                    { name: "Events", path: "/events" },
                    { name: "About", path: "/about" },
                    { name: "Leadership", path: "/leadership" },
                    { name: "Example", path: "/example" }
                ].map((item) => {
                    const isActive = location.pathname === item.path;
                    return (
                        <Link
                            key={item.name}
                            to={item.path}
                            className={`
                                text-lg md:text-2xl font-black italic uppercase tracking-tighter 
                                transform -skew-x-12 transition-all duration-200 px-4 py-1 border-2
                                ${isActive 
                                    ? "bg-black text-white border-black" 
                                    : "text-black border-transparent hover:border-black hover:bg-zinc-100"}
                            `}
                        >
                            {item.name}
                        </Link>
                    );
                })}
            </div>
        </nav>
    );
}