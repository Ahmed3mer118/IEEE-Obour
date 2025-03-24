import {useRef, useState} from "react";
import {useAppContext} from "../../store/AppContext.jsx";

const AddCourse = () => {
    const {addCourse} = useAppContext();
    const [courseStates, setCourseStates] = useState({isActive: false, available: false});
    const nameInputRef = useRef()
    const descInputRef = useRef();
    const [image, setImage] = useState();

    const courseStateHandler = e => {
        setCourseStates(prevState => {
            return {
                ...prevState,
                [e.target.name]: !prevState[e.target.name]
            }
        })
    }

    const handleImage = (e) => {
        setImage(e.target.files[0]);
    };
    const addCourseHandler = e => {
        e.preventDefault();
        // console.log(descInputRef.current.value);
        const formData = new FormData();
        formData.append("image", image);
        formData.append("name", nameInputRef.current.value);
        formData.append("description", descInputRef.current.value);
        formData.append("isActive", `${courseStates.isActive}`);
        formData.append("available", `${courseStates.available}`);
        //
        addCourse(formData);
        setCourseStates({isActive: false, available: false});
        descInputRef.current.value = ''
        nameInputRef.current.value = ''
    }
    return (
        <form className={`bg-white px-5 py-3 rounded-xl`} onSubmit={addCourseHandler}>
            <h2 className={`text-xl font-bold mb-2 text-center`}>Add Course</h2>
            <hr/>
            <input
                className={` hover:outline-0 focus:outline-0 border
                    py-1.5 pl-2 rounded-lg mb-4 max-w-full mt-6
                `}
                type="file"
                name="image"
                onChange={handleImage}
            />
            <input
                className={` hover:outline-0 focus:outline-0 border
                    py-1.5 pl-2 rounded-lg mb-4 w-full
                `}
                type="text"
                name="name"
                ref={nameInputRef}
                placeholder={"Name"}
            />
            <input
                className={` hover:outline-0 focus:outline-0 border
                    py-1.5 pl-2 rounded-lg mb-4 w-full
                `}
                type="text"
                name="description"
                ref={descInputRef}
                placeholder={"Description"}
            />
            <div className={`flex justify-between`}>
                <button
                    className={`border px-8 rounded-xl py-1.5
                        ${courseStates.isActive && 'text-white bg-primary'}
                    `}
                    type='button'
                    onClick={courseStateHandler}
                    name={'isActive'}
                >isActive</button>
                <button
                    className={`border px-8 rounded-xl py-1.5
                        ${courseStates.available && 'text-white bg-primary'}
                    `}
                    type='button'
                    onClick={courseStateHandler}
                    name={'available'}
                >Available</button>
            </div>
            <button
                className={`text-center bg-primary rounded-xl py-1.5 w-full text-white mt-4`}
                type="submit"
            >Add Course</button>
        </form>
    );
};

export default AddCourse;
