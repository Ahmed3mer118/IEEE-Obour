import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import axios from "axios";

const RegistrationForm = ({ event, onClose }) => {
    const [formData, setFormData] = useState({
        eventId: event._id,
        name: "",
        phone: "",
        email: "",
        nationalId: "",
        academicYear: "",
        academicDivision: "",
        notes: ""
    });

    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});

    // Academic years options
    const academicYears = [
        "First Year",
        "Second Year",
        "Third Year",
        "Fourth Year",
        "Fifth Year",
        "Graduate"
    ];

    // Academic divisions options
    const academicDivisions = [
        "Computer Science",
        "Information Technology",
        "Information Systems",
        "Artificial Intelligence",
        "Cyber Security",
        "Software Engineering",
        "Network Engineering",
        "Other"
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ""
            }));
        }
    };

    const validateForm = () => {
        const newErrors = {};
        
        if (!formData.name.trim()) newErrors.name = "Name is required";
        if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
        if (!formData.email.trim()) newErrors.email = "Email is required";
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid";
        if (!formData.nationalId.trim()) newErrors.nationalId = "National ID is required";
        if (!formData.academicYear) newErrors.academicYear = "Academic year is required";
        if (!formData.academicDivision) newErrors.academicDivision = "Academic division is required";
        
        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            toast.error("Please fill all required fields correctly");
            return;
        }
        
        setLoading(true);
        
        try {
            const response = await axios.post("http://localhost:5000/bookings", formData);
            
            toast.success(response.data?.msg || "Registration successful!");
            
            // Reset form
            setFormData({
                eventId: event._id,
                name: "",
                phone: "",
                email: "",
                nationalId: "",
                academicYear: "",
                academicDivision: "",
                notes: ""
            });
            console.log(formData);
            
            
            // Close modal after successful registration
            setTimeout(() => {
                if (onClose) onClose();
            }, 1500);
            
        } catch (error) {
            console.error("Registration error:", error);
            
            if (error.response) {
                const msg = error.response.data?.msg || "Registration failed";
                toast.error(msg);
                
                // Handle duplicate registration error
                if (typeof msg === "string" && msg.includes("already registered")) {
                    setErrors(prev => ({
                        ...prev,
                        nationalId: "You have already registered for this event"
                    }));
                }
            } else if (error.request) {
                // Network error
                toast.error("Network error. Please check your connection");
            } else {
                // Other errors
                toast.error("An error occurred. Please try again");
            }
        } finally {
            setLoading(false);
        }
    };

    // Prevent closing when clicking inside the modal
    const handleModalClick = (e) => {
        e.stopPropagation();
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div 
                className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                onClick={handleModalClick}
            >
                {/* Header */}
                <div className="bg-blue-700 text-white p-6 rounded-t-xl">
                    <div className="flex justify-between items-center">
                        <h2 className="text-2xl font-bold">Register for {event.title}</h2>
                        <button
                            onClick={onClose}
                            className="text-white hover:text-gray-200 text-2xl"
                        >
                            ×
                        </button>
                    </div>
                    <p className="text-blue-100 mt-2">
                        {event.mainTitle} - {event.date}
                    </p>
                </div>
                
                {/* Form */}
                <form onSubmit={handleSubmit} className="p-6">
                    <div className="space-y-4">
                        {/* Name */}
                        <div>
                            <label className="block text-gray-700 mb-2">
                                Full Name <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                                    errors.name ? "border-red-500" : "border-gray-300"
                                }`}
                                placeholder="Enter your full name"
                            />
                            {errors.name && (
                                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                            )}
                        </div>
                        
                        {/* Email */}
                        <div>
                            <label className="block text-gray-700 mb-2">
                                Email Address <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                                    errors.email ? "border-red-500" : "border-gray-300"
                                }`}
                                placeholder="Enter your email address"
                            />
                            {errors.email && (
                                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                            )}
                        </div>
                        
                        {/* Phone */}
                        <div>
                            <label className="block text-gray-700 mb-2">
                                Phone Number <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                                    errors.phone ? "border-red-500" : "border-gray-300"
                                }`}
                                placeholder="Enter your phone number"
                            />
                            {errors.phone && (
                                <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                            )}
                        </div>
                        
                        {/* National ID */}
                        <div>
                            <label className="block text-gray-700 mb-2">
                                National ID <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                name="nationalId"
                                value={formData.nationalId}
                                onChange={handleChange}
                                className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                                    errors.nationalId ? "border-red-500" : "border-gray-300"
                                }`}
                                placeholder="Enter your national ID"
                            />
                            {errors.nationalId && (
                                <p className="text-red-500 text-sm mt-1">{errors.nationalId}</p>
                            )}
                        </div>
                        
                        {/* Academic Year & Division in grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* Academic Year */}
                            <div>
                                <label className="block text-gray-700 mb-2">
                                    Academic Year <span className="text-red-500">*</span>
                                </label>
                                <select
                                    name="academicYear"
                                    value={formData.academicYear}
                                    onChange={handleChange}
                                    className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                                        errors.academicYear ? "border-red-500" : "border-gray-300"
                                    }`}
                                >
                                    <option value="">Select academic year</option>
                                    {academicYears.map(year => (
                                        <option key={year} value={year}>
                                            {year}
                                        </option>
                                    ))}
                                </select>
                                {errors.academicYear && (
                                    <p className="text-red-500 text-sm mt-1">{errors.academicYear}</p>
                                )}
                            </div>
                            
                            {/* Academic Division */}
                            <div>
                                <label className="block text-gray-700 mb-2">
                                    Academic Division <span className="text-red-500">*</span>
                                </label>
                                <select
                                    name="academicDivision"
                                    value={formData.academicDivision}
                                    onChange={handleChange}
                                    className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                                        errors.academicDivision ? "border-red-500" : "border-gray-300"
                                    }`}
                                >
                                    <option value="">Select academic division</option>
                                    {academicDivisions.map(division => (
                                        <option key={division} value={division}>
                                            {division}
                                        </option>
                                    ))}
                                </select>
                                {errors.academicDivision && (
                                    <p className="text-red-500 text-sm mt-1">{errors.academicDivision}</p>
                                )}
                            </div>
                        </div>
                        
                        {/* Notes */}
                        <div>
                            <label className="block text-gray-700 mb-2">
                                Additional Notes (Optional)
                            </label>
                            <textarea
                                name="notes"
                                value={formData.notes}
                                onChange={handleChange}
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Any additional information or questions..."
                                rows="3"
                            />
                        </div>
                    </div>
                    
                    {/* Submit Button */}
                    <div className="mt-8">
                        <button
                            type="submit"
                            disabled={loading}
                            className={`w-full py-3 px-4 rounded-lg text-white font-semibold ${
                                loading 
                                    ? "bg-gray-400 cursor-not-allowed" 
                                    : "bg-blue-700 hover:bg-blue-800"
                            }`}
                        >
                            {loading ? (
                                <span className="flex items-center justify-center">
                                    <svg className="animate-spin h-5 w-5 mr-3 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Processing...
                                </span>
                            ) : (
                                "Register Now"
                            )}
                        </button>
                    </div>
                    
                    {/* Terms & Conditions */}
                    <p className="text-gray-500 text-sm mt-4 text-center">
                        By registering, you agree to our Terms & Conditions and Privacy Policy
                    </p>
                </form>
            </div>
        </div>
    );
};

export default RegistrationForm;