import React, { useState } from "react";
import UpdateForm from "./UpdateForm";

function UpdateNote({ notes, setNotes, fetchNotes }) {
  const [selectedID, setSelectedID] = useState("select an ID");

  const selectedIDHandler = (event) => {  
    setSelectedID(event.target.value);
  };
  return (
    <div>
      <h2>Update Notes</h2>
      <label>
        Select the Name-id to be edited : &nbsp;&nbsp;&nbsp;
        <select value={selectedID} onChange={selectedIDHandler}>
          <option>{"select an ID"}</option>
          {notes.map((note) => (
            <option key={note.id}> {note.id} </option>
          ))}
        </select>
      </label>
      <div>
        {selectedID !== "select an ID" && (
          <UpdateForm
            selectedID={selectedID}
            notes={notes}
            setNotes={setNotes}
            fetchNotes={fetchNotes}
          />
        )}
      </div>
    </div>
  );
}

export default UpdateNote;