import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function HeroSection() {
    return (
        <section className="relative bg-teal-700 min-h-[520px] flex items-center overflow-hidden pt-16">
            {/* Background decorative circles */}
            <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-teal-600 opacity-40 translate-x-1/3 -translate-y-1/4" />
            <div className="absolute bottom-0 right-24 w-64 h-64 rounded-full bg-teal-600 opacity-30 translate-y-1/3" />
            <div className="absolute top-1/2 left-1/2 w-48 h-48 rounded-full bg-teal-500 opacity-20" />

            <div className="max-w-7xl mx-auto px-6 py-16 w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Left: Text & CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                    className="text-white z-10"
                >
                    <div className="flex items-center gap-2 mb-4">
                        <Sparkles size={16} className="text-orange-400" />
                        <span className="text-teal-200 text-sm font-medium font-sans tracking-wide uppercase">Specialized Education</span>
                    </div>
                    <h1 className="font-serif text-4xl md:text-5xl font-black leading-tight mb-5 text-white">
                        Empowering Voices<br />Since 1981
                    </h1>
                    <p className="text-teal-100 text-base leading-relaxed font-sans mb-8 max-w-md">
                        Dedicated to the holistic development and bright future of hearing and speech impaired students through specialized education and care.
                    </p>
                    <button className="group inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-400 text-white font-semibold font-sans px-6 py-3 rounded-full shadow-lg hover:shadow-orange-500/30 transition-all duration-300">
                        Discover Our Programs
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
                    </button>
                </motion.div>

                {/* Right: Illustration */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
                    className="relative hidden md:flex justify-center items-center z-10"
                >
                    <div className="w-80 h-72 rounded-3xl bg-teal-600/60 border border-teal-500/40 backdrop-blur-sm flex items-center justify-center overflow-hidden shadow-2xl">
                        {/* Abstract illustration placeholder with design elements */}
                        <div className="relative w-full h-full flex items-end justify-center pb-6">
                            {/* Silhouette-style graphic */}
                            <div className="absolute top-6 left-1/2 -translate-x-1/2 w-20 h-20 rounded-full bg-teal-400/50 border-2 border-teal-300/60" />
                            <div className="absolute top-16 left-1/2 -translate-x-1/2 w-28 h-36 rounded-2xl bg-teal-400/40 border border-teal-300/40" />

                            {/* Sound wave arcs */}
                            <div className="absolute top-10 right-10 flex gap-1 items-center">
                                {[12, 18, 24, 18, 12].map((h, i) => (
                                    <div key={i} style={{ height: h }} className="w-1 rounded-full bg-orange-400/70" />
                                ))}
                            </div>

                            {/* Bottom text badge */}
                            <div className="absolute bottom-5 bg-white/20 backdrop-blur-sm rounded-xl px-4 py-2 border border-white/30">
                                <p className="text-white text-xs font-semibold text-center font-sans">🏫 Nurturing Independence</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
