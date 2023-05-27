import './App.css';
import NotesRowItem from './components/NotesRowItem'

function App() {
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
              <NotesRowItem />
              <NotesRowItem />
              <NotesRowItem />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;