import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import ReadNotes from './components/ReadNotes';
import CreateNewNote from './components/CreateNewNote';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import UpdateNote from './components/UpdateNote';
import DeleteNote from './components/DeleteNotes';

function App() {

  // define a state to store the notes from props
  const [notes, setNotes] = useState([]);
  // console.log(notes)

  const [showStatus, setShowStatus] = useState('all');

  // states for adding new note form
  const [newNoteContent, setNewNoteContent] = useState('');
  const [newNoteImportant, setNewNoteImportant] = useState('true');

  // define a contentRef to access and manipulate the content element
  const newNoteContentRef = useRef(null);

  useEffect(() => {
    fetchNotes();
  }, [])

  const fetchNotes = async () => {
    try {
      const response = await axios.get('http://localhost:3001/notes')
      // console.log(response)
      // console.log(response.data)
      setNotes(response.data)
    } catch (error) {
      console.log('error fetching data', error)
    }
  }

  const addNote = (event) => {
    event.preventDefault();

    // create a new note object
    let noteObject = {
      id: notes.length + 1,
      content: newNoteContent,
      important: newNoteImportant == 'true',
    }

    // setNotes(notes.concat(noteObject));
    console.log('adding new note...')
    axios
      .post('http://localhost:3001/notes/', noteObject)
      .then(response => {
        console.log('note added successfully...')
      })

    fetchNotes()
    
    // clear the inputs
    setNewNoteContent('');
    setNewNoteImportant('');

    newNoteContentRef.current.focus();
  }

  const handleStatusChange = (event) => {
    setShowStatus(event.target.value);
  }

  const padd = {
    padding: 10
  }

  return (
    <Router>
      <div>
        <Link to='/' style={padd}>DashBoard</Link>
        <Link to='/read' style={padd}>Read Notes</Link>
        <Link to='/create' style={padd}>Create Notes</Link>
        <Link to='/update' style={padd}>Update Notes</Link>
        <Link to='/delete' style={padd}>Delete Note</Link>
      </div>

      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/read'
          element={<ReadNotes showStatus={showStatus}
            handleStatusChange={handleStatusChange}
            notes={notes} />} />
        <Route path='/create'
          element={<CreateNewNote addNote={addNote}
            newNoteContent={newNoteContent}
            newNoteImportant={newNoteImportant}
            newNoteContentRef={newNoteContentRef}
            setNewNoteContent={setNewNoteContent}
            setNewNoteImportant={setNewNoteImportant} />} />

        <Route path='/update' 
        element={ <UpdateNote notes={notes} 
        setNotes={setNotes}
        fetchNotes={fetchNotes} />}  />

        <Route path='/delete' element={<DeleteNote 
        notes={notes}
        setNotes={setNotes}
        fetchNotes={fetchNotes}  />} />
      </Routes>
    </Router>
  )
}

export default App;