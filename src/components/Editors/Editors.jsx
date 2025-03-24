import {useAppContext} from "../../store/AppContext.jsx";
import {useEffect, useRef, useState} from "react";
import Editor from "./Editor.jsx";
import {toast} from "react-toastify";

const Editors = () => {
    const nameInputRef = useRef();
    const emailInputRef = useRef();
    const uniCodeInputRef = useRef();
    const {
        courses,
        createEditor
    } = useAppContext();

    const [activeCourse, setActiveCourse] = useState({...courses[0]});
    const CourseChangeHandler = e => {
        setActiveCourse(() => {
            return courses.filter(course => course._id === e.target.value)[0];
        });
    }
    useEffect(() => {
        setActiveCourse({...courses[0]});
    }, [courses]);


    const createEditorHandler = e => {
        e.preventDefault();
        const newEditor = {
            name: nameInputRef.current.value,
            email: emailInputRef.current.value,
            university_code: uniCodeInputRef.current.value
        }
        if (
            !newEditor.name ||
            !newEditor.email ||
            !newEditor.university_code
        ) {
            toast.error("Please Provide All Values");
        }
        createEditor(newEditor);
        nameInputRef.current.value = '';
        emailInputRef.current.value = '';
        uniCodeInputRef.current.value = '';
    }

    return (

        <>
            <aside className="rounded-2xl w-80 fixed right-0 h-full bg-white  py-20  inset-y-0 ">
            {/*<div className="flex ">*/}
            {/*    <div className="bg-sky-100 w-46 h-14 rounded-2xl flex text-left items-center mb-20 ml-32">*/}
            {/*        <div className="bg-emerald-600 w-10 h-10 rounded-full mr-8 ml-2 flex text-center justify-center items-center">*/}
            {/*            <p>FD</p>*/}
            {/*        </div>*/}
            {/*        <div className="mr-3">*/}
            {/*            <h1 className="font-bold">Amir Yousry</h1>*/}
            {/*            <p className="text-xs text-gray-500">5616168</p>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
                <div className="flex ">
                    <h1 className="ml-9 text-lg font-bold">Remove Editors</h1>
                    <a
                        className="ml-20 text-xs mt-1.5 font-bold text-blue-600"
                        href="#"
                    >
                        View All
                    </a>
                </div>
                <div className="mt-3 ml-8">
                    <Editor/>
                    <Editor/>
                    <Editor/>
                    <Editor/>
                    <Editor/>
                    <Editor/>
                    <Editor/>
                    <Editor/>
                {/*    <div className="bg-sky-100 w-64 h-14 rounded-2xl flex text-left items-center justify-between px-2">*/}
                {/*        <div className="bg-emerald-600 w-10 h-10 rounded-full flex text-center justify-center items-center">*/}
                {/*            <p>FD</p>*/}
                {/*        </div>*/}
                {/*        <div>*/}
                {/*            <h1 className="font-bold">Mo.3amer</h1>*/}
                {/*            <p className="text-xs text-gray-500">5616168</p>*/}
                {/*        </div>*/}
                {/*        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">*/}
                {/*            <circle cx="11" cy="11" r="10.5" stroke="#FF0000"/>*/}
                {/*            <path d="M4.3999 11H16.8666" stroke="#FF0000" strokeWidth="1.5" strokeLinecap="round"/>*/}
                {/*        </svg>*/}
                {/*    </div>*/}
                {/*</div>*/}
                {/*<div className="mt-3 ml-8 flex">*/}
                {/*    <div className="bg-sky-100 w-64 h-14 rounded-2xl flex text-left items-center ">*/}
                {/*        <div className="bg-emerald-600 w-10 h-10 rounded-full mr-14 ml-2 flex text-center justify-center items-center">*/}
                {/*            <p>FD</p>*/}
                {/*        </div>*/}
                {/*        <div>*/}
                {/*            <h1 className="font-bold">Mo.3amer</h1>*/}
                {/*            <p className="text-xs text-gray-500">5616168</p>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
                {/*<div className="mt-3 ml-8 flex">*/}
                {/*    <div className="bg-sky-100 w-64 h-14 rounded-2xl flex text-left items-center ">*/}
                {/*        <div className="bg-emerald-600 w-10 h-10 rounded-full mr-14 ml-2 flex text-center justify-center items-center">*/}
                {/*            <p>FD</p>*/}
                {/*        </div>*/}
                {/*        <div>*/}
                {/*            <h1 className="font-bold">Mo.3amer</h1>*/}
                {/*            <p className="text-xs text-gray-500">5616168</p>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
                {/*<div className="mt-3 ml-8 flex">*/}
                {/*    <div className="bg-sky-100 w-64 h-14 rounded-2xl flex text-left items-center ">*/}
                {/*        <div className="bg-emerald-600 w-10 h-10 rounded-full mr-14 ml-2 flex text-center justify-center items-center">*/}
                {/*            <p>FD</p>*/}
                {/*        </div>*/}
                {/*        <div>*/}
                {/*            <h1 className="font-bold">Mo.3amer</h1>*/}
                {/*            <p className="text-xs text-gray-500">5616168</p>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
                {/*<div className="mt-3 ml-8 flex">*/}
                {/*    <div className="bg-sky-100 w-64 h-14 rounded-2xl flex text-left items-center ">*/}
                {/*        <div className="bg-emerald-600 w-10 h-10 rounded-full mr-14 ml-2 flex text-center justify-center items-center">*/}
                {/*            <p>FD</p>*/}
                {/*        </div>*/}
                {/*        <div>*/}
                {/*            <h1 className="font-bold">Mo.3amer</h1>*/}
                {/*            <p className="text-xs text-gray-500">5616168</p>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
                {/*<div className="mt-3 ml-8 flex">*/}
                {/*    <div className="bg-sky-100 w-64 h-14 rounded-2xl flex text-left items-center ">*/}
                {/*        <div className="bg-emerald-600 w-10 h-10 rounded-full mr-14 ml-2 flex text-center justify-center items-center">*/}
                {/*            <p>FD</p>*/}
                {/*        </div>*/}
                {/*        <div>*/}
                {/*            <h1 className="font-bold">Mo.3amer</h1>*/}
                {/*            <p className="text-xs text-gray-500">5616168</p>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
                {/*<div className="mt-3 ml-8 flex">*/}
                {/*    <div className="bg-sky-100 w-64 h-14 rounded-2xl flex text-left items-center ">*/}
                {/*        <div className="bg-emerald-600 w-10 h-10 rounded-full mr-14 ml-2 flex text-center justify-center items-center">*/}
                {/*            <p>FD</p>*/}
                {/*        </div>*/}
                {/*        <div>*/}
                {/*            <h1 className="font-bold">Mo.3amer</h1>*/}
                {/*            <p className="text-xs text-gray-500">5616168</p>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                </div>
            </aside>
            <select
                    className={`w-1/2 font-medium rounded-full mb-4 mt-6 px-6 py-3 bg-white active:outline-0 focus:outline-0`}
                    onChange={CourseChangeHandler}
                    // defaultValue={'Testing'}
                    name="course"
                >
                    {
                        courses &&
                        courses.map(course => (<option key={course._id} value={`${course._id}`}>{course.name}</option>))
                    }
                </select>
            <div className="grid   mt-20">
                <form className="mt-4 bg-white rounded-xl px-3 basis-3/5 h-72 w-96 grid items-center " onSubmit={createEditorHandler}>
                    <h2 className="py-1 text-center font-medium text-lg">
                        Create Editor
                    </h2>
                    <hr />
                    <input
                        ref={nameInputRef}
                        className="block focus:outline-0 border px-2 py-1 my-3 rounded-lg w-full mt-5"
                        type="text"
                        name="name"
                        placeholder="Name"
                        required
                    />
                    <input
                        ref={emailInputRef}
                        className="block focus:outline-0 border px-2 py-1 my-3 rounded-lg w-full mb-5"
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        required
                    />
                    <input
                        ref={uniCodeInputRef}
                        className="block focus:outline-0 border px-2 py-1 my-3 rounded-lg w-full mb-5"
                        type="text"
                        name="university_code"
                        placeholder="University Code"
                        required
                    />
                    <button
                        className="ml-28 relative justify-center focus:outline-0 py-1 px-6 text-white bg-primary rounded-xl mb-5 h-10 w-36"
                        type="submit"
                    >
                        Submit
                    </button>
                </form>
                <form className="mt-4 bg-white rounded-xl px-3 basis-3/5 h-72 w-96 grid items-center">
                    <h2 className="py-1 text-center font-medium text-lg">
                        Edit Editor
                    </h2>
                    <hr />
                    <input
                        className="block focus:outline-0 border px-2 py-1 my-3 rounded-lg w-full mt-5"
                        type="text"
                        name="title"
                        placeholder="Name"
                        required
                    />
                    <input
                        className="block focus:outline-0 border px-2 py-1 my-3 rounded-lg w-full mb-5"
                        type="text"
                        name="title"
                        placeholder="Email Address"
                        required
                    />
                    <input
                        className="block focus:outline-0 border px-2 py-1 my-3 rounded-lg w-full mb-5"
                        type="number"
                        name="title"
                        placeholder="University Code"
                        required
                    />
                    <button
                        className="ml-28 relative justify-center focus:outline-0 py-1 px-6 text-white bg-primary rounded-xl mb-5 h-10 w-36 "
                        type="submit"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </>
    );
};

export default Editors;
