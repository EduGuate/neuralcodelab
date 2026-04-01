'use client';

import { useState, useEffect, createContext, useContext } from 'react';

type Language = 'en' | 'es' | 'pt' | 'zh';

interface TranslationContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => any;
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

// Browser language detection
const detectBrowserLanguage = (): Language => {
    if (typeof window === 'undefined') return 'es'; // Default to Spanish for SSR

    const browserLang = navigator.language.toLowerCase();

    if (browserLang.startsWith('en')) return 'en';
    if (browserLang.startsWith('es')) return 'es';
    if (browserLang.startsWith('pt')) return 'pt';
    if (browserLang.startsWith('zh')) return 'zh';

    return 'es'; // Default fallback
};

export function TranslationProvider({
    children,
    initialLanguage = 'es',
    initialTranslations = {}
}: {
    children: React.ReactNode;
    initialLanguage?: Language;
    initialTranslations?: any;
}) {
    const [language, setLanguageState] = useState<Language>(initialLanguage);
    const [translations, setTranslations] = useState<any>(initialTranslations);
    const [isLoaded, setIsLoaded] = useState(Object.keys(initialTranslations).length > 0);

    // Initialize language from localStorage or browser
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const savedLang = localStorage.getItem('language') as Language;
            if (savedLang && ['en', 'es', 'pt', 'zh'].includes(savedLang)) {
                setLanguageState(savedLang);
            } else {
                const detectedLang = detectBrowserLanguage();
                setLanguageState(detectedLang);
                localStorage.setItem('language', detectedLang);
            }
        }
    }, []);

    // Load translations if not provided (fallback)
    useEffect(() => {
        if (!isLoaded) {
            const loadTranslations = async () => {
                try {
                    const response = await fetch('/translations.json');
                    const data = await response.json();
                    setTranslations(data);
                    setIsLoaded(true);
                } catch (error) {
                    console.error('Failed to load translations:', error);
                    setIsLoaded(true);
                }
            };
            loadTranslations();
        }
    }, [isLoaded]);

    const setLanguage = (lang: Language) => {
        setLanguageState(lang);
        if (typeof window !== 'undefined') {
            localStorage.setItem('language', lang);
            document.documentElement.lang = lang;
        }
    };

    const t = <T = any>(key: string): T => {
        if (!isLoaded) return key as unknown as T;

        const activeLang = translations[language] ? language : 'es';
        if (!translations[activeLang]) return key as unknown as T;

        const keys = key.split('.');
        let value: any = translations[activeLang];

        for (const k of keys) {
            if (value && typeof value === 'object' && k in value) {
                value = value[k];
            } else {
                return key as unknown as T; // Return key if translation not found
            }
        }

        return (value !== undefined ? value : key) as T;
    };

    return (
        <TranslationContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </TranslationContext.Provider>
    );
}

export function useTranslation() {
    const context = useContext(TranslationContext);
    if (!context) {
        throw new Error('useTranslation must be used within TranslationProvider');
    }
    return context;
}
