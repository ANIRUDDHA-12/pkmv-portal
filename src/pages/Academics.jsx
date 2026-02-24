import { motion } from 'framer-motion';
import { ArrowLeft, BookOpen, Mic, Wrench } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CloudinaryImage from '../components/CloudinaryImage';
import { IMAGES } from '../lib/images';
import { useLanguage } from '../context/LanguageContext';

// Reusable fade-up preset — enforces viewport once + margin to prevent scroll stutter
const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-50px' },
    transition: { duration: 0.5, delay, ease: 'easeOut' },
});

// ── Zig-Zag Section ────────────────────────────────────────────────────────
// imageLeft = true  → image on left col, text on right (mobile: image on top)
// imageLeft = false → text on left col, image on right (mobile: text on top)
function ZigZag({ imageLeft = false, imageId, icon, titleKey, descKey, accent }) {
    const { t } = useLanguage();

    const textCol = (
        <motion.div {...fadeUp(0)} className="flex flex-col justify-center gap-5">
            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${accent.bg}`}>
                {icon}
            </div>
            <h2 className={`font-serif font-black text-3xl md:text-4xl leading-snug ${accent.text}`}>
                {t('academics', titleKey)}
            </h2>
            <p className="text-gray-600 font-sans text-base leading-relaxed">
                {t('academics', descKey)}
            </p>
        </motion.div>
    );

    const imageCol = (
        <motion.div
            {...fadeUp(0.1)}
            className={imageLeft ? 'order-1 md:order-1' : 'order-first md:order-last'}
        >
            <div className="w-full h-80 rounded-3xl overflow-hidden shadow-lg border border-gray-100">
                <CloudinaryImage
                    publicId={imageId}
                    width={800}
                    height={500}
                    className="w-full h-full object-cover"
                />
            </div>
        </motion.div>
    );

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {imageLeft ? imageCol : textCol}
            {imageLeft ? textCol : imageCol}
        </div>
    );
}

// ── Page ───────────────────────────────────────────────────────────────────
export default function Academics() {
    const { t } = useLanguage();

    return (
        <div className="min-h-screen font-sans bg-gray-50">
            <Header />

            {/* Hero */}
            <section className="bg-teal-700 pt-24 pb-16 px-4 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-teal-500/30 via-transparent to-transparent pointer-events-none" />
                <motion.div {...fadeUp()} className="max-w-3xl mx-auto relative z-10">
                    <span className="inline-block bg-orange-500 text-white text-xs font-bold font-sans uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
                        Pragnya Karuna Vidyalaya
                    </span>
                    <h1 className="font-serif font-black text-4xl md:text-5xl text-white leading-tight mb-4">
                        {t('academics', 'pageTitle')}
                    </h1>
                    <p className="text-teal-100 font-sans text-lg leading-relaxed max-w-2xl mx-auto">
                        {t('academics', 'pageSub')}
                    </p>
                </motion.div>
            </section>

            {/* Back link */}
            <div className="max-w-7xl mx-auto px-4 md:px-8 pt-8">
                <Link
                    to="/"
                    className="inline-flex items-center gap-1.5 text-teal-700 font-semibold text-sm font-sans hover:text-teal-600 transition-colors"
                >
                    <ArrowLeft size={15} />
                    Back to Home
                </Link>
            </div>

            {/* Zig-Zag Sections */}
            <main className="max-w-7xl mx-auto px-4 md:px-8 py-16 pb-24 space-y-24">

                {/* Section 1 — Educational Approach: Text Left, Image Right */}
                <ZigZag
                    imageLeft={false}
                    imageId={IMAGES.holistic.classroom}
                    icon={<BookOpen size={22} className="text-teal-700" />}
                    titleKey="approachTitle"
                    descKey="approachDesc"
                    accent={{ bg: 'bg-teal-100', text: 'text-teal-800' }}
                />

                {/* Divider */}
                <div className="w-16 h-1 bg-orange-500 rounded mx-auto" />

                {/* Section 2 — Speech & Audiology: Image Left, Text Right */}
                <ZigZag
                    imageLeft={true}
                    imageId={IMAGES.therapies.audiology}
                    icon={<Mic size={22} className="text-orange-600" />}
                    titleKey="therapyTitle"
                    descKey="therapyDesc"
                    accent={{ bg: 'bg-orange-100', text: 'text-orange-700' }}
                />

                {/* Divider */}
                <div className="w-16 h-1 bg-teal-700 rounded mx-auto" />

                {/* Section 3 — Vocational Training: Text Left, Image Right */}
                <ZigZag
                    imageLeft={false}
                    imageId={IMAGES.bento.tailoring}
                    icon={<Wrench size={22} className="text-teal-700" />}
                    titleKey="vocationalTitle"
                    descKey="vocationalDesc"
                    accent={{ bg: 'bg-teal-100', text: 'text-teal-800' }}
                />
            </main>

            <Footer />
        </div>
    );
}
