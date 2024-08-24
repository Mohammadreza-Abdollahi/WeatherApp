import { useEffect, useState } from "react";
import Time from "./Time";
import { useDispatch, useSelector } from "react-redux";
import { getWeatherInfo } from "../redux/weather/WeatherActions";

const Weather = () => {
    const [back, setBack] = useState("default");
    const [city , setCity] = useState('');
    const [temp , setTemp] = useState();

    const { loading , data , error } = useSelector(state=>state);
    const dispatch = useDispatch()
    
    const handleGetWeather = async(e)=>{
        e.preventDefault();
        if(city === ''){
            alert('نام شهر را وارد کنید...')
        }else{
            await dispatch(getWeatherInfo(city))
            setCity("")
            handleBackground()
        }
    }
    const handleBackground = async ()=>{
        if(await temp < 20){
            setBack("cold")
        }else if(await temp > 20 && await temp < 30){
            setBack("moderate")
        }else{
            setBack("warm")
        }
        if(await temp === undefined){
            setBack('default')
        }
    }
    useEffect(()=>{
        if(!data.currentConditions){
            return
        }else{
            setTemp(data.currentConditions.temp);
            handleBackground()
        }
    },[data , temp])
    console.log(data);
    return ( 
    <>
        <section className={`${back}`}>
            <div className="container w-50 text-center py-5">
                <section className="weather-cont">
                    <form onSubmit={handleGetWeather} className="text-center w-75 p-2 mx-auto input-group-lg">
                        <input onChange={(e)=>setCity(e.target.value)} value={city} placeholder="نام شهر مورد نظر را وارد کنید..." className="form-control" type="text" />
                    </form>
                    <div className="my-3">
                        <Time/>
                    </div>
                    {
                        loading ? (
                            <div className="spinner-border text-info" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        ) : data.currentConditions ? (
                            <div>
                                <div className="my-5">
                                    <span className="display-4 d-block mb-4 text-light text-capitalize">{data.address}</span>
                                    <h1 className="display-1 text-light mt-5">
                                        <span className="px-3 rounded border degree">{data ? Math.round(data.currentConditions.temp) : 0}&deg;C</span>
                                    </h1>
                                </div>
                                <div className="my-3 text-center">
                                    <div className="mb-5 text-light">
                                        <h2 className="display-5 pt-5 text-capitalize">{data ? data.currentConditions.conditions : 0}</h2>
                                    </div>
                                </div>
                            </div>
                        ) : error ? (
                            <div className="alert alert-danger">نام شهر را به درستی وارد کنید <br /> {error}</div>
                        ) : (
                            <div className="text-light h4">نام شهر مورد نظر را جستجو کنید!</div>
                    )}
                </section>
            </div>
        </section>
    </> 
    );
}
 
export default Weather;