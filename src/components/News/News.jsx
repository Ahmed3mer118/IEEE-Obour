import {useEffect, useRef, useState} from "react";
import {useAppContext} from "../../store/AppContext.jsx";

const News = () => {
    const {createEvent, getEvents, events} = useAppContext()

    const nameInputRef = useRef();
    const dateInputRef = useRef();
    const descInputRef = useRef();
    const categorySelectRef = useRef();
    const [image, setImage] = useState();

    const handleImage = (e) => {
        setImage(e.target.files[0]);
    };

    useEffect(() => {
        if (!events || events.length === 0) {
            getEvents();
        }
    }, [events, getEvents])
    const createEventHandler = e => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("image", image);
        formData.append("name", nameInputRef.current.value);
        formData.append("description", descInputRef.current.value);
        formData.append("date", dateInputRef.current.value);
        formData.append("category", categorySelectRef.current.value);
        //
        createEvent(formData);
        //
        descInputRef.current.value = '';
        nameInputRef.current.value = '';
        dateInputRef.current.value = '';
        categorySelectRef.current.value = '';
    }
    return (
        <>
            <div className={`grid grid-cols-3 gap-10`}>
                <div className="col-span-2 grid items-center mt-6 content-center gap-10">
                    <form className="flex flex-col w-96 px-3 bg-white rounded-2xl gap-2 pb-4" onSubmit={createEventHandler}>
                        <h1 className="font-medium text-lg  text-center py-1 ">Add Events</h1> <hr />
                        <input
                                className={` w-full block focus:outline-0 border px-2 py-1 my-3  rounded-lg  border-neutral-200 `}
                                type="text"
                                name="name"
                                placeholder={"Name"}
                                ref={nameInputRef}
                                required
                        />
                        {/*<div className="flex justify-between">*/}
                        <input
                                className={` w-full focus:outline-0 border px-2 py-1 mb-3 rounded-lg  border-neutral-200`}
                                type="date"
                                name="data"
                                placeholder={"Day"}
                                ref={dateInputRef}
                                required
                        />
                        <select ref={categorySelectRef} name="category" className={` w-full focus:outline-0 border px-2 py-1 mb-3 rounded-lg  border-neutral-200`}>
                            <option value="Tech">Tech</option>
                        </select>
                        <input
                                className={`w-full focus:outline-0 border px-2 py-1 mb-3 rounded-lg  border-neutral-200`}
                                type="file"
                                name="image"
                                accept={'image/png,image/jpg,/image/jpeg'}
                                onChange={handleImage}
                                required
                        />
                        {/*<input*/}
                        {/*        className={` w-20 block focus:outline-0 border px-2 py-1 my-3 `}*/}
                        {/*        type="month"*/}
                        {/*        name="title"*/}
                        {/*        placeholder={"Month"}*/}
                        {/*/>*/}
                        {/*<input*/}
                        {/*    className={`w-20 focus:outline-0 border px-2 py-1 my-3`}*/}
                        {/*    type="number"*/}
                        {/*    min="1900"*/}
                        {/*    max="2099"*/}
                        {/*    step="1"*/}
                        {/*/>*/}
                        {/*<input*/}
                        {/*        className={`w-14 focus:outline-0 border px-2 py-1 my-3`}*/}
                        {/*        type="date"*/}
                        {/*        name="title"*/}
                        {/*        placeholder={"Year "}*/}
                        {/*/>*/}
                        {/*</div>*/}
                        <textarea ref={descInputRef} name={'description'} className="border mb-3 grow border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder={'Description'} required></textarea>
                        {/*<input*/}
                        {/*    className={` w-full h-28 block focus:outline-0 border px-2 py-1 my-3 rounded-lg`}*/}
                        {/*    type="text"*/}
                        {/*    name="description"*/}
                        {/*    placeholder={"Description"}*/}
                        {/*/>*/}
                        <button
                                className={`focus:outline-0 py-1 px-6 text-white bg-primary rounded-2xl`}
                                type="submit"
                        >Add</button>
                    </form>

                    <form className="flex flex-col w-96 px-3 bg-white rounded-2xl gap-2 pb-4">
                        <h1 className="font-medium text-lg  text-center py-1 ">Edit Events</h1> <hr />
                        <input
                                className={`w-50 block focus:outline-0 border px-2 py-1 mb-3 rounded-lg border-neutral-200 `}
                                type="text"
                                name="title"
                                placeholder={"Name"}
                                required
                        />
                        <div className="flex gap-20">
                            <input
                                    className={`w-full block focus:outline-0 border px-2 py-1 mb-3 rounded-lg border-neutral-200`}
                                    type="date"
                                    name="date"
                                    required
                            />
                            {/*<input*/}
                            {/*    className={` w-14 block focus:outline-0 border px-2 py-1 my-3 `}*/}
                            {/*    type="text"*/}
                            {/*    name="title"*/}
                            {/*    placeholder={"Month"}*/}
                            {/*/>*/}
                            {/*<input*/}
                            {/*    className={`w-14 focus:outline-0 border px-2 py-1 my-3`}*/}
                            {/*    type="text"*/}
                            {/*    name="title"*/}
                            {/*    placeholder={"Year "}*/}
                            {/*/>*/}
                        </div>
                        {/*<input*/}
                        {/*    className={`w-50 h-28 block focus:outline-0 border px-2 py-1 my-3 rounded-lg w-full`}*/}
                        {/*    type="text"*/}
                        {/*    name="description"*/}
                        {/*    placeholder={"Description"}*/}
                        {/*/>*/}
                        <textarea className="border grow border-gray-300 rounded-md mb-3 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder={'Description'} required></textarea>
                        <button
                                className={`focus:outline-0 py-1 px-6 text-white bg-primary rounded-2xl`}
                                type="submit"
                        >Add Edit</button>
                    </form>
                </div>
                <div className="col-span-1 bg-white h-screen pt-10 px-6">
                    <div className={`flex justify-between items-end mb-1`}>
                        <h2 className={`font-medium text-xl`}>Remove Students</h2>
                        <span className={`text-[14px] font-medium text-primary`}>See All</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default News;
