import React from "react";
import post from "/images/event8.jpg";


const UpcomingEvent = () => {
  const event = {
      date: "APR 14-15-16, 2025 ",
      title: "SPEAKER SESSION - Competition",
      mainTitle: "Code Craft Hackathon II",
      description:
          "Code Craft is set to host its second hackathon, a 3-day event featuring four key technology tracks: Flutter, Frontend, Game Development, and UI/UX Design. Participants will compete to create innovative solutions while showcasing their skills. The event will also include talks from expert speakers, offering valuable insights. At the end, the top three teams in each track will be recognized for their outstanding performance."
  };
    return (
        <section className="upcoming-event mt-[40px] container mx-auto">
            <h1 className="text-center text-[40px] font-bold p-10">
                Upcoming <span className="text-blue-700">Event</span>
            </h1>
            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 mb-[10px]">
                <img src={post} alt="Upcoming Event" className="mx-auto mb-2 rounded-xl w-[80%]" />
                <div className="details   w-[80%] mx-auto ">
                    <h2 className="mt-5  text-center">{event.date} - {event.title}</h2>
                    <h1 className="mt-5  font-bold  text-center">{event.mainTitle}</h1>
                    <p className="mt-5 text-center">{event.description}</p>
                </div>
            </div>
        </section>
    );
};

export default UpcomingEvent;
