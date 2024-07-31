import React, { useState, useEffect } from 'react';

export const SkinTypeSelector = () => {
  const [skinTypes, setSkinTypes] = useState([]);
  const [selectedSkinTypeId, setSelectedSkinTypeId] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false); // State to track if the form is being submitted

  // Fetch skin types on component mount
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

  // Handle skin type change
  const handleChange = (event) => {
    setSelectedSkinTypeId(event.target.value);
  };

  // Function to handle form submission
  const handleSubmit = () => {
    setIsSubmitting(true); // Set submitting state to true
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
      setIsSubmitting(false); // Reset submitting state after successful submission
    })
    .catch((error) => {
      console.error('Error:', error);
      setIsSubmitting(false); // Ensure submitting state is reset even on failure
    });
  };

  return (
    <div>
      <h1>Hmmmm. There should be an explanation of skintypes here. Well, that's a problem for future me. Anyways : </h1>

      <h2>Select Your Skin Type</h2>
      <select onChange={handleChange} id="skinTypeSelector" name="skinType">
        <option value="">Select Skin Type</option>
        {skinTypes.map(skinType => (
          <option key={skinType.id} value={skinType.id}>{skinType.skintype}</option>
        ))}
      </select>

      {/* Add a submit button */}
      <button onClick={handleSubmit} disabled={isSubmitting}>Submit Selection</button>
    </div>
  );
}
