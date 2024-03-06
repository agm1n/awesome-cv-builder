import * as React from 'react';
import { useState } from 'react';
import 'src/components/Footer/Footer.scss';
import Modal from 'src/components/Modal/Modal';

interface Props {}

const Footer: React.FunctionComponent<Props> = () => {
  const [showModal, setShoModal] = useState<boolean>(false);
  return (
    <section className="section footer do-not-print">
      <button id="openModal" onClick={() => setShoModal(true)}>
        Click me to show modal
      </button>
      <Modal handleClose={() => setShoModal(false)} isOpen={showModal}>
        <p>Some interest info</p>
      </Modal>
    </section>
  );
};

export default Footer;
