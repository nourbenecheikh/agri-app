import React from 'react';
import './Dashboard.css';
import PlantDiagnosis from '../components/PlantDiagnosis';
import PlantingCalendar from '../components/PlantingCalendar';
import WeatherAlerts from '../components/WeatherAlerts';
import ChatBot from '../components/ChatBot';

function Dashboard() {
  return (
    <div className="container">
      <h1 className="title">🌿 Tableau de bord Plant Care</h1>
      
      <section className="section">
        <h2>📷 Diagnostic des plantes</h2>
        <PlantDiagnosis />
      </section>
      
      <section className="section">
        <h2>📅 Calendrier de plantation</h2>
        <PlantingCalendar />
      </section>
      
      <section className="section">
        <h2>🌦️ Alertes météo</h2>
        <WeatherAlerts />
      </section>
      
      <section className="section">
        <h2>💬 Chatbot jardinage</h2>
        <ChatBot />
      </section>
    </div>
  );
}

export default Dashboard;
