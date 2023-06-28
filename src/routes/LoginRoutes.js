import {lazy} from 'react';

// project import
import Loadable from "../components/Loadable.js";
import MinimalLayout from "../MinimalLayout/index.js";
import Login from "../pages/authentication/Login.jsx";

// render - login
const AuthLogin = Loadable(lazy(() => import('../pages/authentication/Login.jsx')));


const LoginRoutes = {
    path: '/',
    element: <MinimalLayout/>,
    children: [
        {
            path: 'login',
            element: <Login/>
        }
    ]
};

export default LoginRoutes;
