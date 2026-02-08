import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import RootLayout from "./components/RootLayout.jsx";
import Editors from "./components/Editors/Editors.jsx";
import AppNews from "./App/News/News.jsx";
import Students from "./components/Students/Students.jsx";
import Login from "./components/Pages/Login.jsx";
import Signup from "./components/Pages/Signup.jsx";
import Home from "./App/dashboard/Home.jsx";
import AppRootLayout from "./App/common/AppRootLayout.jsx";
import Landing from "./App/Landing/Landing.jsx";
import Index from "./App/Courses/index.jsx";
import Courses from "./components/Courses/Courses.jsx";
import Verify from "./components/Pages/Verify.jsx";
import CourseLearn from "./App/Courses/CourseLearn.jsx";
import CoursePage from "./App/Courses/CoursePage.jsx";
import Contact from "./App/common/Contact/Contact";
import AboutPage from "./App/About/AboutPage.jsx";
import Event from "./App/Events/Event.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <AppRootLayout />,
        children: [
            {
                index: true,
                element: <Landing />,
            },
            {
                path: "courses",
                element: <Outlet />,
                children: [
                    {
                        index: true,
                        element: <Index />,
                    },
                    {
                        path: ":id",
                        element: <CoursePage />,
                    },
                    {
                        path: ":id/learn",
                        element: <CourseLearn />,
                    },
                ],
            },
            {
                path: "about",
                element: <AboutPage />,
            },
            {
                path: "contact",
                element: <Contact />,
            },
            {
                path: "events",
                element: <AppNews />,
            },
            {
                path:"event",
                element:<Event />
            }
        ],
    },
    {
        path: "dashboard",
        element: <RootLayout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "courses",
                element: <Courses />,
            },
            {
                path: "editors",
                element: <Editors />,
            },
            {
                path: "students",
                element: <Students />,
            },
        ],
    },
    {
        path: "/dashboard/login",
        element: <Login />,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/signup",
        element: <Signup />,
    },
    {
        path: "/verify",
        element: <Verify />,
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;

