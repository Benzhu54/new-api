import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'
import en from './locales/en.json'
import fr from './locales/fr.json'
import ja from './locales/ja.json'
import ru from './locales/ru.json'
import vi from './locales/vi.json'
import zh from './locales/zh.json'
import az from './locales/az.json'
import azCyrl from './locales/az-Cyrl.json'

export const resources = { en, zh, fr, ru, ja, vi, az, azCyrl } as const

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    supportedLngs: ['en', 'zh', 'fr', 'ru', 'ja', 'vi', 'az', 'az-Cyrl'],
    load: 'languageOnly',
    nsSeparator: false,
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  })