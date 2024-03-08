import * as React from 'react';
import {useState} from 'react';
import 'src/components/Footer/Footer.scss';
import Modal from 'src/components/Modal/Modal';
import {Link} from "react-router-dom";

interface Props {
}

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

            <div className="do-not-print" id="postScriptum">
                **this page based on
                <Link to="https://github.com/agm1n/awesome-cv-builder" target="_blank">
                    own library
                </Link>
            </div>
        </section>
    );
};

export default Footer;
