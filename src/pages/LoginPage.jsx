import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    console.log('Connexion avec :', email, password);
    // Tu ajouteras la logique backend ici
    navigate('/dashboard');
  };

  const goToRegister = () => {
    navigate('/register');
  };

  return (
    <div className="login-wrapper">
      <div className="welcome-section">
        <h1>🌿 Assistant Agricole Intelligent</h1>
        <p>Optimise tes plantations, anticipe la météo, et dialogue avec ton jardin.</p>
        <blockquote>“La terre ne ment jamais.” – Émile Zola</blockquote>
      </div>

      <div className="login-box">
        <h2>Connexion</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="button-group">
          <button onClick={handleLogin}>Se connecter</button>
          <button onClick={goToRegister}>Créer un compte</button>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;