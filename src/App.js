import { Route, Routes} from 'react-router-dom';
import Home from './Pages/Home';
import Projetos from './Pages/Projetos';
import PortfolioProvider from './context/PortfolioProvider';

function App() {
  return (
    <div>
        <PortfolioProvider>
          <Routes>
            <Route path="/projetos" element={ <Projetos /> } />
            <Route exatc path="/" element={< Home />} />
          </Routes>
        </PortfolioProvider>

    </div>
  );
}

export default App;
