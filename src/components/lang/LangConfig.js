import { initReactI18next } from "react-i18next";
import i18n from "i18next";

i18n.use(initReactI18next).init({
  lng: "",
  resources: {
    en: {
      translation: {
        Hi: "Hi",
        Actions: "Actions",
        cloro: "red"

      }
    },
    tm: {
      translation: {
        Hi: "வணக்கம்",
        Actions: "செயல்கள்",
        cloro: "red"

      }
    },
    sp: {
      translation: {
        Hi: "Hola",
        Actions: "Comportamiento",
        cloro: "red"

      }
    },
    tl: {
      translation: {
        Hi: "హాయ్",
        Actions: "చర్యలు",
        cloro: "చర్యలు"

      }
    },ar: {
      translation: {
        Hi: "مرحبا",
        Actions: "اكشن",
        cloro: "احمر"

      }
    }
  },
  keySeparator: false,
  interpolation: { escapeValue: false }
});

export default i18n;
