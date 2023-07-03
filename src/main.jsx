import React, {lazy} from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Login from "./pages/authentication/Login.jsx";
import ThemeCustomization from "./themes/index.jsx";
import {Register} from "./pages/authentication/Register.jsx";
import MinimalLayout from "./layout/MinimalLayout/index.jsx";
import MainLayout from "./layout/MainLayout/index.jsx";
import {Provider} from "react-redux";
import {store} from "./store/index.js";
import Loadable from "./components/Loadable.jsx";

// render - utilities
const DashboardDefault = Loadable(lazy(() => import('./pages/dashboard/index.jsx')));
const Upload = Loadable(lazy(() => import('./pages/upload/index.jsx')));
const Live = Loadable(lazy(() => import('./pages/live/index.jsx')));
const ConfigDefault = Loadable(lazy(() => import('./pages/config/index.jsx')));

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        children: [
            {
                path: '/dashboard/default',
                element: <DashboardDefault/>
            },
            {

                path: "/upload/default",
                element: <Upload/>
            },
            {

                path: "/live/default",
                element: <Live/>
            },
            {

                path: "/config",
                element: <ConfigDefault/>
            }
        ]
    },
    {
        path: "/",
        element: <MinimalLayout/>,
        children: [
            {
                path: "/login",
                element: <Login/>
            },
            {
                path: "/register",
                element: <Register/>
            },
        ]
    }

]);

// Main react DOM render

ReactDOM.createRoot(document.getElementById('root')).render(<React.StrictMode>
    <Provider store={store}>
        <ThemeCustomization>
            <RouterProvider router={router}/>
        </ThemeCustomization>
    </Provider>
</React.StrictMode>);
