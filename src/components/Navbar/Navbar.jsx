import { useState } from "react";
import { motion } from "framer-motion";

const navbarAnimation = {
    hidden: {
        y: -120,
        opacity: 0
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.8,
            ease: "easeOut"
        }
    }
};

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const links = ["Products", "Stories", "Pricing", "Docs"];

    return (
        <motion.nav
            variants={navbarAnimation}
            initial="hidden"
            animate="visible"
            className="fixed top-2 left-0 w-full z-50 flex justify-center pointer-events-none"
        >
            <div className="flex items-center border border-zinc-300/10 px-8 py-4 rounded-full text-white text-sm backdrop-blur-lg bg-white/5 pointer-events-auto">

                {/* LINKS DESKTOP */}
                <div className="hidden md:flex items-center gap-8">

                    {links.map((item) => (
                        <a key={item} href="#" className="relative overflow-hidden h-6 group">

                            <span className="block group-hover:-translate-y-full transition-transform duration-300">
                                {item}
                            </span>

                            <span className="block absolute top-full left-0 group-hover:-translate-y-full transition-transform duration-300">
                                {item}
                            </span>

                        </a>
                    ))}

                </div>

                {/* MOBILE BUTTON */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="md:hidden text-gray-300"
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </button>

                {/* MOBILE MENU */}
                <div
                    className={`absolute top-15 left-0 w-full backdrop-blur-xl rounded-2xl bg-white/5 flex-col items-center gap-6 py-6 text-base ${menuOpen ? "flex" : "hidden"
                        }`}
                >
                    {links.map((item) => (
                        <a key={item} className="hover:text-red-500" href="#">
                            {item}
                        </a>
                    ))}
                </div>

            </div>
        </motion.nav>
    );
};

export default Navbar;