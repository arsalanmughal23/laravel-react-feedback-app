import { createBrowserRouter, Navigate } from "react-router-dom";
import Login from "./views/auth/Login";
import Signup from "./views/auth/Signup";
import ShowMyProfile from "./views/myProfile/Show";
import NotFound from "./views/NotFound";
import DefaultLayout from "./Layouts/DefaultLayout";
import GuestLayout from "./Layouts/GuestLayout";
import FeedbackList from "./views/feedback/List";

const router = createBrowserRouter([
    {
        path: '/',
        element: <DefaultLayout />,
        children: [
            {
                path: '/',
                element: <Navigate to="/profile" />
            },
            {
                path: '/profile',
                element: <ShowMyProfile />
            },
            {
                path: '/feedback',
                element: <FeedbackList />
            }
        ]
    },
    {
        path: '/',
        element: <GuestLayout />,
        children: [
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/signup',
                element: <Signup />
            }
        ]
    },
    {
        path: '*',
        element: <NotFound />
    }
]);

export default router;