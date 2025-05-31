import { useState } from "react";
import { Menu, X, Zap } from "lucide-react";
import { Link } from "react-router-dom";

export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="fixed top-0 z-[1000] w-full border-b border-gray-500/30 bg-sky-950 !py-4 !px-8 shadow-lg backdrop-blur-md backdrop-filter">
            <div className="mx-auto flex max-w-[1200px] items-center justify-between">
                {/* Logo */}
                <div className="group flex items-center gap-2 text-xl font-bold transition-all duration-300">
                    <Zap className="text-emerald-500 transition-transform duration-300 group-hover:-rotate-12 group-hover:scale-110"
                         strokeWidth={2.5} />
                    <span className="bg-gradient-to-r from-cyan-500 to-emerald-500 bg-clip-text text-transparent">
                        TECNO Computers
                    </span>
                </div>

                {/* Navigation Links */}
                <div className={`fixed top-[70px] right-[-100%] flex w-full flex-col items-center gap-6 bg-sky-950/95 py-8 shadow-xl backdrop-blur-md transition-[right] duration-300 md:static md:w-auto md:flex-row md:gap-10 md:bg-transparent md:py-0 md:shadow-none ${isMenuOpen ? "right-0" : ""}`}>
                    <Link to="/" className="group relative px-2 py-2 text-white/85 transition-all duration-300 hover:text-white">
                        Home
                        <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-cyan-500 to-emerald-500 transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                    <Link to="/about" className="group relative px-2 py-2 text-white/85 transition-all duration-300 hover:text-white">
                        About
                        <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-cyan-500 to-emerald-500 transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                    <Link to="/contact" className="group relative px-2 py-2 text-white/85 transition-all duration-300 hover:text-white">
                        Contact
                        <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-cyan-500 to-emerald-500 transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                </div>

                {/* CTA Button */}
                <Link
                    to="/login"
                    className="hidden rounded-lg bg-gradient-to-r from-cyan-500 to-emerald-500 !px-6 !py-2 font-semibold text-white shadow-md shadow-emerald-500/20 transition-all duration-300 hover:-translate-y-[2px] hover:shadow-lg hover:shadow-emerald-500/30 active:translate-y-0 md:block">
                    Sign In
                </Link>

                {/* Mobile Menu Toggle */}
                <button
                    className="transition-transform duration-300 hover:scale-110 md:hidden"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? (
                        <X className="text-white" size={24} />
                    ) : (
                        <Menu className="text-white" size={24} />
                    )}
                </button>
            </div>
        </nav>
    );
}