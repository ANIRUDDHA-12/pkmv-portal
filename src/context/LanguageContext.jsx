import { createContext, useContext, useState } from 'react';
import { translations } from '../locales/translations';

// ── Context ───────────────────────────────────────────────────────────────
export const LanguageContext = createContext(null);

// ── Provider ──────────────────────────────────────────────────────────────
export function LanguageProvider({ children }) {
    // Marathi is the default language as mandated
    const [language, setLanguage] = useState('en');

    const toggleLanguage = () =>
        setLanguage((prev) => (prev === 'mr' ? 'en' : 'mr'));

    /**
     * Translation helper with dot-notation support and safe fallback.
     * t('nav', 'home')                → translations[lang].nav.home
     * t('studentLife.tabs', 'all')    → translations[lang].studentLife.tabs.all
     * Returns the key itself if translation is missing — never crashes.
     */
    const t = (section, key) => {
        const parts = section.split('.');
        let obj = translations[language];
        for (const part of parts) obj = obj?.[part];
        return obj?.[key] || key;
    };

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

// ── Custom hook ───────────────────────────────────────────────────────────
/** Usage: const { language, toggleLanguage, t } = useLanguage(); */
export function useLanguage() {
    const ctx = useContext(LanguageContext);
    if (!ctx) {
        throw new Error('useLanguage must be used inside <LanguageProvider>');
    }
    return ctx;
}
