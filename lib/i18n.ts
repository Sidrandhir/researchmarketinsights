import en from './locales/en';
import zh from './locales/zh';

export const languages = {
  en: 'English',
  zh: '中文',
  ko: '한국어',
  ar: 'العربية',
  fr: 'Français',
  es: 'Español',
  de: 'Deutsch',
  jp: '日本語',
} as const;

export type Language = keyof typeof languages;

export const defaultLanguage: Language = 'en';

// Translation data
const translations: Record<Language, Record<string, unknown>> = {
  en,
  zh,
  ko: en, // Fallback to English for now
  ar: en, // Fallback to English for now
  fr: en, // Fallback to English for now
  es: en, // Fallback to English for now
  de: en, // Fallback to English for now
  jp: en, // Fallback to English for now
};

export function getLanguageFromPathname(pathname: string): Language {
  const segments = pathname.split('/');
  const pathLang = segments[1] as Language;
  return languages[pathLang] ? pathLang : defaultLanguage;
}

export function getPathnameWithoutLanguage(pathname: string): string {
  const segments = pathname.split('/');
  const pathLang = segments[1] as Language;
  return languages[pathLang] ? '/' + segments.slice(2).join('/') : pathname;
}

export function getLocalizedPathname(pathname: string, language: Language): string {
  const pathWithoutLang = getPathnameWithoutLanguage(pathname);
  return language === defaultLanguage ? pathWithoutLang : `/${language}${pathWithoutLang}`;
}

// Translation function
export function getTranslation(lang: string, key: string): string {
  const defaultLanguage = 'en' as const;
  const keys = key.split('.');
  
  let value: any = translations[lang as Language] || translations[defaultLanguage];
  
  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = value[k];
    } else {
      // Fallback to English if translation not found
      value = translations[defaultLanguage];
      for (const fallbackKey of keys) {
        if (value && typeof value === 'object' && fallbackKey in value) {
          value = value[fallbackKey];
        } else {
          return key; // Return the key if translation not found
        }
      }
      break;
    }
  }
  
  return typeof value === 'string' ? value : key;
}

// Hook for client-side translation
export function useTranslation(lang: Language = 'en') {
  return {
    t: (key: string) => getTranslation(lang, key),
    language: lang,
    languages,
  };
} 