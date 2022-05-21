import { Route, Routes} from 'react-router-dom';
import Home from './Pages/Home';
import Projetos from './Pages/Projetos';
import PortfolioProvider from './context/PortfolioProvider';
import '../src/css/App.css';
import CvPage from './Pages/CvPage';

function App() {
  return (
    <div>
      <PortfolioProvider>
        <Routes>
          <Route path="/projects" element={ <Projetos /> } />
          <Route exact path="/cv" element={ <CvPage /> } />
          <Route exatc path="/" element={< Home />} />
        </Routes>
      </PortfolioProvider>
    </div>
  );
}

export default App;
