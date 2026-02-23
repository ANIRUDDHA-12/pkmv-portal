import { motion } from 'framer-motion';
import {
    Cpu, Wrench, Leaf, Activity, Flame, BadgeCheck, Bus,
    Tag, Star, Fingerprint, Stethoscope
} from 'lucide-react';

const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, delay: i * 0.08, ease: 'easeOut' },
    }),
};

const hoverEffect = { scale: 1.02, y: -5, transition: { type: 'spring', stiffness: 300 } };

// Festival inner grid for "Celebrating Traditions"
const festivals = [
    { name: 'Dahi Handi', emoji: '🏺', desc: 'The spirit of unity' },
    { name: 'Diwali', desc: 'Festival of lights', emoji: '🪔' },
    { name: 'Bhondla', emoji: '🎶', desc: 'Cultural songs & dance' },
    { name: 'Ashadi Ekadashi', emoji: '🙏', desc: 'Spiritual walks' },
];

// Sports tags
const sports = ['Running', 'Long Jump', 'Shot Put', 'Swimming'];

// Skill Development
const skills = ['Computer Training', 'Handicrafts & Art', 'Tailoring & Sewing'];

// Classroom tags
const classrooms = [
    { label: 'Cochlear Implant Classroom', tag: 'State-of-the-Art (BT1)', tagColor: 'bg-orange-100 text-orange-700' },
    { label: 'Audiology & Speech Therapy', tag: 'Ongoing Support', tagColor: 'bg-teal-100 text-teal-700' },
];

