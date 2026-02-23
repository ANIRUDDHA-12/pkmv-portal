import { MapPin, Phone, Mail, Globe } from 'lucide-react';

const quickLinks = ['Home', 'About Us', 'Therapies', 'Student Life', 'Donate'];

export default function Footer() {
    return (
        <footer className="bg-slate-800 text-slate-300 pt-14 pb-6">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-10 border-b border-slate-700">

                    {/* Column 1 — Logo & Trust Info */}
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-2.5">
                            <div className="w-9 h-9 rounded-full bg-orange-500 flex items-center justify-center">
                                <span className="text-white text-sm font-bold">PK</span>
                            </div>
                            <div className="leading-tight">
                                <p className="font-bold text-white text-sm font-sans">Pragnya Karuna Vidyalaya</p>
                            </div>
                        </div>
                        <div className="text-xs font-sans leading-relaxed text-slate-400">
                            <p>Samishra Apang Punarvasan Shikshan Prasarak Sanstha</p>
                            <p className="mt-1">Reg No: MAHARASHTRA / 873 / THANE</p>
                            <p>Public Trust No. F-79</p>
                        </div>
                        <p className="text-slate-500 text-xs font-sans leading-relaxed">
                            Empowering the future through specialized education and compassionate care since 1981.
                        </p>
                    </div>

                    {/* Column 2 — Quick Links */}
                    <div>
                        <h4 className="text-white font-semibold text-sm font-sans uppercase tracking-widest mb-5">Quick Links</h4>
                        <ul className="flex flex-col gap-3">
                            {quickLinks.map((link) => (
                                <li key={link}>
                                    <a href="#" className="text-slate-400 hover:text-orange-400 text-sm font-sans transition-colors duration-200">
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3 — Contact Info */}
                    <div>
                        <h4 className="text-white font-semibold text-sm font-sans uppercase tracking-widest mb-5">Contact Us</h4>
                        <ul className="flex flex-col gap-4">
                            <li className="flex items-start gap-3">
                                <MapPin size={16} className="text-orange-400 flex-shrink-0 mt-0.5" />
                                <span className="text-slate-400 text-sm font-sans leading-snug">
                                    Kurla-Camp Road, Certified School Near,<br />Ulhasnagar – 411004, Dist. Thane
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone size={16} className="text-orange-400 flex-shrink-0" />
                                <span className="text-slate-400 text-sm font-sans">0251-2524901</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail size={16} className="text-orange-400 flex-shrink-0" />
                                <span className="text-slate-400 text-sm font-sans">info@pragnyakaruna.org</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
                    <p className="text-slate-500 text-xs font-sans">
                        © 2024 Pragnya Karuna Mook Badhir Vidyalaya. All rights reserved.
                    </p>
                    <div className="flex gap-4">
                        <a href="#" className="text-slate-500 hover:text-slate-300 text-xs font-sans">Privacy Policy</a>
                        <a href="#" className="text-slate-500 hover:text-slate-300 text-xs font-sans">Terms of Use</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
