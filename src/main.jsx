import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Login from "./pages/authentication/Login.page.jsx";

const router = createBrowserRouter([
    {
        path: "/login",
        element: <Login/>
    },
]);

// Main react DOM render

ReactDOM.createRoot(document.getElementById('root')).render(<React.StrictMode>
    <RouterProvider router={router}/>
</React.StrictMode>);
