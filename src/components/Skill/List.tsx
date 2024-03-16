import { FunctionComponent, useContext } from 'react';
import { SkillType } from 'src/types/cv_data';
import { Skill } from 'src/components/Skill/index';
import 'src/components/Skill/List.scss';
import { LanguageContext } from 'src/context/LanguageContext';

interface Props {
  data: SkillType[];
}

const SkillsList: FunctionComponent<Props> = ({ data }) => {
  const { t } = useContext(LanguageContext);
  return (
    <section className="section">
      <div className="container">
        <h2>{t('common.skills')}</h2>
        {data?.map((skill) => <Skill data={skill} key={skill.key} />)}
      </div>
    </section>
  );
};

export default SkillsList;
