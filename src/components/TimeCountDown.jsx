import {useEffect, useState} from "react";
import {useAppContext} from "../store/AppContext.jsx";

const TimeCountDown = () => {
    const [time, setTime] = useState(120);
    const minutes = time < 60 ? '00': Math.floor(time / 60);
    const seconds = (time - (Math.floor(time / 60) * 60)) ;
    useEffect(() => {
        if (time !== 0) {
            setTimeout(() => setTime(prevState => prevState - 1), 1000);
        }
    }, [time]);

    const  {resendOptRequest} = useAppContext();
    const resendOptHandler = () => {
        resendOptRequest();
        setTime(120);
    }

    return (
        <div>
            {
                time === 0 ?
                        <button className={'w-full text-end text-amber-500'} onClick={resendOptHandler} type='button'>Resend OPT</button>
                :
                        <p>You can ask for the opt again after {`${minutes === 1 ? '0' : ''}${minutes}:${seconds < 10 ? '0' + seconds : seconds}`}</p>
            }
        </div>
    );
};

export default TimeCountDown;
