import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar/Sidebar.jsx";
import { useAppContext } from "../store/AppContext.jsx";
import { useEffect } from "react";

const RootLayout = () => {
    const navigate = useNavigate();
    const { getAllCourses, user } = useAppContext();

    useEffect(() => {
        if (!user) {
            return navigate("/dashboard/login");
        }
        getAllCourses();
    }, []);
    return (
        <>
            <Sidebar />
            <main className={`w-3/4 ml-auto`}>
                <Outlet />
            </main>
        </>
    );
};

export default RootLayout;

