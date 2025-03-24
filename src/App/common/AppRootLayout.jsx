import Navigation from "./Navigation.jsx";
import {Outlet} from "react-router-dom";
// import Footer from "./Footer.jsx";
// import {useAppContext} from "../../store/AppContext.jsx";
// import {useEffect} from "react";
import SmallNav from "./SmallNav.jsx";
import Footer from "./Footer.jsx";

const AppRootLayout = () => {
    // const navigate = useNavigate();
    // const {
    //     user,
    //     getAllCourses,
    // } = useAppContext();

    // useEffect(() => {
    //     if (!user) {
    //         return navigate('/login');
    //     }
        // loginUser({
        //     email: user.email,
        //     password: 'admin'
        // });
        // getCurrentUser();
        // getAllCourses();

        // The next request is getting a 404 response code
        // getEvents();
    // }, [])
    return (
        <>
            <SmallNav/>
            <main className={"min-h-screen flex flex-col justify-between"}>
                <Navigation/>
                <Outlet/>
                <Footer/>
            </main>
        </>
    );
};

export default AppRootLayout;
