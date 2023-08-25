import { Route, Routes } from 'react-router-dom';
import githubLogo from '../../assets/images/logo-github.png';
import './styles.scss';
import Home from '../../pages/Home';
import Faq from '../../pages/Faq';
import Menu from '../Menu';

function App() {
  return (
    <main className="app">
      <header className="app__header">
        <section className="app__header-title">
          <img src={githubLogo} alt="github title" className="app__header-logo" />
          <span className="app__header-detail">Search.</span>
        </section>
        <Menu />
      </header>
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/faq"
          element={<Faq />}
        />
      </Routes>
    </main>
  );
}

export default App;
