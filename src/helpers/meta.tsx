/* Generalized helper functions related to meta tags. */
import { ReactElement } from 'react';

export const generateMetaTags = (data: {
  title: string;
  meta: { [key: string]: string };
}): ReactElement[] => {
  const { title, meta } = data;
  const metaKeysArr = Object.keys(meta).map((metaKey, i) => (
    <meta name={metaKey} content={meta[metaKey]} key={`meta_tag_${i}`} />
  ));

  return [<title>{title}</title>, ...metaKeysArr];
};
