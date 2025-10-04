import React, { useState } from 'react';

function Chatbot() {
  const [userInput, setUserInput] = useState('');
  const [botReply, setBotReply] = useState('');

  const handleSend = async () => {
    const res = await fetch('/api/chatbot', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: userInput })
    });

    const data = await res.json();
    setBotReply(data.reply);
  };

  return (
    <div className="chatbot">
      <textarea
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        placeholder="Pose ta question ici..."
      />
      <button onClick={handleSend}>Envoyer</button>

      {botReply && (
        <div className="bot-reply">
          <strong>🤖 Réponse :</strong> {botReply}
        </div>
      )}
    </div>
  );
}

export default Chatbot;
