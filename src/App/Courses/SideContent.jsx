
// eslint-disable-next-line react/prop-types
const SideContent = ({content, onChange, activeLessonIndex}) => {
    // console.log(content)
    const lessons = content || [];
    return (
        <aside className={`hidden bg-white lg:block fixed top-[88px] side-content right-0 py-6 overflow-auto border-t`}>
            {
                lessons.map((lesson, index) => {
                    return (
                        <div key={Math.random()} className={`py-6 px-6 flex gap-2 items-center cursor-pointer ${activeLessonIndex === index ? 'bg-gray-200' : ''}`} onClick={() => onChange(index)}>
                            <div className={'w-9 h-9 rounded-full flex justify-center items-center text-white bg-primary text-lg'}>{index + 1}</div>
                            <p>{lesson.title}</p>
                        </div>
                    )
                })
            }
        </aside>
    );
};

export default SideContent;
