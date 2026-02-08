import React from "react";


const activities = [
    {
        title: "Events",
        description:
            "We organize and participate in various events, providing opportunities for learning, networking, and professional growth. Our events range from tech conferences and hackathons to industry talks and student competitions.",
    },
    {
        title: "Gathering Activities",
        description:
            "We organize gathering activities where team members come together to learn, share experiences, and grow. These activities strengthen communication, teamwork, and problem-solving skills in an engaging and collaborative environment.",
    },
    {
        title: "Sessions",
        description:
            "We organize both technical and non-technical sessions, covering a wide range of topics to enhance skills, share knowledge, and foster innovation. Our sessions include hands-on tech talks, soft skills development, and career guidance.",
    },
];
const ActivityCard = ({ title, description }) => {
    return (
        <div className="box max-w-[300px] min-h-[400px] p-[15px] bg-[#fff] rounded-lg border border-slate-300 shadow-md m-[30px] relative">
            <h1 className="text-primary font-bold text-[25px] m-[5px]">{title}</h1>
            <p>{description}</p>
            <span className="absolute bottom-[10px] left-[25px]">IEEE OCS SB</span>
        </div>
    );
};

const WhatWeDo = () => {
    return (
        <section className="whatWeDo mb-[80px]">
            <div className="container mx-auto mt-[10px] mb-[10px]">
                <h1 className="text-center text-[40px] font-bold mb-[40px]">
                    What <span className="text-blue-700">We Do</span>
                </h1>
                <div className="flex justify-center flex-wrap mx-auto">
                    {activities.map((activity, index) => (
                        <ActivityCard key={index} {...activity} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhatWeDo;

    // const event = {
    //     _id: "65f8a1b2c3d4e5f678901234", // ID حقيقي من قاعدة البيانات
    //     date: "APR 14-15-16, 2025 ",
    //     title: "SPEAKER SESSION - Competition",
    //     mainTitle: "Code Craft Hackathon II",
    //     description: "Code Craft is set to host its second hackathon, a 3-day event featuring four key technology tracks: Flutter, Frontend, Game Development, and UI/UX Design. Participants will compete to create innovative solutions while showcasing their skills. The event will also include talks from expert speakers, offering valuable insights. At the end, the top three teams in each track will be recognized for their outstanding performance."
    // };