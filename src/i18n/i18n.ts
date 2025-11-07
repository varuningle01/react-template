import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "english",
    debug: false,
    detection: {
      order: ["localStorage", "navigator", "htmlTag", "path", "subdomain"],
      caches: ["localStorage"],
    },
    interpolation: {
      escapeValue: false,
    },
    resources: {
      english: {
        translation: require("./locales/english/translation.json"),
      },
      hindi: {
        translation: require("./locales/hindi/translation.json"),
      },
      marathi: {
        translation: require("./locales/marathi/translation.json"),
      },
      german: {
        translation: require("./locales/german/translation.json"),
      },
      french: {
        translation: require("./locales/french/translation.json"),
      },
      spanish: {
        translation: require("./locales/spanish/translation.json"),
      },
    },
  });

export default i18n;
