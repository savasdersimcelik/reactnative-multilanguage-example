import i18next from 'i18next';
import { NativeModules, Platform } from 'react-native';
import { initReactI18next, useTranslation } from 'react-i18next';
import tr from './tr';
import en from './en';

const deviceLanguage = Platform.OS === 'ios'
  ? NativeModules.SettingsManager.settings.AppleLocale || NativeModules.SettingsManager.settings.AppleLanguages[0]
  : NativeModules.I18nManager.localeIdentifier;
let parse = deviceLanguage.split('_').slice(0, -1);
let lang = parse[0] ? parse[0] : 'tr';

const languageDetector: any = {
  type: 'languageDetector',
  async: true,
  detect: (cb: (locale: string) => void) => cb(lang),
  init: () => { },
  cacheUserLanguage: () => { },
};

i18next
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'tr',
    debug: true,
    resources: {
      tr: tr,
      en: en,
    },
  });

export default i18next;