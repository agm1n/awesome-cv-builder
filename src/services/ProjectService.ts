export const isActiveProject = (
  activeTags: string[],
  projectTags: string[],
): boolean =>
  !activeTags?.length || projectTags.some((projectTag) => activeTags.includes(projectTag.toLowerCase()));
