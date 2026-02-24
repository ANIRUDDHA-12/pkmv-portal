import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const { language, toggleLanguage, t } = useLanguage();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const linkClass = (path) =>
        `text-sm font-medium font-sans transition-colors duration-200 ${location.pathname === path
            ? 'text-teal-700 font-semibold'
            : 'text-gray-600 hover:text-teal-700'
        }`;

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'shadow-md' : ''
                } backdrop-blur-md bg-white/85 border-b border-gray-100`}
        >
            <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
                {/* Logo — always goes home */}
                <Link to="/" className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-full bg-teal-700 flex items-center justify-center">
                        <span className="text-white text-sm font-bold">PK</span>
                    </div>
                    <div className="leading-tight">
                        <p className="font-bold text-teal-700 text-sm font-sans">Pragnya Karuna</p>
                        <p className="text-gray-500 text-xs font-sans">Vidyalaya</p>
                    </div>
                </Link>

                {/* Nav Links */}
                <nav className="hidden md:flex items-center gap-7">
                    <Link to="/" className={linkClass('/')}>
                        {t('nav', 'home')}
                    </Link>
                    <Link to="/about" className={linkClass('/about')}>
                        {t('nav', 'about')}
                    </Link>
                    <Link to="/therapies" className={linkClass('/therapies')}>
                        {t('nav', 'therapies')}
                    </Link>
                    <Link to="/academics" className={linkClass('/academics')}>
                        {t('nav', 'academics')}
                    </Link>
                    <Link to="/student-life" className={linkClass('/student-life')}>
                        {t('nav', 'studentLife')}
                    </Link>
                    <Link to="/contact" className={linkClass('/contact')}>
                        {t('nav', 'contact')}
                    </Link>
                </nav>

                {/* Language Toggle — active language is bold & teal, inactive is gray */}
                <button
                    onClick={toggleLanguage}
                    className="flex items-center gap-1.5 px-4 py-1.5 rounded-full border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white text-sm font-sans transition-all duration-200"
                    aria-label="Toggle language"
                >
                    <Globe size={14} />
                    <span className={language === 'en' ? 'font-bold' : 'font-normal text-gray-400'}>EN</span>
                    <span className="text-current">|</span>
                    <span className={language === 'mr' ? 'font-bold' : 'font-normal text-gray-400'}>मराठी</span>
                </button>
            </div>
        </header>
    );
}
