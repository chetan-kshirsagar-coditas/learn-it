import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import LandingPage from "../pages/LandingPage/LandingPage";
import RegistrationPage from "../pages/RegistrationPage/RegistrationPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import DashboardLayout from "../layouts/DashboardLayout/DashboardLayout";
import AddUserPage from "../pages/AddUserPage/AddUserPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "",
                element: <LandingPage />
            },
            {
                path: "/register",
                element: <RegistrationPage />
            },
            {
                path: "/login",
                element: <LoginPage />
            },
            {
                path: "/dashboard",
                element: <DashboardLayout />,
                children: [
                    {
                        path: "addUser",
                        element: <AddUserPage />
                    }
                ]
            }
        ]
    }
])