import { useAppContext } from "../../store/AppContext.jsx";
import { useEffect, useState } from "react";
import moment from "moment";

//***  imgs ***//

// import doha from "/images/doha-emam.jpg";
// import aamer from "/images/Mohamed-3Amer.jpg";
// import amr from "/images/Amr Khalid.jpg";
// import Abdallahe from "/images/Abdalluh Essam.jpg";
// import alfy from "/images/Adham ElAlfy.jpg";
// import alia from "/images/Aliaa Sabek.jpg";
// import ayman from "/images/Ayman Aboelela.jpeg";
// import bashter from "/images/Bashter.jpg";
// import abbas from "/images/Eslam Abbas.jpg";
// import amir from "/images/IMG-20231024-WA0127 - Amir Yousry.jpg";
// import khaledi from "/images/khaled Ibrahem.jpg";
// import mahmouds from "/images/Mahmoud ElSayed.jpg";
// import shefoo from "/images/shefoo.jpg";
// import sofa from "/images/Sofa Shirf.jpeg";
// import mohab from "/images/mohab.jpg";
// import saras from "/images/Sara Sedek.jpg";
// import khater from "/images/khater2.jpeg";
// import haha from "/images/Haha Twyg.jpeg";
// import lana from "/images/Lana Mansuoor.jpg";
// import mostafa from "/images/Mostafa.jpeg";
// import ahmed from "/images/Ahmed.jpg";
// import hamad from "/images/hamad.jpg";
// import ibraheem from "/images/Ibrahim Atef.jpg";
// import omark from "/images/omar khaled.jpg";
// import mosaid from "/images/Mohamed Said.jpg";
// import sarae from "/images/Sara Elbanna.jpg";
// import norhany from "/images/Nourhan Younas.jpg";
// import naro from "/images/Naruto Uzumaki.jpg";
// import ahmeda from "/images/A7med Amer.jpg";
// import abdoe from "/images/Abdallah Ehab.jpeg";
// import abofadel from "/images/abufadel.jpg";
// import ali from "/images/Ali Hassan.jpeg";
// import ahmedhu from "/images/Eng_Ahmed Hussein.jpg";
// import fasy from "/images/Fa Sy.jpg";
// import khaterr from "/images/Hussien Khater.jpg";
// import kareemk from "/images/Kareem Khaled.jpg";
// import kareemm from "/images/Kareem Mohamed.jpg";
// import qadry from "/images/Mohamed Qadry.jpg";
// import nadia from "/images/Nadia Waleed.jpg";
// import soohi from "/images/Soohii Soohii.jpg";
// import zyad from "/images/Zeyad Abdelrhman.jpg";
// import JOc from "/images/JOC.jpg";
// import UpcomingEvent from "../Events/UpcomingEvent.jsx";

