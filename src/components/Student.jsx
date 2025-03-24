import { BsFillStarFill } from "react-icons/bs";


// eslint-disable-next-line react/prop-types
const Student = ({name, points, shortName, color}) => {
    return (
        <div className={`flex items-center gap-2 bg-[#F0F7FF] rounded-xl p-2`}>
            <div className={`rounded-full bg-[#FF1D86] text-white w-8 h-8 flex justify-center items-center`}>{shortName}</div>
            <div className={`grow`}>
                <p className={` font-bold m-0 p-0`}>{name}</p>
                <p className={`font-medium text-[#8A8A8A] text-[12px]`}>{points}/10 POINTS</p>
            </div>
            <div className={`relative flex justify-center items-center
                    w-8 h-8 rounded-full
                    p-[2px] bg-gradient-to-l from-[#FFC887] to-[#FFF1E0]
                `}
            >
                <BsFillStarFill
                    className={`w-3 h-3 absolute top-[-6px] text-[#FF991F]`}
                />
                <p className={`text-[14px] flex justify-center items-center rounded-full w-full h-full bg-[#E6E6E6]`}>5</p>
            </div>
        </div>
    );
};

export default Student;
