import { useRoutes } from 'react-router-dom';

// routes
import MainRoutes from './MainRoutes';
import AuthRoutes from './AuthRoutes';
// import config from 'config';

// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
    // props.themeModeSet('dark');
    return useRoutes([MainRoutes, AuthRoutes], '');
}
