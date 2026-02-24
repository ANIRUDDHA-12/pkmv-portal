import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Send } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useLanguage } from '../context/LanguageContext';

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-50px' },
    transition: { duration: 0.55, delay, ease: 'easeOut' },
});

export default function ContactUs() {
    const { t } = useLanguage();
    const [form, setForm] = useState({ name: '', phone: '', message: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) =>
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

    const handleSubmit = (e) => {
        e.preventDefault();
        // Placeholder — wire to backend/formspree later
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 4000);
        setForm({ name: '', phone: '', message: '' });
    };

    const infoCards = [
        {
            icon: <MapPin size={20} className="text-orange-600" />,
            title: t('contact', 'addressTitle'),
            value: t('contact', 'address'),
        },
        {
            icon: <Phone size={20} className="text-orange-600" />,
            title: t('contact', 'phoneTitle'),
            value: t('contact', 'phone'),
        },
        {
            icon: <Clock size={20} className="text-orange-600" />,
            title: t('contact', 'hoursTitle'),
            value: t('contact', 'hours'),
        },
    ];

    return (
        <div className="min-h-screen font-sans bg-gray-50">
            <Header />

            {/* Page Header */}
            <section className="bg-teal-700 pt-24 pb-14 px-6 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-teal-500/30 via-transparent to-transparent pointer-events-none" />
                <motion.div
                    {...fadeUp()}
                    className="max-w-2xl mx-auto relative z-10"
                >
                    <h1 className="font-serif font-black text-4xl md:text-5xl text-white mb-4 leading-tight">
                        {t('contact', 'pageTitle')}
                    </h1>
                    <p className="text-teal-100 font-sans text-lg leading-relaxed">
                        {t('contact', 'pageSub')}
                    </p>
                </motion.div>
            </section>

            {/* Back link */}
            <div className="max-w-7xl mx-auto px-4 md:px-8 pt-8">
                <Link
                    to="/"
                    className="inline-flex items-center gap-1.5 text-teal-700 font-semibold text-sm font-sans hover:text-teal-600 transition-colors"
                >
                    ← Back to Home
                </Link>
            </div>

            {/* Main Split Layout */}
            <main className="max-w-7xl mx-auto px-4 md:px-8 py-12 pb-20 grid grid-cols-1 lg:grid-cols-2 gap-12">

                {/* Left — Info Cards + Map */}
                <motion.div {...fadeUp(0)} className="flex flex-col gap-5">
                    {/* Info Cards */}
                    {infoCards.map((card) => (
                        <div
                            key={card.title}
                            className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 flex items-start gap-4"
                        >
                            <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                                {card.icon}
                            </div>
                            <div>
                                <p className="text-xs font-semibold font-sans text-gray-400 uppercase tracking-widest mb-1">
                                    {card.title}
                                </p>
                                <p className="text-gray-700 font-sans text-sm leading-relaxed font-medium">
                                    {card.value}
                                </p>
                            </div>
                        </div>
                    ))}

                    {/* Google Maps Embed — Ulhasnagar */}
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.44199655648!2d73.1534!3d19.2183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7940000000001%3A0x0!2sUlhasnagar%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                        className="w-full h-64 rounded-2xl shadow-sm border border-gray-100 mt-2"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Ulhasnagar Location"
                    />
                </motion.div>

                {/* Right — Contact Form */}
                <motion.div {...fadeUp(0.1)}>
                    <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100">
                        <h2 className="font-serif font-black text-2xl text-teal-700 mb-6">
                            {t('contact', 'formTitle')}
                        </h2>

                        {submitted && (
                            <div className="mb-5 bg-teal-50 border border-teal-200 text-teal-700 rounded-xl px-4 py-3 text-sm font-sans font-medium">
                                ✅ {t('contact', 'submitBtn')} — Thank you!
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                            {/* Name */}
                            <div>
                                <label className="block text-xs font-semibold font-sans text-gray-500 uppercase tracking-wider mb-1.5">
                                    {t('contact', 'formName')}
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    placeholder={t('contact', 'formName')}
                                    required
                                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-sans text-gray-700 focus:ring-2 focus:ring-teal-500 focus:outline-none transition-all"
                                />
                            </div>

                            {/* Phone */}
                            <div>
                                <label className="block text-xs font-semibold font-sans text-gray-500 uppercase tracking-wider mb-1.5">
                                    {t('contact', 'formPhone')}
                                </label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={form.phone}
                                    onChange={handleChange}
                                    placeholder={t('contact', 'formPhone')}
                                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-sans text-gray-700 focus:ring-2 focus:ring-teal-500 focus:outline-none transition-all"
                                />
                            </div>

                            {/* Message */}
                            <div>
                                <label className="block text-xs font-semibold font-sans text-gray-500 uppercase tracking-wider mb-1.5">
                                    {t('contact', 'formMessage')}
                                </label>
                                <textarea
                                    name="message"
                                    value={form.message}
                                    onChange={handleChange}
                                    placeholder={t('contact', 'formMessage')}
                                    required
                                    rows={5}
                                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-sans text-gray-700 focus:ring-2 focus:ring-teal-500 focus:outline-none transition-all resize-none"
                                />
                            </div>

                            {/* Submit */}
                            <button
                                type="submit"
                                className="w-full flex items-center justify-center gap-2 bg-teal-700 hover:bg-teal-800 text-white font-bold font-sans py-4 rounded-xl transition-all duration-200 shadow-md hover:shadow-teal-700/20 text-sm"
                            >
                                <Send size={16} />
                                {t('contact', 'submitBtn')}
                            </button>
                        </form>
                    </div>
                </motion.div>
            </main>

            <Footer />
        </div>
    );
}
