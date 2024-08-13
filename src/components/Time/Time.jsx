import { useEffect, useState } from "react";
import "./Task.css"
const Time = () => {
    const [currentTime, setCurrentTime] = useState("");
    const [time, setTime] = useState("");

    useEffect(()=>{
         getCurrentTime();
            
    },[currentTime])

  
        const getCurrentTime = () => {
            const today = new Date();
            const hours = today.getHours();
            const minutes = today.getMinutes();
            const seconds = today.getSeconds();

            const hour = hours < 10 ? `0${hours}` : hours;
            setTime(hour)
            const minute = minutes < 10 ? `0${minutes}` : minutes;
            const second = seconds < 10 ? `0${seconds}` : seconds;

            setCurrentTime(`${hour} : ${minute} : ${second}`);
            setTimeout(getCurrentTime,1000);
        };



    return (
        <>
        <div className="container">
            <div>
            {
                time < 12 ? <h1 className="text heading">Good Morning.</h1> :
                time < 17 ? <h1 className="text heading">Good Afternoon.</h1> :
                <h1 className="text heading">Good Evening.</h1>
            }
            </div>
            
            
            <h2 className="text heading-2">100xDevs week 2 clock project.</h2>
            <h1 className="time text ">{currentTime}</h1>
        </div>
   

        </>

    );
};

export default Time;
