import { detectUserCountry } from './locationService'

const LANGUAGE_CACHE_KEY = 'user_language';
const CACHE_DURATION = 7 * 24 * 60 * 60 * 1000;

const COUNTRY_LANGUAGE_MAP: Record<string, string> = {
  'VN': 'vi',
  'US': 'en',
  'GB': 'en',
  'AU': 'en',
  'FR': 'fr',
  'JP': 'ja',
  'CN': 'zh-CN',
  'ID': 'id'
}

export async function detectUserLanguage(): Promise<string> {

  const cached = localStorage.getItem(LANGUAGE_CACHE_KEY);
  if (cached) {
    const { language, timestamp } = JSON.parse(cached);
    if (Date.now() - timestamp < CACHE_DURATION) {
      console.log('Using cached language:', language);
      return language;
    }
  }

  try {
    const countryCode = await detectUserCountry();
    console.log('Detected country code:', countryCode);
    
    const language = COUNTRY_LANGUAGE_MAP[countryCode] || 'en';
    console.log('Mapped language:', language);
    
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
