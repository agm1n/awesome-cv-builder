import { FunctionComponent } from 'react';
import 'src/components/Tag/List.scss';
import * as ProjectService from 'src/services/ProjectService';

interface Props {
  data: string[];
  activeTags: string[];
  handleTagsClick: (tag: string) => void;
}

const TagsList: FunctionComponent<Props> = ({
  data,
  activeTags,
  handleTagsClick,
}) => {
  return (
    <div className="tags do-not-print">
      {data.map((tag, i) => (
        <span
          onClick={() => handleTagsClick(tag)}
          className={`${!activeTags?.length || ProjectService.isActiveProject(activeTags, [tag]) ? 'tag active' : 'tag'} `}
          key={`tag_${i}`}
        >
          {tag}
        </span>
      ))}
    </div>
  );
};

export default TagsList;
