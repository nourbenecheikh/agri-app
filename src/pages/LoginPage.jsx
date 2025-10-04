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
    <div
      className="login-wrapper"
      style={{
        backgroundImage: "url('/images/femmes-champ.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="welcome-section">
        <h1>🌿 Farmer Women 🌿 </h1>
        <p>  An intelligent agricultural assistant that empowers you to care for your plants, plan with confidence, stay ahead of the weather, and grow with guidance .</p>
      </div>

      <div className="login-box">
        <h2>Connexion</h2>
        <input
          type="email"
          placeholder="your mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="button-group">
          <button onClick={handleLogin}>sign in</button>
          <button onClick={goToRegister}>sign up</button>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;