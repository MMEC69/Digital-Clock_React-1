import React, {useState, useEffect} from "react";


function DigitalClock(){

    const[time, setTime] = useState(new Date());

    useEffect( () => {
        const intervalid = setInterval(() => {
            setTime(new Date());
        }, 1000);
        
        //this is used to make sure rest the time if this componet is unmounted
        //It's not essesntial but it's good practicse for do so
        return () => {
            clearInterval(intervalid);
        }
    },[]);

    function formatTime(){
        let hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        const meridem = hours >= 12 ? "PM" : "AM";

        //why ||12, by using this if hours = 0, it will return as 
        //false by using this we can return as 12, so its better to show 
        //12am than 00am 
        hours = hours % 12 || 12;

        return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${meridem}`;
    }

    function padZero(number){
        return((number < 10 ? "0" : "")+ number);
    }


    return (
        <div className="clock-container">
            <div className="clock">
                <span>{formatTime()}</span>
            </div>
        </div>
    );
}

export default DigitalClock