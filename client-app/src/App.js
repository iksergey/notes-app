import './App.css';
import TableNoteItems from './components/TableNotesItem';

function App() {

  const notes = [
    { rowNumber: 1, rowTitle: "Some title 1", rowDescription: "Some description 1" },
    { rowNumber: 2, rowTitle: "Some title 2", rowDescription: "Some description 2" },
    { rowNumber: 3, rowTitle: "Some title 3", rowDescription: "Some description 3" },
  ];

  return (
    <div className='mt-5 container'>
      <div className='card'>
        <div className="card-header">
          <h1>Notes</h1>
        </div>
        <div className="card-body">
          <TableNoteItems notes={notes} />
        </div>
      </div>
    </div>
  );
}

export default App;