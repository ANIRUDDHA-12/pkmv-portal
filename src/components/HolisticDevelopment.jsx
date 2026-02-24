import { ArrowRight, Fingerprint } from 'lucide-react';
import CloudinaryImage from './CloudinaryImage';
import { IMAGES } from '../lib/images';

export default function HolisticDevelopment() {
    return (
        <section className="bg-white py-20 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
                {/* Left: Text */}
                <div>
                    <div className="w-10 h-1 bg-orange-500 rounded mb-5" />
                    <h2 className="font-serif text-4xl font-black text-teal-700 mb-6 leading-snug">
                        Holistic Development
                    </h2>
                    <p className="text-gray-600 font-sans text-base leading-relaxed mb-5">
                        At Pragnya Karuna Vidyalaya, we focus on instilling strong values and social awareness in our students alongside academic excellence. We believe that every child deserves an environment where they are understood, supported, and challenged to grow.
                    </p>
                    <p className="text-gray-600 font-sans text-base leading-relaxed mb-8">
                        Our modern facilities support a nurturing environment designed specifically for the unique needs of our students, ensuring their safety and comfort at all times.
                    </p>
                    <a
                        href="#"
                        className="inline-flex items-center gap-2 text-teal-700 font-semibold font-sans hover:text-teal-600 transition-colors group"
                    >
                        Learn More About Us
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
                    </a>
                </div>

                {/* Right: Cloudinary Image with glassmorphism overlay */}
                <div className="relative rounded-3xl overflow-hidden shadow-xl h-80 md:h-96 bg-teal-100">
                    {/* Cloudinary image fills the entire card */}
                    <CloudinaryImage
                        publicId={IMAGES.holistic.classroom}
                        alt="Classroom at Pragnya Karuna Vidyalaya"
                        width={800}
                        height={600}
                        className="w-full h-full object-cover"
                    />

                    {/* Glassmorphism overlay card at bottom */}
                    <div className="absolute bottom-0 left-0 right-0 m-4 glass rounded-2xl p-4 bg-white/70 backdrop-blur-md border border-white/50 shadow-lg">
                        <div className="flex items-start gap-3">
                            <div className="w-9 h-9 rounded-xl bg-orange-500 flex items-center justify-center flex-shrink-0 shadow-md">
                                <Fingerprint size={18} className="text-white" />
                            </div>
                            <div>
                                <p className="font-semibold text-sm text-gray-800 font-sans mb-1">Biometric Attendance System</p>
                                <p className="text-gray-900 text-xs font-sans leading-snug">
                                    Ensuring student safety with integrated state-of-the-art technology integration.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
