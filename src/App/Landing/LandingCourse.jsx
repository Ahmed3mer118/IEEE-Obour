import {Link} from "react-router-dom";

// eslint-disable-next-line react/prop-types
const LandingCourse = ({imgUrl, name, id}) => {
    return (
        <div className="w-full h-48 flex border border-blue-900 gap-10 rounded-md">
            <img src={imgUrl} alt="Course Image" />
            <div className='flex justify-center items-center flex-col gap-10'>
                <h1>{name}</h1>
                <Link to={`/courses/${id}`} className=' w-24 h-10 border border-blue-900  rounded-md'>Learn more </Link>
            </div>
        </div>
    );
};

export default LandingCourse;
