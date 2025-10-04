import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './RegisterPage.css';
import axios from 'axios';

function RegisterPage() {
  const [formData, setFormData] = useState({
    email: '',
    nom: '',
    prenom: '',
    telephone: '',
    localisation: '',
    password: '',
  });

  const navigate = useNavigate();
  const isPasswordSecure = (password) => {
  const regex = /^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/;
  return regex.test(password);
};


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async () => {
  if (!isPasswordSecure(formData.password)) {
    alert("Le mot de passe doit contenir au moins 8 caractères, une majuscule, un chiffre et un symbole.");
    return;
  }

  try {
    const res = await axios.post('http://localhost:3001/api/auth/register', formData);
    alert(res.data.message);
    navigate('/');
  } catch (err) {
    alert(err.response?.data?.error || 'Erreur lors de l’inscription');
  }
};


  return (
    <div className="register-container">
      <h2>🌱 Créer un compte utilisateur</h2>
      <p>Rejoins notre communauté agricole intelligente</p>

      <input
        type="text"
        name="nom"
        placeholder="Nom"
        value={formData.nom}
        onChange={handleChange}
      />
      <input
        type="text"
        name="prenom"
        placeholder="Prénom"
        value={formData.prenom}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />
      <input
        type="tel"
        name="telephone"
        placeholder="Numéro de téléphone"
        value={formData.telephone}
        onChange={handleChange}
      />
      <input
        type="text"
        name="localisation"
        placeholder="Localisation "
        value={formData.localisation}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Mot de passe"
        value={formData.password}
        onChange={handleChange}
      />

      <button onClick={handleRegister}>S'inscrire</button>
    </div>
  );
}
<small style={{ color: '#888' }}>
  🔒 Minimum 8 caractères, avec majuscule, chiffre et symbole
</small>

export default RegisterPage;