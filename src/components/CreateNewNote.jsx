import React, { useEffect } from 'react'

function CreateNewNote({ addNote, newNoteContent, newNoteImportant,
    newNoteContentRef, setNewNoteContent, setNewNoteImportant }) {

    useEffect(() => {
        newNoteContentRef.current.focus()
    }, [])

    return (
        <div>
            <h2>Add a New Note</h2>
            <form onSubmit={addNote}>
                <label>
                    Name: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <input
                        type='text'
                        ref={newNoteContentRef}
                        value={newNoteContent}
                        onChange={e => setNewNoteContent(e.target.value)}
                    />
                </label>
                <br /><br />               
                <button type='submit'>Add New Name</button>
            </form>
        </div>
    )
}

export default CreateNewNote