export default function Footer() {
    return (
        <footer className="bg-white border-t-[6px] border-black w-full relative z-50">
            <div className="flex flex-col md:flex-row h-auto py-10 items-center justify-center gap-10 md:gap-20">
                <div className="text-black font-bold italic uppercase tracking-tighter">
                    <h2 className="text-xl">Contact us:</h2>    
                    <p className="mt-2">
                        Email: <a href="mailto:ubsase2@gmail.com" className="text-cyan-700 hover:text-black transition-colors underline decoration-2">ubsase2@gmail.com</a>
                    </p>
                </div>

                <div className="flex space-x-6">
                    <a href="https://discord.gg/Pg2zGyK3Gy" className="transform hover:scale-110 transition-transform">
                        <div className="bg-black w-14 h-14 rounded-none flex items-center justify-center border-2 border-black hover:bg-cyan-700">
                            <img src="/src/assets/discord-white-icon.svg" className="h-6" alt="Discord"/>
                        </div>
                    </a>
                    <a href="https://instagram.com/ubsase" className="transform hover:scale-110 transition-transform">
                        <div className="bg-black w-14 h-14 rounded-none flex items-center justify-center border-2 border-black hover:bg-cyan-700">
                            <img src="/src/assets/insta-logo.svg" className="h-8" alt="Instagram"/>
                        </div>
                    </a>
                </div>

                <img src="/src/assets/logo.png" className="h-20 grayscale hover:grayscale-0 transition-all" alt="SASE Logo"/>
            </div>

            <div className="border-t-[2px] border-black p-6 bg-zinc-50">
                <p className="text-black font-black italic uppercase text-xs text-center tracking-widest">
                    © 2026 UB SASE. All rights reserved.
                </p>
            </div>
        </footer>
    );
}