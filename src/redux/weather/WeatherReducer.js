import { receiveWeatherData, receiveWeatherError, sendWeatherReq } from "./WeatherTypes";

const init = {
    loading: false,
    data: {},
    errror: ''
};
const weatherReducer = (state = init , action)=>{
    switch (action.type) {
        case sendWeatherReq:
            return {...state , loading: true}
        case receiveWeatherData:
            return {loading: false , data: action.payload , error: ''}
        case receiveWeatherError:
            return {loading: false , data: {} , error: action.payload}
        default:
            return state
    }
};
export default weatherReducer;