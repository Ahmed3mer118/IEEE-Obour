import {useRef, useState} from "react";
import {useAppContext} from "../../store/AppContext.jsx";

const AddContent = ({courseId}) => {
    const titleInputRef = useRef();
    const descInputRef = useRef();
    const weekInputRef = useRef();
    const [file, setFile] = useState();

    const handleFile = (e) => {
        setFile(e.target.files[0]);
    };
    const {
        addWeekContent,
    } = useAppContext();
    const submitHandler = e => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("file", file);
        formData.append("title", titleInputRef.current.value);
        formData.append("description", descInputRef.current.value);
        formData.append("week", weekInputRef.current.value);
        //
        addWeekContent(formData, courseId);
        //
        titleInputRef.current.value = '';
        descInputRef.current.value = '';
    }
    return (
        <form className={`mt-4 bg-white rounded-xl px-3 basis-2/5 pb-2 flex flex-col justify-evenly`}
              onSubmit={submitHandler}
        >
            <h2 className={`py-1 text-center font-medium text-lg`}>Add Content</h2>
            <hr/>
            <input
                className={`block focus:outline-0 border px-2 py-1 my-3 rounded-lg w-full`}
                type="text"
                name="title"
                placeholder={"Title"}
                ref={titleInputRef}
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
            />
            <input
                className={`block focus:outline-0 border px-2 py-1 my-3 rounded-lg w-full`}
                type="file"
                name="file"
                accept={'.pdf'}
                onChange={handleFile}
            />
            <button
                className={` focus:outline-0 py-1 px-6 text-white bg-primary rounded-2xl w-full`}
                type="submit"
            >Add</button>

        </form>
    );
};

export default AddContent;
