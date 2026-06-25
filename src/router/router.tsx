import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import LandingPage from "../pages/LandingPage/LandingPage";
import RegistrationPage from "../pages/RegistrationPage/RegistrationPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import AddUserPage from "../pages/AddUserPage/AddUserPage";
import AuthGuard from "../components/AuthGuard/AuthGuard";
import DashboardRedirector from "../components/DashboardRedirector/DashboardRedirector";
import DashboardLayout from "../layouts/DashboardLayout/DashboardLayout";
import CoursesPage from "../pages/CoursesPage/CoursesPage";
import RoleGuard from "../hoc/RoleGuard";
import { ROLES } from "../types/Roles";
import EnrolledCourses from "../pages/StudentPages/EnrolledCourses/EnrolledCourses";

export const router = createBrowserRouter([
    {
        element: <App />,
        children: [
            {
                path: "/",
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
                element: <AuthGuard />,
                children: [
                    {
                        path: "/dashboardRedirector",
                        element: <DashboardRedirector />,
                    },
                    {
                        element: <DashboardLayout />,
                        children: [
                            {
                                path: "adduser",
                                element: <RoleGuard allowed={[ROLES.ADMIN]}><AddUserPage /></RoleGuard>
                            },
                            {
                                path: "courses",
                                element: <RoleGuard allowed={[ROLES.ADMIN, ROLES.STUDENT, ROLES.INSTRUCTOR]}><CoursesPage /></RoleGuard>
                            },
                            {
                                path: "me/courses",
                                element: <RoleGuard allowed={[ROLES.STUDENT]}><EnrolledCourses /></RoleGuard>
                            },
                        ]
                    }
                ]
            }
        ]
    }
]);
