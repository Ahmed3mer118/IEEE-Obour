import {Link} from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Course = ({imageUrl, title, id, students, lessons}) => {

    return (
        <>
            <div className="shadow-xl p-2 bg-[#ffffff] rounded-xl border-2 border-[#4475F280] ">
                <div className="project-image h-48">
                    <img src={`${imageUrl}`} alt={'Course Image'}  className={`h-full w-full object-cover rounded-xl`}/>
                </div>
                <div className={'px-2'}>
                    <p className="text-xl mt-2 font-medium">{title}</p>
                    <div className={`flex gap-3 mt-2`}>
                        <div className={'flex gap-2'}>
                            <img src="/icons/icon.svg" alt="Book icon"/>
                            lessons: {lessons}
                        </div>
                        <div className={'flex gap-2'}>
                            <img src="/icons/icon-1.svg" alt="Book icon"/>
                            Students: {students}
                        </div>
                    </div>
                    <Link
                            to={`/courses/${id}`}
                            className="bg-[#0577AB] px-6 py-4 rounded-2xl font-medium text-[#ffffff] w-fit my-3 block"
                    >
                        Start Course {">"}
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Course;
