import './App.css';
import TableNoteItems from './components/TableNotesItem';
import { v4 as uuidv4 } from 'uuid';

function App() {

  const notes = [
    { noteId: uuidv4(), rowTitle: "Some title 1", rowDescription: "Some description 1" },
    { noteId: uuidv4(), rowTitle: "Some title 2", rowDescription: "Some description 2" },
    { noteId: uuidv4(), rowTitle: "Some title 3", rowDescription: "Some description 3" },
  ];

  function addNote() {
    console.log('add note');
  }

  return (
    <div className='mt-5 container'>
      <div className='card'>
        <div className="card-header">
          <h1>Notes</h1>
        </div>
        <div className="card-body">
          <TableNoteItems notes={notes} />
          <button
            type="button"
            className="btn btn-success"
            onClick={() => addNote()}
          >
            Add new note
          </button>
        </div>
      </div>
    </div >
  );
}

export default App;