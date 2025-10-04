import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PlantDiagnosis from "./components/PlantDiagnosis";
import PlantingCalendar from "./components/PlantingCalendar";
import WeatherAlerts from "./components/WeatherAlerts";
import ChatBot from "./components/ChatBot";
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Dashboard from './pages/Dashboard';




function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/diagnosis" element={<PlantDiagnosis />} />
        <Route path="/calendar" element={<PlantingCalendar />} />
        <Route path="/weather" element={<WeatherAlerts />} />
        <Route path="/chatbot" element={<ChatBot />} />
        {/* Tu ajouteras Dashboard plus tard */}
      </Routes>
    </Router>
  );
}

export default App;