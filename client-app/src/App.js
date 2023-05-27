import './App.css';

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
              <tr>
                <th scope="row">1</th>
                <th>Title 1</th>
                <th>Description 1</th>
              </tr>

              <tr>
                <th scope="row">2</th>
                <th>Title 2</th>
                <th>Description 2</th>
              </tr>

              <tr>
                <th scope="row">3</th>
                <th>Title 3</th>
                <th>Description 3</th>
              </tr>

            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;