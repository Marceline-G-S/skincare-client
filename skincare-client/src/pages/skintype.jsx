import React, { useState, useEffect } from 'react';

export const SkinTypeSelector = () => {
  const [skinTypes, setSkinTypes] = useState([]);
  const [selectedSkinTypeId, setSelectedSkinTypeId] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    fetch('http://localhost:8000/skintypes', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Token ${JSON.parse(localStorage.getItem("auth_token")).token}`
        },
      })
      .then(response => response.json())
      .then(data => setSkinTypes(data))
      .catch(error => console.error('Error fetching skin types:', error));
  }, []);

  const handleChange = (event) => {
    setSelectedSkinTypeId(event.target.value);
  };

  const handleSubmit = () => {
    setIsSubmitting(true);
    const url = `http://localhost:8000/customers/${selectedSkinTypeId}`;

    fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Token ${JSON.parse(localStorage.getItem("auth_token")).token}`
      },
      body: JSON.stringify({ skintype: selectedSkinTypeId }),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      setIsSubmitting(false);
    })
    .catch((error) => {
      console.error('Error:', error);
      setIsSubmitting(false);
    });
  };

  return (
    <div>
      <h1>Hmmmm. There should be an explanation of skintypes here. Well, that's a problem for future me. Anyways : </h1>

      <h2>Select Your Skin Type</h2>
      {skinTypes.map(skinType => (
        <div key={skinType.id}>
          <input
            type="radio"
            id={`skinType-${skinType.id}`}
            name="skinType"
            value={skinType.id}
            checked={selectedSkinTypeId == skinType.id}
            onChange={handleChange}
          />
          <label htmlFor={`skinType-${skinType.id}`}>{skinType.skintype}</label>
        </div>
      ))}

      <button onClick={handleSubmit} disabled={isSubmitting}>Submit Selection</button>
    </div>
  );
}
