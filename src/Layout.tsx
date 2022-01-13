import { Outlet } from "react-router-dom";
import { Header, Footer } from './components/shared';

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
};

export default Layout;