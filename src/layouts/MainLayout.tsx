import { Outlet } from "react-router-dom";
import { Header, Footer } from '../components/shared';

const MainLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
};

export default MainLayout;