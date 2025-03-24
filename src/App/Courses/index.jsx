import { useAppContext } from "../../store/AppContext.jsx";
import Course from "./Course.jsx";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Index = () => {
    const { courses } = useAppContext();

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1185,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 921,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 663,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const searchFormHandler = (e) => {
        e.preventDefault();
    };
    return (
        <>
            <section className={"px-8"}>
                <div className=" py-16 flex justify-center items-center flex-col lg:flex-row gap-16">
                    <div className=" max-[1023px]:w-full max-[1023px]:gap-8 max-[1023px]:text-center self-stretch w-1/2 flex flex-col justify-between py-8">
                        <p className="font-semibold text-[54px] max-[1420px]:text-[40px] max-[1120px]:text-[30px] max-[940px]:text-[40px] max-[440px]:text-[25px] max-[360px]:text-[20px]">
                            Hello Friends We Are IEEE And We Want Wo Start A
                            <span className="text-[#B176F2]">UI & UX </span>
                            Course Together. Do You Like It Too?
                        </p>
                        <div className={""}>
                            <a
                                href="#"
                                className=" py-4 text-[24px] font-medium text-[#ffffff] px-8 bg-[#0577AB] rounded-xl max-[1420px]:text-[20px] max-[1120px]:text-[15px] max-[940px]:text-[18px]"
                            >
                                See Courses Now &gt;
                                {/*See Courses Now {">"}{" "}*/}
                            </a>
                        </div>
                    </div>
                    <div className="max-[990px]:grid max-[990px]:justify-center max-[990px]:items-center max-[990px]:text-center">
                        <img
                            className="w-[570px] h-full max-[1420px]:h-[370px] max-[1420px]:w-[470px] max-[1120px]:h-[320px] max-[1120px]:w-[420px] max-[440px]:h-[260px] max-[440px]:w-[360px] max-[360px]:h-[200px] max-[360px]:w-[300px] "
                            src="/images/sec1.png"
                            alt="#"
                        />
                    </div>
                </div>
            </section>
            <div
                className={
                    "px-4 mt-10 max-w-full md:w-[500px] flex justify-center md:mx-auto"
                }
            >
                <form
                    onSubmit={searchFormHandler}
                    className={
                        "justify-self-center w-full flex items-center relative"
                    }
                >
                    <input
                        type="text"
                        placeholder="Search for a location"
                        name="search"
                        className="block w-full placeholder:poppins sm:placeholder:font-bold placeholder:text-blue-900 rounded-full py-5 px-2 sm:p-5 border-2 border-[#4475F280] focus:sky-900 "
                    />
                    <button
                        className="text-[#ffffff] font-medium text-[14px] sm:text-[17px] bg-[#0577AB] rounded-full py-4 px-2 sm:px-4 w-24 md:w-40 sm:w-32  absolute right-2 sm:right-1"
                        type="submit"
                    >
                        Continue
                    </button>
                </form>
            </div>
            <section className="container mx-auto px-4 mb:px-6 lg:px-8 py-20">
                <div className="flex justify-center">
                    <div className="container mx-auto inline-grid grid-cols-4 justify-center gap-10 max-[1540px]:grid-cols-3 max-[1160px]:grid-cols-2 max-[738px]:grid-cols-1">
                        {courses &&
                            courses.map((course) => (
                                <Course
                                    key={course._id}
                                    id={course._id}
                                    imageUrl={course.image.url}
                                    title={course.name}
                                    lessons={course.content.length}
                                    students={course.students.length}
                                />
                            ))}
                    </div>
                </div>
            </section>
            <section className="bg-sky-700  py-10">
                <div className=" text-center ">
                    <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium text-[#ffffff] mb-8 leading-tight">
                        Chose the Class that <br /> according to your help
                    </h1>
                </div>
                <div className="px-6">
                    <Slider {...settings} className="">
                        <div className="shadow-xl bg-[#ffffff] rounded-xl flex flex-col">
                            <div className="project-image grow bg-[url('/images/R1.png')] bg-no-repeat bg-cover rounded-xl h-64">
                            </div>
                            <div className=" mt-4">
                                <p className="text-[20px] font-medium leading-tight px-3 pb-4">
                                    The level of creativity and student activity
                                </p>
                            </div>
                        </div>
                        <div className="shadow-xl bg-[#ffffff] rounded-xl flex flex-col">
                            <div className="project-image rounded-xl bg-[url('/images/R2.png')] bg-no-repeat bg-cover h-64">
                            </div>
                            <div className="project-info mt-4">
                                <p className="text-[20px] font-medium leading-tight px-3 pb-4">
                                    Knowledge of earth and world geography
                                </p>
                            </div>
                        </div>
                        <div className="shadow-xl bg-[#ffffff] rounded-xl flex flex-col">
                            <div className="project-image grow rounded-xl bg-[url('/images/R3.png')] bg-no-repeat bg-cover h-64">
                            </div>
                            <div className="project-info mt-4">
                                <p className="text-[20px] font-medium leading-tight px-3 pb-4">
                                    Logic and numeric general calculations
                                </p>
                            </div>
                        </div>
                        <div className="shadow-xl bg-[#ffffff] rounded-xl flex flex-col">
                            <div className="project-image rounded-xl grow bg-[url('/images/R4.png')] bg-no-repeat bg-cover h-64">
                            </div>
                            <div className="project-info mt-4">
                                <p className="text-[20px] font-medium leading-tight px-3 pb-4">
                                    Drawing and coloring picture Book
                                </p>
                            </div>
                        </div>
                    </Slider>
                </div>
                <div className="flex justify-end mt-10">
                    <img className="md:mr-10 mb-5" src="/images/logo_white_image.svg" />
                </div>
            </section>
        </>
    );
};

export default Index;

