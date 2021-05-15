import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import en from './en';
import ru from './ru';

const resources = {
  en,
  ru
};

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    detection: {
      order: ['localStorage', 'cookie']
    },
    resources,
    supportedLngs: ['en', 'ru']
  });

export default i18n;
