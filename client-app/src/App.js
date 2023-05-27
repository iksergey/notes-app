import React, { useState, useEffect } from 'react';
import './App.css';
import TableNoteItems from './components/TableNotesItem';
import NewNoteForm from './components/NewNoteForm';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios'

function App() {

  const [notes, setNotes] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5192/api/Notes/')
      .then(res => {
        console.log(res);
        const data = [];

        res.data.forEach((value) => {
          data.push(
            {
              noteId: value.id,
              rowTitle: value.title,
              rowDescription: value.description
            }
          );
        })

        setNotes(data);
      })
  }, []);

  function addNote(rowTitle, rowDescription) {
    const tempNote = {
      noteId: uuidv4(),
      rowTitle: rowTitle,
      rowDescription: rowDescription
    };
    setNotes(notes => [...notes, tempNote]);
  }

  function removeNote(id) {
    axios.delete(`http://localhost:5192/api/Notes/${id}`);

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