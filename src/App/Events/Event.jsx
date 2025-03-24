import React, { useEffect, useState } from "react";
import imageEvent from "/images/image 299.png";
import logoEvent from "/images/logoEvent.png";
import { TbWindElectricity } from "react-icons/tb";

// const saturdayEvents = [
//     { day: "Saturday, May 25" },
//     { time: "11:30 am EEST", title: "Registration" },
//     {
//         time: "1:30 pm EEST",
//         title: "Welcoming Remarks",
//         speaker: "Tarkek ElKady",
//     },
//     { time: "2:30 pm ESST", title: "Al Talk", speaker: "Bassel Rahmy" },
//     { time: "4 pm ESST", title: "UI & UX Talk", speaker: "Amir Yousry" },
//     { time: "5 pm ESST", title: "Meet & Greet", speaker: "Shehab Eldin" },
//     { time: "5:30 pm EEST", title: "Break" },
//     { time: "6 pm ESST", title: "The Future of Edtech", speaker: "Panel Talk" },
//     {
//         time: "7:20 pm ESST",
//         title: "Building Bridges in Tech",
//         speaker: "Fireside chat",
//     },
//     { time: "7:35 pm EEST", title: "Break" },
//     { time: "7:20 pm ESST", title: "Fintech Talk", speaker: "Hassan Morad" },
// ];

// const mondayEvents = [
//     { day: "Monday, May 27" },
//     { time: "8:30 am EEST", title: "Registration" },
//     { time: "10 pm ESST", title: "Meet & Greet", speaker: "Ahmed Sherif" },
//     {
//         time: "11:30 pm ESST",
//         title: "Branding for Impact",
//         speaker: "Aly Nour",
//     },
//     {
//         time: "1:30 pm ESST",
//         title: "The Future of Tech",
//         speaker: "Hassan Alhwari",
//     },
//     { time: "3 pm ESST", title: "Break", speaker: "Hassan Alhwari" },
//     {
//         time: "3:30 pm ESST",
//         title: "Edtech Apps Operations",
//         speaker: "Panel Talk",
//     },
//     { time: "5:30 pm ESST", title: "The Impact of AI", speaker: "Osama Wahed" },
// ];

// const events = {
//     "Saturday, May 25": [
//         {
//             time: "11:30 am EEST",
//             title: "Registration",
//         },
//         {
//             time: "1:30 pm EEST",
//             title: "Welcoming Remarks",
//             speaker: "Tarkek ElKady",
//         },
//         {
//             time: "2:30 pm ESST",
//             title: "AI Talk",
//             speaker: "Bassel Rahmy",
//         },
//         {
//             time: "4 pm ESST",
//             title: "UI & UX Talk",
//             speaker: "Amir Yousry",
//         },
//         {
//             time: "5 pm ESST",
//             title: "Meet & Greet",
//             speaker: "Shehab Eldin",
//         },
//         {
//             time: "5:30 pm EEST",
//             title: "Break",
//         },
//         {
//             time: "6 pm ESST",
//             title: "The Future Of Edtech",
//             speaker: "Panel Talk",
//         },
//         {
//             time: "7:20 pm ESST",
//             title: "Building Bridges In Tech",
//             speaker: "Fireside chat",
//         },
//         {
//             time: "7:35 pm EEST",
//             title: "Break",
//         },
//         {
//             time: "7:20 pm ESST",
//             title: "Fintech Talk",
//             speaker: "Hassan Morad",
//         },
//     ],
//     "Monday, May 26": [
//         {
//             time: "8:30 am EEST",
//             title: "Registration",
//         },
//         {
//             time: "10 pm ESST",
//             title: "Meet & Greet",
//             speaker: "Ahmed Sherif",
//         },
//         {
//             time: "11:30 pm ESST",
//             title: "Branding For Impact",
//             speaker: "Aly Nour",
//         },
//         {
//             time: "1:30 pm ESST",
//             title: "The Future Of Tech",
//             speaker: "Hassan Alhwari",
//         },
//         {
//             time: "3 pm ESST",
//             title: "Break",
//             speaker: "Hassan Alhwari",
//         },
//         {
//             time: "3:30 pm ESST",
//             title: "Edtech Apps Operations",
//             speaker: "Panel Talk",
//         },
//         {
//             time: "5:30 pm ESST",
//             title: "The Impact Of AI",
//             speaker: "Osama Wahed",
//         },
//     ],
// };

