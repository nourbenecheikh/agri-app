import React, { useState } from 'react';
import axios from 'axios';

function ChatBot() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  const handleAsk = async () => {
    const response = await axios.post('https://api.openai.com/v1/chat/completions', {
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: question }],
    }, {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
      },
    });

    setAnswer(response.data.choices[0].message.content);
  };

  return (
    <div>
      <input value={question} onChange={(e) => setQuestion(e.target.value)} />
      <button onClick={handleAsk}>Demander</button>
      <p>{answer}</p>
    </div>
  );
}

export default ChatBot;
