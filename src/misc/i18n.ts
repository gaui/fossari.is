import i18n from 'i18next';
import { reactI18nextModule } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const flagCodeMap = {
  en: 'us'
};

const resources = {
  is: {
    translation: {
      days: 'dagar',
      hours: 'klst',
      minutes: 'mín',
      seconds: 'sek',

      its: 'það er',
      isit: 'er',
      friday: 'fössari',
      no: 'nei'
    }
  },
  en: {
    translation: {
      days: 'days',
      hours: 'hrs',
      minutes: 'min',
      seconds: 'sec',

      its: 'it is',
      isit: 'is it',
      friday: 'Friday',
      no: 'no'
    }
  }
};

const instance = i18n
  .use(LanguageDetector)
  .use(reactI18nextModule)
  .init({
    resources,
    fallbackLng: 'is',
    debug: false,
    react: {
      wait: false,
      bindI18n: 'languageChanged loaded',
      bindStore: 'added removed',
      nsMode: 'default'
    }
  });

function mapCountryCode(countryCode: string) {
  return flagCodeMap[countryCode];
}

export { instance as i18nInstance, mapCountryCode };
