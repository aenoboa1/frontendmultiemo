import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Login from "./pages/authentication/Login.jsx";
import ThemeCustomization from "./themes/index.jsx";
import {Register} from "./pages/authentication/Register.jsx";
import DashboardDefault from "./pages/dashboard/index.jsx";

const router = createBrowserRouter([
    {
        path: "/login",
        element: <Login/>
    },
    {
        path: "/register",
        element: <Register/>
    },
    {
        path: '/dashboard',
        element: <DashboardDefault/>
    }
]);

// Main react DOM render

ReactDOM.createRoot(document.getElementById('root')).render(<React.StrictMode>
    <ThemeCustomization>
        <RouterProvider router={router}/>
    </ThemeCustomization>
</React.StrictMode>);
