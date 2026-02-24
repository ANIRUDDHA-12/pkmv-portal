import { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
    ArrowLeft, Wrench, Flame, Trophy, Leaf, Bus, LayoutGrid, HeartPulse,
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CloudinaryImage from '../components/CloudinaryImage';
import { schoolEvents } from '../data/events';

// ── Translation-ready content ──────────────────────────────────────────────
const content = {
    hero: {
        label: 'Campus Life',
        title: 'Student Life & Activities',
        subtitle: 'Celebrating the spirit, creativity, and growth of every student at Pragnya Karuna Vidyalaya.',
    },
    tabs: [
        { key: 'all', label: 'All', icon: <LayoutGrid size={14} /> },
        { key: 'festivals', label: 'Festivals', icon: <Flame size={14} /> },
        { key: 'sports', label: 'Sports', icon: <Trophy size={14} /> },
        { key: 'skills', label: 'Skills', icon: <Wrench size={14} /> },
        { key: 'eco', label: 'Eco & Projects', icon: <Leaf size={14} /> },
        { key: 'trips', label: 'Excursions', icon: <Bus size={14} /> },
        { key: 'health', label: 'Health & Tech', icon: <HeartPulse size={14} /> },
    ],
    empty: 'No activities found in this category yet.',
};

const VALID_CATEGORIES = content.tabs.map((t) => t.key);

// ── Sub-components ─────────────────────────────────────────────────────────

function HeroBanner() {
    return (
        <section className="bg-teal-700 pt-24 pb-12 px-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-teal-500/30 via-transparent to-transparent pointer-events-none" />
            <div className="max-w-4xl mx-auto text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55 }}
                >
                    <span className="inline-block bg-white/15 text-teal-100 text-xs font-semibold font-sans uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
                        {content.hero.label}
                    </span>
                    <h1 className="font-serif font-black text-4xl md:text-5xl text-white leading-tight mb-3">
                        {content.hero.title}
                    </h1>
                    <p className="text-teal-100 font-sans text-lg leading-relaxed max-w-xl mx-auto">
                        {content.hero.subtitle}
                    </p>
                </motion.div>
            </div>
        </section>
    );
}

function TabBar({ activeTab, onTabChange }) {
    return (
        /* overflow-x-auto + whitespace-nowrap = horizontal scroll on mobile, no stacking */
        <div className="overflow-x-auto whitespace-nowrap border-b border-gray-200 bg-white sticky top-[61px] z-40 shadow-sm">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex gap-1 py-2">
                    {content.tabs.map((tab) => {
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
                                {tab.label}
                            </button>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

// Individual event card — flex-col + flex-grow on text block → uniform row heights
function EventCard({ event }) {
    return (
        <motion.div
            layout
            key={event.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            whileHover={{ y: -4 }}
            className="bg-white rounded-2xl shadow-sm border border-gray-100 flex flex-col h-full overflow-hidden"
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
                <h3 className="font-serif font-bold text-lg text-teal-700 mb-2 leading-snug">
                    {event.title_en}
                </h3>
                <p className="text-gray-600 font-sans text-sm leading-relaxed flex-grow">
                    {event.desc_en}
                </p>
            </div>
        </motion.div>
    );
}

// Gallery grid — motion.div layout + AnimatePresence for smooth tab transitions
function GalleryGrid({ activeTab }) {
    const filtered = activeTab === 'all'
        ? schoolEvents
        : schoolEvents.filter((e) => e.category === activeTab);

    if (filtered.length === 0) {
        return (
            <div className="text-center py-20 text-gray-400 font-sans">
                {content.empty}
            </div>
        );
    }

    return (
        <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
            <AnimatePresence mode="popLayout">
                {filtered.map((event) => (
                    <EventCard key={event.id} event={event} />
                ))}
            </AnimatePresence>
        </motion.div>
    );
}

// ── Page ───────────────────────────────────────────────────────────────────

export default function StudentLife() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [activeTab, setActiveTab] = useState('all');

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

    const activeLabel = content.tabs.find((t) => t.key === activeTab)?.label ?? 'All';

    return (
        <div className="min-h-screen font-sans bg-gray-50">
            <Header />
            <HeroBanner />

            {/* Back link */}
            <div className="max-w-7xl mx-auto px-6 pt-6">
                <Link
                    to="/"
                    className="inline-flex items-center gap-1.5 text-teal-700 font-semibold text-sm font-sans hover:text-teal-600 transition-colors"
                >
                    <ArrowLeft size={15} />
                    Back to Home
                </Link>
            </div>

            {/* Sticky Tab Bar */}
            <TabBar activeTab={activeTab} onTabChange={handleTabChange} />

            {/* Gallery */}
            <main className="max-w-7xl mx-auto px-6 py-10 pb-20">
                {/* Section heading */}
                <div className="mb-8">
                    <h2 className="font-serif font-black text-2xl text-gray-800">
                        {activeLabel}
                    </h2>
                    <div className="w-10 h-1 bg-orange-500 rounded mt-2" />
                </div>

                <GalleryGrid activeTab={activeTab} />
            </main>

            <Footer />
        </div>
    );
}
