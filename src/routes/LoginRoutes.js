import {lazy} from 'react';

// project import
import Loadable from "../components/Loadable.js";
import MinimalLayout from "../MinimalLayout/index.js";

// render - login
const AuthLogin = Loadable(lazy(() => import('../pages/authentication/Login.page.jsx')));


const LoginRoutes = {
    path: '/',
    element: <MinimalLayout/>,
    children: [
        {
            path: 'login',
            element: <AuthLogin/>
        }
    ]
};

export default LoginRoutes;
