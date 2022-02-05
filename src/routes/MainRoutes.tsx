import { lazy } from 'react';

// project imports
import Loadable from '../ui-component/Loadable';

// layouts
import MainLayout from '../layouts/MainLayout';

// routes
const Home = Loadable(lazy(() => import('../components/Home')));

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