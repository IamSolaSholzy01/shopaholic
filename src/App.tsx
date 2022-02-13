import "./App.css";
import UserContextWrap from "./contexts/AuthContext";
import SwapTableContextProvider from "./contexts/SwapTableContext";
import Routes from "./routes";
import ThemeConfig from "./theme";

function App() {
  return (
    <SwapTableContextProvider>
      <UserContextWrap>
        <ThemeConfig>
          <Routes />
        </ThemeConfig>
      </UserContextWrap>
    </SwapTableContextProvider>
  );
}

export default App;
