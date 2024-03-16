import { useState, useEffect, useRef, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import { defaultLocale } from 'src/context/LanguageContext';
const getLanguageFile = async ({ language }: { language: string }) => {
  const module = await import(`src/languages/${language}.json`);
  return module.default;
};
const setInitialLanguage = (cvLocales: string[] = [], urlLocale = '') => {
  const storedLocale = localStorage.getItem('locale');
  if (!storedLocale || urlLocale !== storedLocale) {
    const resultLocale =
      urlLocale && cvLocales.length && cvLocales.includes('' + urlLocale)
        ? urlLocale
        : cvLocales.length
          ? cvLocales[0]
          : defaultLocale;
    localStorage.setItem('locale', resultLocale);
    return resultLocale;
  } else {
    return storedLocale;
  }
};
export default function useTranslation(cvLocales?: string[]) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [{ language, strings }, setLanguage] = useState({
    language: setInitialLanguage(
      cvLocales,
      searchParams.get('locale') || undefined,
    ),
    strings: {},
  });
  const isJsonFetched = useRef(false);
  const updateLanguage = useCallback(
    async (newLanguage: string) => {
      if (isJsonFetched.current && newLanguage === language) return;
      let fetchedStrings;
      try {
        fetchedStrings = await getLanguageFile({ language: newLanguage });
      } catch (e) {
        fetchedStrings = await getLanguageFile({ language: defaultLocale });
      }
      isJsonFetched.current = true;
      setLanguage({
        language: newLanguage,
        strings: fetchedStrings,
      });
      localStorage.setItem('locale', newLanguage);
      searchParams.set('locale', newLanguage);
      setSearchParams(searchParams);
      document.documentElement.setAttribute('lang', newLanguage);
      return;
    },
    [language, searchParams, setSearchParams],
  );
  const t = (translation: string) => {
    const keys = translation.split('.');
    let result = strings;
    for (let i = 0; i < keys.length; i++) {
      result = result[keys[i] as keyof object];
      if (!result) break;
    }
    return `${result || translation || 'no translation'}`;
  };
  useEffect(() => {
    updateLanguage(language);
  }, [language, updateLanguage]);
  return { t, language, updateLanguage };
}
