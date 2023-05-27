import './App.css';
import NotesRowItem from './components/NotesRowItem'

function App() {

  const note = { rowNumber: 1, rowTitle: "Some title 1", rowDescription: "Some description 1" };

  return (
    <div className='mt-5 container'>
      <div className='card'>
        <div className="card-header">
          <h1>Notes</h1>
        </div>
        <div className="card-body">
          <table className="table table-hover">
            <thead className="table-light">
              <tr>
                <th scope="col">№</th>
                <th scope="col">Title</th>
                <th scope="col">Description</th>
              </tr>
            </thead>
            <tbody>
              <NotesRowItem note={note} />
              <NotesRowItem note={note} />
              <NotesRowItem note={note} />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;