import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {AppProvider} from "./store/AppContext.jsx";
import NotificationHandler from "./utils/NotificationHandler.jsx";
import 'react-toastify/dist/ReactToastify.css'

ReactDOM.createRoot(document.getElementById("root")).render(
    <AppProvider>
        <NotificationHandler/>
        <App />
    </AppProvider>
);
