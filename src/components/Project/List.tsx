import { FunctionComponent, useContext, useState } from 'react';
import { ProjectType } from 'src/types/cv_data';
import 'src/components/Project/List.scss';
import { Project } from 'src/components/Project/index';
import { useSearchParams } from 'react-router-dom';
import { TagService } from 'src/services/index';
import { LanguageContext } from 'src/context/LanguageContext';

interface Props {
  data: ProjectType[];
}

const ProjectsList: FunctionComponent<Props> = ({ data }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeURLSearchTags = searchParams.get('tags')?.split(',') || [];
  const [activeTags, setActiveTags] = useState<string[]>([
    ...activeURLSearchTags,
  ]);
  const handleTagsFilter = (tag: string) => {
    const selectedTag = tag.toLowerCase();
    let result;
    if (TagService.isActiveTag(activeTags, selectedTag)) {
      result = activeTags.filter((tagId) => tagId !== selectedTag);
    } else {
      result = [...activeTags, selectedTag];
    }
    setActiveTags(result);
    searchParams.set('tags', result.join(','));
    setSearchParams(searchParams);
  };
  const { t } = useContext(LanguageContext);

  return (
    <section className="section experience">
      <div className="container">
        <h2 className="title">{t('common.experience')}</h2>
        {data?.map((project, i) => (
          <Project
            data={project}
            key={i}
            activeTags={activeTags}
            handleTagsFilter={handleTagsFilter}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsList;
