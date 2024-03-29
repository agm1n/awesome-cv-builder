import { FunctionComponent, useContext } from 'react';
import { ProjectType } from 'src/types/cv_data';
import 'src/components/Project/Project.scss';
import { TagsList } from 'src/components/Tag/index';
import { ProjectService } from 'src/services/index';
import { LanguageContext } from 'src/context/LanguageContext';

interface Props {
  data: ProjectType;
  activeTags: string[];
  handleTagsFilter: (tag: string) => void;
}

const Project: FunctionComponent<Props> = ({
  data,
  activeTags,
  handleTagsFilter,
}) => {
  const {
    name,
    role,
    tags: projectTags,
    team,
    description,
    environment,
    methodology,
    responsibilities,
  } = data;
  const isActive = ProjectService.isActiveProject(activeTags, projectTags);
  const { t } = useContext(LanguageContext);
  return (
    <div className={`${isActive ? 'active project' : 'project'}`}>
      <div className="project-header">
        <h3>
          {`${name} `}
          {team && (
            <div className="no-wrap">
              <span className="team"> ({team} </span>
              {methodology && (
                <span className="methodology">{methodology}</span>
              )}
              )
            </div>
          )}
        </h3>
        <h5>{role}</h5>
      </div>
      <div className="project-content">
        <div className="project-description">
          <h4>{t('common.description')}</h4>
          <p>{description}</p>
        </div>
        <div className="project-env">
          <h4>{t('common.environment')}</h4>
          <p>{environment}</p>
        </div>
        <div className="project-responsibilities">
          <h4>{t('common.responsibilities')}</h4>
          <div>
            {responsibilities.map((responsibility: string, i: number) => (
              <p key={i}>{responsibility}</p>
            ))}
          </div>
        </div>
      </div>
      <TagsList
        data={projectTags}
        activeTags={activeTags}
        handleTagsClick={handleTagsFilter}
      />
    </div>
  );
};

export default Project;
