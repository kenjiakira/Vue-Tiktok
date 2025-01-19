import { detectUserCountry } from './locationService'

const LANGUAGE_CACHE_KEY = 'user_language';
const CACHE_DURATION = 7 * 24 * 60 * 60 * 1000;

export const SUPPORTED_LANGUAGES = {
  'en': 'English',
  'vi': 'Tiếng Việt',
  'fr': 'Français',
  'ja': '日本語',
  'zh-CN': '中文',
  'id': 'Indonesia'
} as const;

export type LanguageCode = keyof typeof SUPPORTED_LANGUAGES;

const COUNTRY_LANGUAGE_MAP: Record<string, LanguageCode> = {
  'VN': 'vi',
  'US': 'en',
  'GB': 'en',
  'AU': 'en',
  'FR': 'fr',
  'JP': 'ja',
  'CN': 'zh-CN',
  'ID': 'id'
}

export function isValidLanguage(lang: string): lang is LanguageCode {
  return lang in SUPPORTED_LANGUAGES;
}

export async function detectUserLanguage(): Promise<LanguageCode> {
  const cached = localStorage.getItem(LANGUAGE_CACHE_KEY);
  if (cached) {
    const { language, timestamp } = JSON.parse(cached);
    if (Date.now() - timestamp < CACHE_DURATION && isValidLanguage(language)) {
      return language;
    }
  }

  try {
    // Try browser language first
    const browserLang = navigator.language.split('-')[0];
    if (isValidLanguage(browserLang)) {
      return browserLang;
    }

    // Fall back to country detection
    const countryCode = await detectUserCountry();
    const language = COUNTRY_LANGUAGE_MAP[countryCode] || 'en';
    
    localStorage.setItem(LANGUAGE_CACHE_KEY, JSON.stringify({
      language,
      timestamp: Date.now()
    }));
    
    return language;
  } catch (error) {
    console.error('Error detecting language:', error);
    return 'en';
  }
}

export function getLanguageFromCountry(countryCode: string): string {
  return COUNTRY_LANGUAGE_MAP[countryCode] || 'en';
}