// const [days, setDays] = useState("")
const Event = () => {
    const [days, setDays] = useState({
        saturdayEvents: [
            { day: "Saturday, May 25" },
            { time: "11:30 am EEST", title: "Registration" },
            {
                time: "1:30 pm EEST",
                title: "Welcoming Remarks",
                speaker: "Tarkek ElKady",
            },
            { time: "2:30 pm ESST", title: "Al Talk", speaker: "Bassel Rahmy" },
            {
                time: "4 pm ESST",
                title: "UI & UX Talk",
                speaker: "Amir Yousry",
            },
            {
                time: "5 pm ESST",
                title: "Meet & Greet",
                speaker: "Shehab Eldin",
            },
            { time: "5:30 pm EEST", title: "Break" },
            {
                time: "6 pm ESST",
                title: "The Future of Edtech",
                speaker: "Panel Talk",
            },
            {
                time: "7:20 pm ESST",
                title: "Building Bridges in Tech",
                speaker: "Fireside chat",
            },
            { time: "7:35 pm EEST", title: "Break" },
            {
                time: "7:20 pm ESST",
                title: "Fintech Talk",
                speaker: "Hassan Morad",
            },
        ],
        mondayEvents: [
            { day: "Monday, May 27" },
            { time: "8:30 am EEST", title: "Registration" },
            {
                time: "10 pm ESST",
                title: "Meet & Greet",
                speaker: "Ahmed Sherif",
            },
            {
                time: "11:30 pm ESST",
                title: "Branding for Impact",
                speaker: "Aly Nour",
            },
            {
                time: "1:30 pm ESST",
                title: "The Future of Tech",
                speaker: "Hassan Alhwari",
            },
            { time: "3 pm ESST", title: "Break", speaker: "Hassan Alhwari" },
            {
                time: "3:30 pm ESST",
                title: "Edtech Apps Operations",
                speaker: "Panel Talk",
            },
            {
                time: "5:30 pm ESST",
                title: "The Impact of AI",
                speaker: "Osama Wahed",
            },
        ],
    });
    
    const [scroll, setScroll] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 500 && !scroll) {
                setScroll(true);
            } else if (window.scrollY <= 500 && scroll) {
                setScroll(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [scroll]);

    return (
        <div className="grid gri-cols-3 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1">
            <div className="col-span-2">
                <div>
                    <img src={imageEvent} alt="imageEvent" />
                </div>
                <div className="lg:flex md:flex ms-8 mt-[50px]">
                    <div className="object-cover ">
                        <img
                            src={logoEvent}
                            alt="logoEvent"
                            className="lg:h-[100px] max-h-[200px] min-h-[100px] w-[25rem] mx-auto "
                        />
                    </div>
                    <div className="lg:ms-[40px] ">
                        <h1 className="font-bold md:text-[40px] mb-[15px] sm:text-[20px]">
                            Techni Summit - Cairo
                        </h1>
                        <h3 className="md:text-[20px] mt-[15px] mb-[15px] sm:text-[15px]">
                            <span className="font-bold">MAY 25-26, 2023 -</span>
                            Panel Talk / TECH TALK
                        </h3>
                        <p className="p-[10px] lg:text-[20px] md:text-[15px]">
                            Techne Summit is an international conference that
                            addresses many topics, focusing on Investment &
                            Entrepreneurship. It aims to empower the startup
                            community across the Mediterranean by holding
                            initiatives that highlight various technologies and
                            their application in different industries
                        </p>
                        <h3>
                            <span className="font-bold">Cairo Stadium -</span>
                            Covered Hall Complex
                        </h3>
                    </div>
                </div>
                <div className="text-center">
                    <button className="btn bg-[#0577AB] text-[#fff] p-[10px] rounded-lg max-w-[400px] w-[300px] mx-auto mt-[40px] mb-[20px]">
                        Submit
                    </button>
                </div>
            </div>

            <div className="event-section border rounded-l-lg w-[100%] md:grid-cols sm:grid-cols p-[10px]   ">
                <>
                    <h1 className=" text-[#333333CC] ">
                        {days.saturdayEvents[0].day}
                    </h1>
                    <div className="event-list md:w-[80%] sm:w-[100%] mx-auto border-l ">
                        {days.saturdayEvents.map((event) => (
                            <div
                                className="event-item relative snap-center"
                                key={Math.random()}
                            >
                                <div className="absolute left-[-16px] ">
                                    <div className="relative z-10 size-8 flex justify-center items-center">
                                        <div className="size-4 rounded-full bg-[#0577AB]  dark:bg-neutral-800"></div>
                                    </div>
                                </div>
                                <div className="title ms-8 font-bold">
                                    {event.title}
                                </div>
                                <div className="time ms-8 mt-1 mb-[25px]">
                                    {event.time}

                                    {event.speaker && (
                                        <span className="speaker">
                                            - {event.speaker}
                                        </span>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    {scroll && (
                        <>
                            <h1 className=" text-[#333333CC] ">
                                {days.mondayEvents[0].day}
                            </h1>
                            <div className="event-list md:w-[80%] sm:w-[100%] mx-auto border-l ">
                                {days.mondayEvents.map((event) => (
                                    <div
                                        className="event-item relative"
                                        key={Math.random()}
                                    >
                                        <div className="absolute left-[-16px] ">
                                            <div className="relative z-10 size-8 flex justify-center items-center">
                                                <div className="size-4 rounded-full bg-[#0577AB]  dark:bg-neutral-800"></div>
                                            </div>
                                        </div>
                                        <div className="title ms-8 font-bold">
                                            {event.title}
                                        </div>
                                        <div className="time ms-8 mt-1 mb-[25px]">
                                            {event.time}

                                            {event.speaker && (
                                                <span className="speaker">
                                                    - {event.speaker}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </>
                    )}
                </>
            </div>
        </div>
    );
};

export default Event;
