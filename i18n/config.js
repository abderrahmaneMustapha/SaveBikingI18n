import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    compatibilityJSON: 'v3',
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    resources: {
      en: {
        translation: {
          hello: 'hello world',
          map: 'Map',
          terms: 'Terms',
          about: 'About',
        },
      },
      fr: {
        translation: {
          hello: 'Salut tout le monde',
          map: 'Carte',
          terms: 'Conditions',
          about: 'À propos',
          'Name of this place': 'Nom de la place',
          'Description about this place': 'Description de cette place',
        },
      },
    },
    lng: 'en', // if you're using a language detector, do not define the lng option
    fallbackLng: 'en',

    interpolation: {
      escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
  });
