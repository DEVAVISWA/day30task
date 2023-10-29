import axios from 'axios';
import React, { useEffect, useState } from 'react';

function UpdateForm({ selectedID, notes, setNotes, fetchNotes }) {

  const [selectedNote, setSelectedNote] = useState(null);
  const [editedContent, setEditedContent] = useState('');
  const [editedImportant, setEditedImportant] = useState('');

  const fetchNote = async () => {
    try {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${selectedID}`);
      // console.log(response.data);
      if (response.data) {
        setSelectedNote(response.data);
        setEditedContent(response.data.content);
        setEditedImportant(response.data.important);
      }
    } catch (error) {
      console.log('Error fetching the note:', error);
    }
  }

  useEffect(() => {
    fetchNote();
  }, [selectedID]);

  const updateNote = (event) => {
    event.preventDefault();
    console.log('updating the note...');
    let note = {
      id: selectedNote.id,
      content: editedContent,
      important: editedImportant,
    }
    axios
      .put(`https://jsonplaceholder.typicode.com/users/${selectedNote.id}`, note)
      .then(response => {
        console.log('Note updated successfully...');
        fetchNotes();
      })
      .catch(error => {
        console.log('Error updating note:', error);
      })
  }

  return (
    <div>
      <h3>Update Form</h3>
      <form onSubmit={updateNote}>
        <label>
          Name: &nbsp;&nbsp;
          <input
            value={editedContent || ''}
            onChange={e => setEditedContent(e.target.value)}
          />
        </label>
        <br /><br />        
        <button type='submit'>Update Name</button>
      </form>
    </div>
  )
}

export default UpdateForm;

