import React, { useState, useEffect } from 'react';

export const SkinTypeSelector = () => {
  const [skinTypes, setSkinTypes] = useState([]);
  const [selectedSkinTypeId, setSelectedSkinTypeId] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [yourSkintype, setYourSkintype] = useState("")

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

      getNSetSkintype()
  }, []);

  useEffect(() => {
    getNSetSkintype()
  }, [isSubmitting]);

  const getNSetSkintype = () => {
    fetch('http://localhost:8000/customers', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Token ${JSON.parse(localStorage.getItem("auth_token")).token}`
      },
    })
    .then(response => response.json())
    .then(data => setYourSkintype(data.skintype.skintype))
    .catch(error => console.error('Error fetching skin types:', error))
  }

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
      // Explicitly call getNSetSkintype() here to update the component's state
      getNSetSkintype().then(() => {
        setIsSubmitting(false); // Ensure this is called after the state update
      });
    })
    .catch((error) => {
      console.error('Error:', error);
      setIsSubmitting(false);
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Your Currently Selected Skin Type: {yourSkintype}</h1>
      <h2 className="text-2xl font-medium mb-8">Select Your Skin Type</h2>
      <form className="space-y-4">
        {skinTypes.map(skinType => (
          <fieldset key={skinType.id} className="flex border-gray-300 p-4 rounded">
            <legend className="font-medium text-gray-300">{skinType.skintype}</legend>
            <div className="flex items-center gap-2">
              <input
                type="radio"
                id={`skinType-${skinType.id}`}
                name="skinType"
                value={skinType.id} // Ensure value is a string
                checked={selectedSkinTypeId == skinType.id}
                onChange={handleChange}
                className="focus:ring-blue-500"
              />
              <label htmlFor={`skinType-${skinType.id}`} className="text-gray-300 cursor-pointer">Select</label>
            </div>
          </fieldset>
        ))}
        <button onClick={handleSubmit} disabled={isSubmitting} className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 block w-full">
          Submit Selection
        </button>
      </form>
    </div>
  );
}
