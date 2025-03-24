import {useEffect, useRef} from "react";
import {useAppContext} from "../../store/AppContext.jsx";
import {Link, useNavigate} from "react-router-dom";
import {toast} from "react-toastify";

const Signup = () => {
    const nameInputRef = useRef();
    const emailInputRef = useRef();
    const uniCodeInputRef = useRef();
    const passwordInputRef = useRef();

    const {user, signupUser} = useAppContext();
    const navigate = useNavigate();
    const singupHandler = e => {
        e.preventDefault();
        const newUser = {
            name: nameInputRef.current.value,
            email: emailInputRef.current.value,
            password: passwordInputRef.current.value,
            university_code: uniCodeInputRef.current.value
        }
        if (!newUser.name || !newUser.email || !newUser.password || !newUser.university_code) {
            toast.error("Please Provide All Value!");
        }
        signupUser(newUser).then(() => navigate('/verify'));
    }

    useEffect(() => {
        if (user._id) {
            navigate('/');
        }
    }, [])
    return (
        <main className={`lg:bg-[url('/images/background.png')] bg-no-repeat max-[700px]:bg-top bg-right-top lg:bg-cover w-full h-screen relative flex justify-end`}>
            <div className={'max-[700px]:hidden absolute top-8 left-10 lg:left-20'}>
                <img src="/images/Subtract2.png" alt="Logo image" className={'max-[700px]:w-44'}/>
            </div>
            <form className={`max-[700px]:flex  max-[700px]:flex-col max-[700px]:justify-center bg-white py-4 px-4 lg:py-20 lg:px-24 w-[600px]`} onSubmit={singupHandler}>
                <h2 className={'mb-2 lg:mb-4 font-normal text-4xl'}>Sign Up</h2>
                <p className={`text-xl text-[#000] font-light mb-4 lg:mb-10`}>Welcome onboard with us!</p>
                <div className={`mb-2 lg:mb-6`}>
                    <label htmlFor="name" className={'font-normal '}>Username</label>
                    <input
                        className={`inline-block border border-[#0577AB] focus:outline-0 w-full  rounded px-2 py-3`}
                        type="text"
                        name="name"
                        id="name"
                        placeholder={'Enter your username'}
                        ref={nameInputRef}
                        required
                    />
                </div>
                <div className={`mb-2 lg:mb-6`}>
                    <label htmlFor="email" className={'font-normal '}>Email Address</label>
                    <input
                        className={`inline-block border border-[#0577AB] focus:outline-0 w-full  rounded px-2 py-3`}
                        type="email"
                        name="email"
                        id="email"
                        placeholder={'Enter your email address'}
                        ref={emailInputRef}
                        required
                    />
                </div>
                <div className={`mb-2 lg:mb-6`}>
                    <label htmlFor="university_code" className={'font-normal '}>University Code</label>
                    <input
                            className={`inline-block border border-[#0577AB] focus:outline-0 w-full  rounded px-2 py-3`}
                            type="text"
                            name="university_code"
                            id="university_code"
                            placeholder={'Enter your university code'}
                            ref={uniCodeInputRef}
                            required
                    />
                </div>
                <div className={`mb-2 lg:mb-6`}>
                    <label htmlFor="password" className={'font-normal '}>Password</label>
                    <input
                            className={`inline-block border border-[#0577AB] focus:outline-0 w-full  rounded px-2 py-3`}
                            type="password"
                            name="password"
                            id="password"
                            placeholder={'Enter your password'}
                            ref={passwordInputRef}
                            required
                    />
                </div>
                <button
                    className={`mt-4 lg:mt-16 w-full bg-[#0577AB] text-center text-white py-3 rounded-lg`}
                    type="submit"
                >Signup</button>
                <p className={'mt-6 text-center'}>
                    Have an account? <Link to={'/login'} className={'font-bold text-sky-500 hover:underline'}>Login</Link> Here
                </p>
            </form>
        </main>
    );
};

export default Signup;
