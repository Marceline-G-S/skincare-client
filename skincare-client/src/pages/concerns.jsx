import React, { useState, useEffect } from 'react';

export const SkinConcernSelector = () => {
  const [skinConcerns, setSkinConcerns] = useState([]);
  const [userConcerns, setUserConcerns] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    fetch('http://localhost:8000/concerns', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Token ${JSON.parse(localStorage.getItem("auth_token")).token}`
        },
      })
      .then(response => response.json())
      .then(data => setSkinConcerns(data))
      .catch(error => console.error('Error fetching skin concerns:', error));

    fetch('http://localhost:8000/userconcerns', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Token ${JSON.parse(localStorage.getItem("auth_token")).token}`
        },
      })
      .then(response => response.json())
      .then(data => setUserConcerns(data))
      .catch(error => console.error('Error fetching skin concerns:', error));
  }, []);

  useEffect(() => {
    fetch('http://localhost:8000/userconcerns', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Token ${JSON.parse(localStorage.getItem("auth_token")).token}`
        },
      })
      .then(response => response.json())
      .then(data => setUserConcerns(data))
      .catch(error => console.error('Error fetching skin concerns:', error));
  }, [isSubmitting]);

  const handleAddConcern = (id) => {
    setIsSubmitting(true);
    const url = `http://localhost:8000/userconcerns`;

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Token ${JSON.parse(localStorage.getItem("auth_token")).token}`
      },
      body: JSON.stringify({ concern: id }),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      // Assuming the response contains the full list of user concerns
      const updatedUserConcerns = [...data]; // Adjust this based on the actual structure
      setUserConcerns(updatedUserConcerns);
      setIsSubmitting(false);
    })
    .catch((error) => {
      console.error('Error:', error);
      setIsSubmitting(false);
    });    
  };

  const handleRemoveConcern = (id) => {
    setIsSubmitting(true);
    const url = `http://localhost:8000/userconcerns/1`;

    fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Token ${JSON.parse(localStorage.getItem("auth_token")).token}`
      },
      body: JSON.stringify({ concern : id }),
    })
    .then(response => response.json()) // Ensure you're correctly parsing the response
    .then(data => {
      console.log('Success:', data);
      // Update the userConcerns state based on the actual response structure
      // This assumes the response contains the updated list of user concerns
      setUserConcerns(data.userConcerns); // Adjust this line based on the actual response structure
      setIsSubmitting(false);
    })
    .catch((error) => {
      console.error('Error:', error);
      setIsSubmitting(false);
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-wrap -m-4">
        <div className="w-full md:w-1/2 lg:w-1/3 p-4">
          <h2 className="text-2xl font-semibold mb-4">Select Your Skin Concerns</h2>
          {skinConcerns.map(concern => (
            <div key={concern.id} className="flex items-center mb-4">
              <input
                type="checkbox"
                id={`concern-${concern.id}`}
                name="concern"
                value={concern.id}
                checked={userConcerns.some(userConcern => userConcern.concernId === concern.id)}
                onChange={() => handleAddConcern(concern.id)}
                className="mr-2"
              />
              <label htmlFor={`concern-${concern.id}`} className="text-gray-300">{concern.concern}</label>
            </div>
          ))}
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 p-4">
          <h2 className="text-2xl font-semibold mb-4">Your Selected Concerns</h2>
          {userConcerns.map(userConcern => (
            <div key={userConcern.id} className="flex items-center mb-4">
              <span className="text-gray-300">{userConcern.concern.concern}</span>
              <button onClick={() => handleRemoveConcern(userConcern.concern.id)} disabled={isSubmitting} className="ml-4 bg-red-500 text-white rounded px-2 py-1 hover:bg-red-600">
                Remove
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
  
};
