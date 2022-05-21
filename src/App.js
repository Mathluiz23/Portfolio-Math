import { Route, Routes} from 'react-router-dom';
import Home from './Pages/Home';
import Projetos from './Pages/Projetos';
import PortfolioProvider from './context/PortfolioProvider';
import '../src/css/App.css';

function App() {
  return (
    <div>
      <PortfolioProvider>
        <Routes>
          <Route path="/projects" element={ <Projetos /> } />
          <Route path="/cv" element={ <Projetos /> } />
          <Route exatc path="/" element={< Home />} />
        </Routes>
      </PortfolioProvider>
    </div>
  );
}

export default App;
