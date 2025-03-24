import {Link, useNavigate, useParams} from "react-router-dom";
import {useAppContext} from "../../store/AppContext.jsx";
import {IoIosArrowForward} from "react-icons/io";

const CoursePage = () => {
    const navigate = useNavigate();
    const {id} = useParams();
    const {courses, registerCourse, userCourses} = useAppContext();
    let isRegistered = undefined;
    if (userCourses) {
        for (const course of userCourses) {
            if (course._id === id) {
                isRegistered = true;
                break;
            }
        }
    }
    console.log(isRegistered)
    let course = {}
    course = courses.filter(item => item._id === id)[0];

    const registerCourseHandler = () => {
        registerCourse(course._id)
                .then(() => navigate(`/courses/${course._id}/learn`))
    }
    return (
        <>
            <div className={`bg-[url('/images/default-course-img.png')] bg-no-repeat h-[600px] w-full relative`}>
                {
                    isRegistered ?
                        <Link to={'learn'} className={`bg-[#0577AB] text-white rounded-lg py-4 px-8 absolute bottom-8 left-20 flex gap-2 items-center`}>Go to course</Link>
                    :
                    <button className={`bg-[#0577AB] text-white rounded-lg py-4 px-8 absolute bottom-8 left-20 flex gap-2 items-center`} onClick={registerCourseHandler}>
                        Sign Course
                        <IoIosArrowForward/>
                    </button>
                }
            </div>
            {
                course &&
                    <div className="container mx-auto px-6">
                        <div className={`py-20 w-full md:w-3/4 lg:w-2/3`}>
                            <h2 className={`text-[#06052E] text-4xl font-medium mb-3`}>{course.name}</h2>
                            <p className={`font-normal text-base text-[#06052E]/[.6]`}>{course.description}</p>
                        </div>
                        <div className={'pb-20'}>
                            <h3 className={`text-[#06052E] text-2xl font-medium mb-10`}>Road Map</h3>
                            <img src="/images/roadmap-default-img.png" alt="Roadmap Image"/>
                        </div>
                    </div>
            }
        </>
    );
};

export default CoursePage;
