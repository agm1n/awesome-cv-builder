import { FunctionComponent } from 'react';
import { ContactsType } from 'src/types/cv_data';
import { Contact } from 'src/components/Contact/index';
import 'src/components/Contact/List.scss';
import { ContactService } from 'src/services';

interface Props {
  contacts: ContactsType;
}

const Contacts: FunctionComponent<Props> = ({ contacts }) => {
  const preparedContact = ContactService.normalizeContactData(contacts);
  return (
    <ul id="contacts">
      {preparedContact.map((contact, i) => (
        <li key={`contact_${i}`}>
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
};

export default Contacts;
