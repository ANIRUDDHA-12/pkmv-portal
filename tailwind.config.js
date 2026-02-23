/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                teal: {
                    school: '#0F766E',
                },
                orange: {
                    school: '#F97316',
                },
                mint: '#F0FDF4',
                navy: '#1E293B',
            },
            fontFamily: {
                serif: ['Merriweather', 'Georgia', 'serif'],
                sans: ['Inter', 'system-ui', 'sans-serif'],
            },
            backdropBlur: {
                md: '12px',
            },
        },
    },
    plugins: [],
}
