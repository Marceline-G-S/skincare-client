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
        <div className="container mx-auto px-4 py-8">
            <div className="flex flex-wrap -m-4">
                <div className="w-full p-4">
                    <h1 className="text-2xl font-semibold mb-4">Edit Journal Entry</h1>
                    <form onSubmit={handleSubmit} className="mb-6">
                        <textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="Update your journal entry..."
                            className="mb-4 p-2 border border-gray-300 rounded text-gray-900 w-full"
                        />
                        <select onChange={(e) => setEntryConcernId(e.target.value)} value={entryConcernId} className="mb-4 p-2 border border-gray-300 rounded text-gray-900 w-full">
                            <option value={0}>- Select a concerned -</option>
                            {userConcerns.map(userConcern => (
                                <option key={userConcern.concern.id} value={userConcern.concern.id}>{userConcern.concern.concern}</option>
                            ))}
                        </select>
                        <button type="submit" className="bg-blue-500 text-white rounded px-2 py-1 hover:bg-blue-700 w-full">Save Changes</button>
                    </form>
                    <div className="flex justify-end mt-4 space-x-2">
                        <button onClick={handleDelete} className="bg-red-500 text-white rounded px-2 py-1 hover:bg-red-600">Delete Entry</button>
                        <button onClick={handleCancel} className="bg-gray-300 text-black rounded px-2 py-1 hover:bg-gray-400">Cancel Edit</button>
                    </div>
                </div>
            </div>
        </div>
    );
}    
