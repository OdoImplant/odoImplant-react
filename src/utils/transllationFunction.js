import cat from "../translations/cat.json";
import es from "../translations/es.json";
import en from "../translations/en.json";

const translations = { cat, es, en };

let currentLanguage = "cat";

export const setLanguage = (lang) => {
  if (translations[lang]) {
    currentLanguage = lang;
  } else {
    console.warn(`Language "${lang}" not found. Falling back to Catalan.`);
    currentLanguage = "cat";
  }
};

export const t = (key, params = {}) => {
  const langData = translations[currentLanguage] || translations["cat"];
  let translation = langData[key] || key;

  Object.keys(params).forEach((param) => {
    translation = translation.replace(`{${param}}`, params[param]);
  });

  return translation;
};
