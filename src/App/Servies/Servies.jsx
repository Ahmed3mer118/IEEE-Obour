import React from "react";

const Servies = () => {
    return (
        <>
            {/*  start section our servies */}
            <section className="grid">
                <div className="flex items-center justify-evenly">
                    <div className="max-[600px]:hidden">
                        <img src={logo3} alt="" />
                    </div>
                    <div className="grid text-center">
                        <h1 className="max-[397px]:text-[25px] max-[767px]:text-[35px] text-[40px] font-bold text-blue-950 ">
                            <span className="text-black">Our</span> service
                        </h1>
                        <p className="max-[397px]:text-[15px] font-bold text-[#62678f]">
                            Explore our various tracks and services
                        </p>
                    </div>
                    <div className="max-[600px]:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="169"
                            height="177"
                            viewBox="0 0 169 177"
                            fill="none"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M15.8874 75.1065C16.8129 75.9637 18.4159 75.8088 19.4973 74.773C32.4286 62.7322 45.5239 56.0365 58.3924 54.7701C70.9225 53.5386 83.1188 57.6133 94.6339 66.7948C97.197 68.7945 101.054 73.0876 104.325 78.2689C100.803 82.864 98.2612 88.1629 96.7972 93.1817C94.637 100.594 95.1669 107.189 97.3955 110.283C98.6304 111.996 100.331 112.963 102.393 113.248C105.032 113.608 108.736 112.756 113.228 108.991C119.429 103.774 121.421 96.9264 120.335 89.6775C119.76 85.8671 118.27 81.9461 116.313 78.2241C119.148 75.9657 122.558 74.5042 126.547 74.5734C134.996 74.6646 140.805 80.7825 144.666 88.2409C148.016 94.6924 151.891 104.317 149.942 112.406C149.282 115.154 147.836 117.593 149.988 119.604C153.28 122.718 156.879 118.88 157.792 115.105C159.749 106.995 157.6 97.6198 155.292 90.4983C151.062 77.3917 141.968 66.0669 128.401 65.5843C122.038 65.3863 116.441 67.4956 111.759 70.914C108.048 65.7268 103.924 61.5275 101.156 59.4811C87.4433 49.5843 73.1155 45.6783 58.7464 47.7222C44.3922 49.757 29.9544 57.6646 16.1688 71.6645C15.0943 72.713 14.9618 74.2493 15.8874 75.1065ZM109.249 88.5393C109.944 90.7182 110.354 92.8829 110.347 94.976C110.334 97.6381 109.576 100.172 107.232 102.131C106.835 102.458 106.348 102.91 105.951 103.237C105.753 102.33 105.429 100.541 105.554 99.0269C105.849 95.6453 107.004 91.5508 108.947 87.6615C109.072 87.9621 109.168 88.2462 109.249 88.5393Z"
                                fill="#0577AB"
                            />
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M23.3689 69.1438C24.752 66.5544 26.1096 63.8093 27.1334 61.2163C28.7132 57.1715 29.5571 53.5237 28.7675 50.9912C28.5637 49.7113 27.2526 49.0205 25.8629 49.4564C24.4662 49.8794 23.5008 51.2725 23.7195 52.5433C23.7333 53.1856 23.4377 53.8794 23.1475 54.6556C22.4797 56.4837 21.1704 58.4459 19.7473 60.5631C17.9286 63.2638 15.7865 65.9904 13.9431 68.5007C12.2669 70.7721 10.8517 72.8674 9.92428 74.5113C8.46048 77.0985 8.21191 79.1849 8.38841 80.3787C8.43956 80.69 10.7957 85.1788 15.6931 82.8794C17.4444 82.0519 21.8061 79.7536 22.0217 79.6394C24.6558 78.1027 29.543 75.3129 34.1088 73.6779C35.5519 73.1581 36.9425 72.6874 38.1861 72.5289C38.2423 72.6317 38.2985 72.7344 38.3696 72.828C39.3904 74.295 41.609 74.467 43.3555 73.2315C44.3164 72.6288 45.6384 71.0527 46.0345 70.1435C46.7962 68.378 46.2339 67.0597 44.6587 66.0676C42.5126 64.7213 39.2518 64.5679 35.5176 65.1825C31.5915 65.8455 27.0608 67.5447 23.3689 69.1438ZM18.5608 77.4504C18.2397 77.9885 18.113 78.374 18.4785 78.4252C18.8879 78.4839 18.669 77.8297 18.5608 77.4504Z"
                                fill="#0577AB"
                            />
                        </svg>
                    </div>
                </div>

                <div className=" mx-auto grid min-[1045px]:grid-cols-2 px-6 gap-x-20  ">
                    <div className=" max-[557px]:w-[400px] max-[451px]:w-[370px] max-[420px]:w-[340px] max-[397px]:w-[300px] justify-self-center w-[500px] h-48 justify-between p-4  flex border border-sky-500 shadow-2xl gap-10 max-[500px]:gap-5 rounded-md mt-10">
                        <div className="flex justify-center items-center ">
                            <img
                                className="max-[397px]:w-[270px] max-[397px]:h-[80px] "
                                src={logo4}
                                alt=""
                            />
                        </div>
                        <div className="flex justify-center  flex-col gap-4">
                            <h1 className="max-[420px]:text-[12px] max-[557px]:text-[17px] max-[451px]:text-[15px] text-[20px] font-bold">
                                Back-end
                            </h1>
                            <p className="text-[12px] max-[451px]:text-[10px]  font-bold text-[#62678f]">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                            </p>
                            <button className=" max-[397px]:w-20 max-[397px]:h-6 max-[397px]:text-[10px] h-8 border border-sky-700 max-[451px]:text-[13px] rounded-md text-sky-700">
                                Learn more{" "}
                            </button>
                        </div>
                    </div>
                    <div className=" max-[557px]:w-[400px] max-[451px]:w-[370px] max-[420px]:w-[340px] max-[397px]:w-[300px] justify-self-center w-[500px] h-48 justify-between p-4  flex border border-sky-500 shadow-2xl gap-10 max-[500px]:gap-5 rounded-md mt-10">
                        <div className="flex justify-center items-center ">
                            <img
                                className="max-[397px]:w-[270px] max-[397px]:h-[80px] "
                                src={logo5}
                                alt=""
                            />
                        </div>
                        <div className="flex justify-center  flex-col gap-4">
                            <h1 className="max-[420px]:text-[12px] max-[557px]:text-[17px] max-[451px]:text-[15px] text-[20px] font-bold">
                                UI/UX Design
                            </h1>
                            <p className="text-[12px] max-[451px]:text-[10px]  font-bold text-[#62678f]">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                            </p>
                            <button className=" max-[397px]:w-20 max-[397px]:h-6 max-[397px]:text-[10px] h-8 border border-sky-700 max-[451px]:text-[13px] rounded-md text-sky-700">
                                Learn more{" "}
                            </button>
                        </div>
                    </div>
                    <div className=" max-[557px]:w-[400px] max-[451px]:w-[370px] max-[420px]:w-[340px] max-[397px]:w-[300px] justify-self-center w-[500px] h-48 justify-between p-4  flex border border-sky-500 shadow-2xl gap-10 max-[500px]:gap-5 rounded-md mt-10">
                        <div className="flex justify-center items-center ">
                            <img
                                className="max-[397px]:w-[270px] max-[397px]:h-[80px] "
                                src={logo6}
                                alt=""
                            />
                        </div>
                        <div className="flex justify-center  flex-col gap-4">
                            <h1 className="max-[420px]:text-[12px] max-[557px]:text-[17px] max-[451px]:text-[15px] text-[20px] font-bold">
                                Front-end
                            </h1>
                            <p className="text-[12px] max-[451px]:text-[10px]  font-bold text-[#62678f]">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                            </p>
                            <button className=" max-[397px]:w-20 max-[397px]:h-6 max-[397px]:text-[10px] h-8 border border-sky-700 max-[451px]:text-[13px] rounded-md text-sky-700">
                                Learn more{" "}
                            </button>
                        </div>
                    </div>
                    <div className=" max-[557px]:w-[400px] max-[451px]:w-[370px] max-[420px]:w-[340px] max-[397px]:w-[300px] justify-self-center w-[500px] h-48 justify-between p-4  flex border border-sky-500 shadow-2xl gap-10 max-[500px]:gap-5 rounded-md mt-10">
                        <div className="flex justify-center items-center ">
                            <img
                                className="max-[397px]:w-[270px] max-[397px]:h-[80px] "
                                src={logo7}
                                alt=""
                            />
                        </div>
                        <div className="flex justify-center  flex-col gap-4">
                            <h1 className="max-[420px]:text-[12px] max-[557px]:text-[17px] max-[451px]:text-[15px] text-[20px] font-bold">
                                Graphic Design
                            </h1>
                            <p className="text-[12px] max-[451px]:text-[10px]  font-bold text-[#62678f]">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                            </p>
                            <button className=" max-[397px]:w-20 max-[397px]:h-6 max-[397px]:text-[10px] h-8 border border-sky-700 max-[451px]:text-[13px] rounded-md text-sky-700">
                                Learn more{" "}
                            </button>
                        </div>
                    </div>
                    <div className=" max-[557px]:w-[400px] max-[451px]:w-[370px] max-[420px]:w-[340px] max-[397px]:w-[300px] justify-self-center w-[500px] h-48 justify-between p-4  flex border border-sky-500 shadow-2xl gap-10 max-[500px]:gap-5 rounded-md mt-10">
                        <div className="flex justify-center items-center ">
                            <img
                                className="max-[397px]:w-[270px] max-[397px]:h-[80px] "
                                src={logo8}
                                alt=""
                            />
                        </div>
                        <div className="flex justify-center  flex-col gap-4">
                            <h1 className="max-[420px]:text-[12px] max-[557px]:text-[17px] max-[451px]:text-[15px] text-[20px] font-bold">
                                App Development
                            </h1>
                            <p className="text-[12px] max-[451px]:text-[10px]  font-bold text-[#62678f]">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                            </p>
                            <button className=" max-[397px]:w-20 max-[397px]:h-6 max-[397px]:text-[10px] h-8 border border-sky-700 max-[451px]:text-[13px] rounded-md text-sky-700">
                                Learn more{" "}
                            </button>
                        </div>
                    </div>
                    <div className=" max-[557px]:w-[400px] max-[451px]:w-[370px] max-[420px]:w-[340px] max-[397px]:w-[300px] justify-self-center w-[500px] h-48 justify-between p-4  flex border border-sky-500 shadow-2xl gap-10 max-[500px]:gap-5 rounded-md mt-10">
                        <div className="flex justify-center items-center ">
                            <img
                                className="max-[397px]:w-[270px] max-[397px]:h-[80px] "
                                src={logo9}
                                alt=""
                            />
                        </div>
                        <div className="flex justify-center  flex-col gap-4">
                            <h1 className="max-[420px]:text-[12px] max-[557px]:text-[17px] max-[451px]:text-[15px] text-[20px] font-bold">
                                Cyber Security
                            </h1>
                            <p className="text-[12px] max-[451px]:text-[10px] font-bold text-[#62678f]">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                            </p>
                            <button className=" max-[397px]:w-20 max-[397px]:h-6 max-[397px]:text-[10px] h-8 border border-sky-700 max-[451px]:text-[13px] rounded-md text-sky-700">
                                Learn more{" "}
                            </button>
                        </div>
                    </div>
                    <div className=" max-[557px]:w-[400px] max-[451px]:w-[370px] max-[420px]:w-[340px] max-[397px]:w-[300px] justify-self-center w-[500px] h-48 justify-between p-4  flex border border-sky-500 shadow-2xl gap-10 max-[500px]:gap-5 rounded-md mt-10">
                        <div className="flex justify-center items-center ">
                            <img
                                className="max-[397px]:w-[270px] max-[397px]:h-[80px] "
                                src={logo10}
                                alt=""
                            />
                        </div>
                        <div className="flex justify-center  flex-col gap-4">
                            <h1 className="max-[420px]:text-[12px] max-[557px]:text-[17px] max-[451px]:text-[15px] text-[20px] font-bold">
                                HR
                            </h1>
                            <p className="text-[12px] max-[451px]:text-[10px]  font-bold text-[#62678f]">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                            </p>
                            <button className=" max-[397px]:w-20 max-[397px]:h-6 max-[397px]:text-[10px] h-8 border border-sky-700 max-[451px]:text-[13px] rounded-md text-sky-700">
                                Learn more{" "}
                            </button>
                        </div>
                    </div>
                    <div className=" max-[557px]:w-[400px] max-[451px]:w-[370px] max-[420px]:w-[340px] max-[397px]:w-[300px] justify-self-center w-[500px] h-48 justify-between p-4  flex border border-sky-500 shadow-2xl gap-10 max-[500px]:gap-5 rounded-md mt-10">
                        <div className="flex justify-center items-center ">
                            <img
                                className="max-[397px]:w-[270px] max-[397px]:h-[80px] "
                                src={logo11}
                                alt=""
                            />
                        </div>
                        <div className="flex justify-center  flex-col gap-4">
                            <h1 className="max-[420px]:text-[12px] max-[557px]:text-[17px] max-[451px]:text-[15px] text-[20px] font-bold">
                                PR
                            </h1>
                            <p className="text-[12px] max-[451px]:text-[10px]  font-bold text-[#62678f]">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                            </p>
                            <button className=" max-[397px]:w-20 max-[397px]:h-6 max-[397px]:text-[10px] h-8 border border-sky-700 max-[451px]:text-[13px] rounded-md text-sky-700">
                                Learn more{" "}
                            </button>
                        </div>
                    </div>
                    <div className=" max-[557px]:w-[400px] max-[451px]:w-[370px] max-[420px]:w-[340px] max-[397px]:w-[300px] justify-self-center min-[1045px]:col-span-2 w-[500px] h-48 justify-between p-4 flex border border-sky-500 shadow-2xl gap-10 max-[500px]:gap-5 rounded-md mt-10">
                        <div className="flex justify-center items-center ">
                            <img
                                className="max-[397px]:w-[270px] max-[397px]:h-[80px] "
                                src={logo12}
                                alt=""
                            />
                        </div>
                        <div className="flex justify-center  flex-col gap-4">
                            <h1 className="max-[420px]:text-[12px] max-[557px]:text-[17px] max-[451px]:text-[15px] text-[20px] font-bold">
                                Media
                            </h1>
                            <p className="text-[12px] max-[451px]:text-[10px]  font-bold text-[#62678f]">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                            </p>
                            <button className="max-[397px]:w-20 max-[397px]:h-6 max-[397px]:text-[10px]  h-8 border border-sky-700 max-[451px]:text-[13px] rounded-md text-sky-700">
                                Learn more{" "}
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            {/*  end section our servies */}
        </>
    );
};

export default Servies;
