import { motion } from 'framer-motion';
import { ArrowLeft, Stethoscope, Ear, Cpu, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CloudinaryImage from '../components/CloudinaryImage';
import { IMAGES } from '../lib/images';

// ── Content blocks ──────────────────────────────────────────────────────────
// Structure uses a `content` object so English/Marathi strings
// can be replaced by translation variables later (e.g. t('therapies.ei.title'))

const content = {
    hero: {
        label: 'Specialized Care',
        title: 'Specialized Therapies & Early Intervention',
        subtitle: 'Comprehensive audiology and speech therapy services designed for early intervention, ensuring every child reaches their fullest communicative potential.',
    },
    sections: [
        {
            id: 'early-intervention',
            icon: <Stethoscope size={22} className="text-orange-500" />,
            tag: 'BT1 Programme',
            title: 'Early Intervention',
            body: [
                'Our Early Intervention programme targets children from birth to three years — the most critical window for auditory development. Grounded in the Auditory-Verbal Therapy (AVT) approach, sessions are structured to build foundational listening skills before formal schooling begins.',
                'Trained therapists work one-on-one with toddlers, guiding them to detect, discriminate, and identify sounds in a nurturing environment. Parents are integral partners: each session includes coaching so families can reinforce progress at home throughout the day.',
            ],
            highlights: [
                'Individual AVT sessions (30–45 min)',
                'Parent counselling & home-programme design',
                'Monthly developmental milestone tracking',
                'Referral coordination with ENT & audiologists',
            ],
            imagePublicId: IMAGES.therapies.earlyIntervention,
            imageAlt: 'Teacher conducting early intervention session with toddlers on mat',
            imageLeft: false,   // image on RIGHT for odd sections
        },
        {
            id: 'audiology-speech',
            icon: <Ear size={22} className="text-teal-700" />,
            tag: 'Ongoing Support',
            title: 'Audiology & Speech Therapy',
            body: [
                'Every student at Pragnya Karuna undergoes a thorough audiological evaluation at enrolment. Based on the audiogram, our certified speech-language pathologists design an Individualized Therapy Plan (ITP) with measurable quarterly goals.',
                'Continuous monitoring ensures therapy evolves alongside the child\'s growth. Sessions target articulation, voice quality, language comprehension, and social communication — equipping students for both academic and everyday life demands.',
            ],
            highlights: [
                'Individualized Therapy Plans (ITP)',
                'Pure-tone & speech audiometry',
                'Articulation & voice therapy',
                'Continuous progress monitoring',
            ],
            imagePublicId: IMAGES.therapies.audiology,
            imageAlt: 'Student wearing headphones during audiology evaluation',
            imageLeft: true,    // image on LEFT for even sections
        },
        {
            id: 'cochlear-implant',
            icon: <Cpu size={22} className="text-teal-700" />,
            tag: '2025–2026 Cohort',
            title: 'Cochlear Implant Classroom (BT1)',
            body: [
                'Our dedicated Cochlear Implant Classroom provides an acoustically optimised environment — low reverberation, sound-treated walls — specifically designed for children who have received cochlear implants and require intensive listening rehabilitation post-surgery.',
                'For the academic year 2025–2026, four students are enrolled in the CI programme. Therapy is delivered in small groups and individual formats, focusing on mapping support, speech perception, and integration of classroom language with everyday communication.',
            ],
            highlights: [
                'Acoustic environment: low-reverberation design',
                '4 students enrolled (2025–2026)',
                'Mapping support in coordination with implant centres',
                'Integration of classroom language & daily communication',
            ],
            imagePublicId: IMAGES.therapies.cochlear,
            imageAlt: 'Students working at round tables in the cochlear implant classroom',
            imageLeft: false,
        },
    ],
};

// ── Sub-components ───────────────────────────────────────────────────────────

function SectionImage({ publicId, alt }) {
    return (
        <div className="w-full rounded-3xl overflow-hidden shadow-xl aspect-[4/3]">
            <CloudinaryImage
                publicId={publicId}
                alt={alt}
                width={800}
                height={600}
                className="w-full h-full object-cover"
            />
        </div>
    );
}

function SectionText({ section }) {
    return (
        <div className="flex flex-col justify-center gap-5">
            {/* Tag + icon */}
            <div className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-xl bg-teal-50 flex items-center justify-center flex-shrink-0">
                    {section.icon}
                </div>
                <span className="text-xs font-semibold font-sans text-orange-500 uppercase tracking-widest">
                    {section.tag}
                </span>
            </div>

            <h2 className="font-serif font-black text-3xl text-gray-800 leading-snug">
                {section.title}
            </h2>

            {section.body.map((para, i) => (
                <p key={i} className="text-gray-600 font-sans text-base leading-relaxed">
                    {para}
                </p>
            ))}

            {/* Highlights list */}
            <ul className="flex flex-col gap-2 mt-1">
                {section.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700 font-sans">
                        <CheckCircle size={16} className="text-teal-600 flex-shrink-0 mt-0.5" />
                        {h}
                    </li>
                ))}
            </ul>
        </div>
    );
}

// ── Page ─────────────────────────────────────────────────────────────────────

export default function Therapies() {
    return (
        <div className="min-h-screen font-sans">
            <Header />

            {/* Slim Hero Banner */}
            <section className="bg-teal-700 pt-24 pb-14 px-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-teal-500/30 via-transparent to-transparent pointer-events-none" />
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-block bg-white/15 text-teal-100 text-xs font-semibold font-sans uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
                            {content.hero.label}
                        </span>
                        <h1 className="font-serif font-black text-4xl md:text-5xl text-white leading-tight mb-4">
                            {content.hero.title}
                        </h1>
                        <p className="text-teal-100 font-sans text-lg leading-relaxed max-w-2xl mx-auto">
                            {content.hero.subtitle}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Back link */}
            <div className="max-w-7xl mx-auto px-6 pt-8">
                <Link
                    to="/"
                    className="inline-flex items-center gap-1.5 text-teal-700 font-semibold text-sm font-sans hover:text-teal-600 transition-colors"
                >
                    <ArrowLeft size={15} />
                    Back to Home
                </Link>
            </div>

            {/* Content Sections — alternating layout */}
            <main className="max-w-7xl mx-auto px-6 py-12 flex flex-col gap-24">
                {content.sections.map((section, idx) => (
                    <motion.div
                        key={section.id}
                        id={section.id}
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                        className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${section.imageLeft ? '' : 'md:[&>*:first-child]:order-last'
                            }`}
                    >
                        <SectionImage
                            publicId={section.imagePublicId}
                            alt={section.imageAlt}
                        />
                        <SectionText section={section} />
                    </motion.div>
                ))}
            </main>

            {/* Divider before footer */}
            <div className="h-px bg-gray-100 mx-6 max-w-7xl mx-auto mt-4" />

            <Footer />
        </div>
    );
}
