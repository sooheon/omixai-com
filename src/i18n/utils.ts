import en from './en.json';
import ko from './ko.json';

export type Language = 'en' | 'ko';

const translations = { en, ko };

export function getTranslations(lang: Language) {
  return translations[lang];
}
