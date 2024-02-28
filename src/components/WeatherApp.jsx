import { useState } from "react";

export const WeatherApp = () => {
  const API_KEY = "70ee74b62e3c7554b675b0316caeb8d7";

  const urlBase = "https://api.openweathermap.org/data/2.5/weather";

  const [city, setCity] = useState("");

  
  //Weather Date
  const [weatherData, setWeatherData] = useState(null);

  const handleChangeCity = (e) => {
    setCity(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (city.length > 0) fetchWeather();
  };

  const fetchWeather = async () => {
    try {
      const response = await fetch(
        `${urlBase}?q=${city}&appid=${API_KEY}&units=metric`
      );
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.error(error);
    }
  };

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

        {weatherData && (
          <article className="card-weather">
            <div className="card-weather-body">
              <h2>{weatherData.name}</h2>

              <div className="card-weather-body-image">
                <img
                  src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
                />
               
              </div>

              <span className="weather-description">
                    <strong>{weatherData.weather[0].description}</strong>
                </span>

              <span>
                Temp: <strong>{parseInt(weatherData.main.temp)} ℃ </strong>
              </span>

              {/* <span>
                Feels: <strong>{parseInt(weatherData.main.feels_like)} ℃ </strong>
              </span> */}
            </div>
          </article>
        )}
      </article>
    </section>
  );
};
