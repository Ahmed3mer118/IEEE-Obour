import {createContext, useContext, useEffect, useReducer} from "react";
import reducer from "./reducer.jsx";
import axios from "axios";
import {toast} from "react-toastify";

import {
    ADD_COURSE_SUCCESS,
    FETCH_COURSES_SUCCESS,
    FETCH_EDITORS_SUCCESS,
    FETCH_EVENTS_SUCCESS,
    GET_STUDENTS_ON_COURSE,
    LOGOUT_USER,
    SETUP_USER_SUCCESS, TOGGLE_SIDEBAR,
} from './actions.jsx';

const initialState = {
    courses: [],
    editors: [],
    studentsOnCourse: [],
    users: [],
    user: null,
    userToken: '',
    userCourses: null,
    events: [],
    showSidebar: false,
};

const AppContext = createContext();

// eslint-disable-next-line react/prop-types
const AppProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const authFetch = axios.create({
        baseURL: 'https://ieee-osb.onrender.com/dashboard',
        headers: {
            'Authorization': `Bearer ${state.userToken}`,
            'x-auth-id': `${state.user?._id}`
        }
    });
    // response
    authFetch.interceptors.response.use(
        (response) => {
            return response;
        },
        (error) => {
            // console.log(error.response);
            if (error.response.status === 401) {
                logoutUser();
            }
            return Promise.reject(error);
        }
    );

    const toggleSidebar = () => {
        dispatch({type: TOGGLE_SIDEBAR});
    }

    const signupUser = async user => {
        try {
            const {data} = await axios.post('https://ieee-osb.onrender.com/users/signup', user);
            dispatch({
                type: SETUP_USER_SUCCESS,
                payload: {
                    user: {...data.user, token: data.token}
                } // token: data.token
            });
            if (localStorage.getItem('user')) {
                localStorage.removeItem('user');
            }
            localStorage.setItem('userToken', JSON.stringify({token: data.token}));
            // toast.success("LoggedIn Successfully");
        } catch (err) {
            toast.error(err.response.data.msg)
        }
    }

    const verifyUser = async otp => {
        try {
            const {data} = await axios.post('https://ieee-osb.onrender.com/users/verify',
            {
                email: JSON.parse(localStorage.getItem('userEmail')).email,
                otp
            },
            {
                headers: {
                    Authorization: `Bearer ${state.user.token}`
                }
            });
            dispatch({
                type: SETUP_USER_SUCCESS,
                payload: {
                    user: {...data.user, token: data.token}
                }
            });
            localStorage.setItem('user', JSON.stringify({...data.user, token: data.token}));
            toast.success(`${data.msg || 'Verified Successfully!'}`);
        } catch (err) {
            toast.error(err.response.data.msg)
        }
    };

    const resendOptRequest = async () => {
        try {
            const {data} = await axios.post('https://ieee-osb.onrender.com/users/resend-otp',
            {
                email: JSON.parse(localStorage.getItem('userEmail')).email
            },
            {
                headers: {
                    Authorization: `Bearer ${state.user.token}`
                }
            });
            console.log(data);
        } catch (err) {
            toast.error(err.response.data.msg);
        }
    }

    const loginUser = async (user, path) => {
        const url = path === '/login' ? '/users/login' : path;
        try {
            if (localStorage.getItem('userEmail')) {
                localStorage.removeItem('userEmail');
            } else {
                localStorage.setItem('userEmail', JSON.stringify({email: user.email}));
            }
            const {data} = await axios.post(`https://ieee-osb.onrender.com${url}`, {...user});
            dispatch({
                type: SETUP_USER_SUCCESS,
                payload: {
                    user: {...data.data, token: data.token}
                } // token: data.token
            });
            localStorage.setItem('userToken', JSON.stringify({token: data.token}));
            toast.success("LoggedIn Successfully");
        } catch (err) {
            toast.error(err.response.data.msg)
        }
    };

    const getCurrentUser = async () => {
        try {
            const {data} = await axios.post('https://ieee-osb.onrender.com/users/currentUser', {}, {
                headers: {
                    Authorization: `Bearer ${state.userToken}`
                }
            });
            dispatch({
                type: SETUP_USER_SUCCESS,
                payload: {
                    user: {...data.data, token: data.token}
                } // token: data.token
            });
            localStorage.setItem('user', JSON.stringify({...data.data, token: data.token}));
        } catch (err) {
            console.log(err);
            // toast.error(err.response.data.msg);
        }
    }

    const logoutUser = () => {
        const user = localStorage.getItem('dashboardAdmin');
        if (user) {
            localStorage.removeItem('dashboardAdmin');
        }
        dispatch({
            type: LOGOUT_USER,
        })
    }

    const registerCourse = async (courseId) => {
        try {
            const {data} = await axios.post('https://ieee-osb.onrender.com/courses/register', {userId: state.user._id, courseId}, {
                headers: {
                    Authorization: `Bearer ${state.user.token}`
                }
            });
            console.log(data);
        } catch (err) {
            toast.error(err.response.data.msg);
            console.log(err);
        }
    };

    // const getUserCourses = async () => {
    //     try {
    //         // console.log(state);
    //         const {data} = await axios.get('https://ieee-osb.onrender.com/courses/userCourses', {
    //             headers: {
    //                 Authorization: `Bearer ${state.user.token}`
    //             }
    //         });
    //         // console.log(data.data);
    //         dispatch({
    //             type: FETCH_USER_COURSES,
    //             payload: {courses: data.data}
    //         })
    //     } catch (err) {
    //         console.log(err);
    //         toast.error(err.response.data.msg);
    //     }
    // }

    const getAllCourses = async () => {
        // const token = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTBiMDFiYjhlMTJmODMzNWE4ODk0NjIiLCJpYXQiOjE2OTUzMjMzOTIsImV4cCI6MTY5NTM1MjE5Mn0.rmRFexI2orJzPKhStUzPMyksNi7R9j6iG588qmpfkLw`
        try {
            const {data} = await axios('https://ieee-osb.onrender.com/courses');
            dispatch({
                type: FETCH_COURSES_SUCCESS,
                payload: {courses: data.data}
            });
        } catch (err) {
            console.log(err.response.data.msg);
        }
    };

    // AddCourse
    const addCourse = async course => {
        try {
            const {data} = await authFetch.post('/addCourse', course);
            dispatch({
                type: ADD_COURSE_SUCCESS,
                payload: {course: data.data.courses,}
            });
            toast.success(data.msg);
        } catch (err) {
            toast.error(err.response.data.msg);
        }
    }

    const getStudentsOnCourse = async courseId => {
        try {
            const {data} = await authFetch.get(`/students/${courseId}`);
            dispatch({
                type: GET_STUDENTS_ON_COURSE,
                payload: data.data
            })
        } catch (err) {
            toast.error(err.response.data.msg);
        }
    }

    const updateCourse = async (course, courseId) => {
        try {
            const {data} = await authFetch.patch(`/updateCourse/${courseId}`, {...course});
            getAllCourses();
            // dispatch({
            //     type: UPDATE_COURSE_SUCCESS,
            //     payload: {courses: data.data.course}
            // });
            toast.success(data.msg);
        } catch (err) {
            console.log(err);
            toast.error(err.response.data.msg.message);
        }
    };

    // AddTask
    const addTask = async task => {
        try {
            const {data} = await authFetch.post('/addTask', task);
            // dispatch({
            //     type: '',
            //     payload: {tasks: data.data.tasks}
            // });
            toast.success(data.msg);
        } catch (err) {
            toast.error(err.response.data.msg);
        }
    }

    // const getCourseTasks = async (courseId) => {
    //     try {
    //         const {data} = await axios.get('https://ieee-osb.onrender.com/courses/courseTasks', {
    //             headers: {
    //                 Authorization: `Bearer ${state.user.token}`
    //             },
    //         });
    //         dispatch({
    //             type: FETCH_COURSES_SUCCESS,
    //             payload: {courses: data.data}
    //         });
    //     } catch (err) {
    //         console.log(err.response.data.msg);
    //     }
    //     // https://ieee-osb.onrender.com
    // }

    // AddContent
    const addWeekContent = async (content, courseId) => {
        try {
            const {data} = await authFetch.post(`/addContent/${courseId}`, content);
            // dispatch({
            //     type: '',
            //     payload: {content: data.data.content}
            // });
            toast.success(data.msg);
        } catch (err) {
            toast.error(err.response.data.msg);
        }
    }

    // Add RateStudent -- Does not exist in the API

    // Remove RateStudent - later
    const removeStudent = async (courseId, userId) => {
        try {
            const {data} = await authFetch.post(`/removeStudent/${courseId}`, {id: userId});
            toast.success(data.data.msg);
        } catch (err) {
            toast.error(err.response.data.msg);
        }
    }

    // Get Editors
    const getEditors = async () => {
        try {
            const {data} = await authFetch.post(`/editors`);
            dispatch({
                type: FETCH_EDITORS_SUCCESS,
                payload: {editors: data.data}
            })
            // toast.success(data.data.msg);
        } catch (err) {
            toast.error(err.response.data.msg);
        }
    }

    // Create Editor
    const createEditor = async editor => {
        try {
            const {data} = await authFetch.post(`/createEditor`, {...editor});
            dispatch({
                type: FETCH_EDITORS_SUCCESS,
                payload: {editors: data.data}
            })
            toast.success("Editor Created Successfully!");
        } catch (err) {
            toast.error(err.response.data.msg);
        }
    }

    // Edit Editor -- Does not exist in the API

    // Remove Editor
    const removeEditor = async editorId => {
        try {
            const {data} = await authFetch.post(`/deleteEditor/${editorId}`);
            // dispatch({
            //     type: FETCH_EDITORS_SUCCESS,
            //     payload: {editors: data.data}
            // });
            toast.success(data.data.msg);
        } catch (err) {
            toast.error(err.response.data.msg);
        }
    }

    // Get Events
    const getEvents = async () => {
        try {
            const {data} = await authFetch.get(`https://ieee-osb.onrender.com/users/events`);
            dispatch({
                type: FETCH_EVENTS_SUCCESS,
                payload: {events: data.data}
            });
            // toast.success(data.data.msg);
        } catch (err) {
            // console.log(err);
            toast.error(err.response.data.msg);
        }
    }

    // Create Event
    const createEvent = async event => {
        try {
            const {data} = await authFetch.post(`/createEvent`, event);
            dispatch({
                type: FETCH_EVENTS_SUCCESS,
                payload: {events: data.data}
            });
            toast.success(data.msg);
        } catch (err) {
            toast.error(err.response.data.msg);
        }
    }

    // Edit Event -- Does not exist in the API

    // Remove Event -- Does not exist in the API


    useEffect(() => {
        // getCurrentUser().then(() => {
        //     getUserCourses();
        // });
        // getUserCourses();
        getAllCourses();
    }, []);

    const value = {
        ...state,
        registerCourse,
        getAllCourses,
        signupUser,
        verifyUser,
        resendOptRequest,
        loginUser,
        getCurrentUser,
        logoutUser,
        addCourse,
        updateCourse,
        addTask,
        addWeekContent,
        removeStudent,
        getEditors,
        createEditor,
        removeEditor,
        getEvents,
        createEvent,
        getStudentsOnCourse,
        toggleSidebar
    };
    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
};

// eslint-disable-next-line react-hooks/rules-of-hooks
const useAppContext = () => {
    return useContext(AppContext);
};

// eslint-disable-next-line react-refresh/only-export-components
export {AppProvider, useAppContext}