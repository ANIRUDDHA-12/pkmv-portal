import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import CloudinaryImage from './CloudinaryImage';
import { IMAGES } from '../lib/images';
import { useLanguage } from '../context/LanguageContext';

export default function HeroSection() {
    const { t } = useLanguage();
    return (
        <section className="relative bg-teal-700 flex items-center overflow-hidden pt-16">
            {/* Background decorative circles */}
            <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-teal-600 opacity-30 translate-x-1/3 -translate-y-1/4" />
            <div className="absolute bottom-0 left-12 w-64 h-64 rounded-full bg-teal-600 opacity-20 translate-y-1/3" />

            <div className="max-w-7xl mx-auto px-6 py-14 w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

                {/* Left: Text & CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                    className="text-white z-10"
                >
                    <div className="flex items-center gap-2 mb-4">
                        <Sparkles size={16} className="text-orange-400" />
                        <span className="text-teal-200 text-sm font-medium font-sans tracking-wide uppercase">
                            {t('home', 'badge')}
                        </span>
                    </div>
                    <h1 className="font-serif text-4xl md:text-5xl font-black leading-tight mb-5 text-white">
                        {t('home', 'heroTitle')}
                    </h1>
                    <p className="text-teal-100 text-base leading-relaxed font-sans mb-8 max-w-md">
                        {t('home', 'heroSub')}
                    </p>
                    <button
                        onClick={() => document.getElementById('programs')?.scrollIntoView({ behavior: 'smooth' })}
                        className="group inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-400 text-white font-semibold font-sans px-6 py-3 rounded-full shadow-lg hover:shadow-orange-500/30 transition-all duration-300"
                    >
                        {t('home', 'ctaButton')}
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
                    </button>
                </motion.div>

                {/* Right: School Banner — 1236×686 image, exact 16:9 ratio, object-contain so ALL content visible */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
                    className="relative hidden md:block z-10 w-full"
                >
                    {/* White bg matches the banner's own background, rounded border frames it */}
                    <div
                        className="w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white/30 bg-yellow-50"
                        style={{ aspectRatio: '16 / 9' }}
                    >
                        <CloudinaryImage
                            publicId={IMAGES.hero.illustration}
                            alt="Pragnya Karuna Mook Badhir Vidyalaya — Official School Banner"
                            width={1236}
                            height={686}
                            className="w-full h-full object-contain"
                        />
                    </div>
                    {/* Subtle caption tag below the banner */}
                    <p className="text-center text-teal-200 text-xs font-sans mt-2 tracking-wide">
                        प्रज्ञा करूणा मूक बधिर विद्यालय, उल्हासनगर-४
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
