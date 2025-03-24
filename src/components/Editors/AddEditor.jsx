
const AddEditor = () => {
    return (
            <div className={`col-span-2 h-[100vh] flex justify-center items-center`}>
                <form className={`bg-white px-3 rounded-xl`}>
                    <h2 className={`py-2 text-center text-xl font-medium`}>Create/Edit Editor</h2>
                    <hr/>
                    <select className={`w-full appearance-none my-3 border py-1 px-2 rounded-lg`}
                            name="courseName"
                    >
                        <option value="uiux" selected={true}>UI/UX Design</option>
                        <option value="cs111">Intro to CS</option>
                        <option value="pl-1" >Programming 1</option>
                        <option value="oop">Object Oriented Programming</option>
                        <option value="math-1">Math 1</option>
                    </select>
                    <input type="text" name="name"/>
                    <input type="email" name="email"/>
                    <input type="text" name="uniCode"/>
                </form>
            </div>
    );
};

export default AddEditor;
