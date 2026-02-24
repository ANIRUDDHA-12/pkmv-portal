import { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
    ArrowLeft, Wrench, Flame, Trophy, Leaf, Bus, LayoutGrid, HeartPulse, X,
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CloudinaryImage from '../components/CloudinaryImage';
import { schoolEvents } from '../data/events';
import { useLanguage } from '../context/LanguageContext';

// ── Tab config — icons only; labels come from t() at render time ───────────
const TABS = [
    { key: 'all', icon: <LayoutGrid size={14} /> },
    { key: 'festivals', icon: <Flame size={14} /> },
    { key: 'sports', icon: <Trophy size={14} /> },
    { key: 'skills', icon: <Wrench size={14} /> },
    { key: 'eco', icon: <Leaf size={14} /> },
    { key: 'trips', icon: <Bus size={14} /> },
    { key: 'health', icon: <HeartPulse size={14} /> },
];

const VALID_CATEGORIES = TABS.map((t) => t.key);

// ── Sub-components ─────────────────────────────────────────────────────────

function HeroBanner() {
    const { t } = useLanguage();
    return (
        <section className="bg-teal-700 pt-24 pb-12 px-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-teal-500/30 via-transparent to-transparent pointer-events-none" />
            <div className="max-w-4xl mx-auto text-center relative z-10">
                <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
                    <span className="inline-block bg-white/15 text-teal-100 text-xs font-semibold font-sans uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
                        {t('studentLife', 'label')}
                    </span>
                    <h1 className="font-serif font-black text-4xl md:text-5xl text-white leading-tight mb-3">
                        {t('studentLife', 'title')}
                    </h1>
                    <p className="text-teal-100 font-sans text-lg leading-relaxed max-w-xl mx-auto">
                        {t('studentLife', 'subtitle')}
                    </p>
                </motion.div>
            </div>
        </section>
    );
}

function TabBar({ activeTab, onTabChange }) {
    const { t } = useLanguage();
    return (
        /* overflow-x-auto + whitespace-nowrap = horizontal scroll on mobile, no stacking */
        <div className="overflow-x-auto whitespace-nowrap border-b border-gray-200 bg-white sticky top-[61px] z-40 shadow-sm">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex gap-1 py-2">
                    {TABS.map((tab) => {
                        const isActive = activeTab === tab.key;
                        return (
                            <button
                                key={tab.key}
                                id={`tab-${tab.key}`}
                                onClick={() => onTabChange(tab.key)}
                                className={`
                                    inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold font-sans
                                    transition-all duration-200 whitespace-nowrap flex-shrink-0
                                    ${isActive
                                        ? 'bg-teal-700 text-white shadow-md'
                                        : 'text-gray-500 hover:text-teal-700 hover:bg-teal-50'
                                    }
                                `}
                            >
                                {tab.icon}
                                {t('studentLife.tabs', tab.key)}
                            </button>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

// EventCard — flex-col + flex-grow on text block → uniform row heights
function EventCard({ event, onOpen }) {
    const { language } = useLanguage();
    const title = language === 'mr' ? event.title_mr : event.title_en;
    const desc = language === 'mr' ? event.desc_mr : event.desc_en;

    return (
        <motion.div
            layout
            key={event.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            onClick={() => onOpen(event)}
            className="bg-white rounded-2xl shadow-sm border border-gray-100 flex flex-col h-full overflow-hidden cursor-pointer"
        >
            {/* Image — h-56 object-cover prevents tall/wide source photos from breaking grid */}
            <div className="h-56 w-full flex-shrink-0 overflow-hidden bg-teal-50">
                <CloudinaryImage
                    publicId={event.imageId}
                    alt={event.title_en}
                    width={640}
                    height={448}
                    className="w-full h-56 object-cover"
                />
            </div>
            {/* Text block — flex-grow ensures cards in a row stretch to the same height */}
            <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-serif font-bold text-lg text-teal-700 mb-2 leading-snug">{title}</h3>
                <p className="text-gray-600 font-sans text-sm leading-relaxed flex-grow">{desc}</p>
            </div>
        </motion.div>
    );
}

// Deep Dive Modal — shows only active language (clean, no bilingual split)
function EventModal({ event, onClose }) {
    const { language } = useLanguage();
    const title = language === 'mr' ? event.title_mr : event.title_en;
    const desc = language === 'mr' ? event.desc_mr : event.desc_en;

    return (
        // Backdrop — z-[100] sits above sticky header
        <motion.div
            className="fixed inset-0 z-[100] bg-slate-900/60 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
        >
            {/* Card — stopPropagation prevents backdrop click when clicking content */}
            <motion.div
                className="bg-white rounded-3xl w-full max-w-3xl overflow-hidden shadow-2xl relative"
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                onClick={(e) => e.stopPropagation()}
            >
                {/* Image top half */}
                <div className="relative h-72 md:h-96 w-full overflow-hidden bg-teal-50">
                    <CloudinaryImage
                        publicId={event.imageId}
                        alt={event.title_en}
                        width={1200}
                        height={768}
                        className="w-full h-72 md:h-96 object-cover"
                    />
                    {/* Close button */}
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-md hover:bg-white transition-colors duration-150"
                        aria-label="Close"
                    >
                        <X size={18} className="text-gray-700" />
                    </button>
                </div>

                {/* Text content — active language only */}
                <div className="p-6 md:p-8 overflow-y-auto max-h-[40vh]">
                    <h2 className="font-serif font-black text-2xl text-teal-700 mb-3 leading-snug">{title}</h2>
                    <p className="text-gray-700 font-sans text-base leading-relaxed">{desc}</p>
                </div>
            </motion.div>
        </motion.div>
    );
}

// Gallery grid — motion.div layout + AnimatePresence for smooth tab transitions
function GalleryGrid({ activeTab, onOpen }) {
    const filtered = activeTab === 'all'
        ? schoolEvents
        : schoolEvents.filter((e) => e.category === activeTab);

    if (filtered.length === 0) {
        return (
            <div className="text-center py-20 text-gray-400 font-sans">
                No activities found in this category yet.
            </div>
        );
    }

    return (
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
                {filtered.map((event) => (
                    <EventCard key={event.id} event={event} onOpen={onOpen} />
                ))}
            </AnimatePresence>
        </motion.div>
    );
}

// ── Page ───────────────────────────────────────────────────────────────────

export default function StudentLife() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [activeTab, setActiveTab] = useState('all');
    const [selectedEvent, setSelectedEvent] = useState(null);
    const { t } = useLanguage();

    // Body scroll lock — prevents background scroll while modal is open
    useEffect(() => {
        document.body.style.overflow = selectedEvent ? 'hidden' : 'auto';
        return () => { document.body.style.overflow = 'auto'; };
    }, [selectedEvent]);

    // Sync activeTab from URL ?category= on mount and navigation
    useEffect(() => {
        const cat = searchParams.get('category');
        if (cat && VALID_CATEGORIES.includes(cat)) {
            setActiveTab(cat);
        } else {
            setActiveTab('all');
        }
    }, [searchParams]);

    // Tab click: sync both state and URL so links are bookmarkable/shareable
    const handleTabChange = (key) => {
        setActiveTab(key);
        if (key === 'all') {
            setSearchParams({});
        } else {
            setSearchParams({ category: key });
        }
    };

    const activeLabel = t('studentLife.tabs', activeTab);

    return (
        <div className="min-h-screen font-sans bg-gray-50">
            <Header />
            <HeroBanner />

            {/* Back link */}
            <div className="max-w-7xl mx-auto px-6 pt-6">
                <Link to="/" className="inline-flex items-center gap-1.5 text-teal-700 font-semibold text-sm font-sans hover:text-teal-600 transition-colors">
                    <ArrowLeft size={15} />
                    Back to Home
                </Link>
            </div>

            {/* Sticky Tab Bar */}
            <TabBar activeTab={activeTab} onTabChange={handleTabChange} />

            {/* Gallery */}
            <main className="max-w-7xl mx-auto px-6 py-10 pb-20">
                <div className="mb-8">
                    <h2 className="font-serif font-black text-2xl text-gray-800">{activeLabel}</h2>
                    <div className="w-10 h-1 bg-orange-500 rounded mt-2" />
                </div>
                <GalleryGrid activeTab={activeTab} onOpen={setSelectedEvent} />
            </main>

            <Footer />

            {/* Deep dive modal — AnimatePresence enables exit animation */}
            <AnimatePresence>
                {selectedEvent && (
                    <EventModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />
                )}
            </AnimatePresence>
        </div>
    );
}
