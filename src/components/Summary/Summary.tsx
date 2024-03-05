import { FunctionComponent } from 'react';

import 'src/components/Summary/Summary.scss';

interface Props {
  data: string[];
}

const Summary: FunctionComponent<Props> = ({ data }) => {
  return (
    <section className="section summary">
      <div className="container">
        <h2 className="title">About me</h2>
        <ul>
          {data?.map((info, i) => <li key={`summaty_key_${i}`}>{info}</li>)}
        </ul>
      </div>
    </section>
  );
};

export default Summary;
