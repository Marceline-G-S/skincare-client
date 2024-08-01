import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Import useParams from react-router-dom

export const EditJournalEntryPage = () => {
    const { id } = useParams(); // Extract the entry ID from the URL
    const [description, setDescription] = useState('');
    const [entryConcernId, setEntryConcernId] = useState(0)
    const [userConcerns, setUserConcerns] = useState([]); // State to hold the concerns
    const navigate = useNavigate(); // Hook for navigation


    useEffect(() => {
        // Fetch the entry details based on the ID
        fetch(`http://localhost:8000/journal/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Token ${JSON.parse(localStorage.getItem("auth_token")).token}`
            },
        })
        .then(response => response.json())
        .then(data => {
            setDescription(data.description);
            setEntryConcernId(data.concern.id)
        })
        .catch(error => console.error('Error fetching entry:', error));
        // Fetch user concerns
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
    }, [id]);

    const handleSubmit = (event) => {
        event.preventDefault();

        fetch(`http://localhost:8000/journal/${id}`, {
            method: 'PUT',
            headers: {
            'Content-Type': 'application/json',
            Authorization: `Token ${JSON.parse(localStorage.getItem("auth_token")).token}`
            },
            body: JSON.stringify({id: id, concern: entryConcernId, description: description }),
        }).then(() => {
            navigate('/journal'); // Redirect to the journal page after submitting edit. 
        })
    };

    const handleDelete = () => {
        if (window.confirm('Are you sure you want to delete this journal entry?')) {
            fetch(`http://localhost:8000/journal/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Token ${JSON.parse(localStorage.getItem("auth_token")).token}`
                },
            })
            .then(() => {
                navigate('/journal'); // Redirect to the journal page after successful deletion.
            })
            .catch(error => console.error('Error deleting entry:', error));
        }
    };

    const handleCancel = () => {
        navigate('/journal'); // Redirect to the journal page when canceling the edit.
    };


    return (
        <div>
            <h1>Edit Journal Entry</h1>
            <form onSubmit={handleSubmit}>
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Update your journal entry..."
                />
                <select onChange={(e) => setEntryConcernId(e.target.value)} value={entryConcernId}>
                    <option value={0}>- Select a concerned -</option>
                    {userConcerns.map(userConcern => (
                        <option key={userConcern.concern.id} value={userConcern.concern.id}>{userConcern.concern.concern}</option>
                    ))}
                </select>
                <button type="submit">Save Changes</button>
            </form>
            <button onClick={handleDelete} style={{marginTop: '10px'}}>Delete Entry</button>
            <button onClick={handleCancel} style={{marginTop: '10px'}}>Cancel</button>
        </div>
    );
};
