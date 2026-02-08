import { useEffect, useState } from 'react';
import { useAppContext } from '../../store/AppContext.jsx';
import { 
    FaCalendarAlt, 
    FaUsers, 
    FaDollarSign, 
    FaCheckCircle,
    FaEdit,
    FaTrash,
    FaEye,
    FaPlus
} from 'react-icons/fa';
import { toast } from 'react-toastify';
import moment from 'moment';

const Home = () => {
    const {
        dashboardEvents,
        bookings,
        getDashboardEvents,
        getDashboardBookings,
        createDashboardEvent,
        updateDashboardEvent,
        deleteDashboardEvent,
        updateBookingPayment,
        deleteBooking
    } = useAppContext();

    const [showEventModal, setShowEventModal] = useState(false);
    const [showBookingModal, setShowBookingModal] = useState(false);
    const [editingEvent, setEditingEvent] = useState(null);
    const [selectedEventId, setSelectedEventId] = useState(null);
    const [eventForm, setEventForm] = useState({
        title: '',
        mainTitle: '',
        description: '',
        date: '',
        eventDate: '',
        locationEvent: '',
        image: '',
        link: '',
        isUpcoming: true,
        maxParticipants: '',
        registrationFee: 0
    });
    const [paymentForm, setPaymentForm] = useState({
        paymentStatus: 'pending',
        paymentMethod: '',
        paymentReference: ''
    });

    useEffect(() => {
        getDashboardEvents();
        getDashboardBookings();
    }, []);

    // Calculate statistics
    const stats = {
        totalEvents: dashboardEvents?.length || 0,
        upcomingEvents: dashboardEvents?.filter(e => e.isUpcoming && e.isActive)?.length || 0,
        totalBookings: bookings?.length || 0,
        paidBookings: bookings?.filter(b => b.paymentStatus === 'paid')?.length || 0,
        pendingBookings: bookings?.filter(b => b.paymentStatus === 'pending')?.length || 0,
        totalRevenue: bookings?.filter(b => b.paymentStatus === 'paid')
            .reduce((sum, b) => sum + (b.eventId?.registrationFee || 0), 0) || 0
    };

    const handleEventSubmit = async (e) => {
        e.preventDefault();
        try {
            const eventData = {
                ...eventForm,
                maxParticipants: eventForm.maxParticipants ? parseInt(eventForm.maxParticipants) : undefined,
                registrationFee: parseFloat(eventForm.registrationFee) || 0
            };

            if (editingEvent) {
                await updateDashboardEvent(editingEvent._id, eventData);
            } else {
                await createDashboardEvent(eventData);
            }
            setShowEventModal(false);
            setEditingEvent(null);
            setEventForm({
                title: '',
                mainTitle: '',
                description: '',
                date: '',
                eventDate: '',
                locationEvent: '',
                image: '',
                link: '',
                isUpcoming: true,
                maxParticipants: '',
                registrationFee: 0
            });
        } catch (error) {
            console.error('Error saving event:', error);
        }
    };

    const handleEditEvent = (event) => {
        setEditingEvent(event);
        setEventForm({
            title: event.title || '',
            mainTitle: event.mainTitle || '',
            description: event.description || '',
            date: event.date || '',
            eventDate: event.eventDate ? moment(event.eventDate).format('YYYY-MM-DDTHH:mm') : '',
            locationEvent: event.locationEvent || '',
            image: event.image || '',
            link: event.link || '',
            isUpcoming: event.isUpcoming !== undefined ? event.isUpcoming : true,
            maxParticipants: event.maxParticipants || '',
            registrationFee: event.registrationFee || 0
        });
        setShowEventModal(true);
    };

    const handleDeleteEvent = async (eventId) => {
        if (window.confirm('Are you sure you want to delete this event?')) {
            await deleteDashboardEvent(eventId);
        }
    };

    const handleUpdatePayment = async (bookingId) => {
        try {
            await updateBookingPayment(bookingId, paymentForm);
            setShowBookingModal(false);
            setPaymentForm({
                paymentStatus: 'pending',
                paymentMethod: '',
                paymentReference: ''
            });
        } catch (error) {
            console.error('Error updating payment:', error);
        }
    };

    const handleDeleteBooking = async (bookingId) => {
        if (window.confirm('Are you sure you want to delete this booking?')) {
            await deleteBooking(bookingId);
        }
    };

    const openPaymentModal = (booking) => {
        setSelectedEventId(booking._id);
        setPaymentForm({
            paymentStatus: booking.paymentStatus || 'pending',
            paymentMethod: booking.paymentMethod || '',
            paymentReference: booking.paymentReference || ''
        });
        setShowBookingModal(true);
    };

    const filteredBookings = selectedEventId 
        ? bookings.filter(b => b.eventId?._id === selectedEventId)
        : bookings;

    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
                    <p className="text-gray-600 mt-2">Manage events and bookings</p>
                </div>

                {/* Statistics Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-gray-600 text-sm">Total Events</p>
                                <p className="text-3xl font-bold text-gray-800 mt-2">{stats.totalEvents}</p>
                            </div>
                            <div className="bg-blue-100 p-3 rounded-full">
                                <FaCalendarAlt className="text-blue-600 text-2xl" />
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow-md p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-gray-600 text-sm">Upcoming Events</p>
                                <p className="text-3xl font-bold text-gray-800 mt-2">{stats.upcomingEvents}</p>
                            </div>
                            <div className="bg-green-100 p-3 rounded-full">
                                <FaCheckCircle className="text-green-600 text-2xl" />
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow-md p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-gray-600 text-sm">Total Bookings</p>
                                <p className="text-3xl font-bold text-gray-800 mt-2">{stats.totalBookings}</p>
                            </div>
                            <div className="bg-purple-100 p-3 rounded-full">
                                <FaUsers className="text-purple-600 text-2xl" />
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow-md p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-gray-600 text-sm">Total Revenue</p>
                                <p className="text-3xl font-bold text-gray-800 mt-2">${stats.totalRevenue}</p>
                            </div>
                            <div className="bg-yellow-100 p-3 rounded-full">
                                <FaDollarSign className="text-yellow-600 text-2xl" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Events Section */}
                <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-2xl font-bold text-gray-800">Events Management</h2>
                        <button
                            onClick={() => {
                                setEditingEvent(null);
                                setEventForm({
                                    title: '',
                                    mainTitle: '',
                                    description: '',
                                    date: '',
                                    eventDate: '',
                                    locationEvent: '',
                                    image: '',
                                    link: '',
                                    isUpcoming: true,
                                    maxParticipants: '',
                                    registrationFee: 0
                                });
                                setShowEventModal(true);
                            }}
                            className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700"
                        >
                            <FaPlus /> Add Event
                        </button>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-gray-100">
                                <tr>
                                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Title</th>
                                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Date</th>
                                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Location</th>
                                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Status</th>
                                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {dashboardEvents?.filter(e => e.isActive !== false).map((event) => (
                                    <tr key={event._id} className="border-b hover:bg-gray-50">
                                        <td className="px-4 py-3">
                                            <div>
                                                <p className="font-semibold text-gray-800">{event.title}</p>
                                                <p className="text-sm text-gray-600">{event.mainTitle}</p>
                                            </div>
                                        </td>
                                        <td className="px-4 py-3 text-gray-700">
                                            {moment(event.eventDate || event.date).format('MMM DD, YYYY')}
                                        </td>
                                        <td className="px-4 py-3 text-gray-700">{event.locationEvent || 'N/A'}</td>
                                        <td className="px-4 py-3">
                                            <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                                                event.isUpcoming 
                                                    ? 'bg-green-100 text-green-800' 
                                                    : 'bg-gray-100 text-gray-800'
                                            }`}>
                                                {event.isUpcoming ? 'Upcoming' : 'Past'}
                                            </span>
                                        </td>
                                        <td className="px-4 py-3">
                                            <div className="flex gap-2">
                                                <button
                                                    onClick={() => handleEditEvent(event)}
                                                    className="text-blue-600 hover:text-blue-800"
                                                    title="Edit"
                                                >
                                                    <FaEdit />
                                                </button>
                                                <button
                                                    onClick={() => handleDeleteEvent(event._id)}
                                                    className="text-red-600 hover:text-red-800"
                                                    title="Delete"
                                                >
                                                    <FaTrash />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                                {(!dashboardEvents || dashboardEvents.length === 0) && (
                                    <tr>
                                        <td colSpan="5" className="px-4 py-8 text-center text-gray-500">
                                            No events found
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Bookings Section */}
                <div className="bg-white rounded-lg shadow-md p-6">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-2xl font-bold text-gray-800">Bookings Management</h2>
                        <select
                            value={selectedEventId || ''}
                            onChange={(e) => setSelectedEventId(e.target.value || null)}
                            className="border border-gray-300 rounded-lg px-4 py-2"
                        >
                            <option value="">All Events</option>
                            {dashboardEvents?.filter(e => e.isActive !== false).map(event => (
                                <option key={event._id} value={event._id}>
                                    {event.title}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-gray-100">
                                <tr>
                                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Name</th>
                                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Event</th>
                                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Email</th>
                                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Phone</th>
                                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Payment</th>
                                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredBookings?.map((booking) => (
                                    <tr key={booking._id} className="border-b hover:bg-gray-50">
                                        <td className="px-4 py-3 font-semibold text-gray-800">{booking.name}</td>
                                        <td className="px-4 py-3 text-gray-700">
                                            {booking.eventId?.title || 'N/A'}
                                        </td>
                                        <td className="px-4 py-3 text-gray-700">{booking.email}</td>
                                        <td className="px-4 py-3 text-gray-700">{booking.phone}</td>
                                        <td className="px-4 py-3">
                                            <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                                                booking.paymentStatus === 'paid'
                                                    ? 'bg-green-100 text-green-800'
                                                    : booking.paymentStatus === 'cancelled'
                                                    ? 'bg-red-100 text-red-800'
                                                    : 'bg-yellow-100 text-yellow-800'
                                            }`}>
                                                {booking.paymentStatus || 'pending'}
                                            </span>
                                        </td>
                                        <td className="px-4 py-3">
                                            <div className="flex gap-2">
                                                <button
                                                    onClick={() => openPaymentModal(booking)}
                                                    className="text-blue-600 hover:text-blue-800"
                                                    title="Update Payment"
                                                >
                                                    <FaEdit />
                                                </button>
                                                <button
                                                    onClick={() => handleDeleteBooking(booking._id)}
                                                    className="text-red-600 hover:text-red-800"
                                                    title="Delete"
                                                >
                                                    <FaTrash />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                                {(!filteredBookings || filteredBookings.length === 0) && (
                                    <tr>
                                        <td colSpan="6" className="px-4 py-8 text-center text-gray-500">
                                            No bookings found
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* Event Modal */}
            {showEventModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg p-6 max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
                        <h3 className="text-2xl font-bold mb-4">
                            {editingEvent ? 'Edit Event' : 'Create New Event'}
                        </h3>
                        <form onSubmit={handleEventSubmit} className="space-y-4">
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-1">Title</label>
                                <input
                                    type="text"
                                    required
                                    value={eventForm.title}
                                    onChange={(e) => setEventForm({...eventForm, title: e.target.value})}
                                    className="w-full border border-gray-300 rounded-lg px-4 py-2"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-1">Main Title</label>
                                <input
                                    type="text"
                                    required
                                    value={eventForm.mainTitle}
                                    onChange={(e) => setEventForm({...eventForm, mainTitle: e.target.value})}
                                    className="w-full border border-gray-300 rounded-lg px-4 py-2"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-1">Description</label>
                                <textarea
                                    required
                                    value={eventForm.description}
                                    onChange={(e) => setEventForm({...eventForm, description: e.target.value})}
                                    className="w-full border border-gray-300 rounded-lg px-4 py-2"
                                    rows="3"
                                />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-1">Display Date</label>
                                    <input
                                        type="text"
                                        required
                                        value={eventForm.date}
                                        onChange={(e) => setEventForm({...eventForm, date: e.target.value})}
                                        placeholder="e.g., March 15, 2024"
                                        className="w-full border border-gray-300 rounded-lg px-4 py-2"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-1">Event Date (ISO)</label>
                                    <input
                                        type="datetime-local"
                                        required
                                        value={eventForm.eventDate}
                                        onChange={(e) => setEventForm({...eventForm, eventDate: e.target.value})}
                                        className="w-full border border-gray-300 rounded-lg px-4 py-2"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-1">Location</label>
                                <input
                                    type="text"
                                    value={eventForm.locationEvent}
                                    onChange={(e) => setEventForm({...eventForm, locationEvent: e.target.value})}
                                    className="w-full border border-gray-300 rounded-lg px-4 py-2"
                                />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-1">Image URL</label>
                                    <input
                                        type="url"
                                        value={eventForm.image}
                                        onChange={(e) => setEventForm({...eventForm, image: e.target.value})}
                                        className="w-full border border-gray-300 rounded-lg px-4 py-2"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-1">Link</label>
                                    <input
                                        type="url"
                                        value={eventForm.link}
                                        onChange={(e) => setEventForm({...eventForm, link: e.target.value})}
                                        className="w-full border border-gray-300 rounded-lg px-4 py-2"
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-1">Max Participants</label>
                                    <input
                                        type="number"
                                        value={eventForm.maxParticipants}
                                        onChange={(e) => setEventForm({...eventForm, maxParticipants: e.target.value})}
                                        className="w-full border border-gray-300 rounded-lg px-4 py-2"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-1">Registration Fee</label>
                                    <input
                                        type="number"
                                        step="0.01"
                                        value={eventForm.registrationFee}
                                        onChange={(e) => setEventForm({...eventForm, registrationFee: e.target.value})}
                                        className="w-full border border-gray-300 rounded-lg px-4 py-2"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="flex items-center gap-2">
                                    <input
                                        type="checkbox"
                                        checked={eventForm.isUpcoming}
                                        onChange={(e) => setEventForm({...eventForm, isUpcoming: e.target.checked})}
                                        className="w-4 h-4"
                                    />
                                    <span className="text-sm font-semibold text-gray-700">Upcoming Event</span>
                                </label>
                            </div>
                            <div className="flex gap-4 pt-4">
                                <button
                                    type="submit"
                                    className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                                >
                                    {editingEvent ? 'Update Event' : 'Create Event'}
                                </button>
                                <button
                                    type="button"
                                    onClick={() => {
                                        setShowEventModal(false);
                                        setEditingEvent(null);
                                    }}
                                    className="flex-1 bg-gray-300 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-400"
                                >
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* Payment Modal */}
            {showBookingModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
                        <h3 className="text-2xl font-bold mb-4">Update Payment Status</h3>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-1">Payment Status</label>
                                <select
                                    value={paymentForm.paymentStatus}
                                    onChange={(e) => setPaymentForm({...paymentForm, paymentStatus: e.target.value})}
                                    className="w-full border border-gray-300 rounded-lg px-4 py-2"
                                >
                                    <option value="pending">Pending</option>
                                    <option value="paid">Paid</option>
                                    <option value="cancelled">Cancelled</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-1">Payment Method</label>
                                <input
                                    type="text"
                                    value={paymentForm.paymentMethod}
                                    onChange={(e) => setPaymentForm({...paymentForm, paymentMethod: e.target.value})}
                                    className="w-full border border-gray-300 rounded-lg px-4 py-2"
                                    placeholder="e.g., Credit Card, Bank Transfer"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-1">Payment Reference</label>
                                <input
                                    type="text"
                                    value={paymentForm.paymentReference}
                                    onChange={(e) => setPaymentForm({...paymentForm, paymentReference: e.target.value})}
                                    className="w-full border border-gray-300 rounded-lg px-4 py-2"
                                    placeholder="Transaction ID or Reference Number"
                                />
                            </div>
                            <div className="flex gap-4 pt-4">
                                <button
                                    onClick={() => handleUpdatePayment(selectedEventId)}
                                    className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                                >
                                    Update Payment
                                </button>
                                <button
                                    onClick={() => {
                                        setShowBookingModal(false);
                                        setSelectedEventId(null);
                                    }}
                                    className="flex-1 bg-gray-300 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-400"
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Home;
