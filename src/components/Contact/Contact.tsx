import { FunctionComponent } from 'react';
import { NormalizesContactItemType } from 'src/types/cv_data';
import { Link } from 'react-router-dom';

interface Props {
  contact: NormalizesContactItemType;
}

const Contact: FunctionComponent<Props> = ({ contact }) => {
  return (
    <Link to={contact.link} target="_blank">
      {contact.icon}
      <span className="only-for-print">{contact.text}</span>
    </Link>
  );
};

export default Contact;
