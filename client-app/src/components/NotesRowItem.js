export default function NotesRowItem() {
  const rowNumber = 1;
  const rowTitle = "Some title";
  const rowDescription = "Some description";

  return (
    <tr>
      <th scope="row">{rowNumber}</th>
      <th>{rowTitle}</th>
      <th>{rowDescription}</th>
    </tr>
  );
}