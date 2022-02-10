import './App.css';
import SwapTableContextProvider from './contexts/SwapTableContext';
import Routes from './routes';
import ThemeConfig from './theme';

function App() {
  return (
  <SwapTableContextProvider>

    <ThemeConfig>
      <Routes />
    </ThemeConfig>
  </SwapTableContextProvider>

  );
}

export default App;
