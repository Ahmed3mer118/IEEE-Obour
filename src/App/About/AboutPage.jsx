const AboutPage = () => {
    return (
        <section className=" mb-[30px]">
            <h1 className={"text-center px-4 my-8 text-2xl font-bold"}>
                <span className={"text-blue-700"}>WHO</span>
                <span> WE ARE </span>
            </h1>
            <div className="container mx-auto grid items-center grid-cols-1 gap-8 lg:grid-cols-2 ">
                <div
                    className={
                        " flex items-center p-[20px]"
                    }
                >
                    <img
                        src="/images/bg-image-team2025-1.jpg"
                        alt="About Image"
                        loading="lazy"
                        className={"w-[100%] h-full rounded-xl"}
                    />
                </div>
                <div>
                    <p
                        className={
                            "px-6 text-sm leading-6 lg:leading-7 lg:py-4"
                        }
                    >
                        IEEE OCS Student Branch, established in 2023 by a group
                        of passionate Computer Science students, is dedicated to
                        creating an environment that fosters student development
                        and bridges the gap between academic education and
                        industry demands. This is achieved through impactful
                        workshops, engaging events, and meaningful
                        collaborations.
                        <br />
                        <br />
                        Our branch offers a diverse range of technical tracks,
                        including Web Development, Flutter, Game Development,
                        Cybersecurity, and UI/UX Design, equipping students with
                        essential skills for the evolving tech landscape.
                        Additionally, our non-technical tracks, such as Public
                        Relations, Logistics, HR, and Multimedia, provide
                        members with the soft skills and leadership experience
                        needed for professional growth.
                        <br />
                        <br />
                        Through our initiatives, we strive to empower students,
                        enhance their technical and interpersonal skills, and
                        prepare them for real-world challenges.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutPage;

