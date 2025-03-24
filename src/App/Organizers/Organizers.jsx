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
            <section className="parient grid justify-center items-center mx-auto mt-20 ">
                {/* head */}
                <div className="mb-16 text-center">
                    <h1 className="text-3xl font-bold text-[#06052E] px-6">
                        Our <span className="text-[#0064F2]">Organizers</span>
                    </h1>
                </div>
                {/* parent of imgs */}
                <div className="pr-[40px] pl-[40px] md:p-[15px] xl:p-[30px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5 gap-10 justify-center items-center mx-auto">
                    {organizersData.map((organizer) => (
                        <OrganizerCard key={organizer.id} organizer={organizer} />
                    ))}
                </div>
            </section>
            {/* end section organizers */}
        </>
    );
};

export default Organizers;
