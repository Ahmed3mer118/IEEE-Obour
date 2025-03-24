import logo2 from "/images/3d-stripy-man-working-on-the-laptop-behind-the-desk.png";
import logo3 from "/images/casual-life-3d-orange-planet-with-disk 1.png";
import logo4 from "/images/Group 71.png";
import logo5 from "/images/47. site-builder--product--400x400--ico_G8oG6f8Tv3lbDfeq.png";
import logo6 from "/images/17. coding-a-website--development--400x400--ico_FyA1ZHASOCBmL5oj.png";
import logo7 from "/images/39. online-learning-1--education--400x400--ico_Epig1Mte2sPX8ys8.png";
import logo8 from "/images/29. interface-testing--interface--400x400--ico_GF0OuCnwEWTT9jVL.png";
import logo9 from "/images/42. protect-privacy--users-people--400x400--ico_miBBUruiTkkxXo7n.png";
import logo10 from "/images/55. work-from-home--work--400x400--ico_R1QO7KPmmpkxTxcD.png";
import logo11 from "/images/25. digital-customer-service-call-center--customer-service-support--400x400--ico_HEHfvriQehvs1YN7.png";
import logo12 from "/images/48. social-media-discussion--social-media--400x400--ico_kA6k74xywEfO1IH1.png";
import "./Landing.css";
import bg from "/images/bg-image-team.png";
import EventPages from "../Events/EventPages";
import BranchPhotos from "../About/BranchPhotos";
import Organizers from "../Organizers/Organizers";

const Landing = () => {
    return (
        <main>
            {/* <section className="mb-20">
                <div className="flex items-center justify-evenly gap-10 mt-10">
                    <div className="max-w-full lg:m-20 ">
                        <h1 className=" max-[540px]:text-[25px] text-[40px] max-[1023px]:text-center font-bold text-blue-950 max-[1360px]:text-[35px]">
                            The easiest way to manage <br />
                            team projects & tasks
                        </h1>{" "}
                        <br />
                        <p className="max-[540px]:text-[14px] max-[1023px]:text-center text-[25px] max-[767px]:text-[15px] text-[#62678f] max-[1360px]:text-[15px]">
                            Take a tour of work management platform to <br />{" "}
                            see how you can do more of your best work.
                        </p>
                    </div>
                    <div className="hidden lg:block">
                        <img className="w-[600px] max-[1200px]:w-[420px]" src={logo2} alt="" />
                    </div>
                </div>
            </section> */}
            {/* section bg-image */}
            <section className="home-page  h-[90vh]  ">
                <div className="bg-[url('/images/bg-image-team2025-1.jpg')]  bg-cover bg-center h-[90%] w-[100%] relative ">
                    <div className="container relative  top-[15%] left-[7%] font-bold ">
                        <h1 className="title  text-[25px] lg:text-[40px]   md:text-[30px]  ">
                            Welcome to  <span className="text-primary"> IEEE OCS SB</span>
                        </h1>
                        <p className="mt-2 text-[15px] lg:text-[18px]  md:text-[12px]">
                            Take a tour of work management platform to <br />{" "}
                            see how you can do more of your best work.
                        </p>
                    </div>
                </div>
            {/* <div className=" bg-[#F1F3F4] h-[10%]  flex flex-wrap justify-center  items-center absolute w-[100%] sm:text-center ">
                    <h1 className="lg:text-[20px] md:text-[15px] font-[400] ">You've been a member of this group since Sep 23, 2023</h1>
                    <span className="ml-20 text-[#0077FF]">Leave Chapter</span>
                </div>
         */}
            </section>
   
            <EventPages />
    
                {/* section ملهوش لازمه  */}
            {/* <section className="mt-60 ">
                <div className="flex justify-evenly">
                    <div className=" inline-grid 2xl:grid-cols-3 lg:grid-cols-2 grid-cols-1  justify-evenly bg-sky-900 rounded-xl p-10 max-[500px]:p-5 gap-8 ">
                        <div className="rounded-xl max-[557px]:w-[400px] max-[504px]:w-[370px] max-[420px]:w-[300px]  justify-center w-[450px] h-48  p-10 max-[500px]:p-5 flex shadow-2xl gap-10 max-[500px]:gap-5  mt-10">
                            <div className="bg-[#3792bc] self-center p-5 rounded-2xl ">
                                <img
                                    className="h-[40px] w-[90px] max-[500px]:w-[70px] max-[500px]:h-[30px]"
                                    src="/images/online-test 1.png"
                                    alt="icon"
                                />
                            </div>
                            <div className="flex justify-center  flex-col gap-4">
                                <h1 className="text-[#ffffff] max-[557px]:text-[17px] max-[451px]:text-[15px] text-[20px] font-bold">
                                    Learn The Latest Skills
                                </h1>
                                <p className="text-[12px] max-[451px]:text-[10px] font-bold text-[#9bc9dd]">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                </p>
                            </div>
                        </div>
                        <div className="rounded-xl max-[557px]:w-[400px] max-[504px]:w-[370px] max-[420px]:w-[300px] justify-center w-[450px] h-48  p-10 max-[500px]:p-5 flex shadow-2xl gap-10 max-[500px]:gap-5 mt-10">
                            <div className="bg-[#3792bc] self-center p-5 rounded-2xl ">
                                <img
                                    className="h-[40px] w-[90px] max-[500px]:w-[70px] max-[500px]:h-[30px]"
                                    src="/images/exam 1.png"
                                    alt="icon"
                                />
                            </div>
                            <div className="flex justify-center  flex-col gap-4">
                                <h1 className="text-[#ffffff] max-[557px]:text-[17px] max-[451px]:text-[15px] text-[20px] font-bold">
                                    Get Ready For a Career
                                </h1>
                                <p className="text-[12px] max-[451px]:text-[10px] font-bold text-[#9bc9dd]">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                </p>
                            </div>
                        </div>
                        <div className="rounded-xl max-[557px]:w-[400px] max-[504px]:w-[370px] max-[420px]:w-[300px] xl:justify-center lg:col-span-2 2xl:col-span-1 lg:justify-self-center w-[450px] h-48  p-10 max-[500px]:p-5 flex shadow-2xl gap-10 max-[500px]:gap-5 mt-10">
                            <div className="bg-[#3792bc] self-center p-5 rounded-2xl ">
                                <img
                                    className="h-[40px] w-[90px] max-[500px]:w-[70px] max-[500px]:h-[30px]"
                                    src="/images/certification 1.png"
                                    alt="icon"
                                />
                            </div>
                            <div className="flex justify-center  flex-col gap-4">
                                <h1 className="text-[#ffffff] max-[557px]:text-[17px] max-[451px]:text-[15px] text-[20px] font-bold">
                                    Earn a Certificate
                                </h1>
                                <p className="text-[12px] max-[451px]:text-[10px] font-bold text-[#9bc9dd]">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
            <Organizers />
            <BranchPhotos />
        </main>
    );
};

export default Landing;

