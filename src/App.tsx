import 'src/App.scss';
import cvJSON from 'src/data/cv.json';
import Header from 'src/components/Header/Header';
import { SkillsList } from 'src/components/Skill/index';
import { ProjectsList } from 'src/components/Project/index';
import { Summary } from 'src/components/Summary/index';
import Footer from 'src/components/Footer/Footer';

function App() {
  const data = cvJSON;

  return (
    <>
      <Header data={data} />
      <Summary data={data.summary} />
      <SkillsList data={data.skills} />
      <ProjectsList data={data.projects} />
      <Footer />
    </>
  );
}

export default App;
