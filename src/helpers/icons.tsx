/* Generalized helper functions related to icons. */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faGlobe,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';
import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
  faTelegram,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { ReactElement } from 'react';

export const getCorrectIconByKey = (key: string): ReactElement => {
  switch (key) {
    case 'linkedin':
      return <FontAwesomeIcon icon={faLinkedin} />;
    case 'github':
      return <FontAwesomeIcon icon={faGithub} />;
    case 'email':
      return <FontAwesomeIcon icon={faEnvelope} />;
    case 'telegram':
      return <FontAwesomeIcon icon={faTelegram} />;
    case 'web':
      return <FontAwesomeIcon icon={faGlobe} />;
    case 'facebook':
      return <FontAwesomeIcon icon={faFacebook} />;
    case 'instagram':
      return <FontAwesomeIcon icon={faInstagram} />;
    case 'twitter':
      return <FontAwesomeIcon icon={faTwitter} />;
    case 'phone':
      return <FontAwesomeIcon icon={faPhone} />;
    default:
      return <></>;
  }
};
