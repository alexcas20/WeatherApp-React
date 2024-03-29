
import { useState } from "react";
import { Loading } from "./loader/Loading";
import { useFetch } from "../hooks/useFetch";

export const WeatherApp = () => {
  const API_KEY = "70ee74b62e3c7554b675b0316caeb8d7";

  const urlBase = "https://api.openweathermap.org/data/2.5/weather";

 

 

 

  const [city, setCity] = useState("");

  const[urlApi, setUrlApi] = useState('');

 

  // //Loader
  // const [loading, setLoading] = useState(false);

  //Weather Data
  // const [weatherData, setWeatherData] = useState(null);

  const handleChangeCity = (e) => {
    setCity(e.target.value);

  };

  const handleSubmit = (e) => {
    e.preventDefault();
   

    if (city.length > 0) {
      setUrlApi ( `${urlBase}?q=${city}&appid=${API_KEY}&units=metric`);
    }

    setCity("");
    
  };


  const {weatherData, isLoading} = useFetch(urlApi);


  return (

    
    <section>
      <article className="container">
        <h1>
          <strong>Weather</strong>App
        </h1>

        <form onSubmit={handleSubmit} className="form-search">
          <input type="text" value={city} onChange={handleChangeCity} />
          <button type="submit">Search</button>
        </form>

       </article> 

       

       {isLoading ? (
        <Loading />
      ) : weatherData ? (
        <article className="card-weather">
          <div className="card-weather-body">
            <h2>{weatherData.name}</h2>
            <img
              src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
            />
            <div className="card-weather-description">
              <strong>{weatherData.weather[0].description}</strong>
            </div>
            <span className="temp-princ">
              <strong>{parseInt(weatherData.main.temp)} ℃ </strong>
            </span>
            <div className="card-weather-temps">
              <span>
                <i className="fa-solid fa-temperature-arrow-up icon-max"></i>
                <strong> {parseInt(weatherData.main.temp_max)} ℃ </strong>
              </span>
              <span>
                <i className="fa-solid fa-temperature-arrow-down icon-min"></i>
                <strong> {parseInt(weatherData.main.temp_min)} ℃ </strong>
              </span>
            </div>
          </div>
        </article>
      ) : (
        ""
      )}
    </section>
  );
};