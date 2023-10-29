import React from 'react'

function ReadNotes({ handleStatusChange, showStatus, notes }) {

    return (
        <div>
            <h1>Details</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>City</th>
                        <th>Phone</th>
                        <th>Website</th>
                        <th>Company</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        notes.map(note =>
                            <tr  key={note.id}>
                                <td>{note.id}</td>
                                <td>{note.name}</td>
                                <td>{note.email}</td>
                                <td>{note.address.city}</td>
                                <td>{note.phone}</td>
                                <td>{note.website}</td>
                                <td>{note.company.name}</td>
                            </tr>)
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ReadNotes