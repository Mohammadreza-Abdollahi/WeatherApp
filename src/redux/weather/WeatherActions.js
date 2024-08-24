import axios from "axios";
import { receiveWeatherData, sendWeatherReq } from "./WeatherTypes"
import { call, put, takeEvery, takeLatest } from "redux-saga/effects";

export const sendWeatherRequest = (query)=>{
    return{
        type: sendWeatherReq,
        payload: query
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
// export const getWeatherInfo = (query)=>{
//     return async (dispatch)=>{
//         dispatch(sendWeatherRequest())
//         await axios.get(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${query}?unitGroup=metric&key=64ATLAJADSBMM6AMMQZVBEPVF&contentType=json`).then(res=>{
//             dispatch(getWeatherData(    res.data))
//         }).catch(err=>{
//             dispatch(getWeatherError(err))
//         })
//     }
// }
const sendReq = (query)=>{
    return axios.get(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${query}?unitGroup=metric&key=64ATLAJADSBMM6AMMQZVBEPVF&contentType=json`)
}
function* handleWeather(action){
    try{
        const res = yield call(sendReq , action.payload)
        yield put(getWeatherData(res.data))
    }catch(error){
        yield put(getWeatherError(error.message))
    }
}
export function* weatherWatcher (){
    yield takeEvery(sendWeatherRequest , handleWeather)
}