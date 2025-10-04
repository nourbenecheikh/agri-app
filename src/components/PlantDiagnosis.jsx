import React, { useState } from 'react';

function DiagnosisForm() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [result, setResult] = useState(null);

  const handleFileChange = (e) => setSelectedFile(e.target.files[0]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('plantImage', selectedFile);

    const res = await fetch('/api/diagnosis/image', {
      method: 'POST',
      body: formData
    });

    const data = await res.json();
    setResult(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="file" accept="image/*" onChange={handleFileChange} />
        <button type="submit">Diagnostiquer</button>
      </form>

      {result && (
        <div>
          <h3>🌿 Diagnostic</h3>
          <p><strong>Plante :</strong> {result.plant_type}</p>
          <p><strong>État :</strong> {result.health_status}</p>
          <p><strong>Maladie :</strong> {result.disease}</p>
          <p><strong>Conseil :</strong> {result.recommendation}</p>
        </div>
      )}
    </div>
  );
}

export default DiagnosisForm;
