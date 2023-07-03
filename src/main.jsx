import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Login from "./pages/authentication/Login.jsx";
import ThemeCustomization from "./themes/index.jsx";
import {Register} from "./pages/authentication/Register.jsx";
import DashboardDefault from "./pages/dashboard/index.jsx";
import MinimalLayout from "./layout/MinimalLayout/index.jsx";
import MainLayout from "./layout/MainLayout/index.jsx";
import {Provider} from "react-redux";
import {store} from "./store/index.js";
import Upload from "./pages/upload/index.jsx";
import Live from "./pages/live/index.jsx";
import ConfigDefault from "./pages/config/index.jsx";

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
