import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { StoreProvider } from './contexts';
import AppRoutes from './Routes';

function App() {
  return (
    <StoreProvider>
      <div className="App">
        <Router>
          <AppRoutes />
        </Router>
      </div>
    </StoreProvider>
  );
}

export default App;
