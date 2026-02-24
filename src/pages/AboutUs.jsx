import { motion } from 'framer-motion';
import { ArrowLeft, Shield, Award, Heart, Globe2, Mic, Briefcase, ClipboardList } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { management, staff } from '../data/about';
import { useLanguage } from '../context/LanguageContext';

// ── Helpers ────────────────────────────────────────────────────────────────

const HONORIFICS = ['Shri.', 'Smt.', 'Sau.', 'Adv.', 'श्री.', 'श्रीमती', 'सौ.', 'अॅड.'];

/** Strips Indian honorifics then returns first + last initial — e.g. "VS" for Vitthal Sasane */
function getInitials(name) {
    const parts = name.split(' ').filter((w) => !HONORIFICS.includes(w));
    const first = parts[0]?.[0] ?? '';
    const last = parts[parts.length - 1]?.[0] ?? '';
    return (first + last).toUpperCase();
}

const DEPT_STYLES = {
    'Administration': 'bg-teal-100 text-teal-700',
    'Academics': 'bg-blue-100 text-blue-700',
    'Vocational & Art': 'bg-orange-100 text-orange-600',
    'Support Staff': 'bg-slate-100 text-slate-600',
};

// Animation preset — every motion element uses this + viewport once/margin
const fadeUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-50px' },
    transition: { duration: 0.55, ease: 'easeOut' },
};

// ── Sub-components ─────────────────────────────────────────────────────────

