import { Link, NavLink } from "react-router-dom";
import { useAppContext } from "../../store/AppContext.jsx";
import { AiOutlineMenuFold } from "react-icons/ai";

const Navigation = () => {
    const { user, toggleSidebar } = useAppContext();
    return (
        <header className={`bg-white sticky top-0 z-50`}>
            <div className="container flex  max-lg:justify-between items-center mx-auto  px-6  ">
                <div className={"max-w-[300px] "}>
                    <Link to={"/"} className={"h-full"}>
                        <img
                            src="/images/logoieee.svg"
                            alt="IEEE logo"
                            className={"h-[100px] w-[235px] translate-y-[12px]"}
                        />
                    </Link>
                </div>
                <nav
                    className={
                        "hidden lg:flex justify-end lg:items-center lg:gap-5 text-gray-500 grow py-6"
                    }
                >
                    <NavLink
                        to={"/"}
                        className={({ isActive }) =>
                            isActive ? "text-black font-bold" : ""
                        }
                    >
                        Home
                    </NavLink>
                    {/* <NavLink to={'/courses'} className={({isActive}) => isActive ? 'text-black font-bold' : ''}>Courses</NavLink> */}
                    {/* <NavLink to={'/events'} className={({isActive}) => isActive ? 'text-black font-bold' : ''}>Events</NavLink> */}
                    <NavLink
                        to={"/about"}
                        className={({ isActive }) =>
                            isActive ? "text-black font-bold" : ""
                        }
                    >
                        About
                    </NavLink>
                    <NavLink
                        to={"/contact"}
                        className={({ isActive }) =>
                            isActive ? "text-black font-bold" : ""
                        }
                    >
                        Contact us
                    </NavLink>
                </nav>
                {/* <div className={"max-w-[300px] "}>
                    <Link to={"/"} className={"h-full"}>
                        <img
                            src="/images/logo-ieee-2.png"
                            alt="IEEE logo"
                            className={"h-[100px] w-[235px] translate-y-[12px]"}
                        />
                    </Link>
                </div> */}

                {/* {
                    user && user._id ?
                            <div className={'flex gap-3'}>
                                <div className={'w-10 h-10 rounded-full bg-primary'}>
                                    <img src={`${user.image.url}`} alt=""/>
                                </div>
                                <div>
                                    <p className={'font-normal'}>{user.name}</p>
                                    <p className={'text-xs text-gray-400'}>{user.role}</p>
                                </div>
                            </div>
                            :
                            <Link to={'/login'}>Login</Link>
                } */}
                <AiOutlineMenuFold
                    className={
                        "lg:hidden w-6 h-6 cursor-pointer active:translate-x-[-4px]"
                    }
                    onClick={toggleSidebar}
                />
            </div>
        </header>
    );
};

export default Navigation;

