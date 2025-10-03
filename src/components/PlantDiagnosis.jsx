import React, { useState } from 'react';
import axios from 'axios';

function PlantDiagnosis() {
  const [image, setImage] = useState(null);
  const [result, setResult] = useState(null);

  const handleUpload = (e) => setImage(e.target.files[0]);

  const handleAnalyze = async () => {
    const formData = new FormData();
    formData.append('image', image);

    const response = await axios.post('https://api.plant.id/v2/identify', formData, {
      headers: {
        'Api-Key': process.env.REACT_APP_PLANT_ID_API_KEY,
      },
    });

    setResult(response.data);
  };

  return (
    <div>
      <input type="file" onChange={handleUpload} />
      <button onClick={handleAnalyze}>Analyser</button>
      {result && <div>{result.suggestions[0].plant_name}</div>}
    </div>
  );
}

export default PlantDiagnosis;
