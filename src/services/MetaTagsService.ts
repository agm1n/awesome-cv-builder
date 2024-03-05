import { PersonInfoType } from 'src/types/cv_data';
import { generateMetaTags } from 'src/helpers/meta';
import { ReactElement } from 'react';

export const generate = (data?: PersonInfoType): ReactElement[] | undefined => {
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
    const keysMap = {
      title,
      meta: {
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
        revised: new Date(BUILD_DATE)
          .toISOString()
          .slice(0, 19)
          .replace('T', ' '),
        'reply-to': email,
        keywords: [title, fullName, positions, `${nickname} CV`].join(', '),
      },
    };
    return generateMetaTags(keysMap);
  }
};
