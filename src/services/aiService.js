import axios from 'axios';

const OPENAI_URL = 'https://api.openai.com/v1/chat/completions';

export const askChatbot = async (message) => {
  try {
    const response = await axios.post(
      OPENAI_URL,
      {
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: message }],
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error('Erreur OpenAI:', error);
    throw error;
  }
};
