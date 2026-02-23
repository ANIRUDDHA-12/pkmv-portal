import { useState, useEffect } from 'react';
import { Globe } from 'lucide-react';

const navLinks = ['Home', 'About Us', 'Therapies', 'Student Life', 'Contact'];

export default function Header() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'shadow-md' : ''
                } backdrop-blur-md bg-white/85 border-b border-gray-100`}
        >
            <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-full bg-teal-700 flex items-center justify-center">
                        <span className="text-white text-sm font-bold">PK</span>
                    </div>
                    <div className="leading-tight">
                        <p className="font-bold text-teal-700 text-sm font-sans">Pragnya Karuna</p>
                        <p className="text-gray-500 text-xs font-sans">Vidyalaya</p>
                    </div>
                </div>

                {/* Nav Links */}
                <nav className="hidden md:flex items-center gap-7">
                    {navLinks.map((link) => (
                        <a
                            key={link}
                            href="#"
                            className="text-gray-600 hover:text-teal-700 text-sm font-medium font-sans transition-colors duration-200"
                        >
                            {link}
                        </a>
                    ))}
                </nav>

                {/* Language Toggle */}
                <button className="flex items-center gap-1.5 px-4 py-1.5 rounded-full border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white text-sm font-semibold font-sans transition-all duration-200">
                    <Globe size={14} />
                    <span>EN | मराठी</span>
                </button>
            </div>
        </header>
    );
}
