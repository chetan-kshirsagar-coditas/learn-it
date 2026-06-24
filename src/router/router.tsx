import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import LandingPage from "../pages/LandingPage/LandingPage";
import RegistrationPage from "../pages/RegistrationPage/RegistrationPage";

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
            }
        ]
    }
])