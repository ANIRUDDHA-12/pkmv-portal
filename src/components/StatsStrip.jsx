import { Users, GraduationCap, BookOpen } from 'lucide-react';

const stats = [
    {
        icon: <Users size={28} className="text-teal-700" />,
        value: '40',
        label: 'Approved Students',
    },
    {
        icon: <GraduationCap size={28} className="text-orange-500" />,
        value: '228+',
        label: 'Successful Alumni',
    },
    {
        icon: <BookOpen size={28} className="text-teal-700" />,
        value: 'Balvarg – 7th',
        label: 'Standard Classes',
    },
];

export default function StatsStrip() {
    return (
        <section className="bg-white shadow-lg relative z-10 mx-4 md:mx-12 -mt-8 rounded-2xl">
            <div className="flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-gray-100">
                {stats.map((stat, idx) => (
                    <div
                        key={idx}
                        className="flex-1 flex flex-col items-center justify-center py-7 px-6 text-center gap-2 group hover:bg-green-50 rounded-2xl transition-colors duration-300"
                    >
                        <div className="mb-1">{stat.icon}</div>
                        <p className="font-serif font-black text-3xl text-gray-800 leading-none tracking-tight">
                            {stat.value}
                        </p>
                        <p className="text-gray-500 text-sm font-medium font-sans uppercase tracking-widest">
                            {stat.label}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
