import React, { useState, useEffect } from 'react';
import './Dashboard.css';
import PlantDiagnosis from '../components/PlantDiagnosis';
import PlantingCalendar from '../components/PlantingCalendar';

function Dashboard() {
  const [weather, setWeather] = useState(null);
  const [chatInput, setChatInput] = useState('');
  const [chatResponse, setChatResponse] = useState('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        const apiKey = 'cf4221527cb22790e3d2ef5e005fb528';
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&lang=fr&appid=${apiKey}`;

        try {
          const res = await fetch(url);
          const data = await res.json();
          const temp = Math.round(data.main.temp) + '°C';
          const condition = data.weather[0].description;
          const wind = data.wind.speed;
          const risk = wind > 8 ? 'Élevé' : wind > 4 ? 'Modéré' : 'Faible';
          const message =
            risk === 'Élevé'
              ? 'Vents forts — protégez vos cultures 🌬'
              : risk === 'Modéré'
              ? 'Vent léger — attention aux jeunes pousses 🍃'
              : 'Conditions idéales pour planter 🌞';

          setWeather({ temperature: temp, condition, risk, message });
        } catch (err) {
          setWeather({
            temperature: 'Inconnu',
            condition: 'Indisponible',
            risk: 'Inconnu',
            message: 'Erreur météo : ' + err.message,
          });
        }
      },
      () => {
        setWeather({
          temperature: 'Inconnu',
          condition: 'Indisponible',
          risk: 'Inconnu',
          message: 'Accès à la localisation refusé.',
        });
      }
    );
  }, []);

  const handleChat = () => {
    if (chatInput.toLowerCase().includes('tomate')) {
      setChatResponse('Les tomates aiment le soleil et un sol bien drainé 🌞🍅');
    } else {
      setChatResponse('Je suis là pour vous aider ! Essayez de poser une question sur une plante 🌿');
    }
  };

  return (
    <div className="dashboard-container">
      <header>
        <h1>👩‍🌾 Farmer Woman Dashboard</h1>
        <p>“Elle qui cultive avec amour récolte avec sagesse.”</p>
      </header>

      <section className="tool-section">
        <h2>🌿 Diagnostic de Plantes</h2>
        <PlantDiagnosis />
      </section>

      <section className="tool-section">
        <PlantingCalendar />
      </section>

      <section className="tool-section">
        <h2>🌦 Alertes Météo</h2>
        {weather ? (
          <div className={`weather-box ${weather.risk.toLowerCase()}`}>
            <p><strong>Température :</strong> {weather.temperature}</p>
            <p><strong>Condition :</strong> {weather.condition}</p>
            <p><strong>Niveau de risque :</strong> {weather.risk}</p>
            <p>{weather.message}</p>
          </div>
        ) : (
          <p>Chargement des données météo...</p>
        )}
      </section>

      <section className="tool-section">
        <h2>💬 Assistant Intelligent</h2>
        <input
          type="text"
          placeholder="Posez une question..."
          value={chatInput}
          onChange={(e) => setChatInput(e.target.value)}
        />
        <button onClick={handleChat}>Demander</button>
        <p className="chat-response">{chatResponse}</p>
      </section>
    </div>
  );
}

export default Dashboard;
