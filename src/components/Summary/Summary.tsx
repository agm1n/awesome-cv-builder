import { FunctionComponent, useContext } from 'react';

import 'src/components/Summary/Summary.scss';
import { LanguageContext } from 'src/context/LanguageContext';

interface Props {
  data: string[];
}

const Summary: FunctionComponent<Props> = ({ data }) => {
  const { t } = useContext(LanguageContext);

  return (
    <section className="section summary">
      <div className="container">
        <h2 className="title">{t('common.aboutMe')}</h2>
        <ul>
          {data?.map((info, i) => <li key={`summaty_key_${i}`}>{info}</li>)}
        </ul>
      </div>
    </section>
  );
};

export default Summary;
