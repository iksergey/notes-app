export default function NotesRowItem(props) {
  return (
    <tr
      onClick={() => { props.removeNote(props.note.noteId); }}
    >
      <th scope="row">{props.rowNumber}</th>
      <th>{props.note.rowTitle}</th>
      <th>{props.note.rowDescription} </th>
    </tr>
  );
}