export default function BentoGrid() {
    return (
        <section className="bg-green-50 py-20 px-6">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <p className="text-teal-700 text-xs font-semibold font-sans uppercase tracking-widest mb-2">
                        Campus Life &amp; Features
                    </p>
                    <h2 className="font-serif text-4xl font-black text-gray-800 mb-3">
                        Nurturing Growth Every Day
                    </h2>
                    <p className="text-gray-500 font-sans text-base max-w-lg mx-auto leading-relaxed">
                        Our dynamic curriculum and activities are designed to foster independence, creativity, and joy in learning.
                    </p>
                </div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-auto">

                    {/* Card 1 — Specialized Classrooms (col 1, row-span-3) */}
                    <motion.div
                        custom={0}
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        whileHover={hoverEffect}
                        className="md:row-span-3 bg-green-50 border border-green-200 rounded-3xl p-6 flex flex-col gap-4 shadow-sm cursor-pointer"
                    >
                        <div className="w-10 h-10 rounded-2xl bg-teal-100 flex items-center justify-center">
                            <Cpu size={20} className="text-teal-700" />
                        </div>
                        <div>
                            <h3 className="font-serif font-black text-xl text-gray-800 mb-1">Specialized Classrooms</h3>
                            <p className="text-gray-500 text-sm font-sans leading-snug">
                                Tailored environments designed for optimal acoustic learning and personalised attention.
                            </p>
                        </div>
                        <div className="flex flex-col gap-3 mt-2">
                            {classrooms.map((c, i) => (
                                <div key={i} className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
                                    <p className="text-gray-700 font-semibold text-sm font-sans mb-2">{c.label}</p>
                                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${c.tagColor}`}>{c.tag}</span>
                                </div>
                            ))}
                        </div>
                        <a href="#" className="text-teal-700 text-sm font-semibold font-sans hover:underline mt-auto">
                            Learn about our methodology →
                        </a>
                    </motion.div>

                    {/* Card 2 — Skill Development (col 2, top) */}
                    <motion.div
                        custom={1}
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        whileHover={hoverEffect}
                        className="bg-white border border-gray-100 rounded-3xl p-5 flex flex-col gap-3 shadow-sm cursor-pointer"
                    >
                        <div className="flex items-center justify-between">
                            <div className="w-9 h-9 rounded-xl bg-orange-100 flex items-center justify-center">
                                <Wrench size={18} className="text-orange-500" />
                            </div>
                        </div>
                        <div>
                            <h3 className="font-serif font-bold text-lg text-gray-800 mb-1">Skill Development</h3>
                            <p className="text-gray-400 text-xs font-sans">Vocational training for a self-reliant future.</p>
                        </div>
                        <ul className="flex flex-col gap-1.5 mt-1">
                            {skills.map((s, i) => (
                                <li key={i} className="flex items-center gap-2 text-gray-600 text-sm font-sans">
                                    <span className="w-1.5 h-1.5 rounded-full bg-teal-500 flex-shrink-0" />
                                    {s}
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Card 5 — Celebrating Traditions (col 3, large top — row-span-2) */}
                    <motion.div
                        custom={2}
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        whileHover={hoverEffect}
                        className="md:row-span-2 bg-teal-700 rounded-3xl p-6 flex flex-col gap-4 shadow-lg cursor-pointer"
                    >
                        <div className="flex items-center gap-2">
                            <div className="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center">
                                <Flame size={18} className="text-orange-300" />
                            </div>
                        </div>
                        <div>
                            <h3 className="font-serif font-black text-xl text-white mb-1">Celebrating Traditions</h3>
                            <p className="text-teal-200 text-sm font-sans leading-snug">
                                We believe in cultural integration. Our students actively participate in festivities, bringing vibrant energy to every occasion.
                            </p>
                        </div>
                        {/* 2x2 inner festival grid */}
                        <div className="grid grid-cols-2 gap-3 mt-2 flex-1">
                            {festivals.map((f, i) => (
                                <div key={i} className="bg-white/15 backdrop-blur-sm rounded-2xl p-3 border border-white/20 flex flex-col gap-1">
                                    <span className="text-xl">{f.emoji}</span>
                                    <p className="text-white font-semibold text-xs font-sans">{f.name}</p>
                                    <p className="text-teal-200 text-xs font-sans leading-tight">{f.desc}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Card 3 — Project-Based Learning (col 2, middle) */}
                    <motion.div
                        custom={3}
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        whileHover={hoverEffect}
                        className="bg-white border border-gray-100 rounded-3xl p-5 flex flex-col gap-3 shadow-sm cursor-pointer"
                    >
                        <div className="w-9 h-9 rounded-xl bg-green-100 flex items-center justify-center">
                            <Leaf size={18} className="text-teal-700" />
                        </div>
                        <div>
                            <h3 className="font-serif font-bold text-lg text-gray-800 mb-1">Project-Based Learning</h3>
                            <p className="text-gray-500 text-xs font-sans">Connecting students with nature through plantation drives.</p>
                        </div>
                        <div className="flex gap-2 flex-wrap mt-1">
                            {['Mango', 'Coconut', 'Native'].map((t) => (
                                <span key={t} className="text-xs bg-green-100 text-teal-700 font-semibold px-3 py-1 rounded-full">{t}</span>
                            ))}
                        </div>
                    </motion.div>

                    {/* Card 6 — State-Level Sports (col 3, middle) */}
                    <motion.div
                        custom={4}
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        whileHover={hoverEffect}
                        className="bg-slate-800 rounded-3xl p-5 flex flex-col gap-3 shadow-lg cursor-pointer relative overflow-hidden"
                    >
                        <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center shadow-lg">
                            <Star size={20} className="text-white fill-white" />
                        </div>
                        <div className="flex items-center gap-2 mb-1">
                            <span className="bg-orange-500/20 text-orange-400 text-xs font-semibold px-2 py-0.5 rounded-full font-sans">🏆 Champions</span>
                        </div>
                        <div>
                            <h3 className="font-serif font-black text-lg text-white mb-1">State-Level Sports</h3>
                            <p className="text-slate-400 text-sm font-sans leading-snug">
                                Our athletes excel in state competitions, proving that determination knows no bounds.
                            </p>
                        </div>
                        <div className="flex flex-wrap gap-2 mt-1">
                            {sports.map((s) => (
                                <span key={s} className="text-xs bg-slate-700 text-slate-300 font-medium px-3 py-1 rounded-full font-sans border border-slate-600">{s}</span>
                            ))}
                        </div>
                    </motion.div>

                    {/* Card 4 — Health & Tech (col 2, bottom) */}
                    <motion.div
                        custom={5}
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        whileHover={hoverEffect}
                        className="bg-white border border-gray-100 rounded-3xl p-5 flex flex-col gap-3 shadow-sm cursor-pointer"
                    >
                        <div className="w-9 h-9 rounded-xl bg-blue-100 flex items-center justify-center">
                            <Activity size={18} className="text-blue-600" />
                        </div>
                        <div>
                            <h3 className="font-serif font-bold text-lg text-gray-800 mb-1">Health &amp; Tech</h3>
                        </div>
                        <ul className="flex flex-col gap-2">
                            <li className="flex items-center gap-2 text-gray-600 text-sm font-sans">
                                <Stethoscope size={14} className="text-teal-500 flex-shrink-0" /> Regular Medical Checkups
                            </li>
                            <li className="flex items-center gap-2 text-gray-600 text-sm font-sans">
                                <Fingerprint size={14} className="text-orange-500 flex-shrink-0" /> Biometric Attendance
                            </li>
                        </ul>
                    </motion.div>

                    {/* Card 7 — Educational Excursions (col 3, bottom) */}
                    <motion.div
                        custom={6}
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        whileHover={hoverEffect}
                        className="bg-white border border-gray-100 rounded-3xl p-5 flex flex-col gap-3 shadow-sm cursor-pointer"
                    >
                        <div className="w-9 h-9 rounded-xl bg-yellow-100 flex items-center justify-center">
                            <Bus size={18} className="text-yellow-600" />
                        </div>
                        <div>
                            <h3 className="font-serif font-bold text-lg text-gray-800 mb-1">Educational Excursions</h3>
                            <p className="text-gray-500 text-sm font-sans leading-snug">
                                Broadening horizons beyond the classroom with visits to Muktangan Village and various historical sites.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
