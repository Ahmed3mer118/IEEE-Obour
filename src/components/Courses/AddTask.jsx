import {useAppContext} from "../../store/AppContext.jsx";
import {useRef, useState} from "react";

// eslint-disable-next-line react/prop-types
const AddTask = ({courseId}) => {
    const titleInputRef = useRef();
    const descInputRef = useRef();
    const deadlineInputRef = useRef();
    const pointsInputRef = useRef();
    const weekInputRef = useRef();
    const [file, setFile] = useState();

    const handleFile = (e) => {
        setFile(e.target.files[0]);
    };
    const {
        addTask,
    } = useAppContext();


    const submitHandler = e => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("file", file);
        formData.append("title", titleInputRef.current.value);
        formData.append("description", descInputRef.current.value);
        formData.append("deadline", deadlineInputRef.current.value);
        formData.append("points", pointsInputRef.current.value);
        formData.append("week", weekInputRef.current.value);
        formData.append("courseId", courseId);
        //
            addTask(formData);
        //
        titleInputRef.current.value = '';
        descInputRef.current.value = '';
        pointsInputRef.current.value = '';
        deadlineInputRef.current.value = '';
    }
    return (
        <form className={`mt-4 bg-white rounded-xl px-3 basis-3/5`}
              onSubmit={submitHandler}
        >
            <h2 className={`py-1 text-center font-medium text-lg`}>Add Task</h2>
            <hr/>
            <input
                className={`block focus:outline-0 border px-2 py-1 my-3 rounded-lg w-full`}
                type="text"
                name="title"
                placeholder={"Title"}
                ref={titleInputRef}
                required
            />
            <select
                name="week"
                className={`focus:outline-0 block
                    w-full border px-2 py-1 my-3 rounded-lg
                `}
                ref={weekInputRef}
            >
                <option value="1">Week 1</option>
                <option value="2">Week 2</option>
                <option value="3">Week 3</option>
                <option value="4">Week 4</option>
                <option value="5">Week 5</option>
            </select>
            <input
                className={`block focus:outline-0 border px-2 py-1 my-3 rounded-lg w-full`}
                type="text"
                name="description"
                placeholder={"Description"}
                ref={descInputRef}
                required
            />
            <input
                className={`block focus:outline-0 border px-2 py-1 my-3 rounded-lg w-full`}
                type="file"
                name="file"
                accept={'.pdf'}
                onChange={handleFile}
                required
            />
            <input
                className={`block focus:outline-0 border px-2 py-1 my-3 rounded-lg w-full`}
                type="date"
                name="deadline"
                title={'Deadline'}
                ref={deadlineInputRef}
                required
            />
            <div className={`flex justify-between items-center`}>
                <input
                    className={` focus:outline-0 border px-2 py-1 my-3 rounded-lg`}
                    type="number"
                    name="points"
                    title={'Points'}
                    ref={pointsInputRef}
                    required
                />
                <button
                    className={`focus:outline-0 py-1 px-6 text-white bg-primary rounded-2xl`}
                    type="submit"
                >Add</button>
            </div>
        </form>
    );
};

export default AddTask;
