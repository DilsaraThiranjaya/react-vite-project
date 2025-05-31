import { Facebook, Twitter, Instagram, Linkedin, Send } from 'lucide-react';
import { Link } from "react-router-dom";

export function Footer() {
    return (
        <footer className="mt-auto border-t border-white/10 bg-slate-900/95 !py-12 text-white backdrop-blur-md">
            <div className="mx-auto max-w-7xl !px-6">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 gap-12 !pb-12 md:grid-cols-2 lg:grid-cols-4">
                    {/* About Us Section */}
                    <div className="!space-y-4">
                        <h4 className="relative text-lg font-semibold tracking-wide after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:w-10 after:bg-gradient-to-r after:from-cyan-500 after:to-emerald-500">
                            About Us
                        </h4>
                        <p className="text-sm leading-relaxed text-white/70">
                            We create innovative digital solutions that help businesses thrive in the modern world. Our commitment to excellence drives everything we do.
                        </p>
                    </div>

                    {/* Quick Links Section */}
                    <div className="!space-y-4">
                        <h4 className="relative text-lg font-semibold tracking-wide after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:w-10 after:bg-gradient-to-r after:from-cyan-500 after:to-emerald-500">
                            Quick Links
                        </h4>
                        <ul className="!space-y-3">
                            {[
                                { path: "/", label: "Home" },
                                { path: "/about", label: "About" },
                                { path: "/contact", label: "Contact" }
                            ].map((link) => (
                                <li key={link.path}>
                                    <Link
                                        to={link.path}
                                        className="group relative flex items-center text-sm text-white/70 transition-all hover:text-white"
                                    >
                                        <span className="absolute -left-3 h-0.5 w-0 bg-gradient-to-r from-cyan-500 to-emerald-500 opacity-0 transition-all group-hover:w-3 group-hover:opacity-100"></span>
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social Media Section */}
                    <div className="!space-y-4">
                        <h4 className="relative text-lg font-semibold tracking-wide after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:w-10 after:bg-gradient-to-r after:from-cyan-500 after:to-emerald-500">
                            Follow Us
                        </h4>
                        <div className="flex gap-4">
                            {[
                                { icon: Facebook, label: "Facebook" },
                                { icon: Twitter, label: "Twitter" },
                                { icon: Instagram, label: "Instagram" },
                                { icon: Linkedin, label: "LinkedIn" }
                            ].map((social) => (
                                <a
                                    key={social.label}
                                    href="#"
                                    aria-label={social.label}
                                    className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white/70 transition-all hover:-translate-y-1 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-emerald-500 hover:text-white hover:shadow-lg hover:shadow-cyan-500/20"
                                >
                                    <social.icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Newsletter Section */}
                    <div className="!space-y-4">
                        <h4 className="relative text-lg font-semibold tracking-wide after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:w-10 after:bg-gradient-to-r after:from-cyan-500 after:to-emerald-500">
                            Newsletter
                        </h4>
                        <form
                            onSubmit={(e) => e.preventDefault()}
                            className="!space-y-3"
                        >
                            <input
                                type="email"
                                placeholder="Enter your email"
                                aria-label="Email for newsletter"
                                className="w-full rounded-lg border border-white/10 bg-white/5 !px-4 !py-3 text-sm text-white placeholder-white/40 transition-all focus:border-cyan-500/50 focus:bg-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-500/20"
                            />
                            <button
                                type="submit"
                                className="group flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-cyan-500 to-emerald-500 !px-6 !py-3 text-sm font-semibold text-white shadow-md shadow-cyan-500/20 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-emerald-500/30"
                            >
                                <span>Subscribe</span>
                                <Send size={16} className="transition-transform group-hover:translate-x-1" />
                            </button>
                        </form>
                    </div>
                </div>

                {/* Copyright Section */}
                <div className="border-t border-white/10 !pt-8 text-center text-sm text-white/50">
                    <p>&copy; {new Date().getFullYear()} Pulse. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}