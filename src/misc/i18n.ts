import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const flagCodeMap = {
  en: 'us',
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
      graduation: 'útskrift',
      no: 'nei',
      ad: 'Vilt þú auglýsa hér?',
    },
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
      graduation: 'graduation',
      no: 'no',
      ad: 'Do you want to advertise here?',
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'is',
    debug: false,
    react: {
      useSuspense: false,
      bindI18n: 'languageChanged loaded',
      bindStore: 'added removed',
      nsMode: 'default',
    },
  });

function mapCountryCode(countryCode: string): string {
  return flagCodeMap[countryCode];
}

export { i18n as i18nInstance, mapCountryCode };
