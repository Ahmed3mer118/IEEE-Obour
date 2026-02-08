import {
    ADD_COURSE_SUCCESS, ADD_EVENT_SUCCESS,
    FETCH_COURSES_SUCCESS,
    FETCH_EDITORS_SUCCESS,
    FETCH_EVENTS_SUCCESS, FETCH_USER_COURSES,
    GET_STUDENTS_ON_COURSE,
    LOGOUT_USER, SETUP_USER_SUCCESS, TOGGLE_SIDEBAR,
    UPDATE_COURSE_SUCCESS,
    FETCH_DASHBOARD_EVENTS_SUCCESS,
    FETCH_BOOKINGS_SUCCESS
} from "./actions.jsx";


const reducer = (state, action) => {
    // toggle sidebar
    if (action.type === TOGGLE_SIDEBAR) {
        return {
            ...state,
            showSidebar: !state.showSidebar
        }
    }
    // Login User
    if (action.type === SETUP_USER_SUCCESS) {
        return {
            ...state,
            user: action.payload.user,
            userToken: action.payload.token
        }
    }
    // Logout User
    if (action.type === LOGOUT_USER) {
        return {
            ...state,
            user: {}
        }
    }

    // Fetch Courses
    if (action.type === FETCH_COURSES_SUCCESS) {
        return {
            ...state,
            courses: action.payload.courses
        }
    }

    // Fetch User Courses
    if (action.type === FETCH_USER_COURSES) {
        return {
            ...state,
            userCourses: action.payload.courses
        }
    }

    // Add Course
    if (action.type === ADD_COURSE_SUCCESS) {
        return {
            ...state,
            courses: action.payload.courses
        }
    }

    // Get Students On Course
    if (action.type === GET_STUDENTS_ON_COURSE) {
        return {
            ...state,
            studentsOnCourse: action.payload
        }
    }

    // Update Course
    if (action.type === UPDATE_COURSE_SUCCESS) {
        return {
            ...state,
            courses: action.payload.courses
        }
    }

    // Fetch Editors
    if (action.type === FETCH_EDITORS_SUCCESS) {
        return {
            ...state,
            editors: action.payload.editors
        }
    }

    // Fetch Events
    if (action.type === FETCH_EVENTS_SUCCESS) {
        return {
            ...state,
            events: action.payload.events
        }
    }

    // Add Event
    if (action.type === ADD_EVENT_SUCCESS) {
        return {
            ...state,
            events: action.payload.events
        }
    }

    // Fetch Dashboard Events
    if (action.type === FETCH_DASHBOARD_EVENTS_SUCCESS) {
        return {
            ...state,
            dashboardEvents: action.payload.events
        }
    }

    // Fetch Bookings
    if (action.type === FETCH_BOOKINGS_SUCCESS) {
        return {
            ...state,
            bookings: action.payload.bookings
        }
    }
};


export default reducer;