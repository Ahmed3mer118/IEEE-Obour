import "./Login.css";
import { useAppContext } from "../../store/AppContext.jsx";
import { useEffect, useRef } from "react";
import { toast } from "react-toastify";
import { Link, useLocation, useNavigate } from "react-router-dom";
// import background from '/images/Subtract2.png'

function LoginForm() {
    const { pathname } = useLocation();
    const emailRef = useRef();
    const passwordRef = useRef();
    const { loginUser, user } = useAppContext();
    const navigate = useNavigate();
    const LoginHandler = (e) => {
        e.preventDefault();
        const user = {
            email: emailRef.current.value,
            password: passwordRef.current.value,
        };
        if (user.email.length === 0) {
            toast.error("Please Enter your email");
        } else if (user.password.length === 0) {
            toast.error("Please Enter your password");
        } else {
            loginUser(user, pathname).then(() => navigate("/"));
        }
    };
    useEffect(() => {
        if (user) {
            navigate("/");
        }
    }, []);

    return (
        <main
            className={`lg:bg-[url('/images/background.png')] bg-no-repeat max-[700px]:bg-top bg-right-top lg:bg-cover w-full h-screen relative flex justify-end`}
        >
            <div
                className={
                    "max-[700px]:hidden absolute top-8 left-10 lg:left-20"
                }
            >
                <img
                    src="/images/Subtract2.png"
                    alt="Logo image"
                    className={"max-[700px]:w-44"}
                />
            </div>
            <form
                className={`z-50 max-[700px]:flex  max-[700px]:flex-col max-[700px]:justify-center bg-white py-4 px-4 lg:py-20 lg:px-24 w-[600px]`}
                onSubmit={LoginHandler}
            >
                <h2 className={"mb-2 lg:mb-4 font-normal text-4xl"}>Login</h2>
                <p className={`text-xl text-[#000] font-light mb-4 lg:mb-10`}>
                    Welcome onboard with us!
                </p>
                {/*<div className={`mb-2 lg:mb-6`}>*/}
                {/*    <label htmlFor="name" className={'font-normal '}>Username</label>*/}
                {/*    <input*/}
                {/*            className={`inline-block border border-[#0577AB] focus:outline-0 w-full  rounded px-2 py-3`}*/}
                {/*            type="text"*/}
                {/*            name="name"*/}
                {/*            id="name"*/}
                {/*            placeholder={'Enter your username'}*/}
                {/*            ref={nameInputRef}*/}
                {/*            required*/}
                {/*    />*/}
                {/*</div>*/}
                <div className={`mb-2 lg:mb-6`}>
                    <label htmlFor="email" className={"font-normal "}>
                        Email Address
                    </label>
                    <input
                        className={`inline-block border border-[#0577AB] focus:outline-0 w-full  rounded px-2 py-3`}
                        type="email"
                        name="email"
                        id="email"
                        placeholder={"Enter your email address"}
                        ref={emailRef}
                        required
                    />
                </div>
                {/*<div className={`mb-2 lg:mb-6`}>*/}
                {/*    <label htmlFor="university_code" className={'font-normal '}>University Code</label>*/}
                {/*    <input*/}
                {/*            className={`inline-block border border-[#0577AB] focus:outline-0 w-full  rounded px-2 py-3`}*/}
                {/*            type="text"*/}
                {/*            name="university_code"*/}
                {/*            id="university_code"*/}
                {/*            placeholder={'Enter your university code'}*/}
                {/*            ref={uniCodeInputRef}*/}
                {/*            required*/}
                {/*    />*/}
                {/*</div>*/}
                <div className={`mb-2 lg:mb-6`}>
                    <label htmlFor="password" className={"font-normal "}>
                        Password
                    </label>
                    <input
                        className={`inline-block border border-[#0577AB] focus:outline-0 w-full  rounded px-2 py-3`}
                        type="password"
                        name="password"
                        id="password"
                        placeholder={"Enter your password"}
                        ref={passwordRef}
                        required
                    />
                </div>
                <button
                    className={`mt-4 lg:mt-16 w-full bg-[#0577AB] text-center text-white py-3 rounded-lg`}
                    type="submit"
                >
                    Login
                </button>
                <p className={"mt-6 text-center"}>
                    New to login?
                    <Link
                        to={"/signup"}
                        className={"font-bold text-sky-500 hover:underline"}
                    >
                        {" "}
                        Sign up
                    </Link>{" "}
                    Here
                </p>
            </form>
        </main>
    );
}

export default LoginForm;

/*
<div className="body">
            <div className='custom-container'>
                <section className='img'>
                    <img className='img2' src={'/images/Subtract2.png'} alt={'Login Image'}/>
                </section>
                <section className='logcontainer '>
                    <div className='textlog'>
                        <div className='tex1'> Log in</div>
                        <div>
                            Welcome on board with us !
                        </div>
                    </div>
                    <form onSubmit={LoginHandler}>
                        <div className="data">
                            <label>Email address</label>
                            <input type="text" ref={emailRef} required />
                        </div>
                        <div className="data">
                            <label>Password</label>
                            <input type="password" ref={passwordRef} required />
                        </div>
                        <div className="forgot-pass">
                            <a href="#">Forgot Password?</a></div>
                        <div className="btn">
                            <div className="inner">
                            </div>
                            <button type="submit">login</button>
                        </div>
                        <div className="signup-link">
                            New to login ?
                            <Link to="/signup"> Register Here</Link>
                        </div>
                    </form>
                </section>
            </div>
        </div>
*/
