import React, { useEffect, useState } from 'react';
import axios from 'axios';

function WeatherAlerts() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=Gabes,TN&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`)
      .then(res => setWeather(res.data));
  }, []);

  return (
    <div>
      {weather && (
        <div>
          <h3>Météo à Gabès</h3>
          <p>{weather.weather[0].description}</p>
          <p>Température : {weather.main.temp}°C</p>
        </div>
      )}
    </div>
  );
}

export default WeatherAlerts;
