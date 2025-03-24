
const AddStudent = ({courses}) => {

    const submitHandler = e => {
        e.preventDefault();
    }
    return (
        <form className={` bg-white rounded-xl px-3 basis-3/5`}
                       onSubmit={submitHandler}
        >
            <h2 className={`py-1 text-center font-medium text-lg`}>Add Student</h2>
            <hr/>
            <div className={`grid content-evenly   h-full`}>
                <select
                        className={`w-full border px-2 py-1 my-3  block font-medium rounded-lg active:outline-0 focus:outline-0`}
                        // defaultValue={'Testing'}
                        name="course"
                >
                    {
                            courses &&
                            courses.map(course => (<option key={course._id} value={`${course._id}`}>{course.name}</option>))
                    }
                </select>
                <input
                        className={`block focus:outline-0 border px-2 py-1 my-3 rounded-lg w-full`}
                        type="text"
                        name="uniCode"
                        placeholder={'University Code'}
                />
                <button className={`text-center w-full text-white bg-primary mb-3 py-1.5 rounded-xl`}
                        type="submit"
                >Add Student</button>
            </div>
        </form>
    );
};

export default AddStudent;
