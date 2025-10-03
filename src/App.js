import React from 'react';
import PlantDiagnosis from './components/PlantDiagnosis';
import PlantingCalendar from './components/PlantingCalendar';
import WeatherAlerts from './components/WeatherAlerts';
import ChatBot from './components/ChatBot';

function App() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>🌿 Plant Care App</h1>

      <section style={styles.section}>
        <h2>📷 Diagnostic des plantes</h2>
        <PlantDiagnosis />
      </section>

      <section style={styles.section}>
        <h2>📅 Calendrier de plantation</h2>
        <PlantingCalendar />
      </section>

      <section style={styles.section}>
        <h2>🌦️ Alertes météo</h2>
        <WeatherAlerts />
      </section>

      <section style={styles.section}>
        <h2>💬 Chatbot jardinage</h2>
        <ChatBot />
      </section>
    </div>
  );
}

const styles = {
  container: {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f5f5f5',
  },
  title: {
    textAlign: 'center',
    color: '#2e7d32',
  },
  section: {
    marginBottom: '40px',
    padding: '20px',
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
  },
};

export default App;
