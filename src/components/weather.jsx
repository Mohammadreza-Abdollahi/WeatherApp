import { useState } from "react";
import Time from "./Time";
import { useDispatch, useSelector } from "react-redux";
import { getWeatherInfo } from "../redux/weather/WeatherActions";

const Weather = () => {
    const [back, setBack] = useState("default");
    const { loading , data , error } = useSelector(state=>state);
    const dispatch = useDispatch()
    const handleGetWeather = (e)=>{
        e.preventDefault();
        dispatch(getWeatherInfo('Rabat'))
        handleBackground()
    }
    const handleBackground = async ()=>{
        const temp = Math.round(await data.currentConditions.temp);
        if(temp < 20){
            setBack("cold")
        }else if(20 < temp < 30){
            setBack("moderate")
        }else if(temp > 30){
            setBack("warm")
        }
    }
    console.log(data);
    return ( 
    <>
        <section className={`${back}`}>
            <div className="container w-50 text-center py-5">
                <section className="weather-cont">
                    <form onSubmit={handleGetWeather} className="text-center w-75 p-2 mx-auto input-group-lg">
                        <input placeholder="نام شهر مورد نظر را وارد کنید..." className="form-control" type="text" />
                    </form>
                    <div className="my-3">
                        <Time/>
                    </div>
                    {
                        loading ? (
                            <div class="spinner-border text-info" role="status">
                                <span class="visually-hidden">Loading...</span>
                            </div>
                        ) : data.currentConditions ? (
                            <div>
                                <div className="my-5">
                                    <span className="display-4 d-block mb-4 text-light text-capitalize">{data.address}</span>
                                    <h1 className="display-1 text-light mt-5">
                                        <span className="px-3 rounded border degree">{Math.round(data.currentConditions.temp)}&deg;C</span>
                                    </h1>
                                </div>
                                <div className="my-3 text-center">
                                    <div className="mb-5 text-light">
                                        <h2 className="display-5 pt-5 text-capitalize">{data.currentConditions.conditions}</h2>
                                    </div>
                                </div>
                            </div>
                        ) : error ? (
                            <div className="alert alert-danger">نام شهر را به درستی وارد کنید</div>
                        ) : (
                            <div class="text-light h4">نام شهر مورد نظر را جستجو کنید!</div>
                    )}
                </section>
            </div>
        </section>
    </> 
    );
}
 
export default Weather;