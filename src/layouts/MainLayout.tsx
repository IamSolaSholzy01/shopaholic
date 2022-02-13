import { Outlet, useNavigate } from "react-router-dom";
import { SyntheticEvent, useContext, useState } from "react";
import { LoginTab } from "../components/LoginTab";
import {UserContext} from "../contexts/AuthContext";
import { Header, Footer } from '../components/shared';
import { RegisterTab } from '../components/RegisterTab';

// const HeaderStyle = styled('header')(({ theme }: { theme: any }) => {
//   return ({
//     top: 0,
//     zIndex: 9,
//     lineHeight: 0,
//     width: '100%',
//     display: 'flex',
//     alignItems: 'center',
//     position: 'absolute',
//     padding: theme.spacing(1),
//     justifyContent: 'space-between',
//     [theme.breakpoints.up('md')]: {
//       alignItems: 'flex-start',
//       padding: theme.spacing(3, 5, 0, 7)
//     }
//   })});

const MainLayout = () => {
  const [loginVisible, setLoginVisible] = useState(false);
  const [loginPanelVisibility, setLoginPanelVisibility] = useState(false);
  const {isLoggedIn, setIsLoggedIn} = useContext(UserContext);
  const [authVisible, setAuthVisible] = useState(false);

  const navigate = useNavigate();

  const openLoginPanel = (event: SyntheticEvent) => {
    event.preventDefault();
    setLoginVisible(true);
    setLoginPanelVisibility(true);
  }

  const loginLogout = (event: SyntheticEvent) => {
    event.preventDefault();
    if (isLoggedIn) {
      sessionStorage.clear();
      setIsLoggedIn(false);
      sessionStorage.setItem("loggedIn", "false");
    } else {
      setLoginVisible(true);
    }
  };

  const registerAuthModal = (event: SyntheticEvent) => {
    event.preventDefault();
    if (isLoggedIn) {
      console.log('clicked')
      setAuthVisible(true);
    } else {
      navigate("/register");
    }
  };

  return (
    <>
      <LoginTab onClose={() => setLoginVisible(false)} visible={loginVisible && loginPanelVisibility}>
        <Header data={{ setLoginVisible, loginVisible, isLoggedIn, loginLogout, openLoginPanel, registerAuthModal }} />
        <Outlet />
        <Footer />
      </LoginTab>
      <RegisterTab
        onClose={() => setAuthVisible(false)}
        visible={authVisible}
      ></RegisterTab>
    </>
  )
};

export default MainLayout;
