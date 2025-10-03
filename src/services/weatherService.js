import axios from 'axios';

const WEATHER_URL = 'https://api.openweathermap.org/data/2.5/weather';

export const getWeather = async (city) => {
  try {
    const response = await axios.get(WEATHER_URL, {
      params: {
        q: city,
        appid: process.env.REACT_APP_WEATHER_API_KEY,
        units: 'metric',
        lang: 'fr',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Erreur météo:', error);
    throw error;
  }
};
