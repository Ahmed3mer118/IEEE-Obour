import {NavLink} from "react-router-dom";
import {FaTimes} from "react-icons/fa";
import {useAppContext} from "../../store/AppContext.jsx";

const SmallSidebar = () => {
    const {showSidebar, toggleSidebar} = useAppContext();
    return (
        <div className="wrapper">
            <div className={`${showSidebar ? 'show' : 'hide'}-sidebar sidebar-cont`}>
                <div className="content">
                    <button className={'close-btn'}
                            onClick={toggleSidebar}
                    >
                        <FaTimes/>
                    </button>
                    <div className={"h-52"}>
                        <img src="/images/logo.png" alt="IEEE Logo" className={"h-full"}/>
                    </div>
                    <nav className={'nav-links'}>
                        <NavLink to={'/'} className={'nav-link'} onClick={toggleSidebar}>
                            {/*<IoBarChartSharp className={'icon'}/>*/}
                            Home
                        </NavLink>
                        {/* <NavLink to={'/courses'} className={'nav-link'} onClick={toggleSidebar}> */}
                            {/*<MdQueryStats className={'icon'}/>*/}
                            {/* Courses */}
                        {/* </NavLink> */}
                        {/* <NavLink to={'/events'} className={'nav-link'} onClick={toggleSidebar}>
                            <FaWpforms className={'icon'}/>
                            News
                        </NavLink> */}
                        <NavLink to={'/about'} className={'nav-link'} onClick={toggleSidebar}>
                            {/*<ImProfile className={'icon'}/>*/}
                            About us
                        </NavLink>
                        <NavLink to={'/contact'} className={'nav-link'} onClick={toggleSidebar}>
                            {/*<ImProfile className={'icon'}/>*/}
                            Contact us
                        </NavLink>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default SmallSidebar;