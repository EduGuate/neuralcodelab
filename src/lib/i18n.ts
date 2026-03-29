import { headers } from 'next/headers';
import translations from '../../public/translations.json';

type Language = 'en' | 'es' | 'pt' | 'zh';

export async function getLanguage(): Promise<Language> {
    const headersList = await headers();
    const acceptLanguage = headersList.get('accept-language');

    if (!acceptLanguage) return 'es';

    if (acceptLanguage.startsWith('en')) return 'en';
    if (acceptLanguage.startsWith('pt')) return 'pt';
    if (acceptLanguage.startsWith('zh')) return 'zh';

    return 'es';
}

export function getTranslations(lang: Language) {
    return (translations as any)[lang] || translations.es;
}

export function getServerTranslation(lang: Language) {
    const data = getTranslations(lang);

    return (key: string) => {
        const keys = key.split('.');
        let value: any = data;

        for (const k of keys) {
            if (value && typeof value === 'object' && k in value) {
                value = value[k];
            } else {
                return key;
            }
        }

        return value !== undefined ? value : key;
    };
}
