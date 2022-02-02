import { createContext } from 'react'

export const LOCALE_UK = 'uk';
export const LOCALE_RU = 'ru';
export const LOCALE_EN = 'en';

const initialValue = {
  locale: LOCALE_EN,
  setLocale: (locale) => {
    console.log('-----------------', locale);
  },
};

export const localeContext = createContext(initialValue);
