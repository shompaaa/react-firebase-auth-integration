import { createBrowserRouter } from "react-router";
import Root from "../../layout/Root";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";
import Orders from "../../pages/Orders/Orders";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: '/login',
                Component: Login

            },
            {
                path: '/register',
                Component: Register
            },
            {
                path: '/orders',
                Component: Orders
            }
        ]
    }
])