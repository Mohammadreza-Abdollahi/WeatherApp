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
    return async (dispatch)=>{
        dispatch(sendWeatherRequest())
        await axios.get(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${query}?unitGroup=metric&key=64ATLAJADSBMM6AMMQZVBEPVF&contentType=json`).then(res=>{
            dispatch(getWeatherData(res.data))
        }).catch(err=>{
            dispatch(getWeatherError(err))
        })
    }
}