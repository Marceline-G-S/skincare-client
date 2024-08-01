import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export const JournalEntriesPage = () => {
    const [journalEntries, setJournalEntries] = useState([]);
    const [newEntryDescription, setNewEntryDescription] = useState('');
    const [userConcerns, setUserConcerns] = useState([]);
    const [entryConcernId, setEntryConcernId] = useState(0)

    useEffect(() => {
        fetch('http://localhost:8000/journal', {
            method: 'GET',
            headers: {
            'Content-Type': 'application/json',
            Authorization: `Token ${JSON.parse(localStorage.getItem("auth_token")).token}`
            },
        })
    .then(response => response.json())
    .then(data => setJournalEntries(data))
    .catch(error => console.error('Error fetching journal entries:', error));

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

    const handleNewEntrySubmit = () => {
    // Implement the logic to submit a new journal entry
        fetch('http://localhost:8000/journal', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            Authorization: `Token ${JSON.parse(localStorage.getItem("auth_token")).token}`
            },
            body: JSON.stringify({ concern: entryConcernId, description: newEntryDescription }),
        })
    // This will depend on your backend API's expectations
    console.log('Submitting new entry:', newEntryDescription, userConcerns);
    // Example: fetch('http://localhost:8000/journal', {...}) to post the new entry
    };

    const handleConcernSelectionChange = (event) => {
        setEntryConcernId(event.target.value);
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex flex-wrap -m-4">
                <div className="w-full md:w-1/2 lg:w-1/3 p-4">
                    <h1 className="text-2xl font-semibold mb-4">New journal entry form</h1>
                    <form onSubmit={handleNewEntrySubmit}>
                        <textarea
                            value={newEntryDescription}
                            onChange={(e) => setNewEntryDescription(e.target.value)}
                            placeholder="Enter your journal entry..."
                            className="mb-4 p-2 border border-gray-300 rounded text-gray-900"
                        />
                        <select id="type" onChange={handleConcernSelectionChange} className="mb-4 p-2 border border-gray-300 rounded text-gray-900">
                            <option value={0}>- Select a focused concern -</option>
                            {userConcerns.map(userConcern => (
                                <option key={userConcern.concern.id} value={userConcern.concern.id}>{userConcern.concern.concern}</option>
                            ))}
                        </select>
                        <button type="submit" className="bg-blue-500 text-white rounded px-2 py-1 hover:bg-blue-700">Submit Entry</button>
                    </form>
                </div>
                <div className="w-full md:w-1/2 lg:w-1/3 p-4">
                    <h1 className="text-2xl font-semibold mb-4">Your Journal Entries</h1>
                    <div className="entries-container">
                        {journalEntries.map(entry => (
                            <div key={entry.id} className="border-b border-gray-200 pb-4">
                                <div className="font-bold">{entry.date}</div>
                                <p>{entry.description}</p>
                                <ul>{entry.concern.concern}</ul>
                                <Link to={`/edit-entry/${entry.id}`}>
                                    <button className="mt-2 bg-green-500 text-white rounded px-2 py-1 hover:bg-green-700">Edit</button>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};