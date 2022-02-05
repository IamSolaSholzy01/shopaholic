import { lazy } from 'react';

// project imports
import Loadable from '../ui-component/Loadable';
import AuthLayout from '../layouts/AuthLayout';

// login option 3 routing
// const AuthLogin = Loadable(lazy(() => import('views/pages/authentication/authentication/Login')));
// const AuthRegister = Loadable(lazy(() => import('views/pages/authentication/authentication/Register')));
const Register = Loadable(lazy(() => import('../components/Register')));

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
};

export default AuthRoutes;
