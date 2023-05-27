import React, { useState } from 'react';
import './App.css';
import TableNoteItems from './components/TableNotesItem';
import NewNoteForm from './components/NewNoteForm';
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [notes, setNotes] = useState([
    { noteId: uuidv4(), rowTitle: "Some title 1", rowDescription: "Some description 1" },
    { noteId: uuidv4(), rowTitle: "Some title 2", rowDescription: "Some description 2" },
    { noteId: uuidv4(), rowTitle: "Some title 3", rowDescription: "Some description 3" },
  ]);

  function addNote(rowTitle, rowDescription) {
    const tempNote = {
      noteId: uuidv4(),
      rowTitle: rowTitle,
      rowDescription: rowDescription
    };
    setNotes(notes => [...notes, tempNote]);
  }

  function removeNote(id) {
    setNotes(items => notes.filter(item => item.noteId !== id))
  }

  return (
    <div className='mt-5 container'>
      <div className='card'>
        <div className="card-header">
          <h1>Notes</h1>
        </div>
        <div className="card-body">
          <TableNoteItems
            notes={notes}
            removeNote={removeNote}
          />
          <NewNoteForm addNote={addNote} />
        </div>
      </div>
    </div >
  );
}

export default App;