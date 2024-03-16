import { PersonInfoType } from 'src/types/cv_data';
import { generateMetaTags } from 'src/helpers/meta';
import { ReactElement, useContext } from 'react';
import { defaultLocale, LanguageContext } from 'src/context/LanguageContext';

interface KeysMapType {
  title: string;
  meta: {
    language: string;
    revised: string;
    [key: string]: string;
  };
}

export const generate = (data?: PersonInfoType): ReactElement[] | undefined => {
  const { language } = useContext(LanguageContext);
  let keysMap: KeysMapType = {
    title: 'CV',
    meta: {
      language: language || defaultLocale,
      revised: new Date(BUILD_DATE)
        .toISOString()
        .slice(0, 19)
        .replace('T', ' '),
    },
  };
  if (data?.contacts) {
    const {
      linkedin,
      facebook,
      instagram,
      telegram,
      twitter,
      github,
      email,
      web,
    } = data.contacts || {};
    const positions = `${data.description}`?.split(',');
    const fullName = data.fullName || 'Some person';
    const title = `${fullName} CV`;
    const topic = `This is page to show ${fullName} expertise`;
    const nickname =
      '' + linkedin || facebook || instagram || telegram || twitter || github;
    keysMap = {
      ...keysMap,
      title,
      meta: {
        ...keysMap.meta,
        description: title,
        subject: topic,
        summary: topic,
        abstract: topic,
        subtitle: topic,
        topic: title,
        pagename: title,
        ...(web && { copyright: web, url: web }),
        author: nickname,
        owner: nickname,
        'reply-to': email,
        keywords: [title, fullName, positions, `${nickname} CV`].join(', '),
      },
    };
  }
  return generateMetaTags(keysMap);
};
