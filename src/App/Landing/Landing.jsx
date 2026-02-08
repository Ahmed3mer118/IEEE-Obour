import "./Landing.css";
import EventPages from "../Events/EventPages";
import BranchPhotos from "../About/BranchPhotos";
import Organizers from "../Organizers/Organizers";
import WhatWeDo from "../Events/WhatWeDo";

const Landing = () => {
    return (
        <main>
            <section className="home-page h-[90vh]  ">
                <div className="bg-[url('/images/bg-image-team2025-1.jpg')] bg-cover bg-center h-[90%] w-full relative  ">
                    <div className="container relative  top-[15%] left-[7%] w-fit text font-bold ">
                        <h1 className="title  text-[25px]   md:text-[30px]  lg:text-[40px] ">
                            Welcome to  <span className="text-primary"> IEEE OCS SB</span>
                        </h1>
                        <p className="mt-2 text-[10px]  md:text-[12px] lg:text-[18px]">
                            Take a tour of work management platform to <br />{" "}
                            see how you can do more of your best work.
                        </p>
                    </div>
                </div>
            </section>
   
            <EventPages />
            <WhatWeDo />
            <Organizers />
            <BranchPhotos />
        </main>
    );
};

export default Landing;

