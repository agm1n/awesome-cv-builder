import 'src/App.scss';
import cvJSONfile from 'src/data/cv.json';
import Header from 'src/components/Header/Header';
import { SkillsList } from 'src/components/Skill/index';
import { ProjectsList } from 'src/components/Project/index';
import { Summary } from 'src/components/Summary/index';
import Footer from 'src/components/Footer/Footer';
import { defaultLocale, LanguageProvider } from 'src/context/LanguageContext';
import useTranslation from 'src/hooks/useTranslation';
import { useCallback, useState } from 'react';
import { PersonInfoType, CVJSONType } from 'src/types/cv_data';

function App() {
  const cvJSON: CVJSONType = cvJSONfile;
  const localesBasedOnCV = cvJSON.locales
    ? Object.keys(cvJSON.locales)
    : [defaultLocale];
  const { language } = useTranslation(localesBasedOnCV);
  const [data, setData] = useState<PersonInfoType>(cvJSON.locales[language]);

  const onLocaleUpdate = useCallback(async (newLanguage = '') => {
    if (cvJSON.locales[newLanguage]) {
      setData(cvJSON.locales[newLanguage] as PersonInfoType);
    }
  }, []);

  return (
    <LanguageProvider cvLocales={localesBasedOnCV}>
      <Header
        data={data}
        locales={localesBasedOnCV}
        onLocaleUpdate={onLocaleUpdate}
      />
      <Summary data={data.summary} />
      <SkillsList data={data.skills} />
      <ProjectsList data={data.projects} />
      <Footer />
    </LanguageProvider>
  );
}

export default App;
