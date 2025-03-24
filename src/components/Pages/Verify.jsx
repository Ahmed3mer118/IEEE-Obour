import {useEffect, useRef} from "react";
import {useAppContext} from "../../store/AppContext.jsx";
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";
import TimeCountDown from "../TimeCountDown.jsx";

const Verify = () => {
    const codeInputRef = useRef();

    const {user, verifyUser} = useAppContext();
    const navigate = useNavigate();


    const verifyHandler = e => {
        e.preventDefault();
        const otp = codeInputRef.current.value;
        if (otp.length < 4) {
            toast.error("Please Provide All Value!");
        }
        verifyUser(+otp);
        codeInputRef.current.value = '';
    }

    useEffect(() => {
        if (user?.verified) {
            navigate('/');
        }
    }, [user]);
    return (
            <main className={`lg:bg-[url('/images/background.png')] bg-no-repeat max-[700px]:bg-top bg-right-top lg:bg-cover w-full h-screen relative flex justify-end`}>
                <div className={'max-[700px]:hidden absolute top-8 left-10 lg:left-20'}>
                    <img src="/images/Subtract2.png" alt="Logo image" className={'max-[700px]:w-44'}/>
                </div>
                <form className={`max-[700px]:flex  max-[700px]:flex-col max-[700px]:justify-center bg-white py-4 px-4 lg:py-20 lg:px-24 w-[600px]`} onSubmit={verifyHandler}>
                    <h2 className={'mb-2 lg:mb-4 font-normal text-4xl'}>Verification</h2>
                    <p className={`text-xl text-[#000] font-light mb-4 lg:mb-10`}>Verification The 4-digit verification code will expire in 5 minutes (Check Spam)</p>

                    <div className={`mb-1`}>
                        <label htmlFor="name" className={'font-normal '}>OPT</label>
                        <input
                                className={`inline-block border border-[#0577AB] focus:outline-0 w-full  rounded px-2 py-3`}
                                type="text"
                                name="otp"
                                id="name"
                                placeholder={'Enter your verification code'}
                                ref={codeInputRef}
                                required
                        />
                    </div>
                    <TimeCountDown/>
                    <button
                            className={`mt-4 lg:mt-16 w-full bg-[#0577AB] text-center text-white py-3 rounded-lg`}
                            type="submit"
                    >Verify</button>
                    {/*<p className={'mt-6'}>*/}
                    {/*    New to Log in? <Link to={'/login'} className={'font-bold'}>Register</Link> Here*/}
                    {/*</p>*/}
                </form>
            </main>
    );
};

export default Verify;
