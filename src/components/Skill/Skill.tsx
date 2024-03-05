import { FunctionComponent } from 'react';
import { SkillType } from 'src/types/cv_data';
import 'src/components/Skill/Skill.scss';

interface Props {
  data: SkillType;
}

const Skill: FunctionComponent<Props> = ({ data }) => {
  return (
    <div className="skill" key={data.key}>
      <h3>{data.key}</h3>
      <p>{data.value}</p>
    </div>
  );
};

export default Skill;
