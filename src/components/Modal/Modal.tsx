import * as React from 'react';
import { ReactElement, useEffect } from 'react';
import 'src/components/Modal/Modal.scss';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface Props {
  children: ReactElement;
  isOpen: boolean;
  handleClose: (a?: string) => void;
}

const Modal: React.FunctionComponent<Props> = ({
  children,
  isOpen,
  handleClose,
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }
    const closeOnEscapeKey = (e: KeyboardEvent) =>
      e.key === 'Escape' ? handleClose() : null;
    document.body.addEventListener('keydown', closeOnEscapeKey);
    return () => {
      document.body.style.overflow = 'auto';
      document.body.removeEventListener('keydown', closeOnEscapeKey);
    };
  }, [isOpen, handleClose]);

  return !isOpen ? null : (
    <div className="modal do-not-print">
      <div className="modal-content-wrapper">
        <button className="close-btn" onClick={() => handleClose()}>
          <FontAwesomeIcon icon={faClose} />
        </button>
        <div className="modal-content">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
