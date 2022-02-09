import './App.css';
<<<<<<< HEAD

=======
import SwapTableContextProvider from './contexts/SwapTableContext';
>>>>>>> 107054c (few endpoints)
import Routes from './routes';
import ThemeConfig from './theme';

function App() {
  return (
<<<<<<< HEAD
    <ThemeConfig>
      <Routes />
    </ThemeConfig>
=======
  <SwapTableContextProvider>

    <ThemeConfig>
      <Routes />
    </ThemeConfig>
  </SwapTableContextProvider>

>>>>>>> 107054c (few endpoints)
  );
}

export default App;
