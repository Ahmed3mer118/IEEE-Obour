import RateStudent from "../RateStudent.jsx";

const RateStudents = () => {
    return (
            <div className={`py-2 bg-white rounded-xl px-3 basis-2/5`}>
                <div className={`flex justify-between items-end mb-1`}>
                    <h2 className={`font-medium text-xl`}>Rate Students</h2>
                    <span className={`text-[12px] text-primary`}>View All</span>
                </div>
                <div className={`grid gap-2`}>
                    <RateStudent
                        name={'Amir Yousry'}
                        points={9.5}
                        shortName={'AY'}
                        color={'#16D03B'}
                    />
                    <RateStudent
                        name={'Doha Emam'}
                        points={9}
                        shortName={'DE'}
                        color={'#0077FF'}
                    />
                    <RateStudent
                        name={'Mo.3amer'}
                        points={8.5}
                        shortName={'M3'}
                    />
                    <RateStudent
                        name={'Jo.Sherif'}
                        points={10}
                        shortName={'JS'}
                    />
                </div>
            </div>
    );
};

export default RateStudents;
