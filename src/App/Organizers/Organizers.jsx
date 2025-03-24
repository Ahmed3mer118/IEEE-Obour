// Organizers.jsx
import React, { useEffect, useState } from "react";
import { useAppContext } from "../../store/AppContext.jsx";
import moment from "moment";
import OrganizerCard from "./OrganizerCard.jsx";
import organizersData from "./organizersData";

const Organizers = () => {
    const { events, getEvents } = useAppContext();
    const [upComing, setUpComing] = useState(false);
    let lastEvent = events.length - 1;

    useEffect(() => {
        if (!events.length) {
            console.log("Hi");
            getEvents();
        } else {
            events[lastEvent].date > moment().format("YYYY-MM-DD")
                ? setUpComing(true)
                : false;
        }
    }, [events]);

    return (
        <>
            {/* start section organizers */}
            <section className="parient grid  justify-center items-center mx-auto mt-[80px]">
                {/* head */}
                <div className="mb-[70px]">
                    <h1 className={`px-6 mt-12 text-center text-3xl text-[#06052E] font-bold`}>
                        Our <span className="text-[#0064F2]">Organizers</span>
                    </h1>
                </div>
                {/* pareint of imgs */}
                <div className="2xl:grid-cols-6 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 parient grid grid-cols-1 gap-4 justify-center items-center mx-auto">
                    {organizersData.map((organizer) => (
                        <OrganizerCard key={organizer.id} organizer={organizer} />
                    ))}
                </div>
            </section>
            {/* start section organizers */}
        </>
    );
};

export default Organizers;