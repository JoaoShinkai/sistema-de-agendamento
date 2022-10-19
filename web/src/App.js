import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import StoreProvider from './contexts/store';
import RoutesApp from './routes';

function App() {
  return (
    <StoreProvider>
      <BrowserRouter>
        <ToastContainer autoClose={3000} theme="colored" />
        <RoutesApp />
      </BrowserRouter>
    </StoreProvider>
    
  );
}

export default App;
