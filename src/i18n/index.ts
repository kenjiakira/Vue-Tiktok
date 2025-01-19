import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import vi from './locales/vi.json'
import fr from './locales/fr.json'
import ja from './locales/ja.json'
import zhCN from './locales/zh-CN.json'
import id from './locales/id.json'

export const i18n = createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    en,
    vi,
    fr,
    ja,
    'zh-CN': zhCN,
    id
  }
})

export const availableLocales = ['en', 'vi']
