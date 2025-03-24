import React from "react";
import post from "/images/past.png";
import { Link } from "react-router-dom";

const events = [
    {
        date: "MAR 7, 2025",
        title: "FawazIEEEr Ramadan",
        locationEvent: "Online",
        image: "/images/event1.jpg",
        link: "https://www.facebook.com/share/p/1EtVNCH8Z8/",
    },
    {
        date: "FEB 22, 2025",
        title: "IEEE Egypt Entrepreneurship Week 2025",
        locationEvent: "The Knowledge Hub",
        image: "/images/event2_1.jpg",
        link: "https://fb.me/e/4vttguR3v",
    },

    {
        date: "FEB 15, 2025",
        title: "IEEE Egyption Student Branch Officers Meeting Q1",
        locationEvent: "Obour University",
        image: "/images/event2.jpg",
        link: "https://fb.me/e/4tsQ9su1E",
    },
    {
        date: "FEB 8, 2025",
        title: "TechShift Summit 2025",
        locationEvent: "The Greek Campus",
        image: "/images/event3.jpg",
        link: "https://www.facebook.com/share/p/12Gk5BsuiXb/?mibextid=wwXIfr",
    },
    {
        date: "NOV 29-30, 2024",
        title: "Engineerex 2024",
        locationEvent: "The Greek Campus",
        image: "/images/event4.jpg",
        link: "https://www.facebook.com/share/p/1ELjFeogJK/?mibextid=wwXIfr",
    },
    {
        date: "OCT 26, 2024",
        title: "IEEEXtreme 2024",
        locationEvent: "ITI Port Said",
        image: "/images/event5.jpg",
        link: "https://www.facebook.com/share/p/16D38kmnNK/?mibextid=wwXIfr",
    },
    {
        date: "OCT 24, 2024",
        title: "Arab 3D 2024",
        locationEvent: "Egyptian Chinese University",
        image: "/images/event6.jpg",
        link: "https://www.facebook.com/share/1C662totbd/?mibextid=wwXIfr",
    },
    {
        date: "OCT 15-16, 2024",
        title: "Welcome Day 2025",
        locationEvent: "Obour University",
        image: "/images/event10.jpg",
        link: "https://www.facebook.com/share/p/1UYkgPyyAc/?mibextid=wwXIfr",
    },
    {
        date: "OCT 12, 2024",
        title: "IEEE OCS Orientation Day'25",
        locationEvent: "Obour University",
        image: "/images/event11.jpg",
        link: "https://www.facebook.com/share/p/1Gy5ydUgM6/?mibextid=wwXIfr",
    },
    {
        date: "JUL 7, 2024",
        title: "MUTEX Summit 2024",
        locationEvent: "Online",
        image: "/images/event7.jpg",
        link: "https://www.facebook.com/share/p/12GgdYXWPdr/?mibextid=wwXIfr",
    },
    {
        date: "MAR 4-6, 2024",
        title: "Code Carft 2024",
        locationEvent: "Obour University",
        image: "/images/event8.jpg",
        link: "https://fb.me/e/1JSEopjIs",
    },
    {
        date: "FEB 23-25, 2024",
        title: "IEEE PES DAY Poster Design Contest",
        locationEvent: "Online",
        image: "/images/event9.jpg",
        link: "https://fb.me/e/5jdnA0UaR",
    },
];


const EventCard = ({ date, title, image, link }) => (
    <div className="box text-center border m-[20px] p-[15px] shadow-xl rounded-xl relative flex flex-col justify-between">
        <img
            src={image}
            alt="post"
            loading="lazy"
            className="h-[200px] w-[100%]  object-cover rounded-lg"
        />

        <div className="mt-[20px]">{date}</div>
        <h1 className="font-bold mt-[20px]">{title}</h1>
        <div className="mt-[10px] p-[20px] relative flex-grow">
            <Link
                to={link}
                target="_blank"
                className=" bg-[#243b53] text-[#fff] p-[10px] rounded-lg  block text-center"
            >
                Read More
            </Link>
        </div>
    </div>
);

const PostEvents = () => {
    return (
        <section className="post-events mt-[80px] mb-[80px]">
            <div className="container mx-auto mt-[10px] mb-[10px]">
                <h1 className="text-center text-[40px] font-bold">
                    Past <span className="text-blue-700">Events</span>
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[10px]">
                    {events.map((event, index) => (
                        <EventCard key={index} {...event} />
                    ))}
                </div>
                {/* <div className="text-center">
                    <button className="btn bg-[#243b53] text-[#fff] p-[10px] rounded-lg max-w-[400px] w-[300px] mx-auto mt-[20px] mb-[20px]">
                        Learn More
                    </button>
                </div> */}
            </div>
        </section>
    );
};


export default PostEvents;
