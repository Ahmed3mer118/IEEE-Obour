import {useAppContext} from "../../store/AppContext.jsx";
import {useEffect} from "react";

// eslint-disable-next-line react/prop-types
const Students = ({courseId}) => {
    const {studentsOnCourse, getStudentsOnCourse} = useAppContext();
    console.log(studentsOnCourse);
    // console.log(courseId);

    useEffect(() => {
        if (courseId) {
            getStudentsOnCourse(courseId)
        }
    }, [courseId])
    return (
        <div className={`py-2 bg-white rounded-xl px-3 mt-6`}>
            <div className={`flex justify-between items-end mb-1`}>
                <h2 className={`font-medium text-xl`}>Remove Students</h2>
                <span className={`text-[12px] text-primary`}>View All</span>
            </div>
            {
                studentsOnCourse && studentsOnCourse.length === 0 && <p className={`bg-pink-400 text-white font-medium mt-6 px-3 py-1 mb-4 rounded-xl`}>Found 0 students for this course</p>
            }
            {
                studentsOnCourse && studentsOnCourse.length > 0 &&
                <div>
                    {
                        studentsOnCourse.map(student => {
                            return (
                                    <div key={Math.random()} className={`text-primary font-medium text-lg`}>- {student}</div>
                            )
                        })
                    }
                </div>
            }
        </div>
    );
};

export default Students;
