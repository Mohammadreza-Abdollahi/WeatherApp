import axios from "axios";
import { receiveWeatherData, sendWeatherReq } from "./WeatherTypes"

export const sendWeatherRequest = ()=>{
    return{
        type: sendWeatherReq
    }
};
export const getWeatherData = (data)=>{
    return{
        type: receiveWeatherData,
        payload: data
    }
};
export const getWeatherError = (data)=>{
    return{
        type: sendWeatherReq,
        payload: data
    }
};
export const getWeatherInfo = (query)=>{
    return (dispatch)=>{
        dispatch(sendWeatherRequest())
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=ebeed95b3a89e0753c4b6b5772d28085`).then(res=>{
            dispatch(getWeatherData(res.data))
        }).catch(err=>{
            dispatch(getWeatherError(err))
        })
    }
}