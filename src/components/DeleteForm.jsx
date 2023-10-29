import axios from 'axios'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function DeleteForm({ selectedID, notes, setNotes, fetchNotes }) {
    let selectedNote = notes.find(note => note.id == selectedID)
    const navigate = useNavigate()
    const deleteNote = async () => {
        console.log('deleting note')
        try {
            let response = await axios.delete(`https://jsonplaceholder.typicode.com/users/${selectedNote.id}`)
            console.log('note deleted successfuly')
            fetchNotes()
            navigate('/read')
        } catch (err) {
            console.log('error deleting notes', err)
        }
    }
    return (
        <div>
            <br />
            <br />
            <label>
                <p>ID : {selectedNote.id} </p>
                <p>Content: {selectedNote.name} </p>
                {/* <p>Important: {selectedNote.important ? 'true' : 'false'} </p> */}
                <p>Email : {selectedNote.email} </p>
                <p>City : {selectedNote.address.city}</p>
            </label>
            <br />
            <br />
            <button onClick={deleteNote}>Delete Note</button>
        </div>
    )
}

export default DeleteForm