import axios from 'axios'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function DeleteForm({ selectedID, notes, setNotes, fetchNotes }) {

    let selectedNote = notes.find(note => note.id == selectedID)
    const navigate = useNavigate()

    const deleteNote = async () => {
        console.log('deleting note')
        try {
            let response = await axios.delete(`http://localhost:3001/notes/${selectedNote.id}`)
            console.log('note deleted successfuly')
            fetchNotes()
            navigate('/read')
        } catch (err) {
            console.log('error deleting notes', err)
        }
    }

    // console.log(selectedNote)

    return (
        <div>
            <br />
            <br />
            <label>
                <p>ID : {selectedNote.id} </p>
                <p>Content: {selectedNote.content} </p>
                <p>Important: {selectedNote.important ? 'true' : 'false'} </p>
            </label>
            <br />
            <br />
            <button onClick={deleteNote}>Delete Note</button>
        </div>
    )
}

export default DeleteForm