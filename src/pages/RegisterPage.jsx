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
    <div
      className="register-wrapper"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/images/fraise.jpg)`,

        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '40px',
      }}
    >
      <form className="register-form">
        <h2 style={{textAlign: "center"}}> 🌱 Create your account</h2>
        
        <p style={{ textAlign: "center",fontWeight: "bold" }}>join our agriculture community </p>



        <input type="text" name="nom" placeholder="Last Name" value={formData.nom} onChange={handleChange} />
        <input type="text" name="prenom" placeholder="first name" value={formData.prenom} onChange={handleChange} />
        <input type="email" name="email" placeholder="mail adress" value={formData.email} onChange={handleChange} />
        <input type="tel" name="telephone" placeholder="phone number" value={formData.telephone} onChange={handleChange} />
        <input type="text" name="localisation" placeholder="Localisation" value={formData.localisation} onChange={handleChange} />
        <input type="password" name="password" placeholder="password" value={formData.password} onChange={handleChange} />

        <small style={{ color: '#888' }}>
          🔒 Minimum 8 characters, with capital letters, numbers and symbols
        </small>

        <button type="button" onClick={handleRegister}>register</button>
      </form>
    </div>
  );
}

export default RegisterPage;