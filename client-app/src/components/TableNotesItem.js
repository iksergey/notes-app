import NotesRowItem from './NotesRowItem'

export default function TableNotesItem(props) {
  return (
    <table className="table table-hover">
      <thead className="table-light">
        <tr>
          <th scope="col">№</th>
          <th scope="col">Title</th>
          <th scope="col">Description</th>
        </tr>
      </thead>
      <tbody>
        {
          props.notes.map((item, count) =>
            <NotesRowItem
              note={item}
              rowNumber={count + 1}
              key={item.noteId}
              removeNote={props.removeNote}
            />
          )
        }
      </tbody>
    </table>
  );
}