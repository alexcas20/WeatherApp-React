import { useState } from "react"


export const WeatherApp = () => {

    const API_KEY = '70ee74b62e3c7554b675b0316caeb8d7';

    const urlBase = 'https://api.openweathermap.org/data/2.5/weather';



    const [city, setCity] = useState('');

    //Weather Date
    const [weatherData, setWeatherData] = useState(null);

    const handleChangeCity = (e) => {
        setCity(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(city.length > 0) fetchWeather();
    }

    const fetchWeather = async () => {
        try {

            const response = await fetch(`${urlBase}?q=${city}&appid=${API_KEY}&units=metric`);
            const data = await response.json();
            setWeatherData(data);
            
        } catch (error) {
            console.error(error);
        }
    }


  return (
    <section>
        <article className="container">

            <h1><strong>Weather</strong>App</h1>

            <form onSubmit={handleSubmit}
            className="form-search">
                <input 
                type="text"
                value={city} 
                onChange={handleChangeCity}/>
                <button type="submit">Search</button>
            </form>

            {
                weatherData && (
                    <article>
                        
                    </article>
                )
            }

        </article>
    </section>
  )
}
