import SideContent from "./SideContent.jsx";
import {useParams} from "react-router-dom";
import {useAppContext} from "../../store/AppContext.jsx";
import {useEffect, useState} from "react";

const CourseLearn = () => {
    const {courses} = useAppContext();
    const {id} = useParams();
    const [course, setCourse] = useState({});
    const [content, setContent] = useState(0);
    const handleContentChange = index => {
        setContent(index)
    }
    useEffect(() => {
        if (courses.length > 0) {
            setCourse(courses.filter(course => course._id === id)[0])
        }
    }, [courses, id]);

    console.log(course);

    return (
        <div className={``}>
            <div className={`${content.length === 0 ? '' : 'content-area'}`}>
                <div>
                    <img src="/images/default-course-img.png" alt="Course Default Image"/>
                </div>
                <div>
                    {
                        course && !content.length && course._id &&
                        <div className={'py-10 px-10 lg:py-16 lg:px-20'}>
                            <div>
                                <h1 className={'capitalize text-4xl font-bold'}>{course.content[content].title}</h1>
                                <p className={'mt-4 pl-4'}>{course.content[content].description}</p>
                            </div>
                            <div className={'w-fit mt-10 text-white bg-[#0577AB] h-[90%] py-3 px-6 rounded-full'}>
                                <a href={`${course.content[content].file}`}  download={true}>Download Code</a>
                            </div>
                            <div className="bg-white min-w-2/5 max-w-full  my-10 py-2 pl-5 pr-2 rounded-full">
                                <label htmlFor="dropzone" className={'flex justify-between items-center h-full w-full'}>
                                    <div className={'flex items-center gap-2'}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                                            <path d="M11 14V1M11 1L14 4.5M11 1L8 4.5" stroke="#0F335E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M7 21H15C17.828 21 19.243 21 20.121 20.122C21 19.242 21 17.829 21 15V14C21 11.172 21 9.75801 20.121 8.87901C19.353 8.11101 18.175 8.01401 16 8.00201M6 8.00201C3.825 8.01401 2.647 8.11101 1.879 8.87901C1 9.75801 1 11.172 1 14V15C1 17.829 1 19.243 1.879 20.122C2.179 20.422 2.541 20.619 3 20.749" stroke="#0F335E" strokeWidth="1.5" strokeLinecap="round"/>
                                        </svg>
                                        <span className={'mt-[7px]'}>Upload File</span>
                                    </div>
                                    <button className={'text-white bg-[#0577AB] h-[90%] py-3 px-6 rounded-full cursor-not-allowed'} title={'Fix something'}>Upload task {content + 1}</button>
                                    <input type="file" name="file" accept={'.pdf'} id="dropzone" className="hidden"/>
                                </label>
                            </div>
                            <div className={'flex flex-col w-1/2 '}>
                               <textarea
                                   className={'resize-none rounded-t-lg border border-[#4475F2]/[0.50] border-dashed border-b-0 focus:outline-0 px-4 py-3 caret-blue-400 text-[#0F335E]/[0.50]'}
                                   name="feedback"
                                   id="feedback"
                                   cols="30"
                                   rows="10"
                                   placeholder={'Add Feedback'}
                               >
                                </textarea>
                                <button className={'text-white bg-[#0577AB] focus:outline-0 active:outline-0 rounded-lg py-1.5'}>Send Feedback</button>
                            </div>

                        </div>
                    }
                </div>
            </div>
            {
                course && !content.length && course._id &&
                <SideContent content={course.content} onChange={handleContentChange} activeLessonIndex={content}/>
            }
            {
                content.length &&
                    <div className={'mt-10 text-lg mx-auto w-fit bg-amber-300 p-6'}>There is no content to show</div>
            }
        </div>
    );
};

export default CourseLearn;