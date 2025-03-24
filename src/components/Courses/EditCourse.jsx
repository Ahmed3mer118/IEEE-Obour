import {useEffect, useRef, useState} from "react";
import {useAppContext} from "../../store/AppContext.jsx";

// eslint-disable-next-line react/prop-types
const EditCourse = (props) => {
    // eslint-disable-next-line react/prop-types
    const course = props.course;
    const [courseStates, setCourseStates] = useState({});

    const nameInputRef = useRef()
    const descInputRef = useRef();

    const courseStateHandler = (e, type) => {
        setCourseStates(prevState => {
            return {
                ...prevState,
                [type]: !prevState[type]
            }
        })
    }

    let imageUrl = '/images/course.png';
    if (course.image) {
        imageUrl = course.image.url;
    }
    
    useEffect(() => {
        // eslint-disable-next-line react/prop-types
        setCourseStates({isActive: course.isActive, available: course.available});
    }, [course]);

    const {updateCourse} = useAppContext();
    const EditCourseHandler = e => {
        e.preventDefault();
        const updatedCourse = {
            name: nameInputRef.current.value,
            description: descInputRef.current.value,
            image: course.image.url,
            isActive: `${courseStates.isActive}`,
            available: `${courseStates.available}`
        }
        // console.log(updatedCourse);
        updateCourse(updatedCourse, course._id);
    };


    return (
        <form onSubmit={EditCourseHandler} className={` gap-5 bg-white py-3 px-3 rounded-2xl`}>
            <div className={`flex gap-6`}>
                <div className={`grow flex flex-col justify-around`}>
                    <h2 className={`font-medium text-xl`}>Edit Course</h2>
                    <input
                        className={`hover:outline-0 focus:outline-0 border
                            pl-2 rounded-lg py-1.5 self-stretch
                        `}
                        type="text"
                        name="name"
                        placeholder={"Name"}
                        // eslint-disable-next-line react/prop-types
                        defaultValue={course.name}
                        ref={nameInputRef}
                    />
                </div>
                <div className={`basis-2/5 h-36 flex justify-end items-start`}>
                    <img className={`object-cover w-full h-full rounded-xl`} src={`${imageUrl}`} alt="Course Image"/>
                </div>

            </div>
            <div className={`flex gap-6 mt-3`}>
                <input
                    className={` hover:outline-0 focus:outline-0 border
                        py-1.5 pl-2 rounded-lg mb-2 grow
                    `}
                    type="text"
                    name="description"
                    placeholder={"Description"}
                    // eslint-disable-next-line react/prop-types
                    defaultValue={course.description}
                    ref={descInputRef}
                />
                <div className={`basis-2/5 flex items-center justify-between `}>
                    <button className={`border px-8 rounded-xl py-1.5
                                ${courseStates.isActive && 'text-white bg-primary'}
                        `}
                        onClick={(e) => {
                            courseStateHandler(e, 'isActive')
                        }}
                            type={'button'}
                    >Active</button>
                    <button className={`border px-8 rounded-xl py-1.5
                            ${courseStates.available && 'text-white bg-primary'}
                        `}
                        onClick={(e) => {
                            courseStateHandler(e, 'available')
                        }}
                            type={'button'}
                    >Available</button>
                </div>
            </div>
            <button
                className={`bg-primary text-white w-full text-center py-1.5 rounded-xl mt-3`}
                type="submit"
            >Edit Course</button>
        </form>
    );
};

export default EditCourse;
