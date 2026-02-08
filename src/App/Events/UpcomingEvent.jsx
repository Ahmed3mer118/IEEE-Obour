import React, { useState, useEffect } from "react";
import axios from "axios";
import post from "/events/IMG-20260208-WA0086.jpg";
import RegistrationForm from "./RegistrationForm";

const UpcomingEvent = () => {
    const [showRegistration, setShowRegistration] = useState(false);
    const [event, setEvent] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // جلب الحدث القادم من API
    useEffect(() => {
        const fetchUpcomingEvent = async () => {
            try {
                setLoading(true);
                const response = await axios.get("http://localhost:5000/events/");
                
                if (response.data.success && response.data.data.length > 0) {
                    // أخذ أول حدث قادم
                    setEvent(response.data.data[0]);
                } else {
                    setError("لا يوجد أحداث قادمة حالياً");
                }
            } catch (err) {
                console.error("Error fetching event:", err);
                setError("حدث خطأ أثناء جلب بيانات الحدث");
            } finally {
                setLoading(false);
            }
        };

        fetchUpcomingEvent();
    }, []);

    const handleRegisterClick = () => {
        if (event && event._id) {
            setShowRegistration(true);
        }
    };

    const handleCloseModal = () => {
        setShowRegistration(false);
    };

    if (loading) {
        return (
            <section className="upcoming-event mt-[40px] container mx-auto">
                <h1 className="text-center text-[40px] font-bold p-10">
                    Upcoming <span className="text-blue-700">Event</span>
                </h1>
                <div className="text-center py-20">
                    <p className="text-gray-600">جاري تحميل بيانات الحدث...</p>
                </div>
            </section>
        );
    }

    if (error || !event) {
        return (
            <section className="upcoming-event mt-[40px] container mx-auto">
                <h1 className="text-center text-[40px] font-bold p-10">
                    Upcoming <span className="text-blue-700">Event</span>
                </h1>
                <div className="text-center py-20">
                    <p className="text-red-600">{error || "لا يوجد حدث قادم حالياً"}</p>
                </div>
            </section>
        );
    }

    return (
        <>
            <section className="upcoming-event mt-[40px] container mx-auto">
                <h1 className="text-center text-[40px] font-bold p-10">
                    Upcoming <span className="text-blue-700">Event</span>
                </h1>
                <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 items-center mb-[10px]">
                    <img 
                        src={event.image || post} 
                        alt={event.mainTitle || "Upcoming Event"} 
                        className="mx-auto mb-2 rounded-xl w-[80%]" 
                    />
                    <div className="details w-[80%] mx-auto">
                        <h2 className="mt-5 text-center">
                            {event.date} - {event.title}
                        </h2>
                        <h1 className="mt-5 font-bold text-center">
                            {event.mainTitle}
                        </h1>
                        <p className="mt-5 text-center">
                            {event.description}
                        </p>
                    </div>
                </div>

                <button 
                    onClick={handleRegisterClick}
                    className="btn bg-[#0577AB] text-[#fff] p-[10px] rounded-lg max-w-[400px] w-[300px] mx-auto mt-[40px] mb-[20px] block hover:bg-blue-800 transition duration-300"
                >
                    Register Now
                </button>
            </section>

            {/* Render Registration Form Modal */}
            {showRegistration && event && (
                <RegistrationForm 
                    event={event} 
                    onClose={handleCloseModal} 
                />
            )}
        </>
    );
};

export default UpcomingEvent;