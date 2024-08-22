import { useState } from "react";
import Time from "./Time";

const Weather = () => {
    const [temp,setTemp] = useState("cold");
    return ( 
    <>
        <section className={`${temp}`}>
            <div className="container w-50 text-center py-5">
                <section className="weather-cont">
                    <div className="text-center w-75 p-2 mx-auto input-group-lg">
                        <input placeholder="نام شهر مورد نظر را وارد کنید..." className="form-control" type="text" />
                    </div>
                    <div className="my-5">
                        <Time/>
                    </div>
                    <div className="my-5">
                        <h1 className="display-1 text-light mt-5">
                            <span className="px-3 rounded border degree">25&deg;</span>
                        </h1>
                    </div>
                    <div className="row weather-type my-5">
                        <div className="text-light col-6">
                            <h2 className="display-3 pt-5">Cludy</h2>
                        </div>
                        <div className="col-6">
                            <i className="fa-solid fa-cloud-showers-heavy icon text-light"></i>
                        </div>
                    </div>
                </section>
            </div>
        </section>
    </> 
    );
}
 
export default Weather;