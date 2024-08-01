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
    <div>
        
        <h1>New journal entry form</h1>
        <form onSubmit={handleNewEntrySubmit}>
        <textarea
            value={newEntryDescription}
            onChange={(e) => setNewEntryDescription(e.target.value)}
            placeholder="Enter your journal entry..."
        />
        <select id="type" onChange={handleConcernSelectionChange}>
            <option value={0}>- Select a focused concern -</option>
            {userConcerns.map(userConcern => (
            <option key={userConcern.concern.id} value={userConcern.concern.id}>{userConcern.concern.concern}</option>
            ))}
        </select>
        <button type="submit">Submit Entry</button>
        </form>

        <h1>Your Journal Entries</h1>
        <ul>
            <div className="entries-container">
                {journalEntries.map(entry => (
                    <div>
                        <div> {entry.date} </div>
                        <li key={entry.id}>
                        <p>{entry.description}</p>
                        <ul>{entry.concern.concern}</ul>
                        <Link to={`/edit-entry/${entry.id}`}><button>Edit</button></Link>
                        </li>
                    </div>
                ))}
            </div>
        </ul>
    </div>
    );
};
