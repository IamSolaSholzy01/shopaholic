import { Navigate } from 'react-router-dom';
import Loadable from '../ui-component/Loadable';

// layouts
import AuthLayout from '../layouts/AuthLayout';
import MainLayout from '../layouts/MainLayout';

// routes
import Home from '../components/Home';

const MainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '/',
            element: <Home />
        }
    ]
}

export default MainRoutes;