/* no-use-before-define */
import { createContext, ReactNode } from 'react';
import useTranslation from 'src/hooks/useTranslation';
export const defaultLocale = 'en';
interface LanguageProviderType {
  cvLocales?: string[];
  children?: ReactNode;
  language?: string;
  updateLanguage: (newLanguage: string) => Promise<void>;
  t: (translation: string) => string;
}

const defaultLanguageProvider: LanguageProviderType = {
  t: (translation: string) => {
    console.warn(
      'Language provider not initialized. Translation: ',
      translation,
    );
    return '';
  },
  updateLanguage: async (newLanguage: string) => {
    console.warn(
      'Language provider not initialized. Attempted to update language to:',
      newLanguage,
    );
  },
};

export const LanguageContext = createContext<LanguageProviderType>(
  defaultLanguageProvider,
);
export const LanguageProvider = ({
  cvLocales,
  children,
}: {
  cvLocales?: string[];
  children: ReactNode;
}) => {
  const { t, language, updateLanguage } = useTranslation(cvLocales);
  return (
    <LanguageContext.Provider value={{ language, updateLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
