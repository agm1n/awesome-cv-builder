export const isActiveTag = (
  activeTags: string[],
  tagForChecking: string,
): boolean => !!activeTags?.includes(tagForChecking);
