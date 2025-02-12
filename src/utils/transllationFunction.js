import cat from "../translations/cat.json";
import es from "../translations/es.json";
import en from "../translations/en.json";

// Store available translations
const translations = { cat, es, en };

// Default language (can be changed dynamically)
let currentLanguage = "cat";

// Function to change the language
export const setLanguage = (lang) => {
  if (translations[lang]) {
    currentLanguage = lang;
  } else {
    console.warn(`Language "${lang}" not found. Falling back to English.`);
    currentLanguage = "cat";
  }
};

// Function to get translation
export const t = (key, params = {}) => {
  const langData = translations[currentLanguage] || translations["cat"];
  let translation = langData[key] || key; // Fallback to key if not found

  // Replace placeholders (e.g., {name})
  Object.keys(params).forEach((param) => {
    translation = translation.replace(`{${param}}`, params[param]);
  });

  return translation;
};
