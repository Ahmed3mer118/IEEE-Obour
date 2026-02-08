import "./Login.css";
import { useAppContext } from "../../store/AppContext.jsx";
import { useEffect, useRef } from "react";
import { toast } from "react-toastify";
import { Link, useLocation, useNavigate } from "react-router-dom";

function LoginForm() {
    const { pathname } = useLocation();
    const emailRef = useRef();
    const passwordRef = useRef();
    const { loginUser, user } = useAppContext();
    const navigate = useNavigate();

    const LoginHandler = async (e) => {
        e.preventDefault();
        const userCredentials = {
            email: emailRef.current.value,
            password: passwordRef.current.value,
        };
        
        if (userCredentials.email.length === 0) {
            toast.error("Please Enter your email");
            return;
        }
        
        if (userCredentials.password.length === 0) {
            toast.error("Please Enter your password");
            return;
        }
        
        try {
            // انتظار تسجيل الدخول
            const result = await loginUser(userCredentials, pathname);
            
            console.log("Login result:", result); // للـ debugging
            
            // طريقة 1: تحقق من result مباشرة
            if (result && result.role) {
                if (result.role === 'admin' || result.role === 'editor') {
                    navigate("/dashboard");
                    toast.success(`Welcome ${result.name} (${result.role})`);
                } else {
                    navigate("/");
                    toast.success(`Welcome ${result.name}`);
                }
            } 
            // طريقة 2: تحقق من user في context
            else if (user && user.role) {
                if (user.role === 'admin' || user.role === 'editor') {
                    navigate("/dashboard");
                    toast.success(`Welcome ${user.name} (${user.role})`);
                } else {
                    navigate("/");
                    toast.success(`Welcome ${user.name}`);
                }
            }
            // إذا لم يتم العثور على role
            else {
                console.warn("Role not found in response:", result);
                navigate("/");
                toast.success("Login successful!");
            }
            
        } catch (error) {
            console.error("Login error:", error);
            toast.error("Login failed. Please check your credentials.");
        }
    };

    useEffect(() => {
        // إذا كان المستخدم مسجل بالفعل عند تحميل الصفحة
        if (user) {
            console.log("User from context:", user);
            
            // انتظر قليلاً للتأكد من تحديث state
            setTimeout(() => {
                if (user.role === 'admin' || user.role === 'editor') {
                    navigate("/dashboard");
                } else {
                    navigate("/");
                }
            }, 100);
        }
    }, [user, navigate]);

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