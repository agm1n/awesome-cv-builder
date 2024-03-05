import { FunctionComponent } from 'react';
import { SkillType } from 'src/types/cv_data';
import { Skill } from 'src/components/Skill/index';
import 'src/components/Skill/List.scss';

interface Props {
  data: SkillType[];
}

const SkillsList: FunctionComponent<Props> = ({ data }) => {
  return (
    <section className="section">
      <div className="container">
        <h2>Skills</h2>
        {data?.map((skill) => <Skill data={skill} key={skill.key} />)}
      </div>
    </section>
  );
};

export default SkillsList;
