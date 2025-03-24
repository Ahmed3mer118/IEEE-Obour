import EditCourse from "./EditCourse.jsx";
import AddTask from "./AddTask.jsx";
import AddContent from "./AddContent.jsx";
import AddStudent from "./AddStudent.jsx";
import RateStudents from "./RateStudents.jsx";
import {useAppContext} from "../../store/AppContext.jsx";
import {useEffect, useState} from "react";
import AddCourse from "./AddCourse.jsx";
import RateStudent from "../RateStudent.jsx";
import Students from "./Students.jsx";

const Courses = () => {
    const {
        courses,
    } = useAppContext();

    const [activeCourse, setActiveCourse] = useState({});
    const CourseChangeHandler = e => {
        setActiveCourse(() => {
            return courses.filter(course => course._id === e.target.value)[0];
        });
    }

    useEffect(() => {
        if (courses && courses.length > 0) {
            setActiveCourse({...courses[0]});
        }
    }, [courses])

    return (
            <React.Fragment>
                <select
                    className={`w-1/2 font-medium rounded-full mb-4 px-6 py-3 bg-white active:outline-0 focus:outline-0 mt-6`}
                    onChange={CourseChangeHandler}
                    // defaultValue={'Testing'}
                    name="course"
                >
                    {
                        courses &&
                        courses.map(course => (<option key={course._id} value={`${course._id}`}>{course.name}</option>))
                    }
                </select>
                <div className={`grid grid-cols-3 gap-10 pr-8`}>
                    <div className={`col-span-2`}>
                        <EditCourse course={activeCourse}/>
                        <div className={`flex gap-3`}>
                            <AddTask courseId={activeCourse._id}/>
                            <AddContent courseId={activeCourse._id}/>
                        </div>
                        <div className={`mt-4 flex gap-3`}>
                            <AddStudent courses={courses}/>
                            <RateStudents/>
                        </div>
                    </div>
                    <div className={`col-span-1`}>
                        <AddCourse/>
                        <Students courseId={activeCourse._id}/>
                    </div>
                </div>
            </React.Fragment>
    );
};

export default Courses;