const News = () => {
    // const { events, getEvents } = useAppContext();
    // const [upComing, setUpComing] = useState(false);
    // // let upComing = false;
    // let lastEvent = events.length - 1;

    // useEffect(() => {
    //     if (!events.length) {
    //         console.log("Hi");
    //         getEvents();
    //     } else {
    //         events[lastEvent].date > moment().format("YYYY-MM-DD")
    //             ? setUpComing(true)
    //             : false;
    //     }
    // }, [events]);

    return (
        // <main>
        //     {/* bg  can't responsive in mobile */}
        //     <section>
        //         <div className="bg-[url('/images/about_image.png')] bg-cover bg-center bg-no-repeat h-[100vh] w-[100%] ">
        //             {/* <img src="/image/about_image.png"  alt="" /> */}
        //             <div
        //                 className={`container mx-auto relative h-full px-6 py-14 `}
        //             >
        //                 {/* <img
        //                     src="/images/logo.png"
        //                     alt="IEEE Logo Image"
        //                     className="absolute translate-x-1/2 right-1/2 bottom-8 w-64"
        //                 /> */}
        //                 <h3 className={"text-4xl text-white"}>
        //                     Obour Institute
        //                 </h3>
        //                 <p className={"text-white mt-4 mb-2"}>
        //                     Follow on social service
        //                 </p>
        //                 {/*<div className={'flex justify-start gap-3 pl-4'}>*/}
        //                 {/*    <BsFacebook className={'hover:fill-primary h-6 w-6 cursor-pointer'}/>*/}
        //                 {/*    <BsInstagram className={'hover:fill-instagram h-6 w-6 cursor-pointer'}/>*/}
        //                 {/*    <TiSocialTwitter className={'hover:fill-[#1da1f2] h-7 w-7 cursor-pointer'}/>*/}
        //                 {/*</div>*/}
        //                 <div className={"flex items-center gap-6"}>
        //                     {/*<svg xmlns="http://www.w3.org/2000/svg" width="36" height="34" viewBox="0 0 36 34" fill="none">*/}
        //                     {/*</svg>*/}
        //                     <svg
        //                         xmlns="http://www.w3.org/2000/svg"
        //                         width="99"
        //                         height="36"
        //                         viewBox="0 0 99 36"
        //                         fill="none"
        //                     >
        //                         <path
        //                             d="M36.6956 18.2096C36.6956 8.59905 28.4817 0.809326 18.3478 0.809326C8.21391 0.809326 0 8.59905 0 18.2096C0 26.8948 6.7095 34.0934 15.481 35.3979V23.2382H10.823V18.2071H15.481V14.3734C15.481 10.0133 18.2189 7.60382 22.4114 7.60382C24.4181 7.60382 26.5197 7.94305 26.5197 7.94305V12.2258H24.2051C21.9248 12.2258 21.2146 13.5677 21.2146 14.9421V18.2071H26.304L25.4912 23.2382H21.2173V35.3979C29.9888 34.0934 36.6983 26.8948 36.6983 18.2096H36.6956Z"
        //                             fill="white"
        //                             fillOpacity="0.8"
        //                         />
        //                         <path
        //                             d="M80.2241 35.6125C90.5937 35.6125 99 27.6404 99 17.8062C99 7.97213 90.5937 0 80.2241 0C69.8545 0 61.4482 7.97213 61.4482 17.8062C61.4482 27.6404 69.8545 35.6125 80.2241 35.6125Z"
        //                             fill="white"
        //                             fillOpacity="0.8"
        //                         />
        //                         <path
        //                             d="M86.0516 11.0698C85.3384 11.0698 84.7598 11.6186 84.7598 12.295C84.7598 12.9714 85.3384 13.5202 86.0516 13.5202C86.7649 13.5202 87.3436 12.9714 87.3436 12.295C87.3436 11.6186 86.7649 11.0698 86.0516 11.0698Z"
        //                             fill="#62657F"
        //                         />
        //                         <path
        //                             d="M80.3133 12.6396C77.323 12.6396 74.8926 14.9471 74.8926 17.7804C74.8926 20.6137 77.3257 22.9211 80.3133 22.9211C83.3008 22.9211 85.7339 20.6137 85.7339 17.7804C85.7339 14.9471 83.3008 12.6396 80.3133 12.6396ZM80.3133 21.0757C78.3969 21.0757 76.8412 19.5978 76.8412 17.7829C76.8412 15.9681 78.3996 14.4902 80.3133 14.4902C82.2269 14.4902 83.7853 15.9681 83.7853 17.7829C83.7853 19.5978 82.2269 21.0757 80.3133 21.0757Z"
        //                             fill="#62657F"
        //                         />
        //                         <path
        //                             d="M84.6168 28.22H75.8263C72.1794 28.22 69.2134 25.4072 69.2134 21.9485V13.6121C69.2134 10.1534 72.1794 7.34058 75.8263 7.34058H84.6168C88.2638 7.34058 91.2298 10.1534 91.2298 13.6121V21.9485C91.2298 25.4072 88.2638 28.22 84.6168 28.22ZM75.8263 9.306C73.3232 9.306 71.2858 11.2382 71.2858 13.6121V21.9485C71.2858 24.3224 73.3232 26.2546 75.8263 26.2546H84.6168C87.1199 26.2546 89.1573 24.3224 89.1573 21.9485V13.6121C89.1573 11.2357 87.1199 9.306 84.6168 9.306H75.8263Z"
        //                             fill="#62657F"
        //                         />
        //                     </svg>
        //                     <svg
        //                         xmlns="http://www.w3.org/2000/svg"
        //                         width="36"
        //                         height="34"
        //                         viewBox="0 0 36 34"
        //                         fill="none"
        //                     >
        //                         <path
        //                             d="M17.8086 0.0930176C7.97321 0.0930176 0 7.57747 0 16.807C0 26.0378 7.97321 33.5196 17.8086 33.5196C27.6441 33.5196 35.6158 26.0378 35.6158 16.807C35.6158 7.57747 27.6433 0.0930176 17.8086 0.0930176ZM26.7791 13.437C26.7885 13.6176 26.7921 13.7988 26.7921 13.9821C26.7921 19.5484 22.278 25.9659 14.0234 25.9659C11.4894 25.9659 9.12959 25.2688 7.1437 24.0742C7.49518 24.1129 7.85171 24.1326 8.21403 24.1326C10.3171 24.1326 12.2523 23.4593 13.7877 22.3299C11.8242 22.2953 10.1674 21.0769 9.59605 19.4038C9.86942 19.4541 10.1507 19.4792 10.44 19.4792C10.8493 19.4792 11.2457 19.4289 11.6224 19.3319C9.56857 18.945 8.02166 17.2414 8.02166 15.2024C8.02166 15.1841 8.02166 15.1665 8.02238 15.1481C8.62697 15.4637 9.31907 15.6531 10.0553 15.6755C8.85044 14.9187 8.05854 13.6311 8.05854 12.1691C8.05854 11.3974 8.27984 10.6732 8.66603 10.0515C10.8797 12.5995 14.1869 14.2766 17.9171 14.4517C17.8405 14.1443 17.8007 13.8219 17.8007 13.492C17.8007 11.1666 19.8097 9.28043 22.2888 9.28043C23.5797 9.28043 24.7455 9.7922 25.5642 10.6101C26.5868 10.4221 27.5472 10.0705 28.4143 9.5879C28.078 10.5721 27.3671 11.3974 26.4399 11.918C27.349 11.8162 28.2139 11.5895 29.0181 11.2549C28.4179 12.1013 27.6564 12.8431 26.7791 13.437Z"
        //                             fill="white"
        //                             fillOpacity="0.8"
        //                         />
        //                     </svg>
        //                 </div>
        //             </div>
        //         </div>
        //         {/* <h1
        //             className={`px-6 mt-12 text-center text-3xl text-[#06052E]`}
        //         >
        //             Upcoming event
        //         </h1> */}
        //         {/* {upComing ? (
        //             <div className="container mx-auto flex justify-start gap-10 mt-16 px-6">
        //                 <div className={"w-52 h-48"}>
        //                     <img
        //                         src={`${events[lastEvent].image}`}
        //                         alt={events[lastEvent].name}
        //                         className={"object-cover h-full"}
        //                     />
        //                 </div>
        //                 <div>
        //                     <p className={"text-lg text-[#06052E]"}>
        //                         {moment(events[lastEvent].date).format(
        //                             "MMM DD, YYYY"
        //                         )}{" "}
        //                         - {events[lastEvent].category}
        //                     </p>
        //                     <h2 className={"text-2xl font-medium"}>
        //                         {events[lastEvent].name}
        //                     </h2>
        //                     <p className={"mt-4"}>
        //                         {events[lastEvent].description}
        //                     </p>
        //                     <button
        //                         className={
        //                             "bg-[#0577AB] text-white flex items-center gap-3 px-4 py-3 mt-6 rounded-lg"
        //                         }
        //                     >
        //                         View details <span>&gt;</span>
        //                     </button>
        //                 </div>
        //             </div>
        //         ) : (
        //             <div className={"container mx-auto text-center mt-6"}>
        //                 There are no upcomnig event right now
        //             </div>
        //         )} */}
        //     </section>
        //     <UpcomingEvent />
        //     {/* end sec1 */}
        //     {/* start past events */}
        //     <section>
        //         <div>
        //             <h1
        //                 className={`px-6 mt-12 text-center text-3xl text-[#06052E]`}
        //             >
        //                 Past Events
        //             </h1>
        //         </div>
        //         <div>
        //             {/* {upComing ? ( */}
        //             <>
        //                 <div className="container mx-auto flex justify-center gap-10 mt-16 px-6 flex-wrap">
        //                     {events &&
        //                         events.map((element) => {
        //                             if (
        //                                 element.date <
        //                                 moment().format("YYYY-MM-DD")
        //                             ) {
        //                                 return (
        //                                     <div>
        //                                         <div className="flex justify-center">
        //                                             <img
        //                                                 src={`${element.image}`}
        //                                                 alt={`${element.name}`}
        //                                                 className=" w-[150px] h-[150px] object-cover rounded-full"
        //                                             />
        //                                         </div>
        //                                         <div className=" grid justify-center text-center gap-4 mt-5">
        //                                             <p>{`${element.date}`}</p>
        //                                             <p className="font-bold">
        //                                                 {`${element.category}`}
        //                                             </p>
        //                                             <p className=" text-[#92929D] font-bold">
        //                                                 {`${element.description}`}
        //                                             </p>
        //                                         </div>
        //                                     </div>
        //                                 );
        //                             } else {
        //                                 return false;
        //                             }
        //                         })}
        //                 </div>
        //                 <div className="container mx-auto flex justify-center mt-5 px-6">
        //                     <button
        //                         className={
        //                             "bg-[#0577AB] text-white flex items-center justify-center gap-3 px-20 py-1.5 mt-6 rounded-lg"
        //                         }
        //                     >
        //                         Learn More
        //                     </button>
        //                 </div>
        //             </>
        //             {/* ) : ( */}

        //             {/* )} */}
        //         </div>
        //     </section>
        //     {/* end past events */}
        //     {/* start section organizers */}
        //     <section className="parient grid justify-center items-center mx-auto">
        //         {/* head */}
        //         <div className="mb-[70px]">
        //             <h1
        //                 className={`px-6 mt-12 text-center text-3xl text-[#06052E]`}
        //             >
        //                 Organizers
        //             </h1>
        //         </div>
        //         {/* pareint of imgs */}
        //         <div className="2xl:grid-cols-6 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 parient grid grid-cols-1 gap-4 justify-center items-center mx-auto    ">
        //             {/* imgs */}
        //             <div className="grid items-center justify-center text-center border-2 border-sky-600 drop-shadow-[0_20px_20px_#3477DB44] rounded-2xl bg-slate-50 p-5 hover:scale-105 ease-in duration-300 " >
        //                 <div>
        //                     <img
        //                         src={doha}
        //                         alt={`Doha-Emam`}
        //                         className="w-[130px] h-[150px] rounded-2xl drop-shadow-xl"
        //                     />
        //                 </div>
        //                 <div>
        //                     <h1 className=" font-bold text-[17px] mt-2 ">
        //                         Doha Emam
        //                     </h1>
        //                     <p className=" text-slate-500 ">Chairwoman</p>
        //                 </div>
        //                 <div className="flex gap-3 justify-center mt-3">
        //                     <a href="https://www.facebook.com/profile.php?id=100027997721085&mibextid=ZbWKwL">
        //                         <svg
        //                             className="h-7 w-7 text-blue-700 border-2 border-blue-700 rounded-full p-[2px] "
        //                             viewBox="0 0 24 24"
        //                             fill="none"
        //                             stroke="currentColor"
        //                             stroke-width="2"
        //                             stroke-linecap="round"
        //                             stroke-linejoin="round"
        //                         >
        //                             {" "}
        //                             <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        //                         </svg>
        //                     </a>
        //                     <a href="https://www.linkedin.com/in/doha-emam-77bb92234/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
        //                         <svg
        //                             className="h-7 w-7 text-sky-900 border-2 border-sky-900 rounded p-[2px] "
        //                             viewBox="0 0 24 24"
        //                             fill="none"
        //                             stroke="currentColor"
        //                             stroke-width="2"
        //                             stroke-linecap="round"
        //                             stroke-linejoin="round"
        //                         >
        //                             {" "}
        //                             <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />{" "}
        //                             <rect x="2" y="9" width="4" height="12" />{" "}
        //                             <circle cx="4" cy="4" r="2" />
        //                         </svg>
        //                     </a>
        //                 </div>
        //             </div>
        //             <div className="grid items-center justify-center text-center border-2 border-sky-600 drop-shadow-[0_20px_20px_#3477DB44] rounded-2xl bg-slate-50 p-5 hover:scale-105 ease-in duration-300">
        //                 <img
        //                     src={aamer}
        //                     alt={`Mohamed-Aamer`}
        //                     className="w-[150px] h-[150px] rounded-2xl drop-shadow-xl"
        //                 />
        //                 <h1 className=" font-bold text-[17px] mt-2 ">
        //                     Mohamed Aamer
        //                 </h1>
        //                 <p className=" text-slate-500 ">Vice Chair</p>
        //                 <div className="flex gap-3 justify-center mt-3">
        //                     <a href="https://www.facebook.com/profile.php?id=100007614060181&mibextid=2JQ9oc">
        //                         <svg
        //                             className="h-7 w-7 text-blue-700 border-2 border-blue-700 rounded-full p-[2px] "
        //                             viewBox="0 0 24 24"
        //                             fill="none"
        //                             stroke="currentColor"
        //                             stroke-width="2"
        //                             stroke-linecap="round"
        //                             stroke-linejoin="round"
        //                         >
        //                             {" "}
        //                             <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        //                         </svg>
        //                     </a>
        //                 </div>
        //             </div>
        //             <div className="grid items-center justify-center text-center border-2 border-sky-600 drop-shadow-[0_20px_20px_#3477DB44] rounded-2xl bg-slate-50 p-5 hover:scale-105 ease-in duration-300">
        //                 <img
        //                     src={bashter}
        //                     alt={`bashter`}
        //                     className="w-[140px] h-[150px] rounded-2xl drop-shadow-xl"
        //                 />
        //                 <h1 className=" font-bold text-[17px] mt-2 ">
        //                     Bashter
        //                 </h1>
        //                 <p className=" text-slate-500 ">secretary</p>
        //                 <div className="flex gap-3 justify-center mt-3">
        //                     <a href="https://www.facebook.com/profile.php?id=100017057162845">
        //                         <svg
        //                             className="h-7 w-7 text-blue-700 border-2 border-blue-700 rounded-full p-[2px] "
        //                             viewBox="0 0 24 24"
        //                             fill="none"
        //                             stroke="currentColor"
        //                             stroke-width="2"
        //                             stroke-linecap="round"
        //                             stroke-linejoin="round"
        //                         >
        //                             {" "}
        //                             <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        //                         </svg>
        //                     </a>
        //                     <a href="https://www.linkedin.com/in/bashter/">
        //                         <svg
        //                             className="h-7 w-7 text-sky-900 border-2 border-sky-900 rounded p-[2px] "
        //                             viewBox="0 0 24 24"
        //                             fill="none"
        //                             stroke="currentColor"
        //                             stroke-width="2"
        //                             stroke-linecap="round"
        //                             stroke-linejoin="round"
        //                         >
        //                             {" "}
        //                             <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />{" "}
        //                             <rect x="2" y="9" width="4" height="12" />{" "}
        //                             <circle cx="4" cy="4" r="2" />
        //                         </svg>
        //                     </a>
        //                 </div>
        //             </div>
        //             <div className="grid items-center justify-center text-center border-2 border-sky-600 drop-shadow-[0_20px_20px_#3477DB44] rounded-2xl bg-slate-50 p-5 hover:scale-105 ease-in duration-300">
        //                 <div className="">
        //                     <img
        //                         src={amr}
        //                         alt={`Amr`}
        //                         className="w-[150px] h-[150px] rounded-2xl drop-shadow-xl"
        //                     />
        //                 </div>
        //                 <div>
        //                     <h1 className=" font-bold text-[17px] mt-2 ">
        //                         Amr Khalid
        //                     </h1>
        //                     <p className=" text-slate-500 ">Front-End Leader</p>
        //                 </div>
        //                 <div className="flex gap-3 justify-center mt-3">
        //                     <a href="https://www.facebook.com/AmrKhalidOmar/">
        //                         <svg
        //                             className="h-7 w-7 text-blue-700 border-2 border-blue-700 rounded-full p-[2px] "
        //                             viewBox="0 0 24 24"
        //                             fill="none"
        //                             stroke="currentColor"
        //                             stroke-width="2"
        //                             stroke-linecap="round"
        //                             stroke-linejoin="round"
        //                         >
        //                             {" "}
        //                             <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        //                         </svg>
        //                     </a>
        //                     <a href="https://www.linkedin.com/in/amr-khalid/">
        //                         <svg
        //                             className="h-7 w-7 text-sky-900 border-2 border-sky-900 rounded p-[2px] "
        //                             viewBox="0 0 24 24"
        //                             fill="none"
        //                             stroke="currentColor"
        //                             stroke-width="2"
        //                             stroke-linecap="round"
        //                             stroke-linejoin="round"
        //                         >
        //                             {" "}
        //                             <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />{" "}
        //                             <rect x="2" y="9" width="4" height="12" />{" "}
        //                             <circle cx="4" cy="4" r="2" />
        //                         </svg>
        //                     </a>
        //                     <a href="https://github.com/Amr-Hafeez">
        //                         <svg
        //                             className="h-7 w-7 text-black border-2 border-black rounded-full p-[2px]"
        //                             width="24"
        //                             height="24"
        //                             viewBox="0 0 24 24"
        //                             stroke-width="2"
        //                             stroke="currentColor"
        //                             fill="none"
        //                             stroke-linecap="round"
        //                             stroke-linejoin="round"
        //                         >
        //                             {" "}
        //                             <path
        //                                 stroke="none"
        //                                 d="M0 0h24v24H0z"
        //                             />{" "}
        //                             <path d="M9 19c-4.286 1.35-4.286-2.55-6-3m12 5v-3.5c0-1 .099-1.405-.5-2 2.791-.3 5.5-1.366 5.5-6.04a4.567 4.567 0 0 0 -1.333 -3.21 4.192 4.192 0 00-.08-3.227s-1.05-.3-3.476 1.267a12.334 12.334 0 0 0 -6.222 0C6.462 2.723 5.413 3.023 5.413 3.023a4.192 4.192 0 0 0 -.08 3.227A4.566 4.566 0 004 9.486c0 4.64 2.709 5.68 5.5 6.014-.591.589-.56 1.183-.5 2V21" />
        //                         </svg>
        //                     </a>
        //                 </div>
        //             </div>
        //             <div className="grid items-center justify-center text-center border-2 border-sky-600 drop-shadow-[0_20px_20px_#3477DB44] rounded-2xl bg-slate-50 p-5 hover:scale-105 ease-in duration-300">
        //                 <div className="flex justify-center">
        //                 <img
        //                     src={alfy}
        //                     alt={`alfy`}
        //                     className="w-[150px] h-[150px] rounded-2xl drop-shadow-xl"
        //                 />
        //                 </div>
        //                 <h1 className=" font-bold text-[17px] mt-2 ">
        //                     Adham Elalfy
        //                 </h1>
        //                 <p className=" text-slate-500 ">Front-End CoLeader</p>
        //                 <div className="flex gap-3 justify-center mt-3">
        //                     <a href="https://www.facebook.com/adhamsameeh6?mibextid=2JQ9oc">
        //                         <svg
        //                             className="h-7 w-7 text-blue-700 border-2 border-blue-700 rounded-full p-[2px] "
        //                             viewBox="0 0 24 24"
        //                             fill="none"
        //                             stroke="currentColor"
        //                             stroke-width="2"
        //                             stroke-linecap="round"
        //                             stroke-linejoin="round"
        //                         >
        //                             {" "}
        //                             <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        //                         </svg>
        //                     </a>
        //                     <a href="https://www.linkedin.com/in/adham-elalfy-449683258">
        //                         <svg
        //                             className="h-7 w-7 text-sky-900 border-2 border-sky-900 rounded p-[2px] "
        //                             viewBox="0 0 24 24"
        //                             fill="none"
        //                             stroke="currentColor"
        //                             stroke-width="2"
        //                             stroke-linecap="round"
        //                             stroke-linejoin="round"
        //                         >
        //                             {" "}
        //                             <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />{" "}
        //                             <rect x="2" y="9" width="4" height="12" />{" "}
        //                             <circle cx="4" cy="4" r="2" />
        //                         </svg>
        //                     </a>
        //                     <a href="https://github.com/adhamalfy">
        //                         <svg
        //                             className="h-7 w-7 text-black border-2 border-black rounded-full p-[2px]"
        //                             width="24"
        //                             height="24"
        //                             viewBox="0 0 24 24"
        //                             stroke-width="2"
        //                             stroke="currentColor"
        //                             fill="none"
        //                             stroke-linecap="round"
        //                             stroke-linejoin="round"
        //                         >
        //                             {" "}
        //                             <path
        //                                 stroke="none"
        //                                 d="M0 0h24v24H0z"
        //                             />{" "}
        //                             <path d="M9 19c-4.286 1.35-4.286-2.55-6-3m12 5v-3.5c0-1 .099-1.405-.5-2 2.791-.3 5.5-1.366 5.5-6.04a4.567 4.567 0 0 0 -1.333 -3.21 4.192 4.192 0 00-.08-3.227s-1.05-.3-3.476 1.267a12.334 12.334 0 0 0 -6.222 0C6.462 2.723 5.413 3.023 5.413 3.023a4.192 4.192 0 0 0 -.08 3.227A4.566 4.566 0 004 9.486c0 4.64 2.709 5.68 5.5 6.014-.591.589-.56 1.183-.5 2V21" />
        //                         </svg>
        //                     </a>
        //                 </div>
        //             </div>
        //             <div className="grid items-center justify-center text-center border-2 border-sky-600 drop-shadow-[0_20px_20px_#3477DB44] rounded-2xl bg-slate-50 p-5 hover:scale-105 ease-in duration-300">
        //                 <img
        //                     src={sofa}
        //                     alt={`sofa`}
        //                     className="w-[150px] h-[150px] rounded-2xl drop-shadow-xl"
        //                 />
        //                 <h1 className=" font-bold text-[17px] mt-2 ">
        //                     Yusef Sherif
        //                 </h1>
        //                 <p className=" text-slate-500 ">Back-End Leader</p>
        //                 <div className="flex gap-3 justify-center mt-3">
        //                     <a href="https://www.facebook.com/profile.php?id=100007282608318&mibextid=2JQ9oc">
        //                         <svg
        //                             className="h-7 w-7 text-blue-700 border-2 border-blue-700 rounded-full p-[2px] "
        //                             viewBox="0 0 24 24"
        //                             fill="none"
        //                             stroke="currentColor"
        //                             stroke-width="2"
        //                             stroke-linecap="round"
        //                             stroke-linejoin="round"
        //                         >
        //                             {" "}
        //                             <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        //                         </svg>
        //                     </a>
        //                     <a href="https://www.linkedin.com/in/yusef-sherif-158855262?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
        //                         <svg
        //                             className="h-7 w-7 text-sky-900 border-2 border-sky-900 rounded p-[2px] "
        //                             viewBox="0 0 24 24"
        //                             fill="none"
        //                             stroke="currentColor"
        //                             stroke-width="2"
        //                             stroke-linecap="round"
        //                             stroke-linejoin="round"
        //                         >
        //                             {" "}
        //                             <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />{" "}
        //                             <rect x="2" y="9" width="4" height="12" />{" "}
        //                             <circle cx="4" cy="4" r="2" />
        //                         </svg>
        //                     </a>
        //                     <a href="https://github.com/StylishCS">
        //                         <svg
        //                             className="h-7 w-7 text-black border-2 border-black rounded-full p-[2px]"
        //                             width="24"
        //                             height="24"
        //                             viewBox="0 0 24 24"
        //                             stroke-width="2"
        //                             stroke="currentColor"
        //                             fill="none"
        //                             stroke-linecap="round"
        //                             stroke-linejoin="round"
        //                         >
        //                             {" "}
        //                             <path
        //                                 stroke="none"
        //                                 d="M0 0h24v24H0z"
        //                             />{" "}
        //                             <path d="M9 19c-4.286 1.35-4.286-2.55-6-3m12 5v-3.5c0-1 .099-1.405-.5-2 2.791-.3 5.5-1.366 5.5-6.04a4.567 4.567 0 0 0 -1.333 -3.21 4.192 4.192 0 00-.08-3.227s-1.05-.3-3.476 1.267a12.334 12.334 0 0 0 -6.222 0C6.462 2.723 5.413 3.023 5.413 3.023a4.192 4.192 0 0 0 -.08 3.227A4.566 4.566 0 004 9.486c0 4.64 2.709 5.68 5.5 6.014-.591.589-.56 1.183-.5 2V21" />
        //                         </svg>
        //                     </a>
        //                 </div>
        //             </div>
        //             <div className="grid items-center justify-center text-center border-2 border-sky-600 drop-shadow-[0_20px_20px_#3477DB44] rounded-2xl bg-slate-50 p-5 hover:scale-105 ease-in duration-300">
        //                 <img
        //                     src={amir}
        //                     alt={`amir`}
        //                     className="w-[130px] h-[150px] rounded-2xl drop-shadow-xl"
        //                 />
        //                 <h1 className=" font-bold text-[17px] mt-2 ">
        //                     Amir Yousry
        //                 </h1>
        //                 <p className=" text-slate-500 ">UI_UX Leader</p>
        //                 <div className="flex gap-3 justify-center mt-3">
        //                     <a href="https://www.facebook.com/mero.hero.7330763/?viewas=&should_open_composer=false&show_switched_toast=false&show_invite_to_follow=false&show_switched_tooltip=false&show_podcast_settings=false&show_community_review_changes=false&show_community_rollback=false&show_follower_visibility_disclosure=false&bypass_exit_warning=true">
        //                         <svg
        //                             className="h-7 w-7 text-blue-700 border-2 border-blue-700 rounded-full p-[2px] "
        //                             viewBox="0 0 24 24"
        //                             fill="none"
        //                             stroke="currentColor"
        //                             stroke-width="2"
        //                             stroke-linecap="round"
        //                             stroke-linejoin="round"
        //                         >
        //                             {" "}
        //                             <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        //                         </svg>
        //                     </a>
        //                     <a href="https://www.linkedin.com/in/amir-yousry-2bb306283?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
        //                         <svg
        //                             className="h-7 w-7 text-sky-900 border-2 border-sky-900 rounded p-[2px] "
        //                             viewBox="0 0 24 24"
        //                             fill="none"
        //                             stroke="currentColor"
        //                             stroke-width="2"
        //                             stroke-linecap="round"
        //                             stroke-linejoin="round"
        //                         >
        //                             {" "}
        //                             <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />{" "}
        //                             <rect x="2" y="9" width="4" height="12" />{" "}
        //                             <circle cx="4" cy="4" r="2" />
        //                         </svg>
        //                     </a>
        //                     <a href="https://www.behance.net/amiryousry1">
        //                         <svg
        //                             className="h-7 w-7 text-blue-600 border-2 border-blue-600 rounded-full p-[2px] "
        //                             xmlns="http://www.w3.org/2000/svg"
        //                             width="2em"
        //                             height="2em"
        //                             viewBox="0 0 24 24"
        //                         >
        //                             <path
        //                                 fill="#0c52df"
        //                                 d="M20.07 6.35H15v1.41h5.09ZM19 16.05a2.23 2.23 0 0 1-1.3.37a2.23 2.23 0 0 1-1.7-.54a2.49 2.49 0 0 1-.62-1.76H22a6.47 6.47 0 0 0-.17-2a5.08 5.08 0 0 0-.8-1.73a4.17 4.17 0 0 0-1.42-1.21a4.37 4.37 0 0 0-2-.45a4.88 4.88 0 0 0-1.9.37a4.51 4.51 0 0 0-1.47 1a4.4 4.4 0 0 0-.95 1.52a5.4 5.4 0 0 0-.33 1.91a5.52 5.52 0 0 0 .32 1.94a4.46 4.46 0 0 0 .88 1.53a4 4 0 0 0 1.46 1a5.2 5.2 0 0 0 1.94.34a4.77 4.77 0 0 0 2.64-.7a4.21 4.21 0 0 0 1.63-2.35h-2.21a1.54 1.54 0 0 1-.62.76m-3.43-4.12a1.87 1.87 0 0 1 1-1.14a2.28 2.28 0 0 1 1-.2a1.73 1.73 0 0 1 1.36.49a2.91 2.91 0 0 1 .63 1.45h-4.15a3 3 0 0 1 .11-.6Zm-5.29-.48a3.06 3.06 0 0 0 1.28-1a2.72 2.72 0 0 0 .43-1.58a3.28 3.28 0 0 0-.29-1.48a2.4 2.4 0 0 0-.82-1a3.24 3.24 0 0 0-1.27-.52a7.54 7.54 0 0 0-1.64-.16H2v12.58h6.1a6.55 6.55 0 0 0 1.65-.21a4.55 4.55 0 0 0 1.43-.65a3.13 3.13 0 0 0 1-1.14a3.41 3.41 0 0 0 .37-1.65a3.47 3.47 0 0 0-.57-2a3 3 0 0 0-1.75-1.19ZM4.77 7.86h2.59a4.17 4.17 0 0 1 .71.06a1.64 1.64 0 0 1 .61.22a1.05 1.05 0 0 1 .42.44a1.42 1.42 0 0 1 .16.72a1.36 1.36 0 0 1-.47 1.15a2 2 0 0 1-1.22.35h-2.8Zm4.84 7.44a1.28 1.28 0 0 1-.45.5a2 2 0 0 1-.65.26a3.33 3.33 0 0 1-.78.08h-3v-3.45h3a2.4 2.4 0 0 1 1.45.41a1.65 1.65 0 0 1 .54 1.39a1.77 1.77 0 0 1-.11.81"
        //                             ></path>
        //                         </svg>
        //                     </a>
        //                 </div>
        //             </div>
        //             <div className="grid items-center justify-center text-center border-2 border-sky-600 drop-shadow-[0_20px_20px_#3477DB44] rounded-2xl bg-slate-50 p-5 hover:scale-105 ease-in duration-300">
        //                 <img
        //                     src={saras}
        //                     alt={`saras`}
        //                     className="w-[130px] h-[150px] rounded-2xl drop-shadow-xl"
        //                 />
        //                 <h1 className=" font-bold text-[17px] mt-2 ">
        //                     Sara Siddiq{" "}
        //                 </h1>
        //                 <p className=" text-slate-500 ">UI-UX Co-Leader</p>
        //                 <div className="flex gap-3 justify-center mt-3">
        //                     <a href="https://www.facebook.com/sara.sedek.21/">
        //                         <svg
        //                             className="h-7 w-7 text-blue-700 border-2 border-blue-700 rounded-full p-[2px] "
        //                             viewBox="0 0 24 24"
        //                             fill="none"
        //                             stroke="currentColor"
        //                             stroke-width="2"
        //                             stroke-linecap="round"
        //                             stroke-linejoin="round"
        //                         >
        //                             {" "}
        //                             <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        //                         </svg>
        //                     </a>
        //                     <a href="http://www.linkedin.com/in/sara-siddiq-248a1622a">
        //                         <svg
        //                             className="h-7 w-7 text-sky-900 border-2 border-sky-900 rounded p-[2px] "
        //                             viewBox="0 0 24 24"
        //                             fill="none"
        //                             stroke="currentColor"
        //                             stroke-width="2"
        //                             stroke-linecap="round"
        //                             stroke-linejoin="round"
        //                         >
        //                             {" "}
        //                             <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />{" "}
        //                             <rect x="2" y="9" width="4" height="12" />{" "}
        //                             <circle cx="4" cy="4" r="2" />
        //                         </svg>
        //                     </a>
        //                     <a href="https://www.behance.net/sarasedek">
        //                         <svg
        //                             className="h-7 w-7 text-blue-600 border-2 border-blue-600 rounded-full p-[2px] "
        //                             xmlns="http://www.w3.org/2000/svg"
        //                             width="2em"
        //                             height="2em"
        //                             viewBox="0 0 24 24"
        //                         >
        //                             <path
        //                                 fill="#0c52df"
        //                                 d="M20.07 6.35H15v1.41h5.09ZM19 16.05a2.23 2.23 0 0 1-1.3.37a2.23 2.23 0 0 1-1.7-.54a2.49 2.49 0 0 1-.62-1.76H22a6.47 6.47 0 0 0-.17-2a5.08 5.08 0 0 0-.8-1.73a4.17 4.17 0 0 0-1.42-1.21a4.37 4.37 0 0 0-2-.45a4.88 4.88 0 0 0-1.9.37a4.51 4.51 0 0 0-1.47 1a4.4 4.4 0 0 0-.95 1.52a5.4 5.4 0 0 0-.33 1.91a5.52 5.52 0 0 0 .32 1.94a4.46 4.46 0 0 0 .88 1.53a4 4 0 0 0 1.46 1a5.2 5.2 0 0 0 1.94.34a4.77 4.77 0 0 0 2.64-.7a4.21 4.21 0 0 0 1.63-2.35h-2.21a1.54 1.54 0 0 1-.62.76m-3.43-4.12a1.87 1.87 0 0 1 1-1.14a2.28 2.28 0 0 1 1-.2a1.73 1.73 0 0 1 1.36.49a2.91 2.91 0 0 1 .63 1.45h-4.15a3 3 0 0 1 .11-.6Zm-5.29-.48a3.06 3.06 0 0 0 1.28-1a2.72 2.72 0 0 0 .43-1.58a3.28 3.28 0 0 0-.29-1.48a2.4 2.4 0 0 0-.82-1a3.24 3.24 0 0 0-1.27-.52a7.54 7.54 0 0 0-1.64-.16H2v12.58h6.1a6.55 6.55 0 0 0 1.65-.21a4.55 4.55 0 0 0 1.43-.65a3.13 3.13 0 0 0 1-1.14a3.41 3.41 0 0 0 .37-1.65a3.47 3.47 0 0 0-.57-2a3 3 0 0 0-1.75-1.19ZM4.77 7.86h2.59a4.17 4.17 0 0 1 .71.06a1.64 1.64 0 0 1 .61.22a1.05 1.05 0 0 1 .42.44a1.42 1.42 0 0 1 .16.72a1.36 1.36 0 0 1-.47 1.15a2 2 0 0 1-1.22.35h-2.8Zm4.84 7.44a1.28 1.28 0 0 1-.45.5a2 2 0 0 1-.65.26a3.33 3.33 0 0 1-.78.08h-3v-3.45h3a2.4 2.4 0 0 1 1.45.41a1.65 1.65 0 0 1 .54 1.39a1.77 1.77 0 0 1-.11.81"
        //                             ></path>
        //                         </svg>
        //                     </a>
        //                 </div>
        //             </div>
        //             <div className="grid items-center justify-center text-center border-2 border-sky-600 drop-shadow-[0_20px_20px_#3477DB44] rounded-2xl bg-slate-50 p-5 hover:scale-105 ease-in duration-300">
        //                 <img
        //                     src={Abdallahe}
        //                     alt={`Abdallahe`}
        //                     className="w-[140px] h-[150px] rounded-2xl drop-shadow-xl"
        //                 />
        //                 <h1 className=" font-bold text-[17px] mt-2 ">
        //                     Abdullah Essam
        //                 </h1>
        //                 <p className=" text-slate-500 ">Flutter Leader</p>
        //                 <div className="flex gap-3 justify-center mt-3">
        //                     <a href="https://www.facebook.com/abdallh2002?mibextid=2JQ9oc">
        //                         <svg
        //                             className="h-7 w-7 text-blue-700 border-2 border-blue-700 rounded-full p-[2px] "
        //                             viewBox="0 0 24 24"
        //                             fill="none"
        //                             stroke="currentColor"
        //                             stroke-width="2"
        //                             stroke-linecap="round"
        //                             stroke-linejoin="round"
        //                         >
        //                             {" "}
        //                             <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        //                         </svg>
        //                     </a>
        //                     <a href="https://www.linkedin.com/in/abdalluh-essam?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
        //                         <svg
        //                             className="h-7 w-7 text-sky-900 border-2 border-sky-900 rounded p-[2px] "
        //                             viewBox="0 0 24 24"
        //                             fill="none"
        //                             stroke="currentColor"
        //                             stroke-width="2"
        //                             stroke-linecap="round"
        //                             stroke-linejoin="round"
        //                         >
        //                             {" "}
        //                             <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />{" "}
        //                             <rect x="2" y="9" width="4" height="12" />{" "}
        //                             <circle cx="4" cy="4" r="2" />
        //                         </svg>
        //                     </a>
        //                     <a href="https://github.com/AbdalluhEssam">
        //                         <svg
        //                             className="h-7 w-7 text-black border-2 border-black rounded-full p-[2px]"
        //                             width="24"
        //                             height="24"
        //                             viewBox="0 0 24 24"
        //                             stroke-width="2"
        //                             stroke="currentColor"
        //                             fill="none"
        //                             stroke-linecap="round"
        //                             stroke-linejoin="round"
        //                         >
        //                             {" "}
        //                             <path
        //                                 stroke="none"
        //                                 d="M0 0h24v24H0z"
        //                             />{" "}
        //                             <path d="M9 19c-4.286 1.35-4.286-2.55-6-3m12 5v-3.5c0-1 .099-1.405-.5-2 2.791-.3 5.5-1.366 5.5-6.04a4.567 4.567 0 0 0 -1.333 -3.21 4.192 4.192 0 00-.08-3.227s-1.05-.3-3.476 1.267a12.334 12.334 0 0 0 -6.222 0C6.462 2.723 5.413 3.023 5.413 3.023a4.192 4.192 0 0 0 -.08 3.227A4.566 4.566 0 004 9.486c0 4.64 2.709 5.68 5.5 6.014-.591.589-.56 1.183-.5 2V21" />
        //                         </svg>
        //                     </a>
        //                 </div>
        //             </div>
        //             <div className="grid items-center justify-center text-center border-2 border-sky-600 drop-shadow-[0_20px_20px_#3477DB44] rounded-2xl bg-slate-50 p-5 hover:scale-105 ease-in duration-300">
        //                 <img
        //                     src={ayman}
        //                     alt={`ayman`}
        //                     className="w-[180px] h-[150px] rounded-2xl drop-shadow-xl"
        //                 />
        //                 <h1 className=" font-bold text-[17px] mt-2 ">
        //                     Ayman Mohamed
        //                 </h1>
        //                 <p className=" text-slate-500 ">Flutter</p>
        //                 <div className="flex gap-3 justify-center mt-3">
        //                     <a href="https://www.facebook.com/aymanaboelela2/?locale=ar_AR">
        //                         <svg
        //                             className="h-7 w-7 text-blue-700 border-2 border-blue-700 rounded-full p-[2px] "
        //                             viewBox="0 0 24 24"
        //                             fill="none"
        //                             stroke="currentColor"
        //                             stroke-width="2"
        //                             stroke-linecap="round"
        //                             stroke-linejoin="round"
        //                         >
        //                             {" "}
        //                             <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        //                         </svg>
        //                     </a>
        //                     <a href="https://www.linkedin.com/in/aymanaboelela/">
        //                         <svg
        //                             className="h-7 w-7 text-sky-900 border-2 border-sky-900 rounded p-[2px] "
        //                             viewBox="0 0 24 24"
        //                             fill="none"
        //                             stroke="currentColor"
        //                             stroke-width="2"
        //                             stroke-linecap="round"
        //                             stroke-linejoin="round"
        //                         >
        //                             {" "}
        //                             <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />{" "}
        //                             <rect x="2" y="9" width="4" height="12" />{" "}
        //                             <circle cx="4" cy="4" r="2" />
        //                         </svg>
        //                     </a>
        //                     <a href="https://github.com/aymanaboelela">
        //                         <svg
        //                             className="h-7 w-7 text-black border-2 border-black rounded-full p-[2px]"
        //                             width="24"
        //                             height="24"
        //                             viewBox="0 0 24 24"
        //                             stroke-width="2"
        //                             stroke="currentColor"
        //                             fill="none"
        //                             stroke-linecap="round"
        //                             stroke-linejoin="round"
        //                         >
        //                             {" "}
        //                             <path
        //                                 stroke="none"
        //                                 d="M0 0h24v24H0z"
        //                             />{" "}
        //                             <path d="M9 19c-4.286 1.35-4.286-2.55-6-3m12 5v-3.5c0-1 .099-1.405-.5-2 2.791-.3 5.5-1.366 5.5-6.04a4.567 4.567 0 0 0 -1.333 -3.21 4.192 4.192 0 00-.08-3.227s-1.05-.3-3.476 1.267a12.334 12.334 0 0 0 -6.222 0C6.462 2.723 5.413 3.023 5.413 3.023a4.192 4.192 0 0 0 -.08 3.227A4.566 4.566 0 004 9.486c0 4.64 2.709 5.68 5.5 6.014-.591.589-.56 1.183-.5 2V21" />
        //                         </svg>
        //                     </a>
        //                 </div>
        //             </div>
        //             <div className="grid items-center justify-center text-center border-2 border-sky-600 drop-shadow-[0_20px_20px_#3477DB44] rounded-2xl bg-slate-50 p-5 hover:scale-105 ease-in duration-300">
        //                 <img
        //                     src={mahmouds}
        //                     alt={`mahmouds`}
        //                     className="w-[140px] h-[150px] rounded-2xl drop-shadow-xl"
        //                 />
        //                 <h1 className=" font-bold text-[17px] mt-2 ">
        //                     Mahmoud Sayed
        //                 </h1>
        //                 <p className=" text-slate-500 ">Flutter</p>
        //                 <div className="flex gap-3 justify-center mt-3">
        //                     <a href="https://www.facebook.com/moknk.argere">
        //                         <svg
        //                             className="h-7 w-7 text-blue-700 border-2 border-blue-700 rounded-full p-[2px] "
        //                             viewBox="0 0 24 24"
        //                             fill="none"
        //                             stroke="currentColor"
        //                             stroke-width="2"
        //                             stroke-linecap="round"
        //                             stroke-linejoin="round"
        //                         >
        //                             {" "}
        //                             <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        //                         </svg>
        //                     </a>
        //                     <a href="https://www.linkedin.com/in/mahmoud-el-sayed-b0b19b262">
        //                         <svg
        //                             className="h-7 w-7 text-sky-900 border-2 border-sky-900 rounded p-[2px] "
        //                             viewBox="0 0 24 24"
        //                             fill="none"
        //                             stroke="currentColor"
        //                             stroke-width="2"
        //                             stroke-linecap="round"
        //                             stroke-linejoin="round"
        //                         >
        //                             {" "}
        //                             <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />{" "}
        //                             <rect x="2" y="9" width="4" height="12" />{" "}
        //                             <circle cx="4" cy="4" r="2" />
        //                         </svg>
        //                     </a>
        //                     <a href="https://github.com/MahmoudElSayed69">
        //                         <svg
        //                             className="h-7 w-7 text-black border-2 border-black rounded-full p-[2px]"
        //                             width="24"
        //                             height="24"
        //                             viewBox="0 0 24 24"
        //                             stroke-width="2"
        //                             stroke="currentColor"
        //                             fill="none"
        //                             stroke-linecap="round"
        //                             stroke-linejoin="round"
        //                         >
        //                             {" "}
        //                             <path
        //                                 stroke="none"
        //                                 d="M0 0h24v24H0z"
        //                             />{" "}
        //                             <path d="M9 19c-4.286 1.35-4.286-2.55-6-3m12 5v-3.5c0-1 .099-1.405-.5-2 2.791-.3 5.5-1.366 5.5-6.04a4.567 4.567 0 0 0 -1.333 -3.21 4.192 4.192 0 00-.08-3.227s-1.05-.3-3.476 1.267a12.334 12.334 0 0 0 -6.222 0C6.462 2.723 5.413 3.023 5.413 3.023a4.192 4.192 0 0 0 -.08 3.227A4.566 4.566 0 004 9.486c0 4.64 2.709 5.68 5.5 6.014-.591.589-.56 1.183-.5 2V21" />
        //                         </svg>
        //                     </a>
        //                 </div>
        //             </div>
        //             <div className="grid items-center justify-center text-center border-2 border-sky-600 drop-shadow-[0_20px_20px_#3477DB44] rounded-2xl bg-slate-50 p-5 hover:scale-105 ease-in duration-300">
        //                 <img
        //                     src={abbas}
        //                     alt={`abbas`}
        //                     className="w-[150px] h-[150px] rounded-2xl drop-shadow-xl"
        //                 />
        //                 <h1 className=" font-bold text-[17px] mt-2 ">
        //                     Eslam Mohamed{" "}
        //                 </h1>
        //                 <p className=" text-slate-500 ">CybersecurityLeader</p>
        //                 <div className="flex gap-3 justify-center mt-3">
        //                     <a href="https://www.facebook.com/eslam.apas.31">
        //                         <svg
        //                             className="h-7 w-7 text-blue-700 border-2 border-blue-700 rounded-full p-[2px] "
        //                             viewBox="0 0 24 24"
        //                             fill="none"
        //                             stroke="currentColor"
        //                             stroke-width="2"
        //                             stroke-linecap="round"
        //                             stroke-linejoin="round"
        //                         >
        //                             {" "}
        //                             <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        //                         </svg>
        //                     </a>
        //                     <a href="https://www.linkedin.com/in/eslam-abbas-20aa64213?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
        //                         <svg
        //                             className="h-7 w-7 text-sky-900 border-2 border-sky-900 rounded p-[2px] "
        //                             viewBox="0 0 24 24"
        //                             fill="none"
        //                             stroke="currentColor"
        //                             stroke-width="2"
        //                             stroke-linecap="round"
        //                             stroke-linejoin="round"
        //                         >
        //                             {" "}
        //                             <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />{" "}
        //                             <rect x="2" y="9" width="4" height="12" />{" "}
        //                             <circle cx="4" cy="4" r="2" />
        //                         </svg>
        //                     </a>
        //                     <a href="https://0xmr-robot.github.io/">
        //                         <svg
        //                             className="h-7 w-7 text-black border-2 border-black rounded-full p-[2px]"
        //                             width="24"
        //                             height="24"
        //                             viewBox="0 0 24 24"
        //                             stroke-width="2"
        //                             stroke="currentColor"
        //                             fill="none"
        //                             stroke-linecap="round"
        //                             stroke-linejoin="round"
        //                         >
        //                             {" "}
        //                             <path
        //                                 stroke="none"
        //                                 d="M0 0h24v24H0z"
        //                             />{" "}
        //                             <path d="M9 19c-4.286 1.35-4.286-2.55-6-3m12 5v-3.5c0-1 .099-1.405-.5-2 2.791-.3 5.5-1.366 5.5-6.04a4.567 4.567 0 0 0 -1.333 -3.21 4.192 4.192 0 00-.08-3.227s-1.05-.3-3.476 1.267a12.334 12.334 0 0 0 -6.222 0C6.462 2.723 5.413 3.023 5.413 3.023a4.192 4.192 0 0 0 -.08 3.227A4.566 4.566 0 004 9.486c0 4.64 2.709 5.68 5.5 6.014-.591.589-.56 1.183-.5 2V21" />
        //                         </svg>
        //                     </a>
        //                 </div>
        //             </div>
        //             <div className="grid items-center justify-center text-center border-2 border-sky-600 drop-shadow-[0_20px_20px_#3477DB44] rounded-2xl bg-slate-50 p-5 hover:scale-105 ease-in duration-300">
        //                 <div className="flex justify-center">
        //                 <img
        //                     src={`images/syber.jpeg`}
        //                     alt={`Ehab`}
        //                     className="w-[150px] h-[175px] rounded-2xl drop-shadow-xl"
        //                 />
        //                 </div>
        //                 <h1 className=" font-bold text-[17px] mt-2 ">
        //                 Abdullah Ehab
        //                 </h1>
        //                 <p className=" text-slate-500 ">
        //                     Cybersecurity Co-Leader
        //                 </p>
        //                 <div className="flex gap-3 justify-center mt-3">
        //                     <a href="https://www.facebook.com/abdallah.ehab.9847?mibextid=kFxxJD">
        //                         <svg
        //                             className="h-7 w-7 text-blue-700 border-2 border-blue-700 rounded-full p-[2px] "
        //                             viewBox="0 0 24 24"
        //                             fill="none"
        //                             stroke="currentColor"
        //                             stroke-width="2"
        //                             stroke-linecap="round"
        //                             stroke-linejoin="round"
        //                         >
        //                             {" "}
        //                             <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        //                         </svg>
        //                     </a>
        //                 </div>
        //             </div>
        //             <div className="grid items-center justify-center text-center border-2 border-sky-600 drop-shadow-[0_20px_20px_#3477DB44] rounded-2xl bg-slate-50 p-5 hover:scale-105 ease-in duration-300">
        //                 <img
        //                     src={khaledi}
        //                     alt={`khaledi`}
        //                     className="w-[150px] h-[175px] rounded-2xl drop-shadow-xl"
        //                 />
        //                 <h1 className=" font-bold text-[17px] mt-2 ">
        //                     Khaled Ibrahem
        //                 </h1>
        //                 <p className=" text-slate-500 ">Game Dev. Leader</p>
        //                 <div className="flex gap-3 justify-center mt-3">
        //                     <a href="https://www.facebook.com/profile.php?id=100011328658405&mibextid=2JQ9oc">
        //                         <svg
        //                             className="h-7 w-7 text-blue-700 border-2 border-blue-700 rounded-full p-[2px] "
        //                             viewBox="0 0 24 24"
        //                             fill="none"
        //                             stroke="currentColor"
        //                             stroke-width="2"
        //                             stroke-linecap="round"
        //                             stroke-linejoin="round"
        //                         >
        //                             {" "}
        //                             <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        //                         </svg>
        //                     </a>
        //                     <a href="https://www.linkedin.com/in/khaled-ibrahem-662036201?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
        //                         <svg
        //                             className="h-7 w-7 text-sky-900 border-2 border-sky-900 rounded p-[2px] "
        //                             viewBox="0 0 24 24"
        //                             fill="none"
        //                             stroke="currentColor"
        //                             stroke-width="2"
        //                             stroke-linecap="round"
        //                             stroke-linejoin="round"
        //                         >
        //                             {" "}
        //                             <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />{" "}
        //                             <rect x="2" y="9" width="4" height="12" />{" "}
        //                             <circle cx="4" cy="4" r="2" />
        //                         </svg>
        //                     </a>
        //                     <a href="https://github.com/khaled9411">
        //                         <svg
        //                             className="h-7 w-7 text-black border-2 border-black rounded-full p-[2px]"
        //                             width="24"
        //                             height="24"
        //                             viewBox="0 0 24 24"
        //                             stroke-width="2"
        //                             stroke="currentColor"
        //                             fill="none"
        //                             stroke-linecap="round"
        //                             stroke-linejoin="round"
        //                         >
        //                             {" "}
        //                             <path
        //                                 stroke="none"
        //                                 d="M0 0h24v24H0z"
        //                             />{" "}
        //                             <path d="M9 19c-4.286 1.35-4.286-2.55-6-3m12 5v-3.5c0-1 .099-1.405-.5-2 2.791-.3 5.5-1.366 5.5-6.04a4.567 4.567 0 0 0 -1.333 -3.21 4.192 4.192 0 00-.08-3.227s-1.05-.3-3.476 1.267a12.334 12.334 0 0 0 -6.222 0C6.462 2.723 5.413 3.023 5.413 3.023a4.192 4.192 0 0 0 -.08 3.227A4.566 4.566 0 004 9.486c0 4.64 2.709 5.68 5.5 6.014-.591.589-.56 1.183-.5 2V21" />
        //                         </svg>
        //                     </a>
        //                 </div>
        //             </div>
        //             <div className="grid items-center justify-center text-center border-2 border-sky-600 drop-shadow-[0_20px_20px_#3477DB44] rounded-2xl bg-slate-50 p-5 hover:scale-105 ease-in duration-300">
        //                 <img
        //                     src={mohab}
        //                     alt={`mohab`}
        //                     className="w-[160px] h-[175px] rounded-2xl drop-shadow-xl"
        //                 />
        //                 <h1 className=" font-bold text-[17px] mt-2 ">
        //                     Mohab Galal
        //                 </h1>
        //                 <p className=" text-slate-500 ">Game Dev. Co-Leader</p>
        //                 <div className="flex gap-3 justify-center mt-3">
        //                     <a href="https://www.facebook.com/mohab.galal.10?mibextid=2JQ9oc">
        //                         <svg
        //                             className="h-7 w-7 text-blue-700 border-2 border-blue-700 rounded-full p-[2px] "
        //                             viewBox="0 0 24 24"
        //                             fill="none"
        //                             stroke="currentColor"
        //                             stroke-width="2"
        //                             stroke-linecap="round"
        //                             stroke-linejoin="round"
        //                         >
        //                             {" "}
        //                             <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        //                         </svg>
        //                     </a>
        //                     <a href="https://www.linkedin.com/in/mohab-galal-327b34290?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
        //                         <svg
        //                             className="h-7 w-7 text-sky-900 border-2 border-sky-900 rounded p-[2px] "
        //                             viewBox="0 0 24 24"
        //                             fill="none"
        //                             stroke="currentColor"
        //                             stroke-width="2"
        //                             stroke-linecap="round"
        //                             stroke-linejoin="round"
        //                         >
        //                             {" "}
        //                             <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />{" "}
        //                             <rect x="2" y="9" width="4" height="12" />{" "}
        //                             <circle cx="4" cy="4" r="2" />
        //                         </svg>
        //                     </a>
        //                 </div>
        //             </div>
        //             <div className="grid items-center justify-center text-center border-2 border-sky-600 drop-shadow-[0_20px_20px_#3477DB44] rounded-2xl bg-slate-50 p-5 hover:scale-105 ease-in duration-300">
        //                 <img
        //                     src={shefoo}
        //                     alt={`shefoo`}
        //                     className="w-[150px] h-[175px] rounded-2xl drop-shadow-xl"
        //                 />
        //                 <h1 className=" font-bold text-[17px] mt-2 ">
        //                     Ahmed Shrief
        //                 </h1>
        //                 <p className=" text-slate-500 ">Media Leader</p>
        //                 <div className="flex gap-3 justify-center mt-3">
        //                     <a href="https://www.facebook.com/profile.php?id=100012178745640&mibextid=2JQ9oc">
        //                         <svg
        //                             className="h-7 w-7 text-blue-700 border-2 border-blue-700 rounded-full p-[2px] "
        //                             viewBox="0 0 24 24"
        //                             fill="none"
        //                             stroke="currentColor"
        //                             stroke-width="2"
        //                             stroke-linecap="round"
        //                             stroke-linejoin="round"
        //                         >
        //                             {" "}
        //                             <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        //                         </svg>
        //                     </a>
        //                     <a href="https://www.linkedin.com/in/ahmed-sherif-2b6132249?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
        //                         <svg
        //                             className="h-7 w-7 text-sky-900 border-2 border-sky-900 rounded p-[2px] "
        //                             viewBox="0 0 24 24"
        //                             fill="none"
        //                             stroke="currentColor"
        //                             stroke-width="2"
        //                             stroke-linecap="round"
        //                             stroke-linejoin="round"
        //                         >
        //                             {" "}
        //                             <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />{" "}
        //                             <rect x="2" y="9" width="4" height="12" />{" "}
        //                             <circle cx="4" cy="4" r="2" />
        //                         </svg>
        //                     </a>
        //                     <a href="https://github.com/Ahmed-sherifhe1">
        //                         <svg
        //                             className="h-7 w-7 text-black border-2 border-black rounded-full p-[2px]"
        //                             width="24"
        //                             height="24"
        //                             viewBox="0 0 24 24"
        //                             stroke-width="2"
        //                             stroke="currentColor"
        //                             fill="none"
        //                             stroke-linecap="round"
        //                             stroke-linejoin="round"
        //                         >
        //                             {" "}
        //                             <path
        //                                 stroke="none"
        //                                 d="M0 0h24v24H0z"
        //                             />{" "}
        //                             <path d="M9 19c-4.286 1.35-4.286-2.55-6-3m12 5v-3.5c0-1 .099-1.405-.5-2 2.791-.3 5.5-1.366 5.5-6.04a4.567 4.567 0 0 0 -1.333 -3.21 4.192 4.192 0 00-.08-3.227s-1.05-.3-3.476 1.267a12.334 12.334 0 0 0 -6.222 0C6.462 2.723 5.413 3.023 5.413 3.023a4.192 4.192 0 0 0 -.08 3.227A4.566 4.566 0 004 9.486c0 4.64 2.709 5.68 5.5 6.014-.591.589-.56 1.183-.5 2V21" />
        //                         </svg>
        //                     </a>
        //                 </div>
        //             </div>
        //             <div className="grid items-center justify-center text-center border-2 border-sky-600 drop-shadow-[0_20px_20px_#3477DB44] rounded-2xl bg-slate-50 p-5 hover:scale-105 ease-in duration-300">
        //                 <img
        //                     src={alia}
        //                     alt={`alia`}
        //                     className="w-[180px] h-[175px] rounded-2xl drop-shadow-xl"
        //                 />
        //                 <h1 className=" font-bold text-[17px] mt-2 ">
        //                     Aliaa Sabek
        //                 </h1>
        //                 <p className=" text-slate-500 ">Media Co-Leader</p>
        //                 <div className="flex gap-3 justify-center mt-3">
        //                     <a href="https://www.facebook.com/aliaa.sabek.94?mibextid=2JQ9oc">
        //                         <svg
        //                             className="h-7 w-7 text-blue-700 border-2 border-blue-700 rounded-full p-[2px] "
        //                             viewBox="0 0 24 24"
        //                             fill="none"
        //                             stroke="currentColor"
        //                             stroke-width="2"
        //                             stroke-linecap="round"
        //                             stroke-linejoin="round"
        //                         >
        //                             {" "}
        //                             <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        //                         </svg>
        //                     </a>
        //                     <a href="https://www.linkedin.com/in/aliaa-sabek-807450254?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
        //                         <svg
        //                             className="h-7 w-7 text-sky-900 border-2 border-sky-900 rounded p-[2px] "
        //                             viewBox="0 0 24 24"
        //                             fill="none"
        //                             stroke="currentColor"
        //                             stroke-width="2"
        //                             stroke-linecap="round"
        //                             stroke-linejoin="round"
        //                         >
        //                             {" "}
        //                             <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />{" "}
        //                             <rect x="2" y="9" width="4" height="12" />{" "}
        //                             <circle cx="4" cy="4" r="2" />
        //                         </svg>
        //                     </a>
        //                     <a href="https://github.com/AliaaSabek">
        //                         <svg
        //                             className="h-7 w-7 text-black border-2 border-black rounded-full p-[2px]"
        //                             width="24"
        //                             height="24"
        //                             viewBox="0 0 24 24"
        //                             stroke-width="2"
        //                             stroke="currentColor"
        //                             fill="none"
        //                             stroke-linecap="round"
        //                             stroke-linejoin="round"
        //                         >
        //                             {" "}
        //                             <path
        //                                 stroke="none"
        //                                 d="M0 0h24v24H0z"
        //                             />{" "}
        //                             <path d="M9 19c-4.286 1.35-4.286-2.55-6-3m12 5v-3.5c0-1 .099-1.405-.5-2 2.791-.3 5.5-1.366 5.5-6.04a4.567 4.567 0 0 0 -1.333 -3.21 4.192 4.192 0 00-.08-3.227s-1.05-.3-3.476 1.267a12.334 12.334 0 0 0 -6.222 0C6.462 2.723 5.413 3.023 5.413 3.023a4.192 4.192 0 0 0 -.08 3.227A4.566 4.566 0 004 9.486c0 4.64 2.709 5.68 5.5 6.014-.591.589-.56 1.183-.5 2V21" />
        //                         </svg>
        //                     </a>
        //                 </div>
        //             </div>
        //             <div className="grid items-center justify-center text-center border-2 border-sky-600 drop-shadow-[0_20px_20px_#3477DB44] rounded-2xl bg-slate-50 p-5 hover:scale-105 ease-in duration-300">
        //                 <img
        //                     src={kareemk}
        //                     alt={`kareemk`}
        //                     className="w-[150px] h-[175px] rounded-2xl drop-shadow-xl"
        //                 />
        //                 <h1 className=" font-bold text-[17px] mt-2 ">
        //                 Kareem Aboelfetoh
        //                 </h1>
        //                 <p className=" text-slate-500 ">Treasurer - PR Leader </p>
        //                 <div className="flex gap-3 justify-center mt-3">
        //                     <a href="https://www.facebook.com/Alfetoh?mibextid=2JQ9oc">
        //                         <svg
        //                             className="h-7 w-7 text-blue-700 border-2 border-blue-700 rounded-full p-[2px] "
        //                             viewBox="0 0 24 24"
        //                             fill="none"
        //                             stroke="currentColor"
        //                             stroke-width="2"
        //                             stroke-linecap="round"
        //                             stroke-linejoin="round"
        //                         >
        //                             {" "}
        //                             <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        //                         </svg>
        //                     </a>
        //                     <a href="https://www.linkedin.com/in/kaboelfetoh/">
        //                         <svg
        //                             className="h-7 w-7 text-sky-900 border-2 border-sky-900 rounded p-[2px] "
        //                             viewBox="0 0 24 24"
        //                             fill="none"
        //                             stroke="currentColor"
        //                             stroke-width="2"
        //                             stroke-linecap="round"
        //                             stroke-linejoin="round"
        //                         >
        //                             {" "}
        //                             <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />{" "}
        //                             <rect x="2" y="9" width="4" height="12" />{" "}
        //                             <circle cx="4" cy="4" r="2" />
        //                         </svg>
        //                     </a>
        //                 </div>
        //             </div>
        //             <div className="grid items-center justify-center text-center border-2 border-sky-600 drop-shadow-[0_20px_20px_#3477DB44] rounded-2xl bg-slate-50 p-5 hover:scale-105 ease-in duration-300">
        //                 <img
        //                     src={haha}
        //                     alt={`haha`}
        //                     className="w-[140px] h-[175px] rounded-2xl drop-shadow-xl"
        //                 />
        //                 <h1 className=" font-bold text-[17px] mt-2 ">
        //                     Ahmed Ayman
        //                 </h1>
        //                 <p className=" text-slate-500 ">Media Co-Leader</p>
        //                 <div className="flex gap-3 justify-center mt-3">
        //                     <a href="https://www.linkedin.com/in/haha-twyg-62096a2b4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">
        //                         <svg
        //                             className="h-7 w-7 text-sky-900 border-2 border-sky-900 rounded p-[2px] "
        //                             viewBox="0 0 24 24"
        //                             fill="none"
        //                             stroke="currentColor"
        //                             stroke-width="2"
        //                             stroke-linecap="round"
        //                             stroke-linejoin="round"
        //                         >
        //                             {" "}
        //                             <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />{" "}
        //                             <rect x="2" y="9" width="4" height="12" />{" "}
        //                             <circle cx="4" cy="4" r="2" />
        //                         </svg>
        //                     </a>
        //                     <a href="https://www.behance.net/ahmedeid172">
        //                         <svg
        //                             className="h-7 w-7 text-blue-600 border-2 border-blue-600 rounded-full p-[2px] "
        //                             xmlns="http://www.w3.org/2000/svg"
        //                             width="2em"
        //                             height="2em"
        //                             viewBox="0 0 24 24"
        //                         >
        //                             <path
        //                                 fill="#0c52df"
        //                                 d="M20.07 6.35H15v1.41h5.09ZM19 16.05a2.23 2.23 0 0 1-1.3.37a2.23 2.23 0 0 1-1.7-.54a2.49 2.49 0 0 1-.62-1.76H22a6.47 6.47 0 0 0-.17-2a5.08 5.08 0 0 0-.8-1.73a4.17 4.17 0 0 0-1.42-1.21a4.37 4.37 0 0 0-2-.45a4.88 4.88 0 0 0-1.9.37a4.51 4.51 0 0 0-1.47 1a4.4 4.4 0 0 0-.95 1.52a5.4 5.4 0 0 0-.33 1.91a5.52 5.52 0 0 0 .32 1.94a4.46 4.46 0 0 0 .88 1.53a4 4 0 0 0 1.46 1a5.2 5.2 0 0 0 1.94.34a4.77 4.77 0 0 0 2.64-.7a4.21 4.21 0 0 0 1.63-2.35h-2.21a1.54 1.54 0 0 1-.62.76m-3.43-4.12a1.87 1.87 0 0 1 1-1.14a2.28 2.28 0 0 1 1-.2a1.73 1.73 0 0 1 1.36.49a2.91 2.91 0 0 1 .63 1.45h-4.15a3 3 0 0 1 .11-.6Zm-5.29-.48a3.06 3.06 0 0 0 1.28-1a2.72 2.72 0 0 0 .43-1.58a3.28 3.28 0 0 0-.29-1.48a2.4 2.4 0 0 0-.82-1a3.24 3.24 0 0 0-1.27-.52a7.54 7.54 0 0 0-1.64-.16H2v12.58h6.1a6.55 6.55 0 0 0 1.65-.21a4.55 4.55 0 0 0 1.43-.65a3.13 3.13 0 0 0 1-1.14a3.41 3.41 0 0 0 .37-1.65a3.47 3.47 0 0 0-.57-2a3 3 0 0 0-1.75-1.19ZM4.77 7.86h2.59a4.17 4.17 0 0 1 .71.06a1.64 1.64 0 0 1 .61.22a1.05 1.05 0 0 1 .42.44a1.42 1.42 0 0 1 .16.72a1.36 1.36 0 0 1-.47 1.15a2 2 0 0 1-1.22.35h-2.8Zm4.84 7.44a1.28 1.28 0 0 1-.45.5a2 2 0 0 1-.65.26a3.33 3.33 0 0 1-.78.08h-3v-3.45h3a2.4 2.4 0 0 1 1.45.41a1.65 1.65 0 0 1 .54 1.39a1.77 1.77 0 0 1-.11.81"
        //                             ></path>
        //                         </svg>
        //                     </a>
        //                 </div>
        //             </div>
        //             <div className="grid items-center justify-center text-center border-2 border-sky-600 drop-shadow-[0_20px_20px_#3477DB44] rounded-2xl bg-slate-50 p-5 hover:scale-105 ease-in duration-300">
        //                 <img
        //                     src={lana}
        //                     alt={`lana`}
        //                     className="w-[130px] h-[170px] rounded-2xl drop-shadow-xl"
        //                 />
        //                 <h1 className=" font-bold text-[17px] mt-2 ">
        //                 lana mansour
        //                 </h1>
        //                 <p className=" text-slate-500 ">Vice PR</p>
        //                 <div className="flex gap-3 justify-center mt-3">
        //                     <a href="https://www.facebook.com/lana.mansuoor?mibextid=2JQ9oc">
        //                         <svg
        //                             className="h-7 w-7 text-blue-700 border-2 border-blue-700 rounded-full p-[2px] "
        //                             viewBox="0 0 24 24"
        //                             fill="none"
        //                             stroke="currentColor"
        //                             stroke-width="2"
        //                             stroke-linecap="round"
        //                             stroke-linejoin="round"
        //                         >
        //                             {" "}
        //                             <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        //                         </svg>
        //                     </a>
        //                     <a href="https://www.linkedin.com/in/lana-mansuor-146a16263?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=androi">
        //                         <svg
        //                             className="h-7 w-7 text-sky-900 border-2 border-sky-900 rounded p-[2px] "
        //                             viewBox="0 0 24 24"
        //                             fill="none"
        //                             stroke="currentColor"
        //                             stroke-width="2"
        //                             stroke-linecap="round"
        //                             stroke-linejoin="round"
        //                         >
        //                             {" "}
        //                             <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />{" "}
        //                             <rect x="2" y="9" width="4" height="12" />{" "}
        //                             <circle cx="4" cy="4" r="2" />
        //                         </svg>
        //                     </a>
        //                 </div>
        //             </div>
        //             <div className="grid items-center justify-center text-center border-2 border-sky-600 drop-shadow-[0_20px_20px_#3477DB44] rounded-2xl bg-slate-50 p-5 hover:scale-105 ease-in duration-300">
        //                 <img
        //                     src={khater}
        //                     alt={`khater`}
        //                     className="w-[180px] h-[170px] rounded-2xl drop-shadow-xl"
        //                 />
        //                 <h1 className=" font-bold text-[17px] mt-2 ">
        //                     Ahmed Khater
        //                 </h1>
        //                 <p className=" text-slate-500 ">HR Co-lead</p>
        //                 <div className="flex gap-3 justify-center mt-3">
        //                     <a href="https://www.facebook.com/tox.tox.777?mibextid=ZbWKwL">
        //                         <svg
        //                             className="h-7 w-7 text-blue-700 border-2 border-blue-700 rounded-full p-[2px] "
        //                             viewBox="0 0 24 24"
        //                             fill="none"
        //                             stroke="currentColor"
        //                             stroke-width="2"
        //                             stroke-linecap="round"
        //                             stroke-linejoin="round"
        //                         >
        //                             {" "}
        //                             <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        //                         </svg>
        //                     </a>
        //                     <a href="https://www.linkedin.com/in/ahmed-khater-807201252">
        //                         <svg
        //                             className="h-7 w-7 text-sky-900 border-2 border-sky-900 rounded p-[2px] "
        //                             viewBox="0 0 24 24"
        //                             fill="none"
        //                             stroke="currentColor"
        //                             stroke-width="2"
        //                             stroke-linecap="round"
        //                             stroke-linejoin="round"
        //                         >
        //                             {" "}
        //                             <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />{" "}
        //                             <rect x="2" y="9" width="4" height="12" />{" "}
        //                             <circle cx="4" cy="4" r="2" />
        //                         </svg>
        //                     </a>
        //                 </div>
        //             </div>
        //             {/* imgs */}
        //         </div>
        //     </section>
        //      {/* start section organizers */}
        //     {/* end sec2 */} */}
        // </main>
        <h1>News</h1>
    );
};

export default News;


