import React, { useEffect, useState } from 'react';

function WeatherAlerts() {
  const [alerts, setAlerts] = useState([]);
  const [weather, setWeather] = useState({ tempMax: null, tempMin: null, wind: null });

  useEffect(() => {
    fetch('/api/weather/alerts')
      .then(res => res.json())
      .then(data => {
        setAlerts(data.alerts);
        setWeather({
          tempMax: data.tempMax,
          tempMin: data.tempMin,
          wind: data.wind
        });
      })
      .catch(err => console.error('Erreur météo:', err));
  }, []);

  return (
    <div className="weather-alerts">
      <h3>🌦️ Alertes météo pour Gabès</h3>

      <div className="weather-summary">
        <p>🌡️ Température : {weather.tempMin}°C → {weather.tempMax}°C</p>
        <p>💨 Vent max : {weather.wind} km/h</p>
      </div>

      {alerts.length > 0 ? (
        <ul>
          {alerts.map((a, i) => <li key={i}>{a}</li>)}
        </ul>
      ) : (
        <div className="no-alert">
          <h4>✅ Aucune alerte météo pour aujourd’hui</h4>
          <p>Conditions idéales pour jardiner 🌿</p>
        </div>
      )}
    </div>
  );
}

export default WeatherAlerts;
