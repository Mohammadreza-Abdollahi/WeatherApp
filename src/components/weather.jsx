const Weather = () => {
    return ( 
    <>
        <section className="moderate">
            <div className="container w-50 text-center py-5">
                <section className="weather-cont">
                    <div className="text-center w-75 p-2 mx-auto input-group-lg">
                        <input placeholder="نام شهر مورد نظر را وارد کنید..." className="form-control" type="text" />
                    </div>
                    <div className="my-5">
                        <h3 className="text-light py-1">
                            <span className="display-6 d-block my-4">دوشنبه 18 بهمن 1403</span>
                            <span className="display-6 d-block my-4">ساعت 14:30</span>
                        </h3>
                    </div>
                    <div className="my-5">
                        <h1 className="display-1 text-light mt-5">
                            <span className="px-3 rounded border">25&deg;</span>
                        </h1>
                    </div>
                    <div className="my-5 text-light">
                        <h2 className="display-3 pt-5">Cludy</h2>
                    </div>
                    <div>
                        <i class="fa-solid fa-cloud-showers-heavy icon text-light"></i>
                    </div>
                </section>
            </div>
        </section>
    </> 
    );
}
 
export default Weather;