import moment from "moment-jalaali";
import { useEffect, useState } from "react";
const nameOfMonth = [
    "فروردین",
    "اردیبهشت",
    "خرداد",
    "تیر",
    "مرداد",
    "شهریور",
    "مهر",
    "ابان",
    "اذر",
    "دی",
    "بهمن",
    "اسفند",
];
const nameOfWeek = [
    "یکشنبه",
    "دو شنبه",
    "سه شنبه",
    "چهار شنبه",
    "پنج شنبه",
    "جمعه",
    "شنبه"
]
const Time = () => {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');

    useEffect(()=>{
        const myTime = moment();
        let finalDate = `${nameOfWeek[myTime.day()]} ${myTime.jDate()} ${nameOfMonth[myTime.jMonth()]} ${myTime.jYear()}`
        let finalTime = `ساعت ${myTime.format('HH:mm')}`
        setDate(finalDate);
        setTime(finalTime)
    },[])
    return ( 
        <>
            <h3 className="text-light py-1">
                <span className="time-text d-block mb-4">{date}</span>
                <span className="time-text d-block">{time}</span>
            </h3>
        </>
     );
}
 
export default Time;