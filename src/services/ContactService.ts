/* Generalized service functions related to contacts. */
import { ContactsType, NormalizesContactItemType } from 'src/types/cv_data';
import { getCorrectIconByKey } from 'src/helpers/icons';

export const normalizeContactData = (
  contacts: ContactsType,
): NormalizesContactItemType[] => {
  const resultContacts = [];
  for (const key of Object.keys(contacts)) {
    const value = contacts[key as keyof ContactsType];
    if (value) {
      const contact = {
        icon: getCorrectIconByKey(key),
        link: '',
        text: '',
      };
      switch (key) {
        case 'linkedin':
          contact.link = `https://linkedin.com/in/${value}`;
          contact.text = `linkedin.com/in/${value}`;
          break;
        case 'github':
          contact.link = `https://github.com/${value}`;
          contact.text = `github.com/${value}`;
          break;
        case 'email':
          contact.link = `mailto:${value}`;
          contact.text = `${value}`;
          break;
        case 'telegram':
          contact.link = `https://t.me/${value}`;
          contact.text = `t.me/${value}`;
          break;
        case 'web':
          contact.link = `${value}`;
          contact.text = `${value}`;
          break;
        case 'facebook':
          contact.link = `https://facebook.com/${value}`;
          contact.text = 'facebook.com/';
          break;
        case 'twitter':
          contact.link = `https://x.com/${value}`;
          contact.text = `x.com/${value}`;
          break;
        case 'instagram':
          contact.link = `https://www.instagram.com/${value}`;
          contact.text = `instagram.com/${value}`;
          break;
        case 'phone':
          contact.link = `tel:${value}`;
          contact.text = `${value}`;
          break;
        default:
          break;
      }
      resultContacts.push(contact);
    }
  }
  return resultContacts;
};