function HeroBanner() {
    const { t } = useLanguage();
    return (
        <section className="bg-teal-700 pt-24 pb-16 px-6 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-teal-500/30 via-transparent to-transparent pointer-events-none" />
            <div className="max-w-3xl mx-auto relative z-10">
                <motion.div {...fadeUp}>
                    <span className="inline-block bg-orange-500 text-white text-xs font-bold font-sans uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
                        Since 1981
                    </span>
                    <h1 className="font-serif font-black text-4xl md:text-5xl text-white leading-tight mb-6">
                        {t('about', 'legacy')}
                    </h1>
                    <div className="flex flex-wrap justify-center gap-3 mt-4">
                        <div className="flex items-center gap-2 bg-white/15 border border-white/30 rounded-full px-4 py-2">
                            <Shield size={14} className="text-orange-300" />
                            <span className="text-white text-xs font-semibold font-sans">Society Reg: MAHARASHTRA / 873 / THANE</span>
                        </div>
                        <div className="flex items-center gap-2 bg-white/15 border border-white/30 rounded-full px-4 py-2">
                            <Award size={14} className="text-orange-300" />
                            <span className="text-white text-xs font-semibold font-sans">Public Trust: F-79</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

function StatsStrip() {
    const stats = [
        { value: '1981', label: 'Year Established' },
        { value: '40+', label: 'Years of Service' },
        { value: '228+', label: 'Alumni' },
        { value: '40', label: 'Current Students' },
    ];
    return (
        <section className="bg-teal-800 py-10 px-6">
            <motion.div
                {...fadeUp}
                className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6"
            >
                {stats.map((s) => (
                    <div key={s.label} className="text-center">
                        <p className="font-serif font-black text-3xl md:text-4xl text-white mb-1">{s.value}</p>
                        <p className="text-teal-200 text-xs font-semibold font-sans uppercase tracking-wider">{s.label}</p>
                    </div>
                ))}
            </motion.div>
        </section>
    );
}

function PhilosophySplit() {
    const { t } = useLanguage();
    const philosophy = [
        { icon: <Heart size={18} className="text-orange-500" />, title: 'Holistic Growth', desc: 'Nurturing academic, emotional, and physical development in every child.' },
        { icon: <Shield size={18} className="text-orange-500" />, title: 'Ethical Leadership', desc: 'Building character and integrity alongside knowledge and skill.' },
        { icon: <Globe2 size={18} className="text-orange-500" />, title: 'Social Integration', desc: 'Preparing students to participate actively in the wider community.' },
    ];
    const methodology = [
        { icon: <Mic size={18} className="text-teal-600" />, title: 'Sign Language First', desc: 'Indian Sign Language (ISL) is the foundation of early communication.' },
        { icon: <Briefcase size={18} className="text-teal-600" />, title: 'Vocational Training', desc: 'Practical skill-building for a self-reliant, dignified future.' },
        { icon: <ClipboardList size={18} className="text-teal-600" />, title: 'Individualized Plans', desc: 'Each student receives targeted therapy goals and learning objectives.' },
    ];
    return (
        <section className="bg-white py-20 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Our Philosophy */}
                <motion.div {...fadeUp}>
                    <div className="w-10 h-1 bg-orange-500 rounded mb-5" />
                    <h2 className="font-serif font-black text-3xl text-gray-800 mb-8">{t('about', 'philosophy')}</h2>
                    <div className="flex flex-col gap-6">
                        {philosophy.map((p) => (
                            <div key={p.title} className="flex items-start gap-4">
                                <div className="w-9 h-9 rounded-xl bg-orange-50 flex items-center justify-center flex-shrink-0 mt-0.5">{p.icon}</div>
                                <div>
                                    <p className="font-semibold text-gray-800 font-sans mb-1">{p.title}</p>
                                    <p className="text-gray-500 text-sm font-sans leading-relaxed">{p.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Our Methodology */}
                <motion.div {...fadeUp} transition={{ duration: 0.55, delay: 0.1, ease: 'easeOut' }}>
                    <div className="w-10 h-1 bg-teal-700 rounded mb-5" />
                    <h2 className="font-serif font-black text-3xl text-gray-800 mb-8">{t('about', 'methodology')}</h2>
                    <div className="flex flex-col gap-6">
                        {methodology.map((m) => (
                            <div key={m.title} className="flex items-start gap-4">
                                <div className="w-9 h-9 rounded-xl bg-teal-50 flex items-center justify-center flex-shrink-0 mt-0.5">{m.icon}</div>
                                <div>
                                    <p className="font-semibold text-gray-800 font-sans mb-1">{m.title}</p>
                                    <p className="text-gray-500 text-sm font-sans leading-relaxed">{m.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

// ManagementCard — calls useLanguage directly so it can render the active language's name/role
function ManagementCard({ member, large = false }) {
    const { language } = useLanguage();
    const name = language === 'mr' ? member.name_mr : member.name_en;
    const role = language === 'mr' ? member.role_mr : member.role_en;
    const initials = getInitials(member.name_en); // always strip EN name for initials

    return (
        <motion.div
            {...fadeUp}
            whileHover={{ y: -4 }}
            className={`bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex flex-col items-center text-center gap-3 ${large ? 'py-8' : ''}`}
        >
            <div className={`${large ? 'w-20 h-20 text-xl' : 'w-16 h-16 text-base'} rounded-full bg-teal-50 border-2 border-teal-100 flex items-center justify-center font-bold text-teal-700 font-sans flex-shrink-0`}>
                {initials}
            </div>
            <div>
                <p className={`font-serif font-bold text-gray-800 leading-snug ${large ? 'text-lg' : 'text-base'}`}>
                    {name}
                </p>
            </div>
            <span className={`text-xs font-semibold px-3 py-1 rounded-full font-sans ${member.role_en === 'President' ? 'bg-teal-700 text-white' :
                    member.role_en === 'Vice President' ? 'bg-teal-600 text-white' :
                        member.role_en === 'Secretary' ? 'bg-teal-500 text-white' :
                            'bg-gray-100 text-gray-600'
                }`}>
                {role}
            </span>
        </motion.div>
    );
}

function LeadershipMatrix() {
    const { t } = useLanguage();
    const top = management.slice(0, 3);
    const bottom = management.slice(3);
    return (
        <section className="bg-gray-50 py-20 px-6">
            <div className="max-w-7xl mx-auto">
                <motion.div {...fadeUp} className="mb-12">
                    <div className="w-10 h-1 bg-orange-500 rounded mb-4" />
                    <h2 className="font-serif font-black text-3xl text-gray-800">{t('about', 'leadership')}</h2>
                    <p className="text-gray-500 font-sans text-sm mt-2">Samishra Apang Punarvasan Shikshan Prasarak Sanstha</p>
                </motion.div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    {top.map((m) => <ManagementCard key={m.id} member={m} large />)}
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {bottom.map((m) => <ManagementCard key={m.id} member={m} />)}
                </div>
            </div>
        </section>
    );
}

function FacultyDirectory() {
    const { language, t } = useLanguage();
    return (
        <section className="bg-white py-20 px-6">
            <div className="max-w-5xl mx-auto">
                <motion.div {...fadeUp} className="mb-10">
                    <div className="w-10 h-1 bg-teal-700 rounded mb-4" />
                    <h2 className="font-serif font-black text-3xl text-gray-800">{t('about', 'faculty')}</h2>
                </motion.div>
                <div className="flex flex-col gap-3">
                    {staff.map((s, i) => {
                        const initials = getInitials(s.name_en);
                        const name = language === 'mr' ? s.name_mr : s.name_en;
                        const role = language === 'mr' ? s.role_mr : s.role_en;
                        return (
                            <motion.div
                                key={s.id}
                                {...fadeUp}
                                transition={{ duration: 0.45, delay: i * 0.06, ease: 'easeOut' }}
                                viewport={{ once: true, margin: '-50px' }}
                                className="bg-gray-50 rounded-2xl border border-gray-100 px-5 py-4 flex flex-col md:flex-row md:items-center gap-3 md:gap-0"
                            >
                                {/* Avatar */}
                                <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0 text-teal-700 font-bold text-sm font-sans md:mr-4">
                                    {initials}
                                </div>
                                {/* Name */}
                                <div className="flex-1 min-w-0">
                                    <p className="font-semibold text-gray-800 font-sans text-sm leading-tight">{name}</p>
                                </div>
                                {/* Role */}
                                <div className="md:w-48 md:text-center">
                                    <p className="text-gray-700 font-sans text-sm font-medium">{role}</p>
                                </div>
                                {/* Dept badge */}
                                <div className="md:w-36 md:flex md:justify-end">
                                    <span className={`text-xs font-semibold px-3 py-1 rounded-full font-sans ${DEPT_STYLES[s.dept] ?? 'bg-gray-100 text-gray-600'}`}>
                                        {s.dept}
                                    </span>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

// ── Page ───────────────────────────────────────────────────────────────────

export default function AboutUs() {
    return (
        <div className="min-h-screen font-sans">
            <Header />
            <HeroBanner />
            <StatsStrip />
            <div className="max-w-7xl mx-auto px-6 pt-8">
                <Link to="/" className="inline-flex items-center gap-1.5 text-teal-700 font-semibold text-sm font-sans hover:text-teal-600 transition-colors">
                    <ArrowLeft size={15} />
                    Back to Home
                </Link>
            </div>
            <PhilosophySplit />
            <LeadershipMatrix />
            <FacultyDirectory />
            <Footer />
        </div>
    );
}
