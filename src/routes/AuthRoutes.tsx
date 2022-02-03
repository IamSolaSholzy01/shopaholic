import { lazy } from 'react';

// project imports
import Loadable from '../ui-component/Loadable';
import AuthLayout from '../layouts/AuthLayout';
import Register from '../components/Register';

// login option 3 routing
// const AuthLogin = Loadable(lazy(() => import('views/pages/authentication/authentication/Login')));
// const AuthRegister = Loadable(lazy(() => import('views/pages/authentication/authentication/Register')));

// ==============================|| AUTHENTICATION ROUTING ||============================== //

const AuthRoutes = {
    path: '/',
    element: <AuthLayout />,
    children: [
        {
            path: '/register',
            element: <Register />
        }
    ]
    // children: [
    //     {
    //         path: '/login',
    //         element: <AuthLogin />
    //     },
    //     {
    //         path: '/register',
    //         element: <AuthRegister />
    //     }
    // ]
};

export default AuthRoutes;
