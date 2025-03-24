// OrganizerCard.jsx
import React from "react";

const OrganizerCard = ({ organizer }) => {
    const { name, role, image, social } = organizer;

    return (
        <div className="grid items-center justify-center text-center border-2 border-sky-600 drop-shadow-[0_20px_20px_#3477DB44] rounded-2xl bg-slate-50 p-3 hover:scale-105 ease-in duration-300">
            <div>
                <img
                    src={image}
                    alt={name}
                    className="min-w-[100%] h-[200px] rounded-2xl drop-shadow-xl"
                    loading="lazy"
                />
            </div>
            <div>
                <h1 className="font-bold text-[17px] mt-2">{name}</h1>
                <p className="text-slate-500">{role}</p>
            </div>
            <div className="flex gap-3 justify-center mt-3">
                {social.facebook && (
                    <a href={social.facebook}>
                        <svg
                            className="h-7 w-7 text-blue-700 border-2 border-blue-700 rounded-full p-[2px]"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                        </svg>
                    </a>
                )}
                {social.linkedin && (
                    <a href={social.linkedin}>
                        <svg
                            className="h-7 w-7 text-sky-900 border-2 border-sky-900 rounded p-[2px]"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                            <rect x="2" y="9" width="4" height="12" />
                            <circle cx="4" cy="4" r="2" />
                        </svg>
                    </a>
                )}
                {/* يمكنك إضافة أيقونات أخرى هنا مثل GitHub أو Behance */}
            </div>
        </div>
    );
};

export default OrganizerCard;